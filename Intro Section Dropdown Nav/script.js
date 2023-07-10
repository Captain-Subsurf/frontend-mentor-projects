const toggleNavBtns = document.querySelectorAll(".toggle-nav-btn");
const navLinks = document.querySelector(".nav-links");
const dimFilter = document.getElementById("dim-filter");
const featuresBtn = document.querySelector('.features');
const featuresDropdown = document.querySelector(".features-drop");
const companyBtn = document.querySelector('.company');
const companyDropdown = document.querySelector(".company-drop");

toggleNavBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
    // dimFilter.classList.toggle("filter-visible");
  });
});

featuresBtn.addEventListener("click", (e) => toggleDropdown(e, featuresDropdown, featuresBtn));

companyBtn.addEventListener("click", (e) => toggleDropdown(e, companyDropdown, companyBtn));

function toggleDropdown(e, dropdown, btn) {
  dropdown.style.top = e.y + 'px';
  dropdown.style.left = e.x + 'px';
  dropdown.classList.toggle("no-display");
  btn.children[0].classList.toggle("rotate-180");
}