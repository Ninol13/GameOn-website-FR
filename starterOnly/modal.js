function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closebtn = document.querySelectorAll(".close");

function launchModal() {
  form.style.display = "block";
  thanksDiv.style.display = "none";
  form.reset();
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closebtn.forEach((btn) => btn.addEventListener("click", closeModal));

const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/;
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radios = document.querySelectorAll('input[type="radio"][name="location"]');
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

const thanksDiv = document.createElement("div");
thanksDiv.classList.add("thanks");

const thanksMessageDiv = document.createElement("div");
thanksMessageDiv.classList.add("thanksMessage");
thanksMessageDiv.textContent = "Merci pour votre inscription!";

const closeBtn = document.createElement("button");
closeBtn.classList.add("closeBtn");
closeBtn.textContent = "Fermer";

const thanksButton = document.createElement("div");
thanksButton.classList.add("thanksButton");
thanksButton.appendChild(closeBtn);

thanksDiv.appendChild(thanksMessageDiv);
thanksDiv.appendChild(thanksButton);

form.insertAdjacentElement("afterend", thanksDiv);
thanksDiv.style.display = "none";

function openThanks() {
  form.style.display = "none";
  thanksDiv.style.display = "flex";
  window.scrollTo(0, 0);
}

closeBtn.addEventListener("click", () => {
  closeModal();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isValid = validateForm();
  if (isValid) {
    openThanks();
  }
});

// Commit 5 — feat(js): add error handling utilities
function addError(parentElement, errorMessage) {
  parentElement.setAttribute("data-error", errorMessage);
}

function removeError(parentElement) {
  if (parentElement && parentElement.getAttribute("data-error")) {
    parentElement.removeAttribute("data-error");
  }
}

// Commit 6 — feat(js): validate form fields with custom logic
function validateForm() {
  let isValid = true;

  const valeurFirst = firstName.value.trim();
  if (!/^[a-zA-ZÀ-ÿ\-\s]{2,}$/.test(valeurFirst)) {
    addError(firstName.parentNode, "Veuillez entrer 2 caractères ou plus pour le prénom.");
    isValid = false;
  } else {
    removeError(firstName.parentNode);
  }

  const valeurLast = lastName.value.trim();
  if (!/^[a-zA-ZÀ-ÿ\-\s]{2,}$/.test(valeurLast)) {
    addError(lastName.parentNode, "Veuillez entrer 2 caractères ou plus pour le nom.");
    isValid = false;
  } else {
    removeError(lastName.parentNode);
  }

  const valeurEmail = email.value.trim();
  if (!regexEmail.test(valeurEmail)) {
    addError(email.parentNode, "Veuillez entrer une adresse e-mail valide.");
    isValid = false;
  } else {
    removeError(email.parentNode);
  }

  const valeurBirth = birthdate.value.trim();
  if (!valeurBirth) {
    addError(birthdate.parentNode, "Vous devez entrer votre date de naissance.");
    isValid = false;
  } else {
    removeError(birthdate.parentNode);
  }

  const valeurQuantity = quantity.value.trim();
  if (!/^[0-9]+$/.test(valeurQuantity)) {
    addError(quantity.parentNode, "Veuillez entrer un nombre valide.");
    isValid = false;
  } else {
    removeError(quantity.parentNode);
  }

  let isRadioChecked = false;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isRadioChecked = true;
      break;
    }
  }
  const radioGroup = radios[0].parentNode;
  if (!isRadioChecked) {
    addError(radioGroup, "Vous devez choisir une option.");
    isValid = false;
  } else {
    removeError(radioGroup);
  }

  if (!checkbox1.checked) {
    addError(checkbox1.parentNode, "Vous devez vérifier que vous acceptez les termes et conditions.");
    isValid = false;
  } else {
    removeError(checkbox1.parentNode);
  }

  return isValid;
}
