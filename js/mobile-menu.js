'use strict';

// ===================================== VARIABLES
const mobileMenuBurger = document.querySelector('.mobile-menu-burger');
const mobileMenu = document.querySelector('.mobile-menu-backdrop');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-button');
const mobileMenuList = document.querySelector('.mobile-menu-list');

// ==================================== OPENING MODAL

function openModal() {
  mobileMenu.classList.add('is-open');
  document.addEventListener('keydown', closeModal);
  mobileMenuList.addEventListener('click', closeModal);
  mobileMenuCloseBtn.addEventListener('click', closeModal);
}

mobileMenuBurger.addEventListener('click', openModal);

// ==================================== CLOSING MODAL

function closeModal() {
  mobileMenu.classList.remove('is-open');
  removeModalEventListenersOnClose();
}

// ================================ REMOVING EVENT LISTENERS

function removeModalEventListenersOnClose() {
  document.removeEventListener('keydown', closeModal);
  mobileMenuList.removeEventListener('click', closeModal);
  mobileMenuCloseBtn.removeEventListener('click', closeModal);
}
