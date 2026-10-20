let allumettes = 20;
let joueuse = 1;
const compteur = document.querySelector("#compteur");
const message = document.querySelector("#message");
const bouton = document.querySelector("#retirer");
const bouton2 = document.querySelector("#retirer2");
const bouton3 = document.querySelector("#retirer3");
const boutonr = document.querySelector("#recommencer");
compteur.textContent = allumettes;

bouton.addEventListener("click", function () {
allumettes = allumettes - 1;
test();
});

bouton2.addEventListener("click", function () {
allumettes = allumettes - 2;
test();
});

bouton3.addEventListener("click", function () {
allumettes = allumettes - 3;
test();
});
boutonr.addEventListener("click", function () {
location.reload();
});
function test() {
tas.innerHTML = "";
for (let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}
compteur.textContent = allumettes;
if (allumettes == 0) {
message.textContent = "La joueuse " + joueuse + " a perdu !";
bouton.disabled = true;
bouton2.disabled = true;
bouton3.disabled = true;
} else if (allumettes == 1) {
bouton2.disabled = true;
bouton3.disabled = true;
} else if (allumettes == 2) {
bouton3.disabled = true;
} else {
if (joueuse == 1) {
joueuse = 2;
} else {
joueuse = 1;
}
message.textContent = "Au tour de la joueuse " + joueuse;
}
}
const tas = document.querySelector("#tas");
for (let i = 0; i < allumettes; i++) {
tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}
