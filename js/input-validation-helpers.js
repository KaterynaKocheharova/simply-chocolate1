import {
  validateComment,
  validateEmail,
  validateTelephone,
  validateName,
} from './form-validation-helpers.js';

// ============================== HANDLING ERROR MESSAGES UNDER INPUTS
const reviewUserName = document.querySelector('.review-form-user-name-input');
const reviewUserEmail = document.querySelector('.review-form-user-email-input');
const reviewUserTel = document.querySelector('.review-form-user-tel-input');
const reviewUserComment = document.querySelector('.review-form-comment');
const footerEmail = document.querySelector('.footer-email-input');

const nameErrorText = document.querySelector('.name-error-text');
const emailErrorText = document.querySelector('.email-error-text');
const telErrorText = document.querySelector('.tel-error-text');
const commentErrorText = document.querySelector('.comment-error-text');
const footerEmailErrorText = document.querySelector('.footer-error-text');

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

footerEmail.addEventListener('change', event => {
  showInputMessage(
    validateEmail(event.currentTarget.value),
    footerEmailErrorText
  );
});
