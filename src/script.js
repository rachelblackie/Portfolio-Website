let spanishButton = document.querySelector("#spanish");
spanishButton.addEventListener("click", changeToSpanish);

function changeToSpanish() {
  let spanishSubheading = document.querySelector("#hero-h2");
  spanishSubheading.innerHTML =
    "Programadora front-end, profesora de inglés, y correctora/editora";
}
