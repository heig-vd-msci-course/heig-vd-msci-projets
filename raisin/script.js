let allumettes = 20;
let joueuse = 1;
const compteur = document.querySelector("#compteur");
const message = document.querySelector("#message");
const bouton = document.querySelector("#retirer");
const bouton2 = document.querySelector("#retirer2");
const bouton3 = document.querySelector("#retirer3");
const boutonRejouer = document.querySelector("#rejouer");

function verifierBoutons() {
bouton.disabled = allumettes < 1;
bouton2.disabled = allumettes < 2;
bouton3.disabled = allumettes < 3;
}

compteur.textContent = allumettes;

bouton.addEventListener("click", function () {
allumettes = allumettes - 1;

if (allumettes <= 0) {
message.textContent = "La joueuse " + joueuse + " a perdu !";
bouton.disabled = true;
bouton2.disabled = true;
bouton3.disabled = true;
} else {
if (joueuse == 1) {
joueuse = 2;
} else {
joueuse = 1;
}
message.textContent = "Au tour de la joueuse " + joueuse;
}
tas.innerHTML = "";
for (let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}
compteur.textContent = allumettes;
verifierBoutons();
});

bouton2.addEventListener("click", function () {
allumettes = allumettes - 2;

if (allumettes <= 0) {
message.textContent = "La joueuse " + joueuse + " a perdu !";
bouton.disabled = true;
bouton2.disabled = true;
bouton3.disabled = true;
} else {
if (joueuse == 1) {
joueuse = 2;
} else {
joueuse = 1;
}
message.textContent = "Au tour de la joueuse " + joueuse;
}
tas.innerHTML = "";
for (let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}
compteur.textContent = allumettes;
verifierBoutons();
});

bouton3.addEventListener("click", function () {
allumettes = allumettes - 3;

if (allumettes <= 0) {
message.textContent = "La joueuse " + joueuse + " a perdu !";
bouton.disabled = true;
bouton2.disabled = true;
bouton3.disabled = true;
} else {
if (joueuse == 1) {
joueuse = 2;
} else {
joueuse = 1;
}
message.textContent = "Au tour de la joueuse " + joueuse;
}
tas.innerHTML = "";
for (let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}
compteur.textContent = allumettes;
verifierBoutons();
});

const tas = document.querySelector("#tas");
for (let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}

boutonRejouer.addEventListener("click", function () {
allumettes = 20;
joueuse = 1;

bouton.disabled = false;
bouton2.disabled = false;
bouton3.disabled = false;

message.textContent = "Au tour de la joueuse 1";
compteur.textContent = allumettes;

tas.innerHTML = "";
for (let i = 0; i < allumettes; i++) {
tas.innerHTML += '<span class="allumette"></span>';
}
});
