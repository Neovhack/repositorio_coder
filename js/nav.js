jQuery( document ).ready( function($) {
    $( window ).scroll( function () {
      if ( $(document).scrollTop() > 75 ) {
        $('.navbar').removeClass('fadeIn');
        $('body').addClass('shrink');
    
      } else {
        $('.navbar').removeClass('fadeInDown');
        $('body').removeClass('shrink');
 
      }
    });
  });