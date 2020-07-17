$(document).ready(function () {

    var textareaSupport = function () {
        var support = {},
            t = document.createElement('textarea');

        support.placeholder = (t.placeholder !== undefined);

        return support;
    };

    Modernizr.textarea = textareaSupport();
    if (!Modernizr.input.placeholder || !Modernizr.textarea.placeholder) {
        $("input").each(function () {
            if ($(this).val() == "" && $(this).attr("placeholder") != "") {
                if ($(this).attr("placeholder") != "e.g. I'm moving house" && $(this).attr("placeholder") != "e.g. I need an employment lawyer" && $(this).attr("placeholder") != "How can we help?" && $(this).attr("placeholder") != "Search..." && $(this).attr("placeholder") != "Search Person...") {
                    $(this).val($(this).attr("placeholder"));
                    $(this).focus(function () {
                        if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
                    });
                    $(this).blur(function () {
                        if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
                    });
                } else {}
            }
        });
    }



/* the Responsive menu script */
    $('body').addClass('js');
          var $menu = $('#main-nav'),
              $menulink = $('.menu-link'),
              $menuTrigger = $('.has-submenu > a');
        
    $menulink.click(function(e) {
            e.preventDefault();
            $menulink.toggleClass('active');
            $menu.toggleClass('active');
    });

    var add_toggle_links = function() {         
        if ($('.menu-link').is(":visible")){
            if ($(".toggle-link").length > 0){
            }
            else{
                $('.has-submenu > a').before('<span class="toggle-link"> Open submenu </span>');
                $('.toggle-link').click(function(e) {       
                    var $this = $(this);
                    $this.toggleClass('active').siblings('ul').toggleClass('active');
                }); 
            }
        }
        else{
            $('.toggle-link').empty();
        }
     }
    add_toggle_links();
    $(window).bind("resize", add_toggle_links); 







    var num = 1000; //number of pixels before modifying styles

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.header-container').addClass('fixed');
        } else {
            $('.header-container').removeClass('fixed');
        }
    });


    // Top Search Option

    $(".search-icon").click(function () {
        $(".mobile-search").fadeToggle(200, "linear");
    });

    //$('.hero > *').each(function(){
    //	var $delay = Math.floor(Math.random()*1001);
    //	$(this).delay($delay).fadeIn(1000);
    //});

    $('.hero').hide().fadeIn(1000, "linear");

    // TinyNav.js 1
    $('.side-nav').tinyNav({
        active: 'selected'
    });

    try {
        var top = $('.glossary nav').offset().top - parseFloat($('.glossary nav').css('marginTop').replace(/auto/, 0));
        $(window).scroll(function (event) {
            // what the y position of the scroll is
            var y = $(this).scrollTop();

            // whether that's below the form
            if (y >= top) {
                // if so, ad the fixed class
                $('.glossary nav').addClass('fixedGlossary');
            } else {
                // otherwise remove it
                $('.glossary nav').removeClass('fixedGlossary');
            }
        });

    } catch (err) {}
});

function disableEnterKey(e) {
    var key;
    if (window.event)
        key = window.event.keyCode; //IE
    else
        key = e.which; //firefox  
    return (key != 13);
}