'use strict';

// ===================================== VARIABLES
const mobileMenuBurger = document.querySelector('.mobile-menu-burger');
const mobileMenu = document.querySelector('.mobile-menu-backdrop');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-button');
const mobileMenuList = document.querySelector('.mobile-menu-list');

// // ==================================== OPENING MODAL

// function openModal() {
//   mobileMenu.classList.add('is-open');
//   document.addEventListener('keydown', (event) => escCloseModal(event, mobileMenu));
//   mobileMenuList.addEventListener('click', closeModal);
//   mobileMenuCloseBtn.addEventListener('click', closeModal);
// }

// mobileMenuBurger.addEventListener('click', openModal);

// // ==================================== CLOSING MODAL

// function closeModal() {
//   mobileMenu.classList.remove('is-open');
//   removeModalEventListenersOnClose();
// }

// // ================================ REMOVING EVENT LISTENERS

// function removeModalEventListenersOnClose() {
//   document.removeEventListener('keydown', (event) => escCloseModal(event, mobileMenu));
//   mobileMenuList.removeEventListener('click', closeModal);
//   mobileMenuCloseBtn.removeEventListener('click', closeModal);
// }

// // =============================== CLOSING MODAL ON ESCAPE

// function escCloseModal(event, modalElement) {
//   if (event.key === 'Escape' && modalElement.classList.contains('is-open')) {
//     closeModal(modalElement);
//     console.log("Modal is closed");
//   }
// }

// !!! new version

// ==================================== OPENING MODAL

mobileMenuBurger.addEventListener('click', () => openModal(mobileMenu));
mobileMenuBurger.addEventListener('click', () => onModalOpen(mobileMenuList, mobileMenuCloseBtn, mobileMenu));
mobileMenuBurger.addEventListener('click', () => onModalClose(mobileMenuList, mobileMenuCloseBtn, mobileMenu));

function openModal(modalToOpen) {
  modalToOpen.classList.add('is-open');
}

function closeModal(modalToClose) {
  modalToClose.classList.remove('is-open');
}

function onModalOpen(list, closeBtn, modal) {
  list.addEventListener('click', () => closeModal(modal));
  closeBtn.addEventListener('click', () => closeModal(modal));
  // document.addEventListener('keydown', () => {
  //   document.addEventListener('keydown', () => {
  //     if (event.key === 'Escape' && modalToClose.classList.contains('is-open')) 
  //     {
  //       closeModal(modalElement);
  //       console.log("Modal is closed");
  //     }
  
  //   })
  
  // })
}

function onModalClose(list, closeBtn, modal) {
  list.removeEventListener('click', () => closeModal(modal));
  closeBtn.removeEventListener('click', () => closeModal(modal));
  // document.removeEventListener('keydown')
}






// function removeModalEventListenersOnClose() {
//   document.removeEventListener('keydown', (event) => escCloseModal(event, mobileMenu));
//   mobileMenuList.removeEventListener('click', closeModal);
//   mobileMenuCloseBtn.removeEventListener('click', closeModal);
// }

// // =============================== CLOSING MODAL ON ESCAPE

