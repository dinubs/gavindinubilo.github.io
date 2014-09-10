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


  var snap = Snap('#svg');
  var s = 40;
  var h = s*2;
  var w = Math.sqrt(3)*s;

  window.onload = function () {
    draw();
  }
  function draw(){

    function drawElement(x,y){
       snap.polyline( [[w*.5,0],[0,h*.25],[0,h*.75],[w*.5,h],[w,h*.75],[w,h*.25]] ).attr({
          transform:'translate('+(x*w)+','+y*h+')',
          opacity:Math.random() * 0.3,
          stroke: "none"
        }).hover(function(e,a){Snap(e.srcElement).animate({
            fill:'#00AA9A',
          },500);
        }).touchmove(function(e,a){Snap(e.srcElement).animate({
            fill:'#00AA9A',
          },500);
        });;
    };

    for(var i = -1; i < window.innerWidth /w; i+=1){
      for(var j = -1; j < window.innerHeight / h ; j += 1.5){
        drawElement(i,j);
        drawElement(i+.5,j+.75);
      }
    }

  }
});
