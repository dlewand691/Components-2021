// @codekit-prepend "js/cognizant-framework-2020.js"
// @codekit-prepend "../bower_components/rellax/rellax.min.js"

// var rellax = new Rellax('.rellax');

// Set wrapper to .custom-element instead of the body
// var rellax = new Rellax('.rellax', {
//   wrapper: '.bg-parallax'
// });

// =============================================================================================
// AOS- ANIMATE ON SCROLL
// =============================================================================================

// $(document).ready(function() {
//   AOS.init({
//       // startEvent: 'load'
//   });
// });

// -----  End of AOS- ANIMATE ON SCROLL  ---------------------------------------------

// function removeAOS() {
//     $('#pardotModal .column').removeClass('aos-animate');
// }
$('[data-reveal]').on('closeme.zf.reveal', function() {
    $('#pardotModal *').removeClass('aos-animate');
});

// $('[data-reveal]').on('closeme.zf.reveal', function() {
//      setTimeout(function() {
//          $('#pardotModal *').removeClass('aos-animate');
//      }, 100);
// });

// $('[data-reveal]').on('closeme.zf.reveal', function() {
//     var modal = $(this);
//     console.log(modal);
//     setTimeout(function() {
//         console.log('aos refresh')
//         // AOS.refreshHard({});
//     }, 600);
// });
// AOS.init({
// });
// document.addEventListener("aos:in:super-duper", ({ detail }) => {
//     console.log("animated in", detail);
// });
// 
// document.addEventListener("aos:out:super-duper", ({ detail }) => {
//     console.log("animated out", detail);
// });


var swiperAston = new Swiper('.swiper-container-aston', {
  // allowSlideNext: false,
  // allowSlidePrev: false
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  }
})

// ======================================================================
// MODAL OPEN ON PAGE LOAD
// ======================================================================
$(document).ready(function() {
$('#video-modal-ie').foundation('open');
});

// -----  End of MODAL OPEN ON PAGE LOAD  ----------

// ======================================================================
// YOUTUBE AUTO PLAY
// ======================================================================
// $('.open-button-trigger').click(function(){
//   $('#youtube-video').attr('src', 'https://www.youtube.com/embed/496vDXsr9fw?enablejsapi=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&autohide=1&rel=0&autoplay=1&autoplay=1')
// });
// 
// $('.close-button-trigger').click(function(){
//   $('#youtube-video').attr('src', 'https://www.youtube.com/embed/496vDXsr9fw?enablejsapi=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&autohide=1&rel=0')
// });

// -----  End of YOUTUBE AUTO PLAY  ----------