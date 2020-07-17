// Passing Arguments to a Function

function sayGreeting(greeting) {
  var response = prompt("What is your name?");
  alert(greeting + ", " + response);
}

sayGreeting("Have a Good Day");
// The above passes in 'Have a good day to the alert'

// Return a value from a function

function add(a,b) {
  return a + b; // this returns the result
}
console.log( add(20,30) );
console.log( add(120,300) );

/* ----------------------------------------------------------------------------------------
      Accessing a Javascript Array
---------------------------------------------------------------------------------------- */

var movies = [ 'Batman', 'Scarface', 'Superman'];

console.log(movies[0]); // Batman
console.log(movies[1]); // Scarface
console.log(movies[2]); // Superman

movies.push('Shawshank'); // adds a movie to the end of an array
movies.pop(); // removes last item from an array


/* ----------------------------------------------------------------------------------------
     Javascript  Loops
---------------------------------------------------------------------------------------- */

// for each - accesses each item in an array
// variable name, then each movie
movies.forEach(function(movie){
  alert(movie); // show each movie within the array
});

// another way of doing it is using the new arrow syntax  (=>). This is a new, shorter syntax for writing functions in JavaScript.
movies.forEach( movie => alert(movie) );

// for/of loops
for ( var movie of movies ) {
  console.log(movie);
}

// For loops are frequently used for actions that need to run a particular number of times.

// The for loop consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by the code that should run each time the condition remains true.

const fruits = ['apple', 'pear', 'cherry'];

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
// logs apple, pear, cherry

// while
// The while loop repeats a block of JavaScript code until a particular condition is no longer true. For example, in this code, we start with a variable named counter. At the beginning of the loop, the JavaScript interpreter compares the value in the counter variable to 10. If the value inside counter is less then 10, the loop runs.

// The loop logs the value inside the counter variable to the console, then increases the value inside counter by 1. After going through the loop 10 times, the counter value is set to 10, the condition is false and the loop is done.

var counter = 1;
while (counter < 10 ) {
  console.log( counter );
  counter = counter + 1;
}

// do...while
// The do...while loop is closely related to the while loop. do...while creates a loop that executes a statement until the test condition evaluates to false.

// The main difference between while and do...while is that do...while doesn't check the condition until the code block has run once. Then, if the condition is true, it runs again...and again...until the condition is no longer true.

var counter = 1;
do {
  counter = counter + 1;
  console.log( counter );
} while (counter < 10);


// map()
// The map() array iteration method is used to transform each item in an array into something else, leaving the original array unchanged. For example, this code will capitalize all the words within the fruits array:

const fruits = ['apple', 'pear', 'cherry'];

const capitalizedFruits = fruits.map( fruit => fruit.toUpperCase() );
console.log(capitalizedFruits) // [ 'APPLE', 'PEAR', 'CHERRY' ]


/* ----------------------------------------------------------------------------------------
     Javascript  Object
---------------------------------------------------------------------------------------- */

// properties - a variable
// method - something that can be done

// assign object literal to variable, curly braces are objects
var movie = {
  title: 'Wonder Woman', 
  time: '2pm',
  cost: '£4.00'
}

// access the above
alert( movie.title ); // this shows the movie title 'Wonder Woman'

// you can change 
alert( movie.title  = 'Avengers');

// add a new property
movie.status = "Unavailable";

//This would now be:
var movie = {
  status: "Unavailable"
  title: 'Wonder Woman', 
  time: '2pm',
  cost: '£4.00'
}

console.log(movie); // will show

// Common to combine array with objects to arrays, add objects to an array
var movies = [
  {
    title: 'Avengers',
    time: '12pm'.
    status: 'available'
  },
  {
    title: 'Wonder Woman',
    time: '2pm'.
    status: 'unavailable'
  },
  {
    title: 'The Last Jedi',
    time: '4pm'.
    status: 'available'
  },
];

// This is good for helpers http://blog.teamtreehouse.com/14-handy-jquery-code-snippets-for-developers

/* ----------------------------------------------------------------------------------------
     Moving Elements 
---------------------------------------------------------------------------------------- */
//Moving elements or adding content

var tweet = '<div>Hello</div>';

$(‘#tweets).append(tweet); // at the bottom of the element 

<section id=“tweets”>
  <h2>Latest Tweets</h2>
  <p>Here are the tweets</p>
  <div>Hello</div>
</section>


$(‘#tweets).prepend(tweet); // at the top of the element

<section id=“tweets”>
  <div>Hello</div>
  <h2>Latest Tweets</h2>
  <p>Here are the tweets</p>
</section>


$(‘#tweets).before(tweet); // put before the element

<div>Hello</div>
<section id=“tweets”>
  <h2>Latest Tweets</h2>
  <p>Here are the tweets</p>
</section>

$(‘#tweets).after(tweet); // put after the element 

<section id=“tweets”>
  <h2>Latest Tweets</h2>
  <p>Here are the tweets</p>
</section>
<div>Hello</div>


$(‘#tweets p).html(tweet); // changes the whole html of the element

<section id=“tweets”>
  <h2>Latest Tweets</h2>
  <p><div>Hello</div></p>
</section>


$(‘#tweets p).text(‘Hello’); // changes the text inside the element
<section id=“tweets”>
  <div>Hello</div>
  <h2>Latest Tweets</h2>
  <p>Hello</p>
</section>


/* ----------------------------------------------------------------------------------------
     Traversing the DOM
---------------------------------------------------------------------------------------- */


$(‘.contact’).next().css(border: “1px solid red”); // find the next element
$(‘.contact’).prev().css(border: “1px solid red”); // find the element before
$(‘.contact’).parent().css(border: “1px solid red”); // targets the parent of .contact, like .contact__wrapper
$(‘.contact’).children().css(border: “1px solid red”); // find the elements inside .contact
$(‘.contact’).find(‘.facebook’).css(border: “1px solid red”); // finds and element within .contact (quicker than $(‘.contact .facebook’)’
$(‘.contact’).closest(‘section’).css(border: “1px solid red”); // moves up the DOM to target the closest parent <section>


/* ----------------------------------------------------------------------------------------
     Check if element is present and do only if it is
---------------------------------------------------------------------------------------- */

var playIcon = $('.hero__play');

 // if this element is in the page
if(playIcon.length) {
    // do something here
}  

/* ----------------------------------------------------------------------------------------
     To run each time on resize, do the following in the JS list
---------------------------------------------------------------------------------------- */

function initUi() {
  initPlayIconHero();

        $(window).resize(function() {
            initPlayIconHero();
        }).resize();
}


/* ----------------------------------------------------------------------------------------
     Do something when browser is below a size
---------------------------------------------------------------------------------------- */

 var browserWidth = window.innerWidth;

if (browserWidth < 1024) {
  // do something
}


/* ----------------------------------------------------------------------------------------
     Use event to target an element.
---------------------------------------------------------------------------------------- */

$('.spoiler').on('click', 'button', function(event){
  console.log(event); // see what info is on the clicked elements
  console.log(event.target); // use .target to see WHICH element code is clicked
   // instead of $('spoiler span').hide(); this one hides only the clicked element, ideal if there are a few buttons that are clicked
   $(event.target).hide(); // hides the clicked button, see below
 //  or
   $(this).hide();
})

// <p class="spoiler">
//     <span>Darth Vader is Luke Skywalkers Father! Noooooooooooo!</span>
//     <button>Reveal Spoiler</button>
// </p>

// 

/* ----------------------------------------------------------------------------------------
     Find the closest container, then expand
---------------------------------------------------------------------------------------- */

function initExpandOptions() {
        $("[data-option-expand]").click(function(e) {
            e.preventDefault(); // stop the default action for click
            // when clicked find the closest 'data-option-container which is the parent and then find the container I want to expand up and down'
            $(this).closest("[data-option-container]").find("[data-option-content]").slideToggle("fast");
         });
    }


//HTML IS 

<div class="booking__actions" data-option-container> // This is the parent container it looks for
    <ul class="booking__actions-options">
            <li>
                  <a href="#" data-option-expand>Click to open</a> // This is the clicked element
            </li>
      </ul>
      <ul data-option-content> // This will expand and close
            <li>...

// On hover of container
$(".container").hover(function () {
    // Find closest container , then find the .page-copy tag within, then slide
  $(this).closest(".container").find(".page-copy").slideToggle("fast");
});

/* ----------------------------------------------------------------------------------------
      JS method for MQ
---------------------------------------------------------------------------------------- */

    if (window.matchMedia("(min-width:769px)").matches) {
                document.write('<script src="js/pikaday.min.js.gz"><\/script>')
            }


/* ----------------------------------------------------------------------------------------
     jquery doc ready
---------------------------------------------------------------------------------------- */


  $(document).ready(function() {

  });

  //or shorthand method

   $(function() {

  });



/* ----------------------------------------------------------------------------------------
    How to apply different events at different sizes
---------------------------------------------------------------------------------------- */

function initExample() {

        $(window).resize(function () {

            if ($(window).width() >= 768) {
               // do something
            } else {
              // otherwise something else happens
            }


        }).resize();

    }
 // no need to add resize in the list of functions


/* ----------------------------------------------------------------------------------------
    Calculate Height in JS of hero
---------------------------------------------------------------------------------------- */

function hero(){// This function needs to be called both on load and resize
    var viewportHeight = $(window).height();// finds height of viewport
    var minHeight = Math.floor(viewportHeight);// rounds to nearest pixel
    var navHeight = $('.main-header').outerHeight(); // finds the height of the header
    $('.hero').css({
      'height': Math.floor(minHeight - (navHeight + 50))
    });
  }


/* ----------------------------------------------------------------------------------------
    Sizing a panel taking 2 values and applying some css at different screen sizes
---------------------------------------------------------------------------------------- */

function testingResize(){// This function needs to be called both on load and resize

  var viewportHeight = $(window).height();// finds height of viewport
  var minHeight = Math.floor(viewportHeight);// rounds to nearest pixel
  var navHeight = $('.header').outerHeight(); // finds the height of the header
  var footerHeight= $('.main-footer').outerHeight(); // height of the footer

  $(window).resize(function () { // add in here, or in the list of functions

        if ($(window).width() < 768) {
           // do something
        } else{
          // do something else
        }
        }).resize(); // add in here, or in the list of functions
}

/* ----------------------------------------------------------------------------------------
    Do something on screen resize, adding the resize within the function is possible, but also removing it from here and adding it into the main list at the top of the page when all are called
---------------------------------------------------------------------------------------- */

$(document).ready(function () {

    initUi();
    testingResize()// need's to be called on ready so add to list of functions at the top

    $(window).resize(function() {
        testingResize(); // also called on resize
    }).resize();
})



function resizePage(){
        var videoHeight = $('#video').height();
    $('#home .intro-text').removeAttr('style');
        if(window.innerWidth>1024){
            $('#home .intro-text').css({
                'height':videoHeight+'px',
                'padding-top':(videoHeight *.25)+'px'
            });
        }else{
            $('#home .intro-text').css({
                'padding':'150px 0 100px'
            });
        }
    $('.float-logo').css({left:(window.innerWidth/2-50)});
        var circleWidth = $('.service-strategy .circle').width();
            $('#services .circle').height(circleWidth);
        readyPortfolio();
    }


/* ----------------------------------------------------------------------------------------
    Animate a panel sliding in 
---------------------------------------------------------------------------------------- */

  $("#slide-in").click(function() {
    $(".case-study-detail").animate({ right: '0%' }, 'slow');
    $(".case-study-detail").show();
    $( ".case-study" ).addClass( "fixed-background" );

    setTimeout(function () {
    $(".menu-trigger").addClass("black-menu");
  }, 500);

  });



// This shows a sticky nav after one scroll of the screen

// This is for the sticky navigation, add's a class on one screen scroll
  // and then removes the class when nearer the top
  function initStickyNav(){
    var viewportHeight = $(window).height();// finds height of viewport
    var minHeight = Math.floor(viewportHeight);// rounds to nearest pixel
    
    var  StaticNav = $(".nav");
    fixedNav = "nav--sticky";
    viewport = minHeight;

  $(window).scroll(function() {
    if( $(this).scrollTop() > viewport ) {
      StaticNav.addClass(fixedNav);
    } else {
      StaticNav.removeClass(fixedNav);
    }
  });


  }

/* ----------------------------------------------------------------------------------------
    Animate a panel sliding up from being hidden off page - ie a small tab, when clicked shows all content 
---------------------------------------------------------------------------------------- */

$('.recently-viewed__link').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass("collapsed") ) {
        $(".recently-viewed").animate({bottom: '0'}, 200);
        $(this).removeClass("collapsed");
    } else {
        $(".recently-viewed").animate({bottom: '-200px'}, 200);
        $(this).addClass("collapsed");
    }
    return false;
  });

/*This is set as default with the class on so it animates to show panel on click
    
    <a class="recently-viewed__link collapsed">Recently Viewed</a>

CSS - 

.recently-viewed {
  bottom: -200px; // THIS WILL ANIMATE TO 0 on click
}*/


 //Toggle Show and Hide but only target the one you have clicked, so not all of them show and hide if using more than one, i.e in a list etc

  $(".flight-info__expand").click(function(){
    $(this).siblings(".flight-info__carrier").toggle();
  });

  function initViewMoreSpecification() {
    // click of the button
    $('.specification__view-more').click(function () {
      // all li's after the 6th to toggle and toggle a class of active when expanded
        $('.specification__list__item:nth-of-type(6) ~ li').slideToggle('fast', function () {
            $(this).toggleClass('active');
        });
        // if the li is after the 6th and has a class of active then
        if (!$('.specification__list__item:nth-of-type(6) ~ li').hasClass('active')) {
            // the button says view less if the li has a class of active
            $(this).html('View less');
        } else {
          // if it does not then view more
            $(this).html('View more');
        }

        return false;
    });
}


/* ----------------------------------------------------------------------------------------
    Expand element
---------------------------------------------------------------------------------------- */

$( ".btn--read-more" ).click(function() {
  $( ".slide" ).slideToggle( "fast" );
  if($(this).hasClass('active'))
  {
  $(this).html('More');
  $(this).removeClass('active');
  }
  else
  {
  $(this).html('Less');
  $(this).addClass('active');
  }

  return false;
});


/* ----------------------------------------------------------------------------------------
    Another Method of view more/less
---------------------------------------------------------------------------------------- */

function showMoreAlt(){
   $('#showToggle').click(function(){
    // targets every div after the 4th of .quick-links__item and slides
    $('.quick-links__item:nth-of-type(4) ~ div').slideToggle('slow', function(){
      // if the div has display block then
      if($('.quick-links__item:nth-of-type(4) ~ div').css('display') == 'block'){
        // the button text is view less as it is expanded
        $('#showToggle').text("View less");
      }else{
        // if not then it will need a view more
        $('#showToggle').text("View more");
      }
    });
    return false;
  });



/* ----------------------------------------------------------------------------------------
    Toggle Slide nearest one - no all on click
---------------------------------------------------------------------------------------- */

// html

<div class="product-text__more">
    <a href="#nogo">Read more</a>
</div>

<div class="product-text__full">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
</div>

// js for read more and read less

$( ".product-text__more a" ).click(function() {

    // use this if want to target it within same container, only add one more copy container as all will trigger
    $(this).closest(".product-text__more a").siblings(".product-text__full").slideToggle("fast");

    // this is just next or change to .prev
    $(this).closest(".product-text__more").next(".product-text__full").slideToggle("fast");


      if($(this).hasClass('active'))
        {
          $(this).html('Read More');
          $(this).removeClass('active');
        }
      else
        {
          $(this).html('Read Less');
          $(this).addClass('active');
        }

    return false;
  });


/* ----------------------------------------------------------------------------------------
    CLICK BOX (makes entire 'div'/section clickable to the first link within
---------------------------------------------------------------------------------------- */

  $(".clickBox").click(function(){
       window.location=$(this).find("a").attr("href"); 
       return false;
  });

// html is as follows:

<div class="clickBox">
      <a href="#nogo"></a>
</div>


/* ----------------------------------------------------------------------------------------
    Assign the carousel to only show below 959px
---------------------------------------------------------------------------------------- */

$(function() {
  var slider = null;

    $(window).resize(function() {

        if(Modernizr.mq('(max-width: 959px)')) {
          if (slider == null) {

            slider = $('.destinations__list').bxSlider({
                slideWidth: 225,
                minSlides: 1,
                maxSlides: 4,
                slideMargin: 10,
                pager: false,
                controls: false,
                infiniteLoop: false
            });
          }
        }
        else if (slider != null) {
          slider.destroySlider();
          slider = null;
        }
    }).trigger('resize');

});


/* ----------------------------------------------------------------------------------------
   Simple toggle class
---------------------------------------------------------------------------------------- */

$(".navigation__icon").click(function () {
  $(".navigation__icon").toggleClass('close');
});



$(function() {
 
    $(window).resize(function() {
 
        if(Modernizr.mq('(min-width: 767px)')) {
            // below 767 do something
          }
          else 
          { 
             // else do something else
          }
        }
    }).trigger('resize');
});


/* ----------------------------------------------------------------------------------------
   This closes the Search Icon when clicking on the body, also assigning which elements are allowed to be clicked too.
---------------------------------------------------------------------------------------- */

$("body").click(function()
{
  $('.search-field-wrapper').stop().toggle('slide', {
          direction: 'right'
      }, 300);
});

/* ----------------------------------------------------------------------------------------
  This is how you stop all things being clicked on doing the functions above
---------------------------------------------------------------------------------------- */

$(".search-field-wrapper, .site-search__btn").click(function(e)
{
  e.preventDefault(); // stops any default link
  e.stopPropagation(); // stop the click function below being called if we click in the mega menu or a link
});


/* Guide for Elements
------------------------------ */

// Standard on ready command
$(document).ready(function(){

  // Add a class
  $(".item").addClass("highlighted");

  // add some css
  $("div").css("background-color","#008800");

  // add's 'I love query inside the div
  $('div').html("I love jQuery!");
  
  // gets the value that is stored in the input box
  $('input:checkbox:checked').val();

  // gets the value stored in the input tag and puts in the variable
  var inputReceived = $('input[name=checkListItem]').val();
  
  // add's a p tag with the text below to the container called item
  $(".item").append("<p>This is some text" + inputReceived + "</p>");
  
  // This is used when the page has loaded and new elements have been added
  $(document).on("click", ".item", function(){
    // this is the item that has been clicked
    $(this).remove();
  });

})


// removes the outline on links in IE -->


for(var i=0; i<document.links.length; i++) {
  document.links[i].onfocus = function() {this.blur();};
}