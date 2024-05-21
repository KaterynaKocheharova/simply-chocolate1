import { showMessage } from './izitoast.js';

// =========================== FORM VALIDATION FUNCTION
export function validateReviewForm(formData) {
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const telephone = formData.get('tel').trim();
  const comment = formData.get('comment').trim();
  const privacyPolicyChecked = formData.get('privacyPolicyCheckbox');

  if (
    !checkForEmptyFields(name, email, telephone, comment, privacyPolicyChecked)
  ) {
    showMessage(
      'warning',
      'Fill in all fields and tick the privacy policy checkbox'
    );
    return false;
  }

  if (!validateEmail(email)) {
    showMessage('warning', 'Please enter a valid email address');
    return false;
  }

  if (!validateName(name)) {
    showMessage('warning', 'Name can only contain letters and spaces');
    return false;
  }

  if (!validateTelephone(telephone)) {
    showMessage('warning', 'Telephone number must contain at least 8 digits');
    return false;
  }

  if (!validateComment(comment)) {
    showMessage('warning', 'Comment should not exceed 500 characters');
    return false;
  }

  return true;
}

// ============================ CHECK FOR EMPTY FIELDS
function checkForEmptyFields(
  name,
  email,
  telephone,
  comment,
  privacyPolicyChecked
) {
  return name && email && telephone && comment && privacyPolicyChecked;
}

// ======================== VALIDATE EMAIL
export function validateEmail(email) {
  const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
}

// ======================== VALIDATE TELEPHONE
export function validateTelephone(telephone) {
  const telephoneRegex = /^\d{8,}$/;
  return telephoneRegex.test(telephone);
}

// ========================= VALIDATE NAME
export function validateName(name) {
  const nameRegex = /^[A-Za-z\u00C0-\u017F\u0400-\u04FF\s]+$/;
  return nameRegex.test(name);
}

// ========================= VALIDATE COMMENT
export function validateComment(comment, maxLength = 500) {
  return comment.length <= maxLength;
}
