document.addEventListener("DOMContentLoaded", function(event) {

	// array with texts to type in typewriter
	var dataText = [
		"Developer.", "Designer.", "Photographer.", "Public Speaker.", "Adaptable, Professional."
	];

	// type one text in the typwriter
	// keeps calling itself until the text is finished
	function typeWriter(text, i, fnCallback) {
		// check if text isn't finished yet
		if (i < text.length) {
			// add next character to h1
			document.querySelector(".writer").innerHTML =
				text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

			// wait for a while and call this function again for next character
			setTimeout(function() {
				typeWriter(text, i + 1, fnCallback);
			}, 100);
		} else if (typeof fnCallback == "function") {
			// text finished, call callback if there is a callback function
			// call callback after timeout
			setTimeout(fnCallback, 700);
		}
	}

	// start a typewriter animation for a text in the dataText array
	function StartTextAnimation(i) {
		if (typeof dataText[i] == "undefined") {
			setTimeout(function() {
				StartTextAnimation(0);
			}, 4000);
		} else if (i < dataText[i].length) {
			// text exists! start typewriter animation
			typeWriter(dataText[i], 0, function() {
				// after callback (and whole text has been animated), start next text
				StartTextAnimation(i + 1);
			});
		}
	}

	// start the text animation
	StartTextAnimation(0);

});


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 3;
var navbarHeight = 12;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-up').addClass('nav-down');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-down').addClass('nav-up');
        }
    }
    
    lastScrollTop = st;
}



$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 300, 'swing', function () {
          window.location.hash = target;
          $('nav').removeClass('nav-down').addClass("nav-up");
      });
  });
});