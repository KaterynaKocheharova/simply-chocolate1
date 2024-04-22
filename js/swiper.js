let ingredientsSwiper;
let topSellersSwiper;
let reviewsSwiper;

// finish reviews swiper
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
  } else {
    initializeIngredientsSwiper();
  }

  if (window.innerWidth >= 1135 && topSellersSwiper) {
    topSellersSwiper.destroy();
    topSellersSwiper = null;
    const swiperPagination = document.querySelector(
      '.reviews-swiper-pagination'
    );
    swiperPagination.classList.add('pagination-hidden');
  } else {
    initializeTopSellersSwiper();
  }

  if (window.innerWidth >= 1135 && reviewsSwiper) {
    reviewsSwiper.destroy();
    reviewsSwiper = null;
  } else if (!reviewsSwiper) {
    initializeReviewsSwiper();
  }
}

// ======================= REVIEWS SWIPER

initializeReviewsSwiper();

function initializeReviewsSwiper() {
  reviewsSwiper = new Swiper('.reviews-swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    clickable: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
    centeredSlidesBound: true,
    grabCursor: true,
  });
}
