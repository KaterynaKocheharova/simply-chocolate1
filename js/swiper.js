const SWIPER_BREAKPOINTS = {
  ingredients: 767,
  topSellers: 1135,
  reviews: 1135,
};

const SWIPER_SELECTORS = {
  ingredients: '.ingredients-swiper',
  topSellers: '.top-sellers-swiper',
  reviews: '.reviews-swiper',
};

const SWIPER_PAGINATION_SELECTORS = {
  ingredients: '.ingredients-pagination',
  topSellers: '.top-sellers-pagination',
  reviews: '.reviews-pagination',
};

window.addEventListener('resize', initializeSwipers);

let swipers = {};

function initializeSwiper(selector, config) {
  if (!swipers[selector] && window.innerWidth <= SWIPER_BREAKPOINTS[selector]) {
    swipers[selector] = new Swiper(SWIPER_SELECTORS[selector], config);
  } else if (
    swipers[selector] &&
    window.innerWidth > SWIPER_BREAKPOINTS[selector]
  ) {
    swipers[selector].destroy();
    swipers[selector] = null;
    document
      .querySelector(SWIPER_PAGINATION_SELECTORS[selector])
      .classList.add('pagination-hidden');
  }
}

function initializeSwipers() {
  initializeSwiper('ingredients', {
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
    pagination: {
      el: '.swiper-pagination',
    },
  });

  initializeSwiper('topSellers', {
    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  initializeSwiper('reviews', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    clickable: true,
    spaceBetween: 35,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
    grabCursor: true,
  });
}

initializeSwipers();
