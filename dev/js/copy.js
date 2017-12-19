$( document ).ready( function() {
  $( '.btn-mobile-menu' ).click(function() {
    $( this ).toggleClass( 'active' );
    $( '.header-menu' ).slideToggle(250)
  })
  
  $( '.btn-open-contact' ).click(function(event) {
    event.preventDefault()
    $( '.overlay' ).addClass( 'active' )
  })
  
  $( '.overlay' ).click(function(event) {
    if ($( '.overlay' ).has(event.target).length === 0){
        $( '.overlay' ).removeClass( 'active' )
    }
  })
  
  $( '.overlay-close' ).click(function(event) {
    $( '.overlay' ).removeClass( 'active' )
  })
  
  var swiper = new Swiper( '.main-page-swiper', {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });

  $( '.parallax-form' ).parallax({
    imageSrc: '../img/parallax-2.jpg'
  })
  
  var swiper_reviews = new Swiper('.swiper-reviews', {
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-reviews .swiper-pagination',
      clickable: true,
    },
  });
  
  var swiper_gallery_big_img = new Swiper('.gallery-big-img', {
    slidesPerView: 1,
    slideToClickedSlide: true,
//    on: {
//      slideChange: function(){
//        swiper_gallery_info.slideTo(swiper_gallery_big_img.activeIndex);
//      }
//    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  })
  
  $( '.gallery-big-img' ).hover( function() {
    swiper_gallery_big_img.autoplay.stop();
  }, function() {
    swiper_gallery_big_img.autoplay.start();
  })
  
  var swiper_gallery_small_img = undefined;
  var swiper_small_init = false;
  
  var swiper_gallery_small_img__settings_vertical = {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 15,
    slideToClickedSlide: true,
    breakpoints: {
        992: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2         
        } 
    },
    navigation: {
      nextEl: '.gallery-small-img .swiper-button-next',
      prevEl: '.gallery-small-img .swiper-button-prev',
    },
    on: {
      init: function() {
        swiper_small_init = true;
      }
    } 
  }
  
  var swiper_gallery_small_img__settings_horizonatal = {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    slideToClickedSlide: true,
    breakpoints: {
        560: {
          slidesPerView: 3,
          spaceBetween: 10
        }
    },
    navigation: {
      nextEl: '.gallery-small-img .swiper-button-next',
      prevEl: '.gallery-small-img .swiper-button-prev',
    },
    on: {
      init: function() {
        swiper_small_init = true;
      }
    } 
  }
  
  
  resizeReInit();
  
  $( window ).resize( function() {
    resizeReInit();
  })
  
  function resizeReInit() {
    console.log('start resizeReInit()')
    if( $(window).width() > 560 ) {
      console.log(window.width)
      console.log('> 560 more');
      if( swiper_small_init == false ) {
        swiper_gallery_small_img = new Swiper('.gallery-small-img', swiper_gallery_small_img__settings_vertical);
        swiper_gallery_big_img.controller.control = swiper_gallery_small_img;
        swiper_gallery_small_img.controller.control = swiper_gallery_big_img;  
      } else {
        swiper_gallery_small_img.destroy();
        swiper_gallery_small_img = undefined
      }
    }; 
    if( $(window).width() < 560 ) {
      console.log(window.width)
      console.log('< 560 less');
      if( swiper_small_init == false ) {
        swiper_gallery_small_img = new Swiper('.gallery-small-img', swiper_gallery_small_img__settings_horizonatal)
        swiper_gallery_big_img.controller.control = swiper_gallery_small_img;
        swiper_gallery_small_img.controller.control = swiper_gallery_big_img;  
      } else {
        swiper_gallery_small_img.destroy();
        swiper_gallery_small_img = undefined
      }
    }  
  } 
  
//        swiper_gallery_small_img = new Swiper('.gallery-small-img', swiper_gallery_small_img__settings_vertical)

//  var swiper_gallery_info = new Swiper('.gallery-info', {
//    slidesPerView: 1,
//    slideToClickedSlide: true,
//    pagination: {
//      el: '.gallery-info .swiper-pagination',
//      clickable: true,
//    }  
//  })
  
  
  
})