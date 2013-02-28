// Our primary scripts file
// All of our custom JS and jQuery goes here!

// Regular JS goes here

$(document).ready(function() {

	// jQuery goes inside here!
	// This makes it so that our scripts don't load
	// before the page is ready
	
	$('#blog').fadeIn(800);
	$('#gallery').delay(800).fadeIn(800);
	$('#about').delay(1600).fadeIn(800);

	$('#gallery li').hover(
		function() {
			$(this).stop().animate({
			    opacity: 1
			}, 800);
		},

		function() {
			$(this).stop().animate({
			    opacity: 0.55
			}, 800);
		}
	);

});