
function isScreenWidthInRange(minWidth, maxWidth) {
    const screenWidth = window.innerWidth;
    return screenWidth >= minWidth && screenWidth <= maxWidth;
  }
  
  // Function to initialize Swiper instance
  function initializeSwiper() {
    const swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
  }
  
  // Check screen width and initialize Swiper if it's within the desired range
  function checkScreenWidthAndInitializeSwiper() {
    if (isScreenWidthInRange(320, 767)) {
      initializeSwiper();
    }
  }
  
  // Call the function when the window loads and when it resizes
  window.onload = checkScreenWidthAndInitializeSwiper;
  window.onresize = checkScreenWidthAndInitializeSwiper;