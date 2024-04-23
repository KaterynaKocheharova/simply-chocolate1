let ingredientsSwiper;
let topSellersSwiper;
let reviewsSwiper;
const reviewsSwiperPagination = document.querySelector(
  '.reviews-swiper-pagination'
);
const reviewsPagination = document.querySelector('.reviews-pagination');

// ===================== INGREDIENTS SWIPER

// delete the css for breakpoints at which we have swipers
// organize code better + experiments with parameters

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

// ==================== TOP SELLERS SWIPER

initializeTopSellersSwiper();

function initializeTopSellersSwiper() {
  if (!topSellersSwiper && window.innerWidth < 1135) {
    topSellersSwiper = new Swiper('.top-sellers-swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
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
  }
}

// ====================== SCREEN RESIZE

window.addEventListener('resize', handleScreenResize);

function handleScreenResize() {
  if (window.innerWidth >= 768 && ingredientsSwiper) {
    ingredientsSwiper.destroy();
    ingredientsSwiper = null;
  } else if (!ingredientsSwiper) {
    initializeIngredientsSwiper();
  }

  if (window.innerWidth >= 1135 && topSellersSwiper) {
    topSellersSwiper.destroy();
    topSellersSwiper = null;

    reviewsSwiperPagination.classList.add('pagination-hidden');
  } else if (!topSellersSwiper) {
    initializeTopSellersSwiper();
    reviewsSwiperPagination.classList.remove('pagination-hidden');
  }

  if (window.innerWidth >= 1135 && reviewsSwiper) {
    reviewsSwiper.destroy();
    reviewsSwiper = null;
    reviewsPagination.classList.add('pagination-hidden');
  } else if (!reviewsSwiper) {
    initializeReviewsSwiper();
    reviewsPagination.classList.remove('pagination-hidden');
  }
}

// ======================= REVIEWS SWIPER

initializeReviewsSwiper();

function initializeReviewsSwiper() {
  if (!reviewsSwiper && window.innerWidth <= 1135) {
    reviewsSwiper = new Swiper('.reviews-swiper', {
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
}
