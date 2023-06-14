const shareIcon = document.querySelector(".share-icon");
const shareMenu = document.querySelector(".share-menu");
const actionsEl = document.querySelector(".actions");

shareIcon.addEventListener("click", () => {
    shareMenu.classList.toggle("no-display");
    actionsEl.classList.toggle("bg-blue")
}); 