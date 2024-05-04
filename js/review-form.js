'use strict';

import { forbidScroll, allowScroll } from './forbid-scroll.js';
import { showMessage } from './izitoast.js';
import postReview from './api.js';

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

// shorten the code

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

  if (
    !checkForEmptyFields(
      nameValue,
      emailValue,
      telephoneValue,
      commentValue,
      privacyPolicyCheckbox
    )
  ) {
    showMessage(
      'warning',
      'Fill in all fields and tick the privacy policy checkbox'
    );
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

// ============================== HANDLING ERROR MESSAGES UNDER INPUTS

const reviewUserName = document.querySelector('.review-form-user-name-input');
const reviewUserEmail = document.querySelector('.review-form-user-email-input');
const reviewUserTel = document.querySelector('.review-form-user-tel-input');
const reviewUserComment = document.querySelector('.reviw-form-comment');

const nameErrorText = document.querySelector('.name-error-text');
const emailErrorText = document.querySelector('.email-error-text');
const telErrorText = document.querySelector('.tel-error-text');
const commentErrorText = document.querySelector('.comment-error-text');

function showInputMessage(isValid, errorElement) {
  if (isValid) {
    errorElement.classList.add('hidden');
  } else {
    errorElement.classList.remove('hidden');
  }
}

reviewUserName.addEventListener('change', event => {
  showInputMessage(validateName(event.currentTarget.value), nameErrorText);
});

reviewUserEmail.addEventListener('change', event => {
  showInputMessage(validateEmail(event.currentTarget.value), emailErrorText);
});

reviewUserTel.addEventListener('change', event => {
  showInputMessage(validateTelephone(event.currentTarget.value), telErrorText);
});

reviewUserComment.addEventListener('change', event => {
  showInputMessage(
    validateComment(event.currentTarget.value),
    commentErrorText
  );
});
