function changeToSpanish(event) {
  let spanishSubheading = document.querySelector("#hero-h2");
  spanishSubheading.innerHTML =
    "Programadora front-end, profesora de inglés, y correctora/editora";
  let spanishWorkButton = document.querySelector("#work-button");
  spanishWorkButton.innerHTML = "Trabaja conmigo";
  let spanishContentHeading = document.querySelector("#content-heading");
  spanishContentHeading.innerHTML = "Proyectos Recientes";
  let spanishCrochetWebsite = document.querySelector("#crochet-site");
  spanishCrochetWebsite.innerHTML = "Sitio web de crochet";
  let spanishCrochetParagraph = document.querySelector("#crochet-paragraph");
  spanishCrochetParagraph.innerHTML =
    "Este sitio web es mi primer proyecto de codificar. Lo creé cuando empecé a aprender HTML, CSS, y Javascript. Incluye información sobre crochet, enlaces a recursos relacionados, y unos elementos de Javascript interactivos. ";
  let spanishCrochetButton = document.querySelector("#website-link-crochet");
  spanishCrochetButton.innerHTML = "Míralo";
}
let spanishButton = document.querySelector("#spanish");
spanishButton.addEventListener("click", changeToSpanish);
