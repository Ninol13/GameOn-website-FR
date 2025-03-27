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
  openThanks();
});