// ------------------------
// 🧭 NAVBAR RESPONSIVE
// ------------------------
function editNav() {
  const nav = document.getElementById("myTopnav");
  nav.className = nav.className === "topnav" ? "topnav responsive" : "topnav";
}

// ------------------------
// 🔧 VARIABLES GLOBALES
// ------------------------
// Formulaire
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");

// Champs du formulaire
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radios = document.querySelectorAll('input[type="radio"][name="location"]');
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

// Modale
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelector(".modal-btn");
const closeModalCross = document.querySelectorAll(".close");

// ------------------------
// 📦 CRÉATION DU MESSAGE DE REMERCIEMENT
// ------------------------
const thanksDiv = document.createElement("div");
thanksDiv.classList.add("thanks");

const thanksMessageDiv = document.createElement("div");
thanksMessageDiv.classList.add("thanksMessage");
thanksMessageDiv.textContent = "Merci pour votre inscription !";

const closeThanksButton = document.createElement("button");
closeThanksButton.classList.add("closeBtn");
closeThanksButton.textContent = "Fermer";

const thanksButton = document.createElement("div");
thanksButton.classList.add("thanksButton");
thanksButton.appendChild(closeThanksButton);

thanksDiv.appendChild(thanksMessageDiv);
thanksDiv.appendChild(thanksButton);
form.insertAdjacentElement("afterend", thanksDiv);
thanksDiv.style.display = "none";

// ------------------------
// 🪟 GESTION DE LA MODALE
// ------------------------
function launchModal() {
  form.reset();
  form.style.display = "block";
  thanksDiv.style.display = "none";
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

function openThanks() {
  form.style.display = "none";
  thanksDiv.style.display = "flex";
  window.scrollTo(0, 0);
}

// ------------------------
// 📌 ÉCOUTEURS D'ÉVÉNEMENTS
// ------------------------
modalBtn.addEventListener("click", launchModal);

closeModalCross.forEach((btn) => {
  btn.addEventListener("click", closeModal);
});

closeThanksButton.addEventListener("click", closeModal);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isValid = validate();
  if (isValid) {
    logFormData();
    openThanks();
  }
});

// ------------------------
// 🚫 FONCTIONS ERREUR
// ------------------------
function addError(parentElement, errorMessage) {
  parentElement.setAttribute("data-error", errorMessage);
}

function removeError(parentElement) {
  if (parentElement && parentElement.getAttribute("data-error")) {
    parentElement.removeAttribute("data-error");
  }
}

// ------------------------
// ✅ VALIDATION DU FORMULAIRE
// ------------------------
function validate() {
  let isValid = true;

  const regexName = /^[a-zA-ZÀ-ÿ\-\s]{2,}$/;
  const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/;
  const regexQuantity = /^[0-9]+$/;

  const valeurFirst = firstName.value.trim();
  if (!regexName.test(valeurFirst)) {
    addError(firstName.parentNode, "Veuillez entrer 2 caractères ou plus pour le prénom.");
    isValid = false;
  } else removeError(firstName.parentNode);

  const valeurLast = lastName.value.trim();
  if (!regexName.test(valeurLast)) {
    addError(lastName.parentNode, "Veuillez entrer 2 caractères ou plus pour le nom.");
    isValid = false;
  } else removeError(lastName.parentNode);

  const valeurEmail = email.value.trim();
  if (!regexEmail.test(valeurEmail)) {
    addError(email.parentNode, "Veuillez entrer une adresse e-mail valide.");
    isValid = false;
  } else removeError(email.parentNode);

  const valeurBirth = birthdate.value.trim();
  if (!valeurBirth) {
    addError(birthdate.parentNode, "Vous devez entrer votre date de naissance.");
    isValid = false;
  } else removeError(birthdate.parentNode);

  const valeurQuantity = quantity.value.trim();
  if (!regexQuantity.test(valeurQuantity)) {
    addError(quantity.parentNode, "Veuillez entrer un nombre valide.");
    isValid = false;
  } else removeError(quantity.parentNode);

  const radioGroup = radios[0].parentNode;
  const isRadioChecked = Array.from(radios).some(r => r.checked);
  if (!isRadioChecked) {
    addError(radioGroup, "Vous devez choisir une option.");
    isValid = false;
  } else removeError(radioGroup);

  if (!checkbox1.checked) {
    addError(checkbox1.parentNode, "Vous devez vérifier que vous acceptez les termes et conditions.");
    isValid = false;
  } else removeError(checkbox1.parentNode);

  return isValid;
}

// ------------------------
// 🗂 LOG DES DONNÉES VALIDÉES
// ------------------------
function logFormData() {
  const data = {
    prenom: firstName.value.trim(),
    nom: lastName.value.trim(),
    email: email.value.trim(),
    naissance: birthdate.value.trim(),
    quantite: quantity.value.trim(),
    localisation: document.querySelector('input[name="location"]:checked')?.value || null,
    conditions: checkbox1.checked,
    abonnements: checkbox2.checked,
  };
  console.log("Formulaire soumis avec succès:", data);
}
