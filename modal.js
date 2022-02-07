function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const noBorder = "none";
const borderError = "3px solid red";

const regexName = new RegExp(/^[A-z]+$/i);
const regexEmail = new RegExp(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const regexBirthDate = new RegExp(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/);

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelector(".modal-body");
const formData = document.querySelector("#form");
const closeIcon = document.querySelector(".close");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const tournamentQuantity = document.querySelector("#quantity");
const tournamentLocation = document.querySelectorAll(".location");
const termsOfUse = document.querySelector("#checkbox1");
const submitButton = document.querySelector(".btn-submit");
let firstNameError = document.querySelector("#first-error");
let lastNameError = document.querySelector("#last-error");
let emailError = document.querySelector("#email-error");
let birthDateError = document.querySelector("#birthdate-error");
let locationError = document.querySelector("#location-error");
let tournamentquantityError = document.querySelector("#quantity-error");
let termsOfUseError = document.querySelector("#terms-error");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeIcon.addEventListener("click", closeWindow);
submitButton.addEventListener("click", checkForm);
firstName.addEventListener("change", checkFirstName);
lastName.addEventListener("change", checkLastName);
email.addEventListener("change", checkEmail);
birthDate.addEventListener("change", checkBirthDate);
tournamentLocation.forEach((el) =>
  el.addEventListener("change", checkLocation)
);
tournamentQuantity.addEventListener("change", checkTournamentQuantity);
termsOfUse.addEventListener("change", checkTermsOfUse);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeWindow() {
  modalbg.style.display = "none";
}

function checkFirstName() {
  if (regexName.test(firstName.value)) {
    firstName.style.border = noBorder;
    firstNameError.innerHTML = "";
    return true;
  } else {
    firstName.style.border = borderError;
    firstNameError.innerHTML = "Veuillez entrer un prénom correct.";
    return false;
  }
}

function checkLastName() {
  if (regexName.test(lastName.value)) {
    lastName.style.border = noBorder;
    lastNameError.innerHTML = "";
    return true;
  } else {
    lastName.style.border = borderError;
    lastNameError.innerHTML = "Veuillez entrer un nom correct.";
    return false;
  }
}

function checkEmail() {
  if (regexEmail.test(email.value)) {
    email.style.border = noBorder;
    emailError.innerHTML = "";
    return true;
  } else {
    email.style.border = borderError;
    emailError.innerHTML = "Veuillez entrer une adresse mail correct";
    return false;
  }
}

function checkBirthDate() {
  if (birthDate.value.length == 10) {
    let date = new Date(birthDate.value);
    let year = date.getFullYear();
    if (year < 2010 && year > 1900) {
      birthDate.style.border = noBorder;
      birthDateError.innerHTML = "";
      return true;
    } else {
      birthDate.style.border = borderError;
      birthDateError.innerHTML =
        "Veuillez entrer une date de naissance correcte.";
      return false;
    }
  } else {
    birthDateError.innerHTML = "Veuillez entrer votre date de naissance.";
    return false;
  }
}

function checkTournamentQuantity() {
  if (tournamentQuantity.value >= 0 && tournamentQuantity.value <= 99) {
    tournamentQuantity.style.border = noBorder;
    tournamentquantityError.innerHTML = "";
    return true;
  } else {
    tournamentQuantity.style.border = borderError;
    tournamentquantityError.innerHTML =
      "Veuillez saisir un nombre de tournois correct.";
    return false;
  }
}

function checkLocation() {
  let ifValide = false;
  for (let i = 0; i < tournamentLocation.length; i++) {
    const element = tournamentLocation[i];
    if (element.checked == true) {
      ifValide = true;
    }
  }
  if (ifValide == true) {
    locationError.innerHTML = "";
    return true;
  } else {
    locationError.innerHTML = "Veuillez selectionner une option.";
    return false;
  }
}

function checkTermsOfUse() {
  if (termsOfUse.checked == true) {
    termsOfUseError.innerHTML = "";
    return true;
  } else {
    termsOfUseError.innerHTML = "Veuillez accepté les conditions d'utilisation";
    return false;
  }
}

function checkForm() {
  let checkForm = [
    checkFirstName(),
    checkLastName(),
    checkLocation(),
    checkEmail(),
    checkBirthDate(),
    checkLocation(),
    checkTournamentQuantity(),
    checkTermsOfUse(),
  ];
  if (checkForm.every(Boolean)) {
    form.style.display = "none";
    let validationMessage = document.createElement("p");
    validationMessage.innerHTML = "Merci pour votre inscription";
    validationMessage.style.textAlign = "center";
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-btn");
    closeButton.classList.add("close-btn");
    closeButton.textContent = "fermer";
    modalBody.appendChild(validationMessage);
    modalBody.appendChild(closeButton);
    closeButton.addEventListener("click", closeWindow);
  }
}
