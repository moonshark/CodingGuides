
initContentTabs()

function initContentTabs() {
    var tabsParent = $('.content-tabs');
    if (tabsParent.length) {
        var tabLinks = tabsParent.find('.content-tabs__link');
        var tabs = $('.content-tabs__tab');
        tabLinks.click(function(e) {
            e.preventDefault();
            var target = $(this).data('tabTarget');
            tabLinks.removeClass('content-tabs__link--active');
            $(this).addClass('content-tabs__link--active');

            tabs.removeClass('content-tabs__tab--active');
            tabs.filter(function() {
                return $(this).data("tab") == target;
            }).addClass('content-tabs__tab--active');
        });
    }
}