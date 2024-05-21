import { showMessage } from './izitoast.js';
import { validateEmail } from './form-validation-helpers.js';

const footerForm = document.querySelector('.footer-form');
footerForm.addEventListener('submit', onSubscribe);

function onSubscribe(event) {
  event.preventDefault();
  const emailValue = event.currentTarget.elements.email.value;
  if (!emailValue) {
    showMessage('warning', 'Write your email');
  } else if (!validateEmail(emailValue)) {
    showMessage('warning', 'Make sure your email is valid and contains @');
  } else {
    showMessage('success', 'Cogratulations! You just subscribed!');
  }
  event.currentTarget.reset();
}
