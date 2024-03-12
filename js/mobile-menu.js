'use strict';

// ===================================== VARIABLES
const mobileMenuBurger = document.querySelector('.mobile-menu-burger');
const mobileMenu = document.querySelector('.mobile-menu-backdrop');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-button');
const mobileMenuList = document.querySelector('.mobile-menu-list');

// ==================================== OPENING AND CLOSING MODAL

mobileMenuBurger.addEventListener('click', (event) => toggleModal(mobileMenu));
mobileMenuCloseBtn.addEventListener('click', (event) => toggleModal(mobileMenu));
mobileMenuList.addEventListener('click', (event) => toggleModal(mobileMenu));
document.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && mobileMenu.classList.contains('is-open')) {
    toggleModal(mobileMenu);
  }
});

function toggleModal(modal) {
  modal.classList.toggle('is-open');
}







