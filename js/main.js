// js file for site_name

// slider code
  var setTO;
  var counter = 1;
  var numSlides = $('#slider').children().length;
  var currentele = $('#i'+parseInt(counter));
  var elWidth = currentele.width();
  var elWidthHalfStr = parseInt(elWidth/2);
  var elHeight = currentele.height();
  var elHeightHalfStr = parseInt(elHeight/2);
  var vertMov = ($('#slider').height() - elHeight)/2;
  console.log(numSlides);
  function sliderFuse (){
    setTO = setTimeout(
      function() {
        nArrow();
        sliderFuse();
        // number below is time between slide change
      }, 5000);
  }

function nArrow() {
    currentele.css("visibility", "hidden");
    counter += 1;
    if (counter > numSlides){
      counter = 1;
    }
    currentele = $('#i'+parseInt(counter));
    var elWidth = currentele.width();
    var elWidthHalfStr = parseInt(elWidth/2);
    var elHeight = currentele.height();
    var vertMov = ($('#slider').height() - elHeight)/2;
    currentele.css("visibility", "visible");
    currentele.css("left", "-"+elWidthHalfStr+"px");
    currentele.css("margin-top", parseInt(vertMov)+"px");
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
    var elHeight = currentele.height();
    var vertMov = ($('#slider').height() - elHeight)/2;
    currentele.css("visibility", "visible");
    currentele.css("left", "-"+elWidthHalfStr+"px");
    currentele.css("margin-top", parseInt(vertMov)+"px");
    currentele.css("margin-left", "50%");
}
// end slider code

$( document ).ready(function() {
  $("img.lazy").lazyload({threshold : 20});
  $('<span class="n-arrow">></span>').appendTo('#slider').click(nArrow);
  $('<span class="p-arrow"><</span>').appendTo('#slider').click(pArrow);
  $('.first-slide').css("visibility", "visible");
  currentele.css("left", "-"+elWidthHalfStr+"px");
  currentele.css("margin-top", parseInt(vertMov)+"px");
  currentele.css("margin-left", "50%");
  sliderFuse();
  $('#slider').hover(function() {
    clearTimeout(setTO);
  });
  
});
