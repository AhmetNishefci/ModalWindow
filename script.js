"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");

console.log(closeModal);

for (let i = 0; i < showModal.length; i++) {
  console.log(showModal[i].textContent);
}
