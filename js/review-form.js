'use strict';

import { forbidScroll, allowScroll } from './forbid-scroll.js';
import { showMessage } from './izitoast.js';

import {
  checkForEmptyFields,
  validateEmail,
  validateName,
  validateComment,
  validateTelephone,
} from './form-validation-helpers.js';

// ===================================== VARIABLES

const reviewFormBackdrop = document.querySelector('.review-form-backdrop');
const leaveReviewBtn = document.querySelector('.review-btn');
const reviewFormCloseBtn = document.querySelector('.modal-close-btn');

// =================================== OPENING AND CLOSING MODAL

import { toggleModal, closeModalOnEsc } from './modal-helpers.js';

leaveReviewBtn.addEventListener('click', openModal);

function openModal() {
  toggleModal(reviewFormBackdrop);
  forbidScroll();
  reviewFormCloseBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModalOnEscHandler);
}

function closeModal() {
  toggleModal(reviewFormBackdrop);
  allowScroll();
  reviewFormCloseBtn.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeModalOnEscHandler);
}

function closeModalOnEscHandler(event) {
  closeModalOnEsc(event, reviewFormBackdrop);
}

// ================================== FORM HANDLER
// style the messages
// add a hidden class
// handle class change with js
// message to a checkbox
// add posting data to server
// add success message
// add failure message
// style all izitoast messages

const reviewForm = document.querySelector('.review-form');

function onReviewSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  if (validateReviewForm(formData)) {
    showMessage('success', 'Thank you for your review');
    event.currentTarget.reset();
  }
}

reviewForm.addEventListener('submit', onReviewSubmit);

function validateReviewForm(formData) {
  const nameValue = formData.get('name').trim();
  const emailValue = formData.get('email').trim();
  const telephoneValue = formData.get('tel').trim();
  const commentValue = formData.get('comment').trim();
  const privacyPolicyCheckbox = formData.get('privacyPolicyCheckbox');

  // check for empty fields
  if (
    !checkForEmptyFields(
      nameValue,
      emailValue,
      telephoneValue,
      commentValue,
      privacyPolicyCheckbox
    )
  ) {
    showMessage('warning', 'Fill in all fields');
    return;
  }

  // check for incorrectly filled inputs
  if (
    !validateEmail(emailValue) ||
    !validateName(nameValue) ||
    !validateTelephone(telephoneValue) ||
    !validateComment(commentValue)
  ) {
    showMessage(
      'warning',
      'Be careful with input fields. Follow instructions you see under them'
    );
    return;
  }
  return true;
}
