'use strict';

  // ===================================== VARIABLES
  const mobileMenuBurger = document.getElementById('mobileMenuBurger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');
  const mobileMenuMadeLink = document.getElementById('mobile-menu-how-made-link');
  const mobileMenuLovedLink = document.getElementById('mobile-menu-loved-link');

  // ==================================== OPENING MODAL
  mobileMenuBurger.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
    document.addEventListener('keydown', hideModal);
  });

  // ==================================== CLOSING MODAL
  mobileMenuCloseBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
    document.removeEventListener('keydown', hideModal);
  });

  mobileMenuMadeLink.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
    document.removeEventListener('keydown', hideModal);
  });

  mobileMenuLovedLink.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
    document.removeEventListener('keydown', hideModal);
  });

