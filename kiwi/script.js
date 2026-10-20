let allumettes = 20;
let joueurActuel = 1;

const bouton1 = document.querySelector("#bouton1");
const bouton2 = document.querySelector("#bouton2");
const bouton3 = document.querySelector("#bouton3");
const boutonRejouer = document.querySelector("#bouton-rejouer");

const txtCompteur = document.querySelector("#compteur");
const txtStatut = document.querySelector("#statut");
const zoneDessin = document.querySelector("#zone-allumettes");

function dessinerLesAllumettes() {
zoneDessin.innerHTML = "";

for (let i = 0; i < allumettes; i++) {
const divAllumette = document.createElement("div");
divAllumette.classList.add("allumette");
zoneDessin.appendChild(divAllumette);
}
}

function verifierJeu() {
txtCompteur.textContent = "Il reste " + allumettes + " allumettes.";
dessinerLesAllumettes();

if (allumettes <= 0) {
txtCompteur.textContent = "Il ne reste plus aucune allumette !";
txtStatut.textContent = "❌ Joueuse " + joueurActuel + " a perdu !";
txtStatut.style.backgroundColor = "#ff1493";

bouton1.disabled = true;
bouton2.disabled = true;
bouton3.disabled = true;
return;
}

if (joueurActuel === 1) {
joueurActuel = 2;
} else {
joueurActuel = 1;
}
txtStatut.textContent = "Tour : Joueuse " + joueurActuel + " 🎮";
}

bouton1.addEventListener("click", function() {
allumettes = allumettes - 1;
verifierJeu();
});

bouton2.addEventListener("click", function() {
if (allumettes >= 2) {
allumettes = allumettes - 2;
verifierJeu();
}
});

bouton3.addEventListener("click", function() {
if (allumettes >= 3) {
allumettes = allumettes - 3;
verifierJeu();
}
});

boutonRejouer.addEventListener("click", function() {
allumettes = 20;
joueurActuel = 1;
txtStatut.textContent = "Tour : Joueuse " + joueurActuel + " 🎮";
txtStatut.style.backgroundColor = "#1e3a8a";

bouton1.disabled = false;
bouton2.disabled = false;
bouton3.disabled = false;

verifierJeu();
});

dessinerLesAllumettes();
