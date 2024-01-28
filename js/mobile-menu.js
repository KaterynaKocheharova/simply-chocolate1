'use strict';

// ========= ВІДКРИТТЯ ТА ЗАКРИТТЯ МОЖАЛЬНОГО ВІКНА, ДОДАВАННЯ ТА ЗАБИРАННЯ КЛАСУ ІЗ-ОУПН ==============

document.addEventListener('DOMContentLoaded', function () {
  // ===================================== ЗМІННІ
  const mobileMenuBurger = document.getElementById('mobileMenuBurger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');
  const mobileMenuMadeLink = document.getElementById('mobile-menu-how-made-link');
  const mobileMenuLovedLink = document.getElementById('mobile-menu-loved-link');

  // ================================= ВІДКРИТТЯ
  mobileMenuBurger.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
    alert("Burger clicked")
  });

  // ================================= ЗАКРИТТЯ
  mobileMenuCloseBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
  });

  mobileMenuMadeLink.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
  });

  mobileMenuLovedLink.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
  });

});
