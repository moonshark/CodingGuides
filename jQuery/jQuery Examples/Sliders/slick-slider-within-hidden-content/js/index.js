function initUi() {
  initProductResultsSlider();
  initAccordion();
}

function initAccordion() {
  $('#product-results').accordion();
}

function initProductResultsSlider() {

        $('.product-results__slider').slick({
               infinite: false,
               autoplay: false,
               dots: false,
               slidesToShow: 4,
               slidesToScroll: 4,
               responsive: [{
                   breakpoint: 1024,
                   settings: {
                       slidesToShow: 3,
                       slidesToScroll: 3,
                       dots: false,
                       arrows: true
                   }
               }, {
                   breakpoint: 960,
                   settings: {
                       slidesToShow: 2,
                       slidesToScroll: 2,
                       dots: true,
                       arrows: false
                   }
               }, {
                   breakpoint: 600,
                   settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1,
                       dots: true,
                       arrows: false
                   }
               }]
           });


        $("#product-results").accordion({
            collapsible: true
        });
        
  // This is the main part!!!
        $('.ui-accordion-header').click(function(e) {
            $('.product-results__slider').slick('setPosition'); 
        });
    }


initUi();

// If slider is within a modal, make sure the width and height are not set to 0px..