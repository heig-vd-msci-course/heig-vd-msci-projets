# Projets MSCI 2026

Les projets web des équipes du cours **Algorithmique et programmation** (MSCI - ERACOM, semaine 43).

Galerie : <https://heig-vd-msci-course.github.io/heig-vd-msci-projets/>

Chaque équipe a son dossier, nommé d'après son fruit (en minuscules, sans accents) :
`https://heig-vd-msci-course.github.io/heig-vd-msci-projets/<equipe>/`.

Seul le **nom de l'équipe** est publié, jamais les prénoms.

## Pour l'équipe enseignante

### Mise en place (une seule fois)

1. Pousser ce dépôt sur GitHub.
2. Dans **Settings → Pages**, choisir **Deploy from a branch**, branche `main`, dossier `/ (root)`.

### Procédure du mardi soir

Les équipes envoient leur projet par e-mail avant **mardi 16h30**, avec le modèle publié sur la page du mardi du site de cours.

1. Pour chaque e-mail reçu, copier **tout le texte** de l'e-mail dans un fichier `emails/<equipe>.txt` (par exemple `emails/pomme.txt`). Le dossier `emails/` n'est pas versionné.
2. Lancer le script :

   ```bash
   python3 publier.py
   ```

   Pour chaque équipe, il crée `<equipe>/index.html`, `<equipe>/style.css` et `<equipe>/script.js`, puis met à jour la galerie (`index.html`) et la liste des projets (`projets.json`). Les e-mails sans accord de publication ou sans bloc ```` ```html ```` sont ignorés avec un message.
3. Ouvrir `index.html` dans un navigateur pour vérifier la galerie et quelques projets.
4. Commiter et pousser :

   ```bash
   git add . && git commit -m "Publication des projets du mardi" && git push
   ```

5. Répondre à chaque équipe avec le lien de son projet (modèle ci-dessous). GitHub Pages peut prendre une ou deux minutes pour se mettre à jour.

Un e-mail corrigé peut être retraité à tout moment : il suffit de remplacer le fichier dans `emails/` et de relancer le script (le projet de l'équipe est écrasé).

### Réponse type aux équipes

```text
[MSCI 2026] Votre projet est en ligne - Équipe Pomme

Bonjour Équipe Pomme,

Votre projet est publié ici : https://heig-vd-msci-course.github.io/heig-vd-msci-projets/pomme/

Vous le retrouverez aussi dans la galerie de tous les projets : https://heig-vd-msci-course.github.io/heig-vd-msci-projets/

Bravo pour votre travail et à demain !

Clarisse Fleurimont et Vincent Guidoux
```
