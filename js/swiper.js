let ingredientsSwiper;
let topSellersSwiper;
let reviewsSwiper;

function isScreenWidthInRange(minWidth, maxWidth) {
  const screenWidth = window.innerWidth;
  return screenWidth >= minWidth && screenWidth <= maxWidth;
}

// Function to initialize Swiper instance
function initializeSmallerScreenSwiper() {
  ingredientsSwiper = new Swiper('.ingredients-swiper', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });

  reviewsSwiper = new Swiper('.reviews-swiper', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });
}

function initializeBiggerScreenSwiper() {
  topSellersSwiper = new Swiper('.ingredients-swiper', {
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  reviewsSwiper = new Swiper('.reviews-swiper', {
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

// Check screen width and initialize Swiper if it's within the desired range
function checkScreenWidthAndInitializeSwiper() {
  if (isScreenWidthInRange(375, 767)) {
    initializeSmallerScreenSwiper();
  } else if (window.innerWidth >= 768 && window.innerWidth < 1136) {
    initializeBiggerScreenSwiper();
  }
}

// Call the function when the window loads and when it resizes
window.onload = checkScreenWidthAndInitializeSwiper;
window.onresize = checkScreenWidthAndInitializeSwiper;
