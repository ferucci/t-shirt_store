export const swiperSliders = (...elements) => {

  new Swiper(elements[0], {
    loop: true,
    effect: 'fade',
    grabCursor: true,

    pagination: {
      el: '.pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      }
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  new Swiper(elements[1], {
    slidesPerView: 'auto',
    initialSlide: 0,
    grabCursor: true,

    loop: true,
    slidesPerGroup: 1,
    centerInsufficientSlides: true,
    pagination: {
      el: '.pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      475: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
  });

}