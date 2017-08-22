/*Function to set the height of the home page so that it covers entire
  viewport.*/
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('#home-page').css('height', windowHeight);
    console.log("wassuppp");
  };

  function setMargin() {

    if($(window).width() <= 500) {
      //do nothing no need to set margin to sidebar size.
    } else {
      sidebarWidth = $('.sidebar').css('width');
      addHeight = 10;
      $('.content').css('margin-left', sidebarWidth);
      $('.content').css( "margin-left", "+=20px" );
      console.log(sidebarWidth);
      console.log($('.content').css('margin-left'));
    }

  }

/* Function that fades in each experience section. */
  $(window).on('scroll', function(){
	$('.section-left').each(function(){
		if( $(this).offset().top <= $(window).scrollTop()-$(window).height()*0.6) {
      $(this).fadeIn(2000);
		}
	});
});

// Once page is loaded and ready. For every resize reset home page image height
  $(document).ready(function() {
    $(window).resize(function() {
      setHeight();
      console.log("Hello");
    });
  });


  /*Function to give links a smooth scroll effect.*/

$(function() {
        $('.sidebar a').bind('click',function(event){
            var $anchor = $(this);

            $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
            }, 800,'jswing');

            event.preventDefault();
            });
        $('.arrwContainer a').bind('click',function(event){
            var $anchor = $(this);

            $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
            }, 800,'jswing');

            event.preventDefault();
            });
});
