$('.main').slick({
  dots: false,
  speed: 500,
  infinite: false,
  slidesToShow: 1
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 10
        }, 1000);
        return false;
      }
    }
  });
});
$('.slick-next').click(function(){
	$('#change').text("Thank You");
	$('.scroll-down').hide();
});

window.addEventListener("keydown", onKeyUp, false);
var bg = 0;
function onKeyUp(event){
  var keyCode = event.keyCode;

  switch(keyCode){
    case 70: 
        var elem = document.getElementsByTagName("body")[0];
        elem.webkitRequestFullScreen();
        break;
    }
}