
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var players = {};

    function onYouTubeIframeAPIReady() {
        var iframes = document.querySelectorAll('.js-video-iframe');
        for (i = 0; i < iframes.length; i++) {
            var frameId = iframes[i].id;
            var videoId = iframes[i].getAttribute("data-youtube-id");
            if (frameId) { //If the frame exists
                players[frameId] = new YT.Player(frameId, {
                    height: '315',
                    width: '560',
                    videoId: videoId,
                    events: {
                        'onReady': onPlayerReady,
                        // 'onStateChange': onPlayerStateChange
                    }
                });
            } // if (frameID)
        } // for
    } // onYouTubeIframeAPIReady

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        // event.target.playVideo();
        // console.log('player ready');

        var iframeId = event.target.a.id;
      
        iframeId = iframeId.replace("player_", "");
        // console.log(iframeId);

        var playButton = document.getElementById('tvAdPlay');
        // console.log(playButton);
        playButton.addEventListener("click", function() {
            event.target.playVideo();
        });

        var closeButton = $('#stopVideo');
        //console.log(closeButton);
        for (var i = closeButton.length - 1; i >= 0; i--) {
            closeButton[i].addEventListener("click", function() {
                //$('videoHero_' + iframeId).fadeOut('fast');
                event.target.pauseVideo();
            });
        }
    }


// See BrightHorizons for the Pause/Close extra js