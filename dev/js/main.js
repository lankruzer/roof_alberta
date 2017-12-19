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
  
  var swiper_gallery_small_img = new Swiper('.gallery-small-img', {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 15,
    resizeReInit: true,
    slideToClickedSlide: true,
    breakpoints: {
        992: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2         
        },
        560: {
          direction: 'horizontal',
          slidesPerView: 3,
          spaceBetween: 10
        } 
    },
    navigation: {
      nextEl: '.gallery-small-img .swiper-button-next',
      prevEl: '.gallery-small-img .swiper-button-prev',
    }
  })
  
  $(window).resize(function(){
    console.log('resize');
    swiper_gallery_small_img.update(true);
  })
  
//  var swiper_gallery_info = new Swiper('.gallery-info', {
//    slidesPerView: 1,
//    slideToClickedSlide: true,
//    pagination: {
//      el: '.gallery-info .swiper-pagination',
//      clickable: true,
//    }  
//  })
  
  swiper_gallery_big_img.controller.control = swiper_gallery_small_img;
  swiper_gallery_small_img.controller.control = swiper_gallery_big_img;
  
})