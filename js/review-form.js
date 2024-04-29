'use strict';

import { forbidScroll, allowScroll } from './forbid-scroll.js';
import { showMessage } from './izitoast.js';

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

// put helper validate form functions if a separate file
// validate each element separately
// add messages while inputting in some fields showing exactly what's wrong
// add posting data to server
// add success message
// add failure message
// style all message

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

function checkForEmptyFields(
  nameValue,
  emailValue,
  telephoneValue,
  commentValue,
  privacyPolicyCheckbox
) {
  if (
    nameValue === '' ||
    emailValue === '' ||
    telephoneValue === '' ||
    commentValue === '' ||
    !privacyPolicyCheckbox
  ) {
    return false;
  } else {
    return true;
  }
}

function validateEmail(email) {
  const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
}

function validateTelephone(telephone) {
  return /^\d{8,}$/.test(telephone);
}

function validateName(name) {
  const regex = /^[A-Za-z\u00C0-\u017F\u0400-\u04FF\s]+$/;
  return regex.test(name);
}

function validateComment(comment, maxLength = 500) {
  if (comment.length > maxLength) {
    return false;
  }
  return true;
}

// ================================== CHECK FOR EMPTY FIELDS

// if (!validateEmail(email)) {
//   showMessage('error', 'Please enter a valid email address.');
//   return false;
// }

// if (!validateTelephone(telephone)) {
//   showMessage('error', 'Please enter a valid telephone number.');
//   return false;
// }

// return true;
