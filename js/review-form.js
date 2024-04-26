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
  const elements = event.target.elements;
  let isFormValid = true;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].value.trim() === '') {
      isFormValid = false;
      break;
    }
  }

  if (isFormValid) {
    showMessage('success', 'Great! Thank you for your review');
    event.currentTarget.reset();
  } else {
    showMessage('warning', 'Make sure you filled in all the input fields');
  }
}

// add novalidate and remove required from form and input fields
// make sure the messages appear when they should; maybe there's an issue with checkbox,
// style the toasts
