let overlay = document.querySelector(".modal-overlay");
let modal = overlay.querySelector(".modal");

const openCardOfRules = () => {
  overlay.classList.toggle("active");
  modal.classList.toggle("active");
};
