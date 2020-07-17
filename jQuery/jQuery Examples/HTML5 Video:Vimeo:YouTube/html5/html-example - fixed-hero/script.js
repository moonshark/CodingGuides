(function(){

	function initUi() {
		initHeroVideo();
	}



	function initHeroVideo() {
		// Add a 'js' class to the html tag
		// If you're using modernizr or similar, you
		// won't need to do this
		$('html').addClass('js');

		// Fade in videos
		var $fade_in_videos = $('.video-bg video');
		$fade_in_videos.each(function(){
			if( $(this)[0].currentTime > 0 ) {
				// It's already started playing
				$(this).addClass('is-playing');
			} else {
				// It hasn't started yet, wait for the playing event
				$(this).on('playing', function(){
					$(this).addClass('is-playing');
				});
			}
		});

		// Seamless looping (avoid the flicker)
		var $looping_videos = $('video[loop]');
		$looping_videos.each(function(){
			$(this).on('timeupdate', function(){
				if($(this)[0].currentTime >= $(this)[0].duration - 0.3) {
					$(this)[0].currentTime = 0.0;
				}
			});
		});

		// Scrap videos on iOS because it won't autoplay,
		// it adds it's own play icon and opens the
		// media player when clicked
		var iOS = /iPad|iPhone|iPod/.test(navigator.platform) || /iPad|iPhone|iPod/.test(navigator.userAgent);
		if( iOS ) {
			$('.video-bg video').remove();
		}
	}




	$(document).ready(function () {

		initUi();
	})
	
}());