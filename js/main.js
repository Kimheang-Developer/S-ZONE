//$(document).ready(function() {
//	$('.accordion > div').hide();
//	$('.accordion .accordion_question').last().addClass('show');
//	$('.accordion > div:last-child').show().addClass('show');
//	
//	$('.accordion > a').click(function(e) {
//		e.preventDefault();
//		if ($(this).next().hasClass('show')) {
//			$(this).next().removeClass('show')
//			$(this).last().removeClass('show')
//			$(this).next().slideUp()
//		} else {
//			$(this).parent().parent().find('.accordion_body').removeClass('show')
//			$(this).parent().parent().find('.accordion_header').removeClass('show')
//			$(this).parent().parent().find('.accordion_body').slideUp(350);
//			$(this).next().toggleClass('show');
//			$(this).last().toggleClass('show')
//			$(this).next().slideToggle();
//		}
//	});
//})




(function( $ ) {
	$.fn.accordion = function() {
		return this.each(function() {
			$(this).children().even().addClass('accordion_button')
			$(this).children().odd().addClass('accordion_content')
			$(this).children().odd().hide()
			$(this).children('.accordion_content').last().show().addClass('show');
			$(this).children('.accordion_button').last().addClass('show');
			
			if ($(this).hasClass('expand')) {
				$(this).on("click",".accordion_button", function (e) {
					e.preventDefault()
					if ($(this).next().hasClass('show')) {
						$(this).next().removeClass('show')
						$(this).last().removeClass('show')
						$(this).next().slideUp()
					} else {
						$(this).next().toggleClass('show');
						$(this).last().toggleClass('show')
						$(this).next().slideToggle();
					}
				})
			} else if ($(this).hasClass('collapse')) {
				$(this).on("click",".accordion_button", function (e) {
					e.preventDefault()
					if ($(this).next().hasClass('show')) {
						$(this).next().removeClass('show')
						$(this).last().removeClass('show')
						$(this).next().slideUp()
					} else {
						$(this).parent().parent().find('.accordion_content').removeClass('show')
						$(this).parent().parent().find('.accordion_button').removeClass('show')
						$(this).parent().parent().find('.accordion_content').slideUp(350);
						$(this).next().toggleClass('show');
						$(this).last().toggleClass('show')
						$(this).next().slideToggle();
					}
				})	   
			}
			
		});
	};
	
	$.fn.topSmoothScroll = function() {
		return this.each(function () {
        	var $this = $(this);
       		$this.on('click', function (event) {
				window.scrollTo({top: 0, behavior: 'smooth'});
            });
       	});
	}
}( jQuery ));