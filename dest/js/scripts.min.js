$( document ).ready(function() {
  mobileMenu ();
  isSmallDevice ();
  linkPanels ();


  var swiperHeader = new Swiper('.header-slider', {
    preventClicks: false,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

  var swiperContent = new Swiper('.specials-slider', {
    preventClicks: false,
    slidesPerView: 2,
    spaceBetween: 50,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    }
  });

  var swiperReview = new Swiper('.reviews-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});


/* Mobile menu */
function mobileMenu () {
  var btnMenu = $('.header').find('.icon-menu-1');

  btnMenu.on('click', function (e) {
    $(this).toggleClass('open');
    $('.l-menu').toggleClass('open');
  })
}

/* Window width on small devices */
function isSmallDevice () {
  var width = $(window).width();

  if (width <= 1200) {
    $('body').addClass('s-device')
  }
  else {
    $('body').addClass('b-device')
  }
}

 /* Tab panels */
 function linkPanels () {
  $('.food-list__item ').click(function (e) {
    e.preventDefault();
    var link_id = $(this).attr('data-link');

    console.log(link_id);
    $('.link-content').removeClass('current');
    $(this).addClass('current').siblings().removeClass('current');
    $('#' + link_id).addClass('current');
  });
}

