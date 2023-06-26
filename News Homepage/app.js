const toggleNavBtn = document.querySelectorAll(".toggle-nav-btn");
const navLinks = document.querySelector(".nav-links");
const bgFilter = document.getElementById("black-filter");

toggleNavBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        navLinks.classList.toggle("nav-toggle");
        bgFilter.classList.toggle("no-display");
    });
});