// ======================================================================
// GRADIENT STEPS BACKGROUND
// ======================================================================
$(".bg-steps").each(function () {
  var length = $(this).children().length;
  $(this)
    .children("div")
    .each(function (index) {
      var colorClass = "bg-steps-" + Math.round((index / (length - 1)) * 100);
      $(this).addClass(colorClass);
    });
});

// $(".bg-steps-green").each(function() {
//     var length = $(this).children().length;
//     $(this).find(".accordion-item").each(function(index) {
//         var colorClass = "bg-steps-green-" + Math.round((index / (length - 1)) * 100);
//         $(this).addClass(colorClass);
//     });
// });
// -----  End of GRADIENT STEPS BACKGROUND  ----------
