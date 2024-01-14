'use strict';

// =================== ВІДКРИТТЯ ТА ЗАКРИТТЯ ФОРМИ, ДОДАВАННЯ ТА ЗАБИРАННЯ КЛАСУ ІЗ-ОУПН ======================

document.addEventListener('DOMContentLoaded', function () {

// ===================================== ЗМІННІ
  const leaveReviewBtn = document.getElementById('leaveReviewBtn');
  const reviewForm = document.getElementById('reviewForm');
  const reviewFormCloseBtn = document.getElementById('reviewFormCloseBtn');

  // ================================= ВІДКРИТТЯ
  leaveReviewBtn.addEventListener('click', function () {
    reviewForm.classList.add('is-open');
  });

  // ================================= ЗАКРИТТЯ
  reviewFormCloseBtn.addEventListener('click', function () {
    reviewForm.classList.remove('is-open');
  });

});
