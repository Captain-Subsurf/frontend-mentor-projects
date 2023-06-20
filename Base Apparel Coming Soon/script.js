const submitBtn = document.querySelector(".submit-btn");
const emailInput = document.querySelector(".email-input");
const errorIcon = document.querySelector(".error-icon");
const invalidMsg = document.querySelector(".invalid-msg");

submitBtn.addEventListener("click", validateMail);

function validateMail() {
    const email = emailInput.value;
    let isValid = false;
    const invalidChars = ['#', '$', '%', '^', '&', '*', '(', ')']

    if (email.includes("@") && email.substring(email.indexOf("@"), email.length).includes(".") && !email.endsWith(".")) {
        isValid = true;
    }

    for (let char of invalidChars) {
        if (email.includes(char)) {
            isValid = false;
            break;
        }
    }

    if (!isValid) {
        errorIcon.classList.remove("no-display");
        invalidMsg.classList.remove("no-display")
        setTimeout(() => {
            errorIcon.classList.add("no-display");
            invalidMsg.classList.add("no-display");
        }, 5000);
    }
}