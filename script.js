"use strict";

const inputIntroduction = document.getElementById("introduction-email");
const inputSubscription = document.getElementById("subscription-email");
const errorMessage = document.querySelector(".error");
const buttonIntroduction = document.querySelector(".introduction-btn");
const buttonSubscription = document.querySelector(".subscription-btn");
const errorMessageWhite = document.querySelector(".error-white");
let validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail(input, error) {
  if (!input.value.match(validRegex)) {
    error.style.display = "flex";
    input.style.border = "1px solid #ef4877";
  } else if (input.value == "") {
    error.style.display = "none";
  }
}
