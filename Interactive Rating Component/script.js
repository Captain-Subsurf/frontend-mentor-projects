const ratingOptions = document.querySelectorAll(".rating-option");
const submitBtn = document.querySelector(".submit-btn");
const ratingState = document.querySelector(".rating-state");
const submitState = document.querySelector(".thanking-state");
const rating = document.getElementById("rating"); 

let selectedRatingEl;
ratingOptions.forEach(opt => {
    opt.addEventListener("click", () => {
        if (selectedRatingEl && selectedRatingEl !== opt) {
            selectedRatingEl.classList.remove("selected-rating");
        }
        opt.classList.add("selected-rating");
        selectedRatingEl = opt;
    });
});

submitBtn.addEventListener("click", () => {
    if (!selectedRatingEl) {
        alert("Please select a rating!!");
        return;
    }

    ratingState.classList.remove("grid-flow");
    ratingState.classList.add("no-display");

    submitState.classList.add("grid-flow");
    submitState.classList.remove("no-display");
    rating.textContent = selectedRatingEl.textContent;
});
