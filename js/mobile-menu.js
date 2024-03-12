'use strict';

// ===================================== VARIABLES
const mobileMenuBurger = document.querySelector('.mobile-menu-burger');
const mobileMenu = document.querySelector('.mobile-menu-backdrop');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-button');
const mobileMenuList = document.querySelector('.mobile-menu-list');

// ==================================== OPENING AND CLOSING MODAL

mobileMenuBurger.addEventListener('click', openModal);

function openModal() {
  toggleModal(mobileMenu);
  mobileMenuCloseBtn.addEventListener('click', closeModal);
  mobileMenuList.addEventListener('click', closeModal);
  document.addEventListener("keydown", (event) => closeModalOnEsc(event, mobileMenu));
}

function closeModal() {
  toggleModal(mobileMenu);
  mobileMenuCloseBtn.removeEventListener('click', closeModal);
  mobileMenuList.removeEventListener('click', closeModal);
}

function toggleModal(modal) {
  modal.classList.toggle('is-open');
}

function closeModalOnEsc(event, modal) {
if(event.code === "Escape" && modal.classList.contains("is-open")) {
  modal.classList.toggle("is-open")
}
}

