

var ui = (function () {


    function initTouchEventsMenu() {
        $('ul li.has-child').on("touchstart", function (e) {
            'use strict'; //satisfy code inspectors
            var link = $(this); //preselect the link
            if (link.hasClass('hover')) {
                return true;
             } 
            else {
               link.addClass('hover');
               $('ul > li').not(this).removeClass('hover');
               e.preventDefault();
               return false; //extra, and to make sure the function has consistent return points
              }
            });
    }


    

    (function initAll() {

        initTouchEventsMenu();
    })();
})();