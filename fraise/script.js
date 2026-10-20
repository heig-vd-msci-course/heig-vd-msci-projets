let allumettes = 20;
let joueuse = 1;
const compteur = document.querySelector("#compteur");
const message = document.querySelector("#message");
const retirer = document.querySelector("#retirer");
const retirer2 = document.querySelector("#retirer2");
const retirer3 = document.querySelector("#retirer3");
compteur.textContent = allumettes;

retirer.addEventListener("click", function () {
allumettes = allumettes - 1;

if (allumettes <= 0) {
message.textContent = "La joueuse " + joueuse + " a perdu !";
retirer.disabled = true;
retirer2.disabled = true;
retirer3.disabled = true;
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
});

compteur.textContent = allumettes;

retirer2.addEventListener("click", function () {
allumettes = allumettes - 2;
compteur.textContent = allumettes;
if (allumettes <= 0) {
message.textContent = "La joueuse " + joueuse + " a perdu !";
retirer.disabled = true;
retirer2.disabled = true;
retirer3.disabled = true;
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
});
compteur.textContent = allumettes;

retirer3.addEventListener("click", function () {
allumettes = allumettes - 3;
compteur.textContent = allumettes;
if (allumettes <= 0) {
message.textContent = "La joueuse " + joueuse + " a perdu !";
retirer.disabled = true;
retirer2.disabled = true;
retirer3.disabled = true;
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

message.textContent = "Au tour de la joueuse 1";

retirer.disabled = false;
retirer2.disabled = false;
retirer3.disabled = false;
for (let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}
});
