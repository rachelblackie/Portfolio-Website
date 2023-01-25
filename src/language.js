function changeToSpanish(event) {
  let spanishSubheading = document.querySelector("#hero-h2");
  spanishSubheading.innerHTML =
    "Programadora front-end, profesora de inglés, y correctora/editora";
  let spanishContentHeading = document.querySelector("#content-heading");
  spanishContentHeading.innerHTML = "Proyectos Recientes";
}
let spanishButton = document.querySelector("#spanish");
spanishButton.addEventListener("click", changeToSpanish);
