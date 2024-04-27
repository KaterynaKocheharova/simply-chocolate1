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
        class: 'toast info-toast',
      });
      break;
    case 'success':
      iziToast.success({
        ...generalParams,
        class: 'custom-toast success-toast',
        backgroundColor: '#fd9222',
        messageSize: '16px',
        messageColor: '#fff',
      });
      break;
    case 'warning':
      iziToast.warning({
        ...generalParams,
        class: 'toast warning-toast',
      });
      break;
    default:
      iziToast.error({
        ...generalParams,
        class: 'toast error-toast',
      });
  }
}
