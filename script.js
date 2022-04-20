"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");

const hide = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const show = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", show);
}

closeModal.addEventListener("click", hide);

overlay.addEventListener("click", hide);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      hide();
    }
  }
});
