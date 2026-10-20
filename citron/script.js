let allumettes = 20;
let joueuse = 1;

const compteur = document.querySelector("#compteur");
const message = document.querySelector("#message");
const tas = document.querySelector("#tas");
const bouton = document.querySelector("#retirer");
const bouton2 = document.querySelector("#retirer2");
const bouton3 = document.querySelector("#retirer3");
const boutonr = document.querySelector("#recommencer");

function retirer(nombre) {
allumettes = allumettes - nombre;
afficher();

if (allumettes == 0) {
message.textContent = "La joueuse " + joueuse + " a perdu !";
} else {
if (joueuse == 1) {
joueuse = 2;
} else {
joueuse = 1;
}
message.textContent = "Au tour de la joueuse " + joueuse;
}

activerBoutons();
}

function afficher() {
tas.innerHTML = "";
for (let i = 0; i < allumettes; i++) {
const allumette = document.createElement("span");
allumette.className = "allumette";
tas.appendChild(allumette);
}
compteur.textContent = allumettes;
}

function activerBoutons() {
bouton.disabled = allumettes < 1;
bouton2.disabled = allumettes < 2;
bouton3.disabled = allumettes < 3;
}

function recommencer() {
allumettes = 20;
joueuse = 1;
message.textContent = "Au tour de la joueuse 1";
afficher();
activerBoutons();
}

bouton.addEventListener("click", function () { retirer(1); });
bouton2.addEventListener("click", function () { retirer(2); });
bouton3.addEventListener("click", function () { retirer(3); });
boutonr.addEventListener("click", recommencer);

afficher();
activerBoutons();
