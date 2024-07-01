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

//slider
// Sélectionnez tous les éléments nécessaires
const sliderContainers = document.querySelectorAll(".slider-container");
const prevBtns = document.querySelectorAll(".prev-btn");
const nextBtns = document.querySelectorAll(".next-btn");
const dotContainers = document.querySelectorAll(".slider-dots");

// Boucle sur chaque slider
sliderContainers.forEach((container, index) => {
  const slides = container.querySelectorAll(".slide");
  const dotContainer = dotContainers[index];

  // Créez les dots
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotContainer.appendChild(dot);
  });

  let currentSlide = 0;
  const dots = dotContainer.querySelectorAll(".dot");

  // Fonction pour afficher la diapositive active et les dots correspondants
  function showSlide(n) {
    // Réinitialiser la diapositive active
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Afficher la diapositive active
    slides[n].classList.add("active");
    dots[n].classList.add("active");
  }

  // Fonction pour passer à la diapositive suivante
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Fonction pour revenir à la diapositive précédente
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Ajouter les écouteurs d'événements
  nextBtns[index].addEventListener("click", nextSlide);
  prevBtns[index].addEventListener("click", prevSlide);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });

  // Afficher la première diapositive
  showSlide(currentSlide);
});
