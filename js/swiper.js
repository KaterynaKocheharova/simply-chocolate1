function isScreenWidthInRange(minWidth, maxWidth) {
  const screenWidth = window.innerWidth;
  return screenWidth >= minWidth && screenWidth <= maxWidth;
}

// Function to initialize Swiper instance
function initializeSwiper() {
  const ingredientsSwiper = new Swiper('.ingredients-swiper', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });
}

// Check screen width and initialize Swiper if it's within the desired range
function checkScreenWidthAndInitializeSwiper() {
  if (isScreenWidthInRange(375, 767)) {
    initializeSwiper();
  } else if(window.innerWidth >= 768 && window.innerWidth < 1136) {
    const topSellersSwiper = new Swiper('.ingredients-swiper', {
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

// Call the function when the window loads and when it resizes
window.onload = checkScreenWidthAndInitializeSwiper;
window.onresize = checkScreenWidthAndInitializeSwiper;
