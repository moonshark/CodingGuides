// May only work in older Slick Plugins

$('.review').slick({
			slide: '.review__item',
			arrows: true,
			dots: true,
			prevArrow: '<span class="review__prev fa fa-angle-left"></span>',
			nextArrow: '<span class="review__next fa fa-angle-right"></span>',
			appendArrows: '.review .review__pagination',
			appendDots: '.review .review__pagination',

			customPaging : function(slider, i) {
		      	var thumb = $(slider.$slides[i]).data();

		      	if(thumb <10) {
		      		// if less than 10 then add a 0
		      		return '<a>'+'0'+(i+1)+'</a>';
		      	} else {
		      		// otherwise remove
		      		return '<a>'+(i+1)+'</a>';
		      	}

		      	
			},
		});