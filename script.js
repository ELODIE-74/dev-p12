/*loader de téléchargement */
const loaderContainer = document.getElementById("loader-container");
const loaderBar = document.getElementById("loader-bar");

// Simulation du chargement
let progress = 0;
const interval = setInterval(() => {
  progress += 5;
  loaderBar.style.width = `${progress}%`;
  if (progress >= 100) {
    clearInterval(interval);
    loaderContainer.style.display = "none";
  }
}, 300);

// Récupération des éléments du menu hamburger
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu li a");

// Ajout de l'événement de clic sur le menu hamburger
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  menu.classList.toggle("active");
});

// Ajout de l'événement de clic sur les liens du menu
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("open");
    menu.classList.remove("active");
  });
});
