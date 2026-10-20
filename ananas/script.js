let allumettes = 20;
let joueuse = 1;
const compteur = document.querySelector("#compteur");
const message = document.querySelector("#message");
const bouton = document.querySelector("#retirer");
compteur.textContent = allumettes;
const bouton2 = document.querySelector("#retirer2");
compteur.textContent = allumettes;
const bouton3 = document.querySelector("#retirer3");
compteur.textContent = allumettes;

bouton.addEventListener("click", function () {
allumettes = allumettes - 1;

if (allumettes <= 0) {
allumettes = 0;
message.textContent = "La/le joueuse/eur " + joueuse + " a perdu !";
bouton.disabled = true;
} else {
if (joueuse == 1) {
joueuse = 2;
} else {
joueuse = 1;
}
message.textContent = "Au tour de la/le joueuse/eur " + joueuse;
}
tas.innerHTML = "";
for (let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}
compteur.textContent = allumettes;
});

bouton2.addEventListener("click", function () {
allumettes = allumettes - 2;

if (allumettes <= 0) {
allumettes = 0;
message.textContent = "La/le joueuse/eur " + joueuse + " a perdu !";
bouton.disabled = true;
} else {
if (joueuse == 1) {
joueuse = 2;
} else {
joueuse = 1;
}
message.textContent = "Au tour de la/le joueuse/eur " + joueuse;
}
tas.innerHTML = "";
for (let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}
compteur.textContent = allumettes;
});

bouton3.addEventListener("click", function () {
allumettes = allumettes - 3;

if (allumettes <= 0) {
allumettes = 0;
message.textContent = "La/le joueuse/eur " + joueuse + " a perdu !";
bouton.disabled = true;
} else {
if (joueuse == 1) {
joueuse = 2;
} else {
joueuse = 1;
}
message.textContent = "Au tour de la/le joueuse/eur " + joueuse;
}

tas.innerHTML = "";
for (let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}
compteur.textContent = allumettes;
});
const tas = document.querySelector("#tas");
for (let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}

const rejouer = document.querySelector("#rejouer");

rejouer.addEventListener("click", function(){
allumettes = 20;
joueuse = 1;
compteur.textContent = allumettes;

message.textContent = "Au tour de la/le joueuse/eur 1";

retirer.disabled = false;
retirer2.disabled = false;
retirer3.disabled = false;
for(let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span';
}
});
