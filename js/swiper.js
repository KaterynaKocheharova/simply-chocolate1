let ingredientsSwiper;
let topSellersSwiper;
let reviewsSwiper;

// add breakpoint, don't reinitialize swipers
// add resize rule

// ===================== INGREDIENTS SWIPER

initializeIngredientsSwiper();

function initializeIngredientsSwiper() {
  if (!ingredientsSwiper && window.innerWidth <= 767) {
    ingredientsSwiper = new Swiper('.ingredients-swiper', {
      grabCursor: true,
      effect: 'creative',
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      },
    });
    return;
  }

  if (ingredientsSwiper && window.innerWidth > 767) {
    ingredientsSwiper.destroy();
  }
}

window.addEventListener('resize', handleScreenResize);

// function handleScreenResize() {
//   if (window.innerWidth >= 768) {
//     if (ingredientsSwiper) {
//       ingredientsSwiper.destroy();
//       ingredientsSwiper = null;
//     }
//   } else {
//     initializeIngredientsSwiper();
//   }
// }

function handleScreenResize() {
  if (window.innerWidth >= 768 && ingredientsSwiper) {
    ingredientsSwiper.destroy();
    ingredientsSwiper = null;
    return;
  }
  initializeIngredientsSwiper();
}

// ======================= REVIEWS SWIPER

// initializeReviewsSwiper();

// function initilizeReviewsSwiper() {
//   reviewsSwiper = new Swiper('.reviews-swiper', {
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     clickable: true,
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 16,
//       },
//     },
//     centeredSlides: true,
//     centeredSlidesBound: true,
//   });
// }

// TOP SELLERS

//   topSellersSwiper = new Swiper('.top-sellers-swiper', {
//     effect: 'cards',
//     grabCursor: true,
//   });
// } else if (window.innerWidth >= 768 && window.innerWidth <= 1135) {
//   topSellersSwiper = new Swiper('.top-sellers-swiper', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//     },
//   });
// }

// swiper.destroy()
// Destroy pagination

// swiper.init()
// Initialize pagination

// enabled	boolean	true
// Whether Swiper initially enabled. When Swiper is disabled, it will hide all navigation elements and won't respond to any events and interactions

// grabCursor	boolean	false
// This option may a little improve desktop usability. If true, user will see the "grab" cursor when hover on Swiper

// keyboard	any
// Enables navigation through slides using keyboard. Object with keyboard parameters or boolean true to enable with default settings

// const swiper = new Swiper('.swiper', {
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
// });
