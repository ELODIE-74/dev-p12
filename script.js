// Récupérer les éléments nécessaires
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");

// Ajouter un écouteur d'événement sur le menu hamburger
hamburgerMenu.addEventListener("click", () => {
  // Ajouter/Enlever la classe 'active' sur le menu
  menu.classList.toggle("active");

  // Ajouter/Enlever les classes CSS pour animer le menu hamburger
  hamburgerMenu.classList.toggle("open");
});
