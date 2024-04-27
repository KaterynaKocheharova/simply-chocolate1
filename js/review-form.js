'use strict';

import { forbidScroll, allowScroll } from './forbid-scroll.js';
import { showMessage } from './izitoast.js';

// ===================================== VARIABLES

const reviewForm = document.querySelector('.review-form-backdrop');
const leaveReviewBtn = document.querySelector('.review-btn');
const reviewFormCloseBtn = document.querySelector('.modal-close-btn');

// =================================== OPENING AND CLOSING MODAL

import { toggleModal, closeModalOnEsc } from './modal-helpers.js';

leaveReviewBtn.addEventListener('click', openModal);

function openModal() {
  toggleModal(reviewForm);
  forbidScroll();
  reviewFormCloseBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModalOnEscHandler);
}

function closeModal() {
  toggleModal(reviewForm);
  allowScroll();
  reviewFormCloseBtn.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeModalOnEscHandler);
}

function closeModalOnEscHandler(event) {
  closeModalOnEsc(event, reviewForm);
}

// ================================== FORM HANDLER

reviewForm.addEventListener('submit', onReviewSubmit);

function onReviewSubmit(event) {
  event.preventDefault();
  showMessage('success', 'Thank you fo your review');
  event.currentTarget.reset();
}
