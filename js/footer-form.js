import { showMessage } from './izitoast.js';
import { validateEmail } from './form-validation-helpers.js';

const footerForm = document.querySelector('.footer-form');
footerForm.addEventListener('submit', onSubscribe);

function onSubscribe(event) {
  event.preventDefault();
  // maybe move to a separate function ?
  const emailValue = event.currentTarget.elements.email.value;
  if (!emailValue) {
    showMessage('warning', 'Write your email');
  } else if (!validateEmail(emailValue)) {
    showMessage('warning', 'Make sure your email is valid and contains @');
    // move to a separate function
  } else {
    showMessage('success', 'Cogratulations! You just subscribed!');
  }
  event.currentTarget.reset();
}
