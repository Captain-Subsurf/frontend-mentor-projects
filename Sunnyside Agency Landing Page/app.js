const navLinks = document.querySelector(".nav-links");
const navToggle = document.getElementById("burger-icon");

navToggle.addEventListener("click", () => {
    let displayState = navLinks.style.display;
    navLinks.style.display = displayState === "none" ? "grid" : "none";
});