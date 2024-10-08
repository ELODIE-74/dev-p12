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
//formulaire de contact
// Formulaire de contact
const form = document.querySelector(".contact-form");
const confirmationMessage = document.querySelector(".confirmation-message");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  const nameInput = document.getElementById("name");
  const companyInput = document.getElementById("company");
  const messageInput = document.getElementById("message");

  const name = nameInput.value.trim();
  const company = companyInput.value.trim();
  const message = messageInput.value.trim();

  if (name !== "" && message !== "") {
    // Simuler l'envoi du message ici
    console.log("Message envoyé :", {
      name: name,
      company: company,
      message: message,
    });

    // Réinitialiser les champs du formulaire
    nameInput.value = "";
    companyInput.value = "";
    messageInput.value = "";

    // Afficher le message de confirmation
    confirmationMessage.textContent = "Votre message a été envoyé avec succès.";
    confirmationMessage.style.display = "block";

    // Cacher le message de confirmation après 3 secondes
    setTimeout(() => {
      confirmationMessage.style.display = "none";
    }, 3000);
  } else {
    alert("Veuillez remplir tous les champs obligatoires.");
  }
});
//modale cv
/*
const cvLink = document.getElementById("cv-link");
const cvModal = document.getElementById("cv-modal");
const closeButton = document.getElementsByClassName("close-button")[0];
const cvIframe = document.getElementById("cv-iframe");

cvLink.addEventListener("click", () => {
  cvModal.style.display = "block";
  cvIframe.src = "./assets/images/moncv.webp";
});

closeButton.addEventListener("click", () => {
  cvModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === cvModal) {
    cvModal.style.display = "none";
  }
});*/
