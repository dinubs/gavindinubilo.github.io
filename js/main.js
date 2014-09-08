 $(document).ready(function(){
    $("#navigation").sticky({topSpacing:0});
  });

 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 34
        }, 1000);
        return false;
      }
    }
  });
});


$(function() {
  $(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );
});

baguetteBox.run('#da-thumbs', {
  captions: true,       // true|false - Display image captions
  buttons: true,      // 'auto'|true|false - Display buttons
  async: false,         // true|false - Load files asynchronously
  preload: 2,           // [number] - How many files should be preloaded from current image
  animation: 'slideIn'
});

$(function() {
	var bar = $('#headerSlideContent');
	var top = bar.css('top');
	$(window).scroll(function() {
		if($(this).scrollTop() > 200) {
			bar.addClass("navBlue");
      bar.removeClass("clear");
      console.log("YES");
		} else {
      bar.addClass("clear");
			bar.removeClass("navBlue");
		}
	});
});
