$(document).ready(function() {
	/* Indicate active tab via border-bottom. */
	$("#home-tab").addClass("active-navbar-tab");
	$(".navbar-item").click(function() {
		if (!$(this).hasClass("active-navbar-tab")) {
			$(".navbar-item").removeClass("active-navbar-tab");
			$(this).addClass("active-navbar-tab")
		}
	})

	/* Smooth scroll for navbar redirects. */
	$("a").click(function() {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 300);
	})

	/* Carousel movement. */
	$("#carousel-next").click(function() {
  		var margin = parseInt($('.carousel').css('margin-left').replace("px", ""));
  		if (margin <= -3840) {
  			return false;
  		} else {
  			$('.carousel').css('margin-left', margin-960);
  		}
  	})

  	$("#carousel-prev").click(function() {
  		var margin = parseInt($('.carousel').css('margin-left').replace("px", ""));
  		if (margin >= 0) {
  			return false;
  		} else {
  			$('.carousel').css('margin-left', margin+960);
  		}
  	})

	/* Reveal social media icons on scroll. */
	window.sr = ScrollReveal({reset: true});
	sr.reveal('.icon', 100);

	/* Change navbar color on scroll to improve readability.
	$(window).scroll(function() {
	    var winTop = $(this).scrollTop();
	    var $sections = $('section');
	    var top = $.grep($sections, function(item) {
	        return $(item).position().top <= winTop;
	    });
	    var topId = $(top[$(top).length-1]).attr('id')
	    if (topId == "#home-section") {
	    	$(".navbar").css("color", "white");
	    	$(".active-navbar-tab").css("border-bottom-color", "white");
	    } else {
	    	$(".navbar").css("color", "black");
	    	$(".active-navbar-tab").css("border-bottom-color", "black");
	    }
	}); */
});
