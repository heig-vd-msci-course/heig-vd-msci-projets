let allumettes = 20;
let joueuse = 1;
const compteur = document.querySelector("#compteur");
const message = document.querySelector("#message");
const bouton = document.querySelector("#retirer");
const tas = document.querySelector("#tas");

compteur.textContent = allumettes;
for (let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}

bouton.addEventListener("click", function () {
allumettes = allumettes - 1;

if (allumettes <= 0) {
allumettes = 0;
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
});
const bouton2 = document.querySelector("#retirer2");
const bouton3 = document.querySelector("#retirer3");

bouton2.addEventListener("click", function () {
allumettes = allumettes - 2;
compteur.textContent = allumettes;
if (allumettes <= 0) {
allumettes = 0;
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
});

bouton3.addEventListener("click", function () {
allumettes = allumettes - 3;
compteur.textContent = allumettes;
if (allumettes <= 0) {
allumettes = 0;
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
});
