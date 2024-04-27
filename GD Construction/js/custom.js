var serviceslider = new Swiper('.serivce-slider .swiper-container', {
    loop: true,
    speed: 750,
    spaceBetween: 30,
    slidesPerView: 4,
    effect: 'slide',
    pagination: true,
    navigation: true,
    // autoplay: {
    // delay: 2000,
    // disableOnInteraction: true,
    // },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
      slidesPerView: 1,
      spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
      slidesPerView:1,
      spaceBetween: 30
      },
      // when window width is >= 768px
      768: {
      slidesPerView:2,
      spaceBetween: 30
      },
      // when window width is >= 992px
      992: {
      slidesPerView: 3,
      spaceBetween: 30
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 30
        },
      
    },
    // Navigation arrows
        navigation: {
            nextEl: '.serivce-slider-next',
            prevEl: '.serivce-slider-prev'
        }
  });