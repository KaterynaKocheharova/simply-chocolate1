export function forbidScroll() {
    document.body.classList.add('forbid-scroll');
}

export function allowScroll() {
  document.body.classList.remove('forbid-scroll');
}
