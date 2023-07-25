(function ($) {

  "use strict";
  
  // COLOR MODE
  $(function changeTheme(){
    $('.color-mode-icon').toggleClass('active')
    if ($('#darki').attr('class')=="fa-sharp fa-solid fa-moon"){
      $('#darki').removeClass("fa-sharp fa-solid fa-moon").addClass("fa-solid fa-sun");
    }
    else{
      $('#darki').removeClass("fa-solid fa-sun").addClass("fa-sharp fa-solid fa-moon");
    }
    if ($('#dn').attr('class')=="fa-solid fa-sun"){
      $('#dn').removeClass("fa-solid fa-sun").addClass("fa-sharp fa-solid fa-moon");
    }
    else{
      $('#dn').removeClass("fa-sharp fa-solid fa-moon").addClass("fa-solid fa-sun");
    }
    $('body').toggleClass('dark-mode')
  })

  $(function() {

    var hour = (new Date).getHours();
  
    if (hour >= 18 || hour < 7) {
      $(changeTheme());
    }
    console.log(hour);
  });

  $('.color-mode').click(function(){
      $('.color-mode-icon').toggleClass('active')
      if ($('#darki').attr('class')=="fa-sharp fa-solid fa-moon"){
        $('#darki').removeClass("fa-sharp fa-solid fa-moon").addClass("fa-solid fa-sun");
      }
      else{
        $('#darki').removeClass("fa-solid fa-sun").addClass("fa-sharp fa-solid fa-moon");
      }
      if ($('#dn').attr('class')=="fa-solid fa-sun"){
        $('#dn').removeClass("fa-solid fa-sun").addClass("fa-sharp fa-solid fa-moon");
      }
      else{
        $('#dn').removeClass("fa-sharp fa-solid fa-moon").addClass("fa-solid fa-sun");
      }
      $('body').toggleClass('dark-mode')
    })


    //skill
    $(".skills").addClass("active")
    $(".skills .skill .skill-bar span").each(function() {
        $(this).animate({
          "width": $(this).parent().attr("data-bar") + "%"
        }, 4000)
        });
      setTimeout(function() {
        $(".skills .skill .skill-bar span b").animate({"opacity":"1"},4000);
    }, 8000); 


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

    $.ajax({
      type: "POST",
      url: "other/tgbotbeta.py",
      data: { param: text}
    }).done(function( o ) {
       // tgbot is runningg
    });

})(jQuery);

//vanila into

const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "Heyy",
  "I am Aravind E S",
  "Welcome to my",
  "Personal Website",
  ""
];

const morphTime = 1;
const cooldownTime = 0.5;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(6 / fraction - 6, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();




