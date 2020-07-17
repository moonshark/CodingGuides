MBP.scaleFix();
// Create App namespace
var airPortr = airPortr || {};

// Variables needed for the video player
var is_ie = navigator.userAgent.toLowerCase().indexOf("msie") > -1,
	is_ie8 = navigator.appVersion.indexOf("MSIE 8") > -1,
	is_ipad = navigator.userAgent.toLowerCase().indexOf('ipad') > -1,
	is_iphone = navigator.userAgent.toLowerCase().indexOf('iphone') > -1,
	is_ipod = navigator.userAgent.toLowerCase().indexOf('ipod') > -1,
	is_ios = is_ipad || is_iphone || is_ipod;

// Constants
var width = window.innerWidth,
	mobileBreak = 600,
	tabletBreak = 1024,
	transition = (Modernizr.csstransitions) ? ['css'] : ['animate'],
	onLoadCount = 0,
	scrollorama,
	elemTop = $('#page-header').offset().top - parseFloat($('#page-header').css('margin-top').replace(/auto/, 0));

// Example module for mobile breakpoint
airPortr.mobileStuff = function () {
	$('.menu-toggle').pageslide({
		direction:"right",
		modal: true
	});
	if(onLoadCount === 0){
		$('.view-map').text('Show postcodes');
		onLoadCount++
	}
};

// Example module for tablet breakpoint
airPortr.tabletStuff = function () {
	airPortr.loadMaps();
};
// Example module for desktop breakpoint
airPortr.desktopStuff = function () {
	airPortr.loadMaps();
	airPortr.scrolloramaReset();

	/*
	 *	Add custom scrolling to the FAQ listbox
	*/
	$('.faq-list').tinyscrollbar();

	/* 
	 *	Updates the header when you scroll past the first panel
	*/	
	if($('#nav-paging').is(':visible')){
		$(window).scroll(function (event) {
			var y = $(this).scrollTop();
			if (y >= elemTop) {
				$('body').addClass('fixed');
			} else {
				$('body').removeClass('fixed');
			}
		});
	}
	/* 
	 *	Handles updating the paging nav on the right on scroll 
	*/
	$('.panel').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			if (visiblePartY == 'top') {
				var navActive = $(this).attr('id');
				$(this).addClass('panel-active');
				
				$('#nav-paging .active, #nav-primary .active').removeClass('active');
				$('#nav-paging a[href="#'+ navActive +'"], #nav-primary a[href="#'+ navActive +'"]').parent('li').addClass('active');

			} else if (visiblePartY == 'bottom') {
			// bottom part of element is visible
			
			} else {
			// whole part of element is visible
			
			}
		} else {
			$('.panel-active').removeClass('panel-active');
		}
		//if($('#nav-primary .active').length > 0 && !$('#nav-primary .reg').hasClass('active')){
		if($('#nav-primary .active').length){
			$('#nav-primary .marker').css({
				left: $('#nav-primary .active').position().left,
				width: $('#nav-primary .active').width()
			});
		}
		/*}else{
			$('#nav-primary .marker').css({
				width:0
			});
		}*/
	});
};

// Execute modules depending on breakpoint
airPortr.breakpoints = function () {
	width = window.innerWidth;
    if (width <= tabletBreak && width > mobileBreak) {
		airPortr.tabletStuff();
		return 'tablet';
	}else if(width <= mobileBreak){
        airPortr.mobileStuff();
		return 'phone';
    } else {
        airPortr.desktopStuff();
		return 'desktop';
    }
};

airPortr.loadMaps = function () {
	$('.panel-pricing .map-wrapper').each(function(){
		if($('img', this).length <= 0){
			var imgUrl = $(this).data('map');
			$(this).append('<img src="'+ imgUrl +'" />');
		}
	});
};
airPortr.scrolloramaReset = function(){
	if(scrollorama !== undefined){
		scrollorama.destroy();
		scrollorama = undefined;
		airPortr.scrolloramaInit();
		return true;
		//scrollorama.scrollResize;
	}
}
airPortr.scrolloramaInit = function () {
	/* 
	 *	Scrollorama stuff 
	*/
	scrollorama = $.scrollorama({
		blocks:'.panel',
		enablePin:false
	});
	if($('#logoscroll').length){
		scrollorama.animate('#logoscroll',{
			delay: 0,
			duration: 450,
			property:'opacity',
			start:1,
			end:0
		});
	}
	if($('#bagscroll').length){
		scrollorama.animate('#bagscroll',{ 
			delay: 50,
			duration: 900,
			property:'top',
			start:'50%',
			end: -50
		});
	}
	if($('#bagNoTag').length){
		scrollorama.animate('#bagNoTag',{
			delay: 0,
			duration: 750,
			property:'top',
			start:-800,
			end: 150
		});
	}
	if($('#lrgShadow').length){
		scrollorama.animate('#lrgShadow',{
			delay:300,
			duration: 370,
			property:'opacity',
			start:0,
			end:1
		});
	}
	if($('#slideInL').length){
		scrollorama.animate('#slideInL',{
			delay:300,
			duration: 520,
			property:'left',
			start:-100,
			end:'50%'
		});
	}
	if($('#faqDrop').length){
		scrollorama.animate('#faqDrop',{
			delay:500,
			duration:370,
			property:'top',
			start:-150,
			end:0
		});
	}
	/*if($('#slideUp').length){
		scrollorama.animate('#slideUp',{
			delay:700,
			duration: 1000,
			property:'bottom',
			start:-500,
			end:0
		});
	}
	if($('#smlGrey').length){
		scrollorama.animate('#smlGrey',{
			delay:325,
			duration: 1000,
			property:'left',
			start:800,
			end:-14
		});
	}*/
	if($('#smlBlue').length){
		scrollorama.animate('#smlBlue',{
			delay:150,
			duration: 750,
			property:'right',
			start:-800,
			end:-30
		});
	}
	if($('#smlShadow').length){
		scrollorama.animate('#smlShadow',{
			delay:800,
			duration: 100,
			property:'opacity',
			start:0,
			end:1
		});
	}
	if($('#ipad').length){
		scrollorama.animate('#ipad',{
			delay:270,
			duration: 400,
			property:'bottom',
			start:-400,
			end:0
		});
	}
	if($('.squiggly-arrow').length){
		scrollorama.animate('.squiggly-arrow',{
			delay:270,
			duration: 400,
			property:'bottom',
			start:-400,
			end: 180
		});
	}
	if($('.reg-wrap .roundel').length){
		scrollorama.animate('.reg-wrap .roundel',{
			delay:100,
			duration: 700,
			property:'rotate',
			start:45
		});
	}
	/* 
	 *	End Scrollorama
	*/
}

// Init modules + DOM Ready stuff
airPortr.init = function () {
	$(window).on('debouncedresize', function() {
		airPortr.breakpoints();
		console.log('calculating...'+ airPortr.breakpoints());
	}).resize();
	if(airPortr.breakpoints() == 'desktop'){
		airPortr.scrolloramaInit();
	}
};
// Execute App
airPortr.init();



$(document).ready(function() {
	var activeIndex = 0;
	$('#slider').slider({
		min: 0,
		max: 12,
		slide: function(event, ui){
			var value = ui.value;
			var max = $('#slider').slider( "option", "max" );
			if(value < 10){
				value = '0'+ value;
			}else if(value == max){
				value = value +'+';
			}sc
			$(this).next('.range-value').text(value);
		}
	});

	/*$('input[type=radio], input[type=checkbox]').change(function(e){
		var elemName = $(this).prop('name');
		if($(this).is(':checked')){
			$(this).addClass('checked');
			if($(this).is('[type=radio]')){
				$('input[name='+elemName).removeClass('checked');
			}
		}else{
			$(this).removeClass('checked');
		}
	})*/
	
	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		slideshow: false,
		start: function(){
			if(airPortr.breakpoints() == 'desktop'){
				scrollorama.scrollResize();
			}
		}
	});

	/*
	*	#1
	 *	Handles the range input value output.
	*/
	$('input[type=range]').change(function(){
		var value = $(this).val();
		if(value < 10){
			value = '0'+ value;
		}else if(value == $(this).attr('max')){
			value = value +'+';
		}
		$(this).next('.range-value').text(value);
	});

	/*
	*	#2
	 *	Handles the adding and removing of hotels & airports on the registration form
	*/
	$('.add-hotel, .add-airport').click(function(){
		var $btn = $(this);
		var $input = $btn.prev('input');

		if($input.val().length > 0){
			if($btn.next('ul').length == 0){
				$btn.after('<ul />');
			}
			var $list = $btn.next('ul');
			$list.append('<li>'+ $input.val() +'</li>');
			$input.val('');
		}
		return false;
	});
	$('.panel-register .form-row').on("click", 'li', function(event){
		$(this).remove();
	});

	/*
	*	#3
	 *	Handle support for input[type=range]
	*/
	if(Modernizr.inputtypes['range']){
		$('html').addClass('inputrange');
	}

	$('.faq-list a').click(function(){
		var elem = $(this).attr('href');
		$('.faq-list li.active').removeClass('active');
		$(this).parent().addClass('active');
		$('.faq-result.active').removeClass('active');
		$(elem).addClass('active');

		$('html,body').animate({
			scrollTop: $(elem).offset().top - 100
		});

		return false;
	});

	/*
	*	#4
	 *	Video stuff
	*/
	var eventHandler = "click";
	$('a.play-me').each(function (h) {
        button = $(this);
        if (is_ie8) {
            player = $("#" + $(this).data("video-id"));
            player_id = player.attr("id");
            player_video = player.find("video")[0];
            $(player_video).attr("autoplay", "autoplay")
        }
        $(this).bind(eventHandler, function (i) {
            player = $("#" + $(this).data("video-id"));
            player_id = player.attr("id");
            player_video = player.find("video")[0];
            $(player_video).attr("preload", "auto");
            player.css({
                display: "block"
            });
            if (is_ie8) {
                $(player_video).attr("autoplay", "autoplay")
            }
            if (player_video.player === undefined) {
                player.find("div.close").click(function () {
                    player_video.player.pause()
                });
                player.find("video").mediaelementplayer({
                    iPadUseNativeControls: true,
                    alwaysShowControls: true,
                    features: ["playpause", "current", "progress", "duration", "volume"],
                    videoWidth: $(window).width(),
                    videoHeight: $(window).height(),
                    pluginPath: "js/",
                    flashName: "flashmediaelement.swf",
                    silverlightName: "silverlightmediaelement.xap",
                    pauseOtherPlayers: false,
                    success: function (j) {
                        if (is_ios || is_ie || is_ie8) {
                            player.css({
                                opacity: 1,
                                display: "block",
                                "z-index": 31000,
                                width: $(window).width(),
                                height: $(window).height()
                            });
                            $(player_video).css({
                                width: $(window).width(),
                                height: $(window).height()
                            })
                        } else {
                            player.css({
                                opacity: 1,
                                display: "block",
                                "z-index": 31000
                            })
                        }
                        j.addEventListener("canplay", function () {
                            if (j.pluginType == "flash") {
                                setTimeout(function () {
                                    j.play()
                                }, 500)
                            } else {
                                j.play()
                            }
                        });
                        j.addEventListener("pause", function () {
                            player.css({
                                opacity: 0
                            }).delay(1000).queue(function (k) {
                                player.css({
                                    display: "none"
                                });
                                $("#topics > li.active").click();
                                k()
                            })
                        });
                        j.addEventListener("play", function () {
                            player.css({
                                opacity: 1,
                                display: "block",
                                "z-index": 31000
                            })
                        })
                    }
                }).data("initialized", true)
            } else {
                player_video.player.play()
            }
        })
    });


	/*
	*	#5
	 *	Tab switcher
	*/
	$('#tabs a').click(function(){
		var elem = $(this).prop('hash');
		$('#tabs .active, .tab.active').removeClass('active');
		$(this).parent('li').addClass('active');
		$(elem).addClass('active');
		$(window).resize();
		if(airPortr.breakpoints() == 'desktop'){
			scrollorama.scrollResize();
		}
		return false;
	});

	/* Map expander */
	$('.view-map').bind('click',function(event){
		if(airPortr.breakpoints() === 'phone'){
			var $elem = $(this).siblings('.postcodes');
			
			$elem.slideToggle('500', function(){
				$(this).toggleClass('active');
			});

			$(this).toggleClass('active');

			if($(this).hasClass('active')){
				$(this).text('Close postcodes');
			}else{
				$(this).text('Show postcodes');
			}
		}else{
			var elem = $(this).attr('href');
			$('.active .view-map').not(this).click();
			
			if($(this).parent().hasClass('active')){
				$(this).text('View map');
			}else{
				$(this).text('Close map');
			}
			
			$(this).parent('section').toggleClass('active');
			$(elem).slideToggle(500, function(){
			
				if($(this).is(':visible')){
					var alignBottom = $(elem).offset().top - ($(window).height() - $(elem).height());
					//var alignBottom = $(elem).offset().top - $(elem).height();
					console.log($(elem).offset().top);
					$('html,body').animate({
						scrollTop: alignBottom
					});
				}
				$(window).resize();
				if(airPortr.breakpoints() == 'desktop'){
					scrollorama.scrollResize();
				}
			});
		}
		return false;
	});
	
	
	/* Smooth Scrolling */
	$('a[href^="#"]:not(.view-map, .menu-toggle, .faq-list a, .play-me, #tabs a, .flex-direction-nav a, .ui-slider-handle)').click(function(){
		var elem = $(this).attr('href');
		var scrollSpeed =  1000;

		if($(this).attr('href').indexOf("panel") > 0){
			var targetIndex = $(elem).index('.panel') + 1;
			var indexDiff = (activeIndex > targetIndex) ? (activeIndex - targetIndex) : (targetIndex - activeIndex);
			
			var scrollOffset = $(document).scrollTop();
			var targetOffset = $(elem).offset().top;
			var distance = (targetOffset > scrollOffset) ? (targetOffset - scrollOffset) : (scrollOffset - targetOffset);
			
			scrollSpeed =  (indexDiff / 2) * 1000;
		}
		$('html,body').animate({
			scrollTop: $(elem).offset().top - $('#page-header').height()
		}, scrollSpeed, function(){
			$('.panel-active').removeClass('panel-active');
			$(elem).addClass('panel-active');
			activeIndex = targetIndex;
			location.hash = elem;
		});
		
		
		return false;
	});

	// Background size polyfil
	yepnope({
		test : Modernizr.backgroundsize,
		nope : [ 'js/polyfil/jquery.backstretch.min.js', 'js/ie.js' ]
	});
	
	// Placeholder polyfil
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		  }
		}).blur(function() {
		  var input = $(this);
		  if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		  }
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  $(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			  input.val('');
			}
		  })
		});
	}
});


var timeoutID;
$(document).ready(function(){
// Registration form magic happens here.
// This will need rewriting when the forms are wired up. It's purely for demo purposes at the moment!
	$('#register .switch-form:not(.agent-form-switch)').click(function(){
		regFormMagic();
		return false;
	});

	$('#register-form .switch-form-2').click(function(){
		$(this).after('<img src="images/loader.gif" class="loader" />');
		delayedEvent();
		return false;
	});

	$('#agent-reg').submit(function (e) {
        e.preventDefault();
        $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                alert("Error: " + data.Message);
            } else { // 200
				fadeFormAgent();
            }
        });
    });

	/*$('#register .agent-form-switch').click(function(e){
		var dataString = $('#agent-reg').serializeArray();
		$.ajax({
			type: "POST",
			url: "http://kmp.createsend.com/t/t/s/wiitk/",
			data: dataString,
			success: function(){
				fadeFormAgent();
			}
		});
		e.preventDefault();
	});*/
});

function delayedEvent() {
	timeoutID = window.setTimeout(fadeForm, 2000);
}
 
function fadeForm() {
	$('#register-form form').slideUp('slow').parent('.form-wrap').addClass('shrunk').find('p').text('Thank you for entering our competition, and to those who have taken the time to fill in the feedback form. We\'ll be in touch if you win. The competition will be closing before we launch at London Heathrow. For other ways to stay in touch with AirPortr&trade; follow us on Facebook, Twitter and Google+. ');
	$('html,body').animate({
		scrollTop: $('#register-form').offset().top
	}, 500);
}
 
function fadeFormAgent() {
	$('#register form').slideUp('slow').parent('.form-wrap').addClass('shrunk').append('<p>Thank you for registering your interest in the Airportr&trade; service.</p><p>You are one step closer to offering this pioneering product to your customer base creating a competitive service and hospitality advantage in addition to earning incremental revenue for your organisation.</p>');
	$('html,body').animate({
		scrollTop: $('#register').offset().top
	}, 500);
	return false;
}


// Registration form skull duggery
function regFormMagic() {
	$('#register').animate({
		'margin-top':-$('#register').height()
	}, 'fast').addClass('hide'); 
	$('#register-form .inner').slideDown('slow', function(){
		$('body').animate({
			scrollTop: $('#register-form').offset().top - $('#page-header').height()
		});
	});
	return false;
}
