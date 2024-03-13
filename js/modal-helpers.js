export function toggleModal(modal) {
  modal.classList.toggle('is-open');
}

export function closeModalOnEsc(event, modal) {
  if (event.code === 'Escape' && modal.classList.contains('is-open')) {
    modal.classList.toggle('is-open');
  }
}
