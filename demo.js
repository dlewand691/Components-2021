
if ($('.swiper-grid.swiper .swiper-slide').length > 3) {
  var swiperGrid = new Swiper(".swiper-grid", {
    preloadImages: false,
    lazy: true,
    keyboard: {
      enabled: true
    },
    
    navigation: {
      nextEl: ".grid-next",
      prevEl: ".grid-prev",
    },
    pagination: {
      el: '.pagination',
      clickable: true,
    
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 0,
        
      },
  
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween:20,
        slidesPerColumn: 2,
       
      },
      1024: {
        slidesPerView: 3,
        spaceBetween:20,
       
      },
    },
    on: {
      // resize: function() {
      //   Foundation.reInit($('.swiper-grid,.swiper-grid .swiper-wrapper'));
      // },
      afterInit: function () {
        Foundation.reInit($('.swiper-grid,.swiper-grid .swiper-wrapper'));
        
     },
     breakpoint: function(){
      Foundation.reInit($('.swiper-grid,.swiper-grid .swiper-wrapper'));
     }
    
    }
  });
  // ACCESSIBILITY CODE
  swiperGrid.on("slideChange",function(swiper){
    if(!swiper.autoplay.running && $('.keyboard-navigation-en').length > 0){
        disableFocus(swiperGrid);
    }
  })
  
  if($('.swiper-grid').hasClass('navigation-enabled')){
    $('.swiper-grid.navigation-enabled').find('.swiper-button-next').removeClass('show-on-focus')
    $('.swiper-grid.navigation-enabled').find('.swiper-button-prev').removeClass('show-on-focus')
  }
}

// $(window).trigger("resize")
// $(function(){
// $(".randomSwiper").each(function(e,i){
//   let slides = $(e).find('.swiper-slide:not(:eq(0))');
//   slides.shuffle();
//   new Swiper($(e));
//   swiper.init();
// })

// $.fn.shuffle = function(){
//   let allElements = this.get(),
//   getRandom = function(max) {
//     return Math.floor((Math.random() * max));
//   },
//   shuffled = $.map(allElements, function() { 
//     let random = getRandom(allElems.length);
//     var randEl = $(allElements[random]).clone(true)[0];
//     allElems.splice(random,1);
//     return randEl;
//   })
//   this.each(function(i){
//     $(this).replaceWith($(shuffled[i]));
//   })
//   return $(shuffled);
// }
// })
  // $(window).on("orientationchange", function(){
  //   console.log('test');
  //  //Foundation.reInit("equalizer")
  //  Foundation.reInit($('.swiper-grid,.swiper-grid .swiper-wrapper'));
    
  // })