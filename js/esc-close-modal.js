document.addEventListener('keydown', hideModal);

function hideModal(event) {
  if (event.key === 'Escape') {
    if( mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
      console.log("Modal is closed")
    }

    if(reviewForm.classList.contains('is-open')) {
      reviewForm.classList.remove('is-open');
      console.log("Modal is closed")
    }
  }
}

