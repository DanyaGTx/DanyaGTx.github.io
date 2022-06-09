const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      1000: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 480px
      720: {
        slidesPerView: 1,
        
      },
      // when window width is >= 640px
      320: {
        slidesPerView: 1,

      }
    }
  });
  $(document).ready(function(){
    $('.video__button').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });	
    $('.header__burger').click(function(event){
      $('.header__menu').toggleClass('active')
    })
  });