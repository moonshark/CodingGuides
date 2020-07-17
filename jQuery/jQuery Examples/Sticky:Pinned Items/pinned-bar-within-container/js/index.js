var ui = (function() {


    function initStickySideBar() {

        var browserWidth = window.innerWidth;
        // Make sure to unbind events to the button so does
    
        if (!'[data-sticky_column]') {
            return;
        }
            
            if (browserWidth <= 900) {
                $('[data-sticky_column]').trigger("sticky_kit:detach");

            } else {
           // $('[data-sticky_column]').stick_in_parent();

                $('[data-sticky_column]').stick_in_parent().on("sticky_kit:bottom", function(e) {
                    $(this).parent().css('position', 'static');
                   $(this).addClass("at_bottom").removeClass("is_stuck");
                }).on("sticky_kit:unbottom", function(e) {
                    $(this).parent().css('position', 'relative');
                   $(this).removeClass("at_bottom").addClass("is_stuck");
                });
            }


        //$('[data-sticky_column]').stick_in_parent();
    }




	
    (function initAll() {
        initStickySideBar();

        $(window).resize(function() {
			// Only re-add this when this function exists
            //initMoveForms();
            initStickySideBar();
        }).resize();

    })();

    // return {

    // }
})();