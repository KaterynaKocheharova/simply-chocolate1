let ingredientsSwiper;
let topSellersSwiper;
let reviewsSwiper;

if(window.innerWidth <= 375 && window.innerWidth <= 767) {
  ingredientsSwiper = new Swiper('.ingredients-swiper', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });

  topSellersSwiper = new Swiper('.top-sellers-swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  reviewsSwiper = new Swiper('.reviews-swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

if(window.innerWidth >= 768 && window.innerWidth <= 1135) {
  topSellersSwiper = new Swiper('.top-sellers-swiper', {
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

//   reviewsSwiper = new Swiper('.reviews-swiper', {
//     pagination: {
//       el: '.swiper-pagination',
//       dynamicBullets: true,
//     },
//   });



//   reviewsSwiper = new Swiper('.reviews-swiper', {
//     slidesPerView: 2,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });


// // Call the function when the window loads and when it resizes
// window.onload = checkScreenWidthAndInitializeSwiper;
// window.onresize = checkScreenWidthAndInitializeSwiper;
