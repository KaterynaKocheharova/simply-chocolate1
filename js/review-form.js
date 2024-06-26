'use strict';

import { forbidScroll, allowScroll } from './forbid-scroll.js';
import { validateReviewForm } from './form-validation-helpers.js';
import { showMessage } from './izitoast.js';
import { toggleModal, closeModalOnEsc } from './modal-helpers.js';

// ===================================== VARIABLES
const reviewFormBackdrop = document.querySelector('.review-form-backdrop');
const leaveReviewBtn = document.querySelector('.review-btn');
const reviewFormCloseBtn = document.querySelector('.modal-close-btn');

// =================================== OPENING AND CLOSING MODAL
leaveReviewBtn.addEventListener('click', openModal);

function openModal() {
  toggleModal(reviewFormBackdrop);
  forbidScroll();
  reviewFormCloseBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModalOnEscHandler);
}

function closeModal() {
  toggleModal(reviewFormBackdrop);
  reviewFormCloseBtn.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeModalOnEscHandler);
  allowScroll();
}

function closeModalOnEscHandler(event) {
  closeModalOnEsc(event, reviewFormBackdrop);
  allowScroll();
}

// ================================== FORM HANDLER
const reviewForm = document.querySelector('.review-form');
reviewForm.addEventListener('submit', onReviewSubmit);

function onReviewSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  if (validateReviewForm(formData)) {
    showMessage('success', 'Thank you for your review');
    event.currentTarget.reset();
  }
}
