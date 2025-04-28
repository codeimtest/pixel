$(".phone").mask("+7 (999) 999-99-99");

const swiper = new Swiper('.testimonials', {
  // Параметры пагинации
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },

  // Кнопки навигации
  navigation: {
    nextEl: '.nav_next',
    prevEl: '.nav_prev',
  },

  // Адаптивность
  breakpoints: {
    // Когда ширина экрана >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 16
    },
    // Когда ширина экрана >= 480px
    480: {
      slidesPerView: 1.6,
      spaceBetween: 30
    },
    // Когда ширина экрана >= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 20) {
    $('header').addClass('toggled');
  } else {
    $('header').removeClass('toggled');
  }
});

$('.menu_button').click(function(){
	$(this).toggleClass('active')
	$('aside').toggleClass('active')
})