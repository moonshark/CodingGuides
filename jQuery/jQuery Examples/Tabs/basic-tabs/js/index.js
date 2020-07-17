var ui = (function() {
  
function initTabs() {
        var tabBtn = $('.tabs__nav a');
        var tabs = $('.tabs__tab');

        if (!tabBtn.length) {
            return;
        }
        tabBtn.click(function(e) {
            e.preventDefault();
            var tabTarget = $(this).attr('href');
            var activeTab = $(tabTarget);

            $(this).closest('.tabs__nav').find('li').removeClass('js-active');
            $(this).parent().addClass('js-active');
            $(this).closest('.tabs').find('.tabs__tab').removeClass('js-active');
            activeTab.addClass('js-active');
        });
    }

(function initAll() {
        initTabs();
    })();
  
  })();