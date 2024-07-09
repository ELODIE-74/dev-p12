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

// Boucle sur chaque slider
sliderContainers.forEach((container, index) => {
  const slides = container.querySelectorAll(".slide");

  let currentSlide = 0;

  // Fonction pour afficher la diapositive active
  function showSlide(n) {
    // Réinitialise la diapositive active
    slides.forEach((slide) => slide.classList.remove("active"));

    // Affiche la diapositive active
    slides[n].classList.add("active");
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

  // Ajouts des écouteurs d'événements
  nextBtns[index].addEventListener("click", nextSlide);
  prevBtns[index].addEventListener("click", prevSlide);

  // Affiche la première diapositive
  showSlide(currentSlide);
});

//partie formulaire de contact
const form = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const companyInput = document.getElementById("company");
const messageTextarea = document.getElementById("message");
const confirmationMessage = document.querySelector(".confirmation-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: nameInput.value,
    company: companyInput.value,
    message: messageTextarea.value,
  };

  sendFormByEmail(formData);

  // Afficher le message de confirmation
  confirmationMessage.textContent = "Votre message a bien été envoyé.";
  confirmationMessage.style.display = "block";

  // Réinitialiser le formulaire après 3 secondes
  setTimeout(() => {
    form.reset();
    confirmationMessage.style.display = "none";
  }, 3000);
});
// envoie des données
function sendFormByEmail(formData) {
  const emailBody = `
    Nouveau message de contact :
    Nom : ${formData.name}
    Entreprise : ${formData.company}
    Message : ${formData.message}
  `;

  window.location.href = `mailto:elodie.jance.pro@gmail.com?subject=Nouveau message de contact&body=${encodeURIComponent(
    emailBody
  )}`;
}

//modale cv
const cvLink = document.getElementById("cv-link");
const cvModal = document.getElementById("cv-modal");
const closeButton = document.getElementsByClassName("close-button")[0];
const cvIframe = document.getElementById("cv-iframe");

cvLink.addEventListener("click", () => {
  cvModal.style.display = "block";
  cvIframe.src = "./assets/images/mon_cv_1.png";
});

closeButton.addEventListener("click", () => {
  cvModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === cvModal) {
    cvModal.style.display = "none";
  }
});
