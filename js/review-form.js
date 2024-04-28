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

// separate checkForEmptyFields function
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

  // ================================== CHECK FOR EMPTY FIELDS
  if (
    nameValue === '' ||
    emailValue === '' ||
    telephoneValue === '' ||
    commentValue === '' ||
    !privacyPolicyCheckbox
  ) {
    showMessage('error', 'Fill in all fields');
    return;
  }

  // if (!validateEmail(email)) {
  //   showMessage('error', 'Please enter a valid email address.');
  //   return false;
  // }

  // if (!validateTelephone(telephone)) {
  //   showMessage('error', 'Please enter a valid telephone number.');
  //   return false;
  // }

  // return true;
}

function validateEmail(email) {
  const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
}

// Improved telephone validation
function validateTelephone(telephone) {
  // Check if the input consists only of digits and has a minimum length of 8
  return /^\d{8,}$/.test(telephone);
}

// Function to validate names in Latin and Cyrillic alphabets
function validateName(name) {
  // Regular expression to match valid characters in names
  const regex = /^[A-Za-z\u00C0-\u017F\u0400-\u04FF\s]+$/;
  return regex.test(name);
}

// Function to validate a message
function validateMessage(message, maxLength = 500) {
  // Check if the message length exceeds the maximum length
  if (message.length > maxLength) {
    return false;
  }
  // Add additional criteria for message validation if needed
  // For example, checking for specific characters, words, etc.

  // Return true if the message passes all criteria
  return true;
}
