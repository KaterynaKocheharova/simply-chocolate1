'use strict';

// =================== ВІДКРИТТЯ ТА ЗАКРИТТЯ ФОРМИ, ДОДАВАННЯ ТА ЗАБИРАННЯ КЛАСУ ІЗ-ОУПН ======================



// ===================================== ЗМІННІ

const reviewForm = document.querySelector(".review-form-backdrop");
const leaveReviewBtn = document.querySelector(".review-btn");
const reviewFormCloseBtn = document.querySelector(".modal-close-btn");

  // ================================= ВІДКРИТТЯ
  leaveReviewBtn.addEventListener('click', function () {
    reviewForm.classList.add('is-open');
  });

  // ================================= ЗАКРИТТЯ
  reviewFormCloseBtn.addEventListener('click', function () {
    reviewForm.classList.remove('is-open');
  });

