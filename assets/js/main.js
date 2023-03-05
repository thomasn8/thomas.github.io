/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	// initialy hide all works details
	$("section.feature").hide();

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

	
	// Categories
		var $cat_list = $('a.work');
		var $cat_title = $('h2.show-works');

		$cat_list
			.on('click', function(event) {
				var href = $(this).attr('href');
				href = href.substr(1);
				var elem = $("section.feature."+href);
				elem.slideToggle();
				$(this).children(":first").toggleClass('show');
			})

		$cat_title
			.on('click', function(event) {
				var id = $(this).attr('id');
				var elem = $("section.feature."+id);
				var span = $(this).children(":first");
				elem.slideToggle();
				span.toggleClass('show');
				if (span.hasClass('show'))
					span.html('View details');
				else
					span.html('Hide details');
					
				// elem.toggleClass('visible');
				// elem.toggle('slow');
				// elem.slideToggle();

				// elem.slideToggle('medium', function() {
				// 	if ($(this).is(':visible'))
				// 		$(this).css('display','flex');
				// });

				// $this.find('select')
				// .val($('option:first').val());

				// x.addClass('polyfill-placeholder')
				// .val(x.attr('placeholder')).insertAfter(i);

				// config.target.toggleClass(config.visibleClass);

				// $this.find('a')

				// href = $this.attr('href'),
			})

		// Href
			$('a[href^="#"]').on('click', function(event) {
				var target = $(this.getAttribute('href'));
				if( target.length && $(this).attr('href') != '#menu') {
					event.preventDefault();
					$('html, body').stop().animate({
						scrollTop: target.offset().top - 100                    
					}, 500); 
					
					// if($(window).width() < 800) {
					// 	$('html, body').stop().animate({
					// 		scrollTop: target.offset().top - 100                    
					// 	}, 500); 
					// }
					// else if($(window).width() > 800 && $(window).width() < 1200) {
					// 	$('html, body').stop().animate({
					// 		scrollTop: target.offset().top - 150                    
					// 	}, 500); 
					// }
					// else if($(window).width() > 1200){
					// 	$('html, body').stop().animate({
					// 		scrollTop: target.offset().top - 100                    
					// 	}, 500); 
					// }                   
				}
			});

})(jQuery);