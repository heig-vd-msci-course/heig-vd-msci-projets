#!/usr/bin/env python3
"""
Publie les projets des équipes MSCI à partir des e-mails reçus.

Chaque e-mail (copié tel quel dans un fichier texte du dossier `emails/`)
contient les informations de l'équipe et le code copié depuis MDN Playground
(« Partager → Copier le Markdown »). Le script crée pour chaque équipe :

    <equipe>/index.html
    <equipe>/style.css
    <equipe>/script.js

puis met à jour `projets.json` et la page galerie `index.html`.

Utilisation :

    python3 publier.py              # traite tous les fichiers de emails/
    python3 publier.py emails/pomme.txt
"""

import html
import json
import re
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent
EMAILS_DIR = ROOT / "emails"
PROJECTS_FILE = ROOT / "projets.json"
GALLERY_FILE = ROOT / "index.html"
SITE_URL = "https://heig-vd-msci-course.github.io/heig-vd-msci-projets"


def slugify(name):
    """« Fruit de la passion » → « fruit-de-la-passion »."""
    ascii_name = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", ascii_name.lower()).strip("-")


def read_field(text, label):
    """Lit la valeur d'une ligne « Label : valeur » (insensible à la casse)."""
    match = re.search(rf"^[>\s]*{label}\s*:\s*(.+)$", text, re.IGNORECASE | re.MULTILINE)
    return match.group(1).strip() if match else ""


def read_code_block(text, languages):
    """Lit le contenu d'un bloc ```html / ```css / ```js (vide s'il manque)."""
    pattern = rf"```(?:{'|'.join(languages)})[ \t]*\n(.*?)```"
    match = re.search(pattern, text, re.IGNORECASE | re.DOTALL)
    return match.group(1).strip() + "\n" if match else ""


def parse_email(text):
    # Les clients mail ajoutent parfois « > » devant les lignes citées
    text = re.sub(r"^> ?", "", text, flags=re.MULTILINE)
    return {
        "team": read_field(text, r"[ÉE]quipe"),
        "title": read_field(text, r"Titre du projet"),
        "description": read_field(text, r"Description[^:\n]*"),
        "consent": read_field(text, r"Nous acceptons[^:\n]*"),
        "html": read_code_block(text, ["html"]),
        "css": read_code_block(text, ["css"]),
        "js": read_code_block(text, ["js", "javascript"]),
    }


def build_page(project):
    """Assemble la page de l'équipe autour du HTML écrit dans MDN Playground."""
    body = project["html"]
    if re.search(r"<html", body, re.IGNORECASE):
        # Document complet : on ajoute seulement les liens vers le CSS et le JS
        body = re.sub(r"</head>", '  <link rel="stylesheet" href="style.css">\n</head>', body, count=1, flags=re.IGNORECASE)
        return re.sub(r"</body>", '  <script src="script.js"></script>\n</body>', body, count=1, flags=re.IGNORECASE)
    return f"""<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{html.escape(project["title"] or "Équipe " + project["team"])}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
{body}
  <script src="script.js"></script>
</body>
</html>
"""


def publish(email_file, projects):
    project = parse_email(email_file.read_text(encoding="utf-8"))

    if not project["team"]:
        print(f"✗ {email_file.name} : ligne « Équipe : ... » introuvable, ignoré")
        return
    if not project["consent"].lower().startswith("oui"):
        print(f"✗ {email_file.name} : pas d'accord pour la publication, ignoré")
        return
    if not project["html"]:
        print(f"✗ {email_file.name} : bloc ```html introuvable, ignoré")
        return

    slug = slugify(project["team"])
    folder = ROOT / slug
    folder.mkdir(exist_ok=True)
    (folder / "index.html").write_text(build_page(project), encoding="utf-8")
    (folder / "style.css").write_text(project["css"], encoding="utf-8")
    (folder / "script.js").write_text(project["js"], encoding="utf-8")

    projects[slug] = {
        "team": project["team"],
        "title": project["title"],
        "description": project["description"],
    }
    print(f"✓ Équipe {project['team']} → {SITE_URL}/{slug}/")


def build_gallery(projects):
    cards = "\n".join(
        f"""    <a class="card" href="{slug}/">
      <span class="team">Équipe {html.escape(p["team"])}</span>
      <strong>{html.escape(p["title"] or "Sans titre")}</strong>
      <span>{html.escape(p["description"])}</span>
    </a>"""
        for slug, p in sorted(projects.items())
    )
    return f"""<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Projets MSCI 2026</title>
  <style>
    body {{ margin: 0; font-family: system-ui, sans-serif; background: #fafafa; color: #222; }}
    header {{ padding: 2rem 1rem; text-align: center; }}
    h1 {{ margin: 0; color: #ff6b6b; }}
    header p {{ color: #2a9d95; margin: 0.5rem 0 0; }}
    main {{ max-width: 960px; margin: 0 auto; padding: 0 1rem 2rem; display: grid; gap: 1rem; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); }}
    .card {{ display: flex; flex-direction: column; gap: 0.4rem; padding: 1rem; border-radius: 0.5rem; background: #fff; border: 1px solid #ddd; color: inherit; text-decoration: none; }}
    .card:hover {{ border-color: #ff6b6b; }}
    .team {{ font-size: 0.85rem; color: #2a9d95; text-transform: uppercase; letter-spacing: 0.05em; }}
  </style>
</head>
<body>
  <header>
    <h1>Projets MSCI 2026</h1>
    <p>Algorithmique et programmation · {len(projects)} projet(s)</p>
  </header>
  <main>
{cards}
  </main>
</body>
</html>
"""


def main():
    files = [Path(f) for f in sys.argv[1:]] or sorted(EMAILS_DIR.glob("*.txt"))
    if not files:
        print("Aucun e-mail à traiter : copier chaque e-mail dans un fichier emails/<equipe>.txt")
        return

    projects = json.loads(PROJECTS_FILE.read_text(encoding="utf-8")) if PROJECTS_FILE.exists() else {}
    for email_file in files:
        publish(email_file, projects)

    PROJECTS_FILE.write_text(json.dumps(projects, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    GALLERY_FILE.write_text(build_gallery(projects), encoding="utf-8")
    print(f"\nGalerie mise à jour : {SITE_URL}/ ({len(projects)} projet(s))")


if __name__ == "__main__":
    main()
