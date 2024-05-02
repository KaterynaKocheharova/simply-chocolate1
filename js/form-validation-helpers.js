export function checkForEmptyFields(
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

export function validateEmail(email) {
  const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
}

export function validateTelephone(telephone) {
  return /^\d{8,}$/.test(telephone);
}

export function validateName(name) {
  const regex = /^[A-Za-z\u00C0-\u017F\u0400-\u04FF\s]+$/;
  return regex.test(name);
}

export function validateComment(comment, maxLength = 500, minLength = 50) {
  if (comment.length > maxLength || comment.length < minLength) {
    return false;
  }
  return true;
}
