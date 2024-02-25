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


reviewForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
event.preventDefault();
const elements = event.target.elements;
console.log(
    {
        name: elements.name.value.trim(),
        email: elements.email.value.trim(),
        number: elements.tel.value.trim(),
        email: elements.comment.value.trim(),
    }
)
event.target.reset();
}


