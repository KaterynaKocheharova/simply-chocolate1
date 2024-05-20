import { showMessage } from './izitoast.js';

export function validateReviewForm(formData) {
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
    return false;
  }

  if (!validateInputs(emailValue, nameValue, telephoneValue, commentValue)) {
    showMessage(
      'warning',
      'Be careful with input fields. Follow instructions you see under them'
    );
    return false;
  }

  return true;
}

// Check for Empty Fields
function checkForEmptyFields(...values) {
  return values.every(
    value => value !== '' && value !== null && value !== undefined
  );
}

// Validate Inputs
function validateInputs(email, name, telephone, comment) {
  return (
    validateEmail(email) &&
    validateName(name) &&
    validateTelephone(telephone) &&
    validateComment(comment)
  );
}

// Validation Functions
export function validateEmail(email) {
  const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
}

export function validateTelephone(telephone) {
  const regex = /^\d{8,}$/;
  return regex.test(telephone);
}

export function validateName(name) {
  const regex = /^[A-Za-z\u00C0-\u017F\u0400-\u04FF\s]+$/;
  return regex.test(name);
}

export function validateComment(comment, maxLength = 500) {
  return comment.length <= maxLength;
}
