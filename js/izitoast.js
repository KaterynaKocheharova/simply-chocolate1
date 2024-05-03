export function showMessage(type, message) {
  const generalParams = {
    message,
    timeout: false,
    position: 'topRight',
    zindex: 999999999999999,
  };
  switch (type) {
    case 'info':
      iziToast.info({
        ...generalParams,
        class: 'custom-toast info-toast',
      });
      break;
    case 'success':
      iziToast.success({
        ...generalParams,
        class: 'custom-toast success-toast',
      });
      break;
    case 'warning':
      iziToast.warning({
        ...generalParams,
        class: 'custom-toast warning-toast',
      });
      break;
    default:
      iziToast.error({
        ...generalParams,
        class: 'custom-toast error-toast',
      });
  }
}
