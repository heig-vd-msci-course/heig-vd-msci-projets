let allumettes = 20;
let joueuse = 1;
const compteur = document.querySelector("#compteur");
const message = document.querySelector("#message");
const tas = document.querySelector("#allumettes");
const bouton1 = document.querySelector("#retirer");
const bouton2 = document.querySelector("#retirer2");
const bouton3 = document.querySelector("#retirer3");
const boutonRejouer = document.querySelector("#rejouer");
// Afficher les allumettes
function afficherAllumettes() {
tas.querySelectorAll(".allumette").forEach(a => a.remove());
for (let i = 0; i < allumettes; i++) {
const allumette = document.createElement("span");
allumette.className = "allumette";
tas.appendChild(allumette);
}
compteur.textContent = allumettes;
}
// Jouer un tour
function retirer(nombre) {
if (allumettes === 0) {
return;
}
if (nombre > allumettes) {
message.textContent = "Il ne reste pas assez d'allumettes !";
return;
}
allumettes = allumettes - nombre;
afficherAllumettes();
if (allumettes === 0) {
message.textContent =
"La joueuse " + joueuse + " a perdu !";
bouton1.disabled = true;
bouton2.disabled = true;
bouton3.disabled = true;
return;
}
// Changer de joueuse
if (joueuse === 1) {
joueuse = 2;
} else {
joueuse = 1;
}
message.textContent = "Au tour de la joueuse " + joueuse;
}
// Boutons pour retirer les allumettes
bouton1.addEventListener("click", function () {
retirer(1);
});
bouton2.addEventListener("click", function () {
retirer(2);
});
bouton3.addEventListener("click", function () {
retirer(3);
});
// Recommencer la partie
boutonRejouer.addEventListener("click", function () {
allumettes = 20;
joueuse = 1;
bouton1.disabled = false;
bouton2.disabled = false;
bouton3.disabled = false;
message.textContent = "Au tour de la joueuse 1";
afficherAllumettes();
});
// Initialisation du jeu
afficherAllumettes();
