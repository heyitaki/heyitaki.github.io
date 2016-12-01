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

	/* Change active tab based on scroll. */
	$(window).scroll(function() {
		var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
		var scrolledToBottom = (scrollTop + window.innerHeight) >= scrollHeight;
		var topTab;
		if (scrolledToBottom) {
			topTab = "#contact-tab";
		} else {
			var winTop = $(this).scrollTop();
		    var $sections = $('section');
		    var top = $.grep($sections, function(item) {
		        return $(item).position().top <= winTop + 200;
		    });
		    var topId = $(top[$(top).length-1]).attr('id');
		    if (typeof topId == "undefined") {
		    	topId = $(top[$(top).length-2]).attr('id');
		    }
		    topTab = "#" + topId.substring(0, topId.indexOf('-')) + "-tab";
		}
	    if (!$(topTab).hasClass("active-navbar-tab")) {
			$(".navbar-item").removeClass("active-navbar-tab");
			$(topTab).addClass("active-navbar-tab");
		}
	});
});
