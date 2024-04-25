let ingredientsSwiper;
let topSellersSwiper;
let reviewsSwiper;

const reviewsPagination = document.querySelector('.reviews-pagination');
const topSellersPagination = document.querySelector('.top-sellers-pagination');
const ingredientsPagination = document.querySelector('.ingredients-pagination');

// organize code better
// prettify swipers
// go on to a new task

initializeIngredientsSwiper();
initializeTopSellersSwiper();
initializeReviewsSwiper();

// ====================== SCREEN RESIZE

window.addEventListener('resize', handleScreenResize);

function handleScreenResize() {
  if (window.innerWidth >= 768 && ingredientsSwiper) {
    ingredientsSwiper.destroy();
    ingredientsSwiper = null;
    ingredientsPagination.classList.add('pagination-hidden');
  } else if (!ingredientsSwiper) {
    initializeIngredientsSwiper();
    ingredientsPagination.classList.remove('pagination-hidden');
  }

  if (window.innerWidth >= 1135 && topSellersSwiper) {
    topSellersSwiper.destroy();
    topSellersSwiper = null;
    topSellersPagination.classList.add('pagination-hidden');
  } else if (!topSellersSwiper) {
    initializeTopSellersSwiper();
    topSellersPagination.classList.remove('pagination-hidden');
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

// ===================== INGREDIENTS SWIPER

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
      pagination: {
        el: '.swiper-pagination',
      },
    });
    return;
  }

  if (ingredientsSwiper && window.innerWidth > 767) {
    ingredientsSwiper.destroy();
  }
}

// ==================== TOP SELLERS SWIPER

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

// ======================= REVIEWS SWIPER

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
