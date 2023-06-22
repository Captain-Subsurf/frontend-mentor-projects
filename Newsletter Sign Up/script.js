const errorMsg = document.querySelector(".error-msg");
const emailInput = document.querySelector(".email-input");
const inputForm = document.querySelector(".sign-up-form");
const userEmail = document.getElementById("user-email");
const successState = document.querySelector(".success-state");
const container = document.querySelector(".container");
const dismissBtn = document.querySelector(".dismiss-btn");

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    userEmail.textContent = emailInput.value;
    container.classList.add("no-display");
    successState.classList.remove("no-display");
});

emailInput.addEventListener("input", (e) => {
    if (!emailInput.validity.valid) {
        errorMsg.classList.remove("no-display");
    } else {
        errorMsg.classList.add("no-display");
    }
});

dismissBtn.addEventListener("click", () => {
    container.classList.remove("no-display");
    successState.classList.add("no-display");
    emailInput.value = "";
});