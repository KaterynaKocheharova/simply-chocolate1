'use strict';

// ===================================== VARIABLES
const mobileMenuBurger = document.querySelector('.mobile-menu-burger');
const mobileMenu = document.querySelector('.mobile-menu-backdrop');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-button');
const mobileMenuList = document.querySelector('.mobile-menu-list');

// ==================================== OPENING MODAL

// function openModal() {
//   mobileMenu.classList.add('is-open');
//   document.addEventListener('keydown', (event) => escCloseModal(event, mobileMenu));
//   mobileMenuList.addEventListener('click', closeModal);
//   mobileMenuCloseBtn.addEventListener('click', closeModal);
// }

// mobileMenuBurger.addEventListener('click', openModal);

function openModal(modalElement) {
  modalElement.classList.add('is-open');
  // document.addEventListener('keydown', (event) => escCloseModal(event, mobileMenu));
  // mobileMenuList.addEventListener('click', closeModal);
  // mobileMenuCloseBtn.addEventListener('click', closeModal);
}

mobileMenuBurger.addEventListener('click', (event) => openModal(mobileMenu));



// ==================================== CLOSING MODAL

function closeModal() {
  mobileMenu.classList.remove('is-open');
  removeModalEventListenersOnClose();
}

// ================================ REMOVING EVENT LISTENERS

function removeModalEventListenersOnClose() {
  document.removeEventListener('keydown', (event) => escCloseModal(event, mobileMenu));
  mobileMenuList.removeEventListener('click', closeModal);
  mobileMenuCloseBtn.removeEventListener('click', closeModal);
}

// =============================== CLOSING MODAL ON ESCAPE

function escCloseModal(event, modalElement) {
  if (event.key === 'Escape' && modalElement.classList.contains('is-open')) {
    closeModal(modalElement);
    console.log("Modal is closed");
  }
}