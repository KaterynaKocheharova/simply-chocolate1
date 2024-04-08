
// const swiperPagination = document.querySelector(".swiper-pagination");
// let ingredientsSwiper;
// let topSellersSwiper;
// let reviewsSwiper;

// function initializeSwipers() {
//   if (window.innerWidth <= 767) {
//     ingredientsSwiper =  new Swiper(".ingredients-swiper", {
//       grabCursor: true,
//       effect: "creative",
//       creativeEffect: {
//         prev: {
//           shadow: true,
//           translate: [0, 0, -400],
//         },
//         next: {
//           translate: ["100%", 0, 0],
//         },
//       },
//     });

//     reviewsSwiper = new Swiper('.reviews-swiper', {
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });

//     topSellersSwiper = new Swiper(".top-sellers-swiper", {
//       effect: "cards",
//       grabCursor: true,
//     })
//   }
// }

//   if (window.innerWidth >= 768 && window.innerWidth <= 1135) {
//     topSellersSwiper = new Swiper(".top-sellers-swiper", {
//       effect: "coverflow",
//       grabCursor: true,
//       centeredSlides: true,
//       slidesPerView: "auto",
//       coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//       },
//       pagination: {
//         el: ".swiper-pagination",
//       },
//     })

//     reviewsSwiper = new Swiper('.reviews-swiper', {
//       slidesPerView: 2,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });
//   }


// initializeSwipers();

let ingredientsSwiper;
let topSellersSwiper;
let reviewsSwiper;

initializeSwipers();

function initializeSwipers() {
  if (window.innerWidth <= 767) {
    ingredientsSwiper = new Swiper(".ingredients-swiper", {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });

    reviewsSwiper = new Swiper('.reviews-swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    topSellersSwiper = new Swiper(".top-sellers-swiper", {
      effect: "cards",
      grabCursor: true,
    })
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1135) {
    topSellersSwiper = new Swiper(".top-sellers-swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    })

    reviewsSwiper = new Swiper('.reviews-swiper', {
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

function handleResize() {
  initializeSwipers();
}

// Add event listener for the resize event
window.addEventListener('resize', handleResize);

