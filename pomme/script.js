let allumettes = 20;
let joueuse = 1;

const compteur = document.querySelector("#compteur");
const message = document.querySelector("#message");
const tas = document.querySelector("#tas");
const bouton1 = document.querySelector("#retirer1");
const bouton2 = document.querySelector("#retirer2");
const bouton3 = document.querySelector("#retirer3");
const boutonRejouer = document.querySelector("#rejouer");

function afficher() {
tas.innerHTML = "";
for (let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}
compteur.textContent = allumettes;

bouton1.disabled = allumettes < 1;
bouton2.disabled = allumettes < 2;
bouton3.disabled = allumettes < 3;
}

function retirer(nombre) {
allumettes = allumettes - nombre;

if (allumettes == 0) {
message.textContent = "💥 La joueuse " + joueuse + " a perdu !";
} else {
if (joueuse == 1) {
joueuse = 2;
} else {
joueuse = 1;
}
message.textContent = "Au tour de la joueuse " + joueuse;
}

afficher();
}

bouton1.addEventListener("click", function () {
retirer(1);
});

bouton2.addEventListener("click", function () {
retirer(2);
});

bouton3.addEventListener("click", function () {
retirer(3);
});

boutonRejouer.addEventListener("click", function () {
allumettes = 20;
joueuse = 1;
message.textContent = "Au tour de la joueuse 1";
afficher();
});

afficher();
