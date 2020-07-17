var ui = (function() {

function initAccordion() {
        $(".accordion").accordion({
            heightStyle: "content",
            collapsible: true,
            activate: function (event, ui)
            {
                if (ui.newHeader.length)
                {
                    var headerTop = ui.newHeader.offset().top;
                    $('html, body').animate({
                        scrollTop: headerTop - 50
                    }, 300);
                }
            },          
            classes: {
                "ui-accordion": "accordion",
                "ui-accordion-header": "accordion__heading",
                "ui-accordion-content": "accordion__content"
            }
        });

    }
      (function initAll() {
        initAccordion();

    })();

    // return {

    // }
})();