/*
	Radius by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$footer = $('#footer');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			$header.each( function() {

				var t 		= jQuery(this),
					button 	= t.find('.button');
					
				button.click(function(e) {
					closeModal();
					t.toggleClass('hide');

					if ( t.hasClass('preview') ) {
						return true;
					} else {
						e.preventDefault();
					}

				});
				
				// Slider.
				var slider = document.getElementById("myRange");
				var headerImg = document.getElementById("headerImg");
				slider.oninput = function() {
					if (this.value == 100 || this.value == 1) {
						//headerImg.style.display = 'block' ;
						this.value = 50;
						t.toggleClass('hide');
					};
				};

			});

		// Footer.
			$footer.each( function() {

				var t 		= jQuery(this),
					inner 	= t.find('.inner'),
					button 	= t.find('.info');

				button.click(function(e) {
					t.toggleClass('show');
					e.preventDefault();
				});

			});

	});

})(jQuery);



// Alternative use of MODAL
function openModal(element){
	
	//Setup myModal
	document.getElementById("myModal").style.display = "block";
	// Show videocontent
	document.getElementById("videoContent").style.display = "block";
	// Check which subject
	var title = element.alt;

	// Setup parameters of modal
	var modalImg = document.getElementById("img01");
	var projectText = document.getElementById("projectText");

	// Save subject in button
	//document.getElementsById("moreInfoButton").name = title;
	
	// Show video
	var video = document.getElementById("video" + title);
	var modalVid = document.getElementById("videoModal");
	modalVid.src = video.src;
	
	// Show modalContent
	modalImg.src = document.getElementById("img" + title).src;
	projectText.innerHTML = document.getElementById(title).innerHTML;
	
	// Hide modalContent
	//document.getElementById("modalContent").style.display = "none";
	
}


window.addEventListener("keydown", e => {
	if (e.key === 'Escape') {
		closeModal();
	}
})

window.addEventListener("keydown", e => {
	if (e.key === ' ') {
		scrollUpDown();
	}
})

function closeModal(){
	document.getElementById("myModal").style.display = "none";
}


// Scroll to top

window.addEventListener("scroll", scrollUpDown());

function scrollUpDown(){
	var pageScroll = document.getElementById("moreInfoButton");
	var modalPos = document.getElementById("modalContent").offsetTop;
	scrollPos = document.getElementById("myModal").scrollTop;
	if (scrollPos < modalPos * 0.9){
		//pageScroll.innerHTML = "&#8710;";
		document.getElementById('modalContent').scrollIntoView({ behavior: "smooth" });
	} else {
		//pageScroll.innerHTML = "&nabla;";
		document.getElementById('videoContent').scrollIntoView({ behavior: "smooth" });
	};
}