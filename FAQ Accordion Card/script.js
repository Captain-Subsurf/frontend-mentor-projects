const faqElements = document.querySelectorAll(".element");

faqElements.forEach(element => {
    element.addEventListener("click", () => {
        const question = element.children[0];
        const arrowIcon = element.children[1];
        question.classList.toggle("bold-font");
        question.classList.toggle("reveal-answer");
        arrowIcon.classList.toggle("rotate-180");
    });
});