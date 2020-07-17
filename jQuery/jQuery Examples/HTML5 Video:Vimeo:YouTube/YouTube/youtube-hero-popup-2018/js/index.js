var ui = (function() {

    function initVideoPlayer(){
    $('.video__play').click(function(e) {    
        var overlay = $('.video__overlay');      
        $(overlay).css('left', 0);
        $(overlay).addClass('video__overlay--active');
        var videoId = $(this).data("id");

        var iframe = $("#popUpVideo").children("iframe");

        iframe.attr("src", "https://www.youtube.com/embed/" + videoId + "?autoplay=1");
        iframe.attr("frameborder", "0");
        iframe.attr("allowfullscreen", "1");

        e.preventDefault();
    }); 
    
    $('body').on('click','.video__overlay, .video__close',function(e) {
        var overlay = $('.video__overlay');
        $(overlay).removeClass('video__overlay--active');
        setTimeout(function() {
            $(overlay).css('left', '-100%');
        }, 300);

        var iframe = $("#popUpVideo").children("iframe");
        iframe.attr("src", "");
        e.preventDefault();

    });     
    
}

    (function initAll() {
        initVideoPlayer();

        $(window).resize(function() {

        }).resize();

    })();

    // return {

    // }
})();