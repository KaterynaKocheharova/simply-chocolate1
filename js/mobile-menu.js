'use strict';

import { toggleModal, closeModalOnEsc } from './modal-helpers.js';
import { forbidScroll, allowScroll } from './forbid-scroll.js';

// ===================================== VARIABLES

const mobileMenuBurger = document.querySelector('.mobile-menu-burger');
const mobileMenu = document.querySelector('.mobile-menu-backdrop');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-button');
const mobileMenuList = document.querySelector('.mobile-menu-list');

// ==================================== OPENING AND CLOSING MODAL

mobileMenuBurger.addEventListener('click', openModal);

function openModal() {
  toggleModal(mobileMenu);
  forbidScroll();
  mobileMenuCloseBtn.addEventListener('click', closeModal);
  mobileMenuList.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModalOnEscHandler);
}

function closeModal() {
  toggleModal(mobileMenu);
  allowScroll();
  mobileMenuCloseBtn.removeEventListener('click', closeModal);
  mobileMenuList.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeModalOnEscHandler);
}

function closeModalOnEscHandler(event) {
  closeModalOnEsc(event, mobileMenu);
}
