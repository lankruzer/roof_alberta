$( document ).ready( function() {
  // toggle mobile menu
  $( '.btn-mobile-menu' ).click(function() {
    $( this ).toggleClass( 'active' )
    $( 'html, body' ).toggleClass( 'hide-scroll' )
    $( '.header-menu' ).slideToggle(250)
  })
  // /toggle mobile menu
  
  // toggle popup contact form
  $( '.btn-open-contact' ).click(function(event) {
    event.preventDefault()
    $( '.overlay' ).addClass( 'active' )
    $( '.overlay-form__callback' ).addClass( 'active' )
    $( 'html, body' ).toggleClass( 'hide-scroll' )
  })
  // /toggle popup contact form
  
  // toggle popup review form
  $( '.btn-open_review' ).click(function(event) {
    event.preventDefault()
    $( '.overlay' ).addClass( 'active' )
    $( '.overlay-form__review' ).addClass( 'active' )
    $( 'html, body' ).toggleClass( 'hide-scroll' )
  })
  // /toggle popup review form
  
  // toggle popup privacy policy
  $( '.footer-soc__privacy' ).click(function(event) {
    event.preventDefault()
    $( '.overlay' ).addClass( 'active' )
    $( '.overlay-form__policy' ).addClass( 'active' )
    $( 'html, body' ).toggleClass( 'hide-scroll' )
  })
  // /toggle popup privacy policy
  
  // close popup contact form on click outside
  $( '.overlay' ).click(function(event) {
    if ($( '.overlay' ).has(event.target).length === 0){
        $( '.overlay' ).removeClass( 'active' )
        $( '.overlay-form' ).removeClass( 'active' )
        $( 'html, body' ).toggleClass( 'hide-scroll' )
    }
  })
  // /close popup contact form on click outside
  
  // close popup form on click close
  $( '.overlay-close' ).click(function(event) {
    $( '.overlay' ).removeClass( 'active' )
    $( '.overlay-form' ).removeClass( 'active' )
    $( 'html, body' ).toggleClass( 'hide-scroll' )
  })
  // /close popup form on click close

  // close popup on press Esc
  $(document).keyup(function(event) {
    if (event.keyCode == 27) {
      $( '.overlay' ).removeClass( 'active' )
      $( '.overlay-form' ).removeClass( 'active' )
      $( 'html, body' ).toggleClass( 'hide-scroll' )
    }
  })
  // /close popup on press Esc
  
  // parallax on index page
  if($( '.parallax-form' )) {
    $( '.parallax-form' ).parallax({
      imageSrc: '../img/parallax-2.jpg'
    })
  }
  // /parallax on index page

  // start swiper
  if(typeof Swiper !== 'undefined' ) {
    // swiper on main sreen in index page
    if( document.querySelector( '.main-page-swiper' )) {
      var swiper = new Swiper( '.main-page-swiper', {
        loop: true,
        effect: 'fade',
        lazy: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        }
      });
    }
    // /swiper on main sreen in index page
    
    // swiper on screen reviews on index page
    if( document.querySelector( '.swiper-reviews' )) {
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
    }
    // /swiper on screen reviews on index page

    // swiper on two-way gallery on index page
    var swiper_gallery_big_img = '';
    var swiper_gallery_small_img = '';
    if( document.querySelector( '.gallery-big-img' )) {
      swiper_gallery_big_img = new Swiper('.gallery-big-img', {
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
    }

    if( document.querySelector( '.gallery-small-img' )) {
      swiper_gallery_small_img = new Swiper('.gallery-small-img', {
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
        swiper_gallery_small_img.update(true);
      })

      if( document.querySelector('.gallery-big-img, .gallery-small-img')) {
        swiper_gallery_big_img.controller.control = swiper_gallery_small_img;
        swiper_gallery_small_img.controller.control = swiper_gallery_big_img;
      }            
    }
    // /swiper on two-way gallery on index page

    // swiper on gallery page    
    var swiper_four_set = {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        992: {
          spaceBetween: 15
        },
        768: {
          slidesPerColumn: 1
        },
        560: {
          slidesPerColumn: 1,
          slidesPerView: 1
        }
      }
    }
        
    if( document.querySelector( '.swiper-container.swiper-four')) {
      var swiper_reviews_metal_tile;
      var swiper_reviews_interlocking;
      var swiper_reviews_standing;
    }
    // /swiper on gallery page
    
    // swiper customer's form
    var swiper_three_two_set = {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          spaceBetween: 15
        },
        560: {
          spaceBetween: 10,
          slidesPerView: 1,
          slidesPerColumn: 1
        },
        480: {
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1
        }
      }
    }
    
    if( document.querySelector( '.swiper-three-two' )) {
      var swiper_three_two;
    }
    // /swiper customer's form
  }
  // /start swiper
  
  // toggle aside in mobile
  $( '.btn-blog-aside' ).click(function() {
    $( this ).toggleClass( 'active' )
    $( 'html, body' ).toggleClass( 'hide-scroll' )
    $( 'aside' ).toggleClass( 'active' )
  })
  // /toggle aside in mobile
  
  // tabs
  if (document.querySelector('.tabs-nav')) {
    var btn_tabs_node = document.querySelectorAll('.tabs-nav > li');
    var btn_tabs = [btn_tabs_node.length];
    var tab_items_node = document.querySelectorAll('.tabs-content > li');
    var tab_items = [tab_items_node.length];

    for (var i = 0; i < btn_tabs_node.length; i++) {
      btn_tabs[i] = btn_tabs_node.item(i);
      tab_items[i] = tab_items_node.item(i);
    }

    btn_tabs[0].classList.add('active');
    tab_items[0].classList.add('active');
    swiper_reviews_metal_tile = new Swiper('.swiper-container.swiper-four_metal-tile', swiper_four_set);

    btn_tabs.forEach(function (btn_tab, i, btn_tabs) {
      btn_tab.addEventListener('click', function (event) {
        if (!this.classList.contains('active')) {
          event.preventDefault();
          for (var y = 0; y < btn_tabs.length; y++) {
            if (btn_tabs[y].classList.contains('active')) {
              btn_tabs[y].classList.remove('active');
              //$(tab_items[y]).slideUp(250);
              tab_items[y].classList.remove('active');

            }
          }
          btn_tab.classList.add('active');
          //$(tab_items[i]).slideDown(250);
          tab_items[i].classList.add('active');
          if ( tab_items[i].querySelector('.swiper-four')) {
            if ( i == 1 )
              swiper_reviews_interlocking = new Swiper( '.swiper-container.swiper-four_interlocking', swiper_four_set );
            if (i == 2)
              swiper_reviews_standing = new Swiper( '.swiper-container.swiper-four_standing', swiper_four_set );
          }
          if ( tab_items[i].querySelector('.swiper-three-two')) {
            swiper_three_two = new Swiper('.swiper-three-two', swiper_three_two_set)
          }
          //tab_items[i].querySelector('.swiper-four').update()
          //console.log()
        }
      })
    })
  }
  // /tabs

  // form review raiting
  if( document.querySelector( '.overlay-raiting' )) {
    $( '.overlay-raiting input[name=raiting]' ).change(function() {
      for (var y = 0; y < $( '.overlay-raiting__label' ).length; y++) {
        if( $( '.overlay-raiting__label' )[y].classList.contains( 'overlay-raiting__label_fill' ) ) {
          console.log('y = ' + y)
          $( '.overlay-raiting__label' )[y].classList.remove( 'overlay-raiting__label_fill' )
        }
      }
      for (var i = 0; i < $( '.overlay-raiting__label' ).length; i++) {
        if( this.value == i) {
          console.log('i = ' + i)
          for (var n = 0; n < i + 1; n++) {
            console.log('n = ' + n)
            $( '.overlay-raiting__label' )[n].classList.add( 'overlay-raiting__label_fill' )
          }
        }       
      }
    })
  }
  // /form review raiting
  
  // show reviews
  if( document.querySelector( '.reviews-list__li' )) {
    $( '.reviews-list__li' ).each(function(index) {
      if (index < 3)
        $( this ).addClass( 'reviews-list__li_show')
    })
    
    $( '.open-reviews__btn' ).click(function() {
      $( '.reviews-list__li' ).slideDown(250)
      $( this ).parent().slideUp(250)
    })
  }
  // /show reviews
})