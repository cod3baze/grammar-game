let overlay = document.querySelector(".modal-overlay");
let modal = overlay.querySelector(".modal");

var openCardOfRules = () => {
  overlay.classList.toggle("active");
  modal.classList.toggle("active");
};
window.openCardOfRules = openCardOfRules;
