function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const regexName = new RegExp(/^[A-z]+$/i);
const regexEmail = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const regexBirthDate = new RegExp(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/);

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButton = document.querySelector(".close");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const tournamentQuantity = document.querySelector("#quantity");
const tournamentLocation = document.getElementsByName("location");
const submitButton = document.querySelector(".btn-submit");
let firstNameError = document.querySelector("#first-error");
let lastNameError = document.querySelector("#last-error");
let emailError = document.querySelector("#email-error");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeButton.addEventListener('click', closeWindow);
submitButton.addEventListener('click', checkForm);
firstName.addEventListener('change', checkFirstName);
lastName.addEventListener('change', checkLastName);
email.addEventListener('change', checkEmail);
birthDate.addEventListener('change', checkBirthDate);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeWindow() {
  modalbg.style.display = "none";
}

function checkFirstName(e) {
  if (regexName.test(firstName.value)) {
    console.log("it's ok !");
    firstNameError.innerHTML = "";
  } else {
    firstNameError.innerHTML = "it's an error !";
  }
}

function checkLastName(e) {
  if (regexEmail.test(email.value)) {
    console.log("it's ok !");
    lastNameError.innerHTML = "";
  } else {
    lastNameError.innerHTML = "it's an error !";
  }
}

function checkEmail(e) {
  if (regexEmail.test(email.value)) {
    console.log("it's ok !");
    emailError.innerHTML = "";
  } else {
    emailError.innerHTML = "it's an error !";
  }
}

function checkBirthDate(e) {
  if (regexBirthDate.test(birthDate.value)) {
    console.log("it's ok !");
    emailError.innerHTML = "";
  } else {
    emailError.innerHTML = "it's an error !";
  }
}

function checkForm(){
  checkFirstName();
}



