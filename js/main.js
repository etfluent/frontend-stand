// js file for site_name

// slider code
  var init = "yes";
  var counter = 1;
  var numSlides = $('#slider').children().length;
  var currentele = $('#i'+parseInt(counter));
  var elWidth = currentele.width();
  var elWidthHalfStr = parseInt(elWidth/2);
  var elHeight = currentele.height();
  var elHeightHalfStr = parseInt(elHeight/2);
  console.log(numSlides);
  

function nArrow() {
    currentele.css("visibility", "hidden");
    counter += 1;
    if (counter > numSlides){
      counter = 1;
    }
    currentele = $('#i'+parseInt(counter));
    var elWidth = currentele.width();
    var elWidthHalfStr = parseInt(elWidth/2);
    currentele.css("visibility", "visible");
    currentele.css("left", "-"+elWidthHalfStr+"px");
    currentele.css("margin-left", "50%");
}

function pArrow() {
    currentele.css("visibility", "hidden");
    counter -= 1;
    if (counter == 0){
      counter = numSlides;
    }
    currentele = $('#i'+parseInt(counter));
    var elWidth = currentele.width();
    var elWidthHalfStr = parseInt(elWidth/2);
    currentele.css("visibility", "visible");
    currentele.css("left", "-"+elWidthHalfStr+"px");
    currentele.css("margin-left", "50%");
}
// end slider code

$( document ).ready(function() {
  $("img.lazy").lazyload({threshold : 20});
  $('<span class="n-arrow">></span>').appendTo('#slider').click(nArrow);
  $('<span class="p-arrow"><</span>').appendTo('#slider').click(pArrow);
  $('.first-slide').css("visibility", "visible");
  currentele.css("left", "-"+elWidthHalfStr+"px");
  currentele.css("margin-left", "50%");
  function sliderFuse (){
    setTimeout(
      function() {
        nArrow();
        sliderFuse();
        // number below is time between slide change
      }, 5000);
    }
  sliderFuse();
});
