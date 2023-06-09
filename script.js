(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
        var sw=$('#jedi').text();
        if (sw=="Dark side?"){
          $('#jedi').text("Light side!");
          $('.rounded').attr('src','assets/images/Black.jpg');
        }
        else{
          $('#jedi').text("Dark side?");
          $('.rounded').attr('src','assets/images/White.jpg');
        }
        
    })

    //MUTE
    $("#mute").click(function(){
      if ($('#mute').attr('class')=="fa fa-volume-off"){
        $('#bgm').prop('muted',toggle(false));
        $('#mute').removeClass('fa fa-volume-off').addClass('fa fa-music');
      }
      else{
        $('#bgm').prop('muted',toggle(true));
        $('#mute').removeClass('fa fa-music').addClass('fa fa-volume-off');
      }
    })

    function toggle(muted){
      if (muted){
        return false;
      }
      else{
        return true;
      }
    }

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
