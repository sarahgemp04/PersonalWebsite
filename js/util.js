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
      console.log("hey");
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

$(function() {
  $( ".project-box" ).hover(
    function() {
      $( this ).append( $( "<h2><span></span></h2>" ) );
      $( this ).find("span:last").addClass("glyphicon");
      $( this ).find("span:last").addClass("glyphicon-eye-open");
      $( this ).css({
        "background-color": "ADEAE2",
        "opacity": "0.7",
        "box-shadow": "1px 1px 3px rgb(100,100,100)"
      });

    }, function() {
      $( this ).find( "h2:last" ).remove();
      $( this ).css({
        "background-color": "white",
        "opacity": "initial",
        "box-shadow": "initial"
      });
    }
  );
});
