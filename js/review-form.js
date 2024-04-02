'use strict';

import { forbidScroll, allowScroll } from './forbid-scroll.js';
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

// reviewForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
// event.preventDefault();
// const elements = event.target.elements;
// console.log(
//     {
//         name: elements.name.value.trim(),
//         email: elements.email.value.trim(),
//         number: elements.tel.value.trim(),
//         email: elements.comment.value.trim(),
//     }
// )
// event.target.reset();
// }

// const reviewFormFileds = {
//   name: "",
//   email: "",
//   phone: "",
//   comment: "",
//   acceptTerms: ""

// }

// function setInputsValues(form) {


// }
