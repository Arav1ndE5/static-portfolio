(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
        if ($('.rounded').attr('src')=='images/white.jpg') {
          $('.rounded').attr('src', 'images/black.jpg');
        }   
        else {
          $('.rounded').attr('src', 'images/white.jpg');
        };
        
    })

    //MUTE
    $("#mute").click(function(){
      if ($('#mute').attr('class')=="fa fa-user"){
        $('#mute').removeClass('fa fa-user').addClass('fa fa-share-alt');
      }
      else{
        var url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
          alert('Website link Copied and ready to share');
        }, (error) => {
          console.log(error);
        });
        $('#mute').removeClass('fa fa-share-alt').addClass('fa fa-check-square');
      }
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);



