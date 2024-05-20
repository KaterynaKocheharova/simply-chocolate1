import { showMessage } from './izitoast.js';

// UNIVERSAL FORM VALIDATION FUNCTION

export function submitAndValidate(event) {}

// =========================== FORM VALIDATION FUNCTION
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
    return;
  }

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

// ============================ CHECK FOR EMPTY FIELDS

function checkForEmptyFields(
  nameValue,
  emailValue,
  telephoneValue,
  commentValue,
  privacyPolicyCheckbox
) {
  if (
    nameValue === '' ||
    emailValue === '' ||
    telephoneValue === '' ||
    commentValue === '' ||
    !privacyPolicyCheckbox
  ) {
    return false;
  } else {
    return true;
  }
}

// ======================== VALIDATE EMAIL
export function validateEmail(email) {
  const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
}

// ======================== VALIDATE TELEPHONE
export function validateTelephone(telephone) {
  return /^\d{8,}$/.test(telephone);
}

// ========================= VALIDATE NAME
export function validateName(name) {
  const regex = /^[A-Za-z\u00C0-\u017F\u0400-\u04FF\s]+$/;
  return regex.test(name);
}

// ========================= VALIDATE COMMENT
export function validateComment(comment, maxLength = 500) {
  if (comment.length > maxLength) {
    return false;
  }
  return true;
}
