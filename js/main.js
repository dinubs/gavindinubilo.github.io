
  var t = new Trianglify({
    x_gradient: ["#edf8e9","#bae4b3","#74c476","#31a354","#006d2c"]});
  var pattern = t.generate(document.body.clientWidth, document.body.clientHeight);
  document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
$(document).ready(function(){

 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('#code').viewportChecker({
  classToAdd: "up"
});
$('.funItem').viewportChecker({
  classToAdd: "funUp"
});


  $('h1, .arrow').viewportChecker({
    classToAdd: "up"
  });
});