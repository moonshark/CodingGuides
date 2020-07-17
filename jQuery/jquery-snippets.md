# Snippets

* [Chaining Events, Delay and SetInterval](#chaining-events)
* [preventDefault(), stopPropagation()](#preventDefault)
* [Most Used](#mostused)
* [Data Attributes](#data-attr)
* [Document Ready/Resize](#doc-ready)
* [Find Closest Element](#closest-element)
* [Moving Elements](#moving-elements)
* [Traversing the DOM](#traversing-the-dom)
* [ClickBox](#clickbox)
* [Sticky Nav after One Scroll of the Page](#sticky-nav)
* [Media Queries](#mq)
* [Sliding Panels off Page on to Page](#sliding-panels)
* [Closing Container when clicking on body but not container](#clicking-anything-other-than)

## Understanding jQuery

### Events

These methods are used to register behaviors to take effect when the user interacts with the browser, and to further manipulate those registered behaviors. e.g.

```javascript
$( ".target" ).toggle(function() {
$( ".target" ).change(function() {
$( ".target" ).click(function() {
$( ".target" ).focus(function() {
$( ".dataTable tbody tr" ).on( "click", function() {
```
Here is more information on events. [https://learn.jquery.com/events/event-basics/](https://learn.jquery.com/events/event-basics/)

To log every click of an `<li>` to the console by using a `.on` instead of `click`

```javascript
<div id="container">
    <ul id="list">
        <li>Item #1</li>
        <li>Item #2</li>
        <li>Item #3</li>
        <li>...</li>
        <li>Item #100</li>
    </ul>
</div>​

$( "#list" ).on( "click", "li", function( event ) {
    var elem = $( this );
    console.log( elem.text() );
});​​​​​​​​​​​​​​​​​​​​​
```

<a name="chaining-events"></a>

Chaining together jQuery actions makes it easy, however, it will not run one after the other. 

```javascript
// Fade in all hidden paragraphs; then add a style class to them (not quite right)
$( "p.hidden" ).fadeIn( 750 ).addClass( "lookAtMe" );
```

The above will add the class as soon as `fadeIn` has run, NOT wating 750ms. To add the class after the `fadeIn` you would use a `setInterval()` loop.

```javascript
// Fade in all hidden paragraphs; then add a style class to them (correct with animation callback)
$( "p.hidden" ).fadeIn( 750, function() {
    // this = DOM element which has just finished being animated
    $( this ).addClass( "lookAtMe" );
});
```

Another way is using `.delay()` like this

```javascript
// Hide all level 1 headings over half a second; then wait for 1.5 seconds
// and reveal all level 1 headings over 0.3 seconds
$( "h1" ).hide( 500 ).delay( 1500 ).show( 300 );
```

### Event Object

The event object in jQuery can be seen [here](https://www.tutorialrepublic.com/jquery-reference/jquery-event-object.php) 

You can find the information inside the object by first naming the object, in this case `e` then , like so:

```javascript
$('#btn').click(function (e) {
   var eventDetails = "Event = " + e.type +  
   "X = " + e.pageX + 
   "Y = " + e.pageY + 
   "Target Type = " + e.target.type + 
   "Target Tag Name = " + e.target.tagName;

     console.log(eventDetails);              
});
```

You can see more possible ways to look at the object data, [here](https://api.jquery.com/category/events/event-object/)

<a name="preventDefault"></a>

Here is an [article](https://medium.com/@jacobwarduk/how-to-correctly-use-preventdefault-stoppropagation-or-return-false-on-events-6c4e3f31aedb) explaining the differences. This is a demo of [how stopPropagation() works](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_stoppropagation)


## event.preventDefault()

Prevents the browsers default behaviour (such as opening a link), but does NOT stop the event from bubbling up the DOM.

```javascript
a.addEventListener('click', (event) => {
  event.preventDefault();
  fileUpload();
});
```

## event.stopPropagation()

Prevents the event from bubbling up the DOM, but does NOT stop the browsers default behaviour.

To also make sure only the click event occurs on the '<a>' and nothing else, we would add in 'stopPropagation()'

```javascript
a.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  fileUpload();
});
```

## return false;

Usually seen in jQuery code, it Prevents the browsers default behaviour, Prevents the event from bubbling up the DOM, and immediately Returns from any callback.

```javascript
a.addEventListener('click', (event) => {
  fileUpload();
  return false;
});
```

## Using preventDefault() and stopPropagation()

This is how you stop all things being clicked on doing the functions above

```javascript
$(".btn").click(function(e)
{
  e.preventDefault(); // stops any default link
  e.stopPropagation(); // stop the click function below being called if we click in the mega menu or a link
});
```

<a name="mostused"></a>

## Most Used

This rounds a value to the nearest pixel.
```javascript
var minHeight = Math.floor(viewportHeight);
```
This finds the height of an element
```javascript
var navHeight = $('.header').outerHeight();
```
 Find the width of the browser window.
```javascript
var browserWidth = window.innerWidth;

if (browserWidth < 1024) {
  // do something
}
```
 Check to see if a element is on the page. If it is, do something.
```javascript
var playIcon = $('.hero__play');

if(playIcon.length) {
    // do something here
}  
```

Toggle a Class on Click
```javascript
$(".navigation__icon").click(function () {
  $(".navigation__icon").toggleClass('close');
});
```

Toggle with direction 
```javascript
$('.search-field-wrapper').stop().toggle('slide',{
    direction: 'right'
  }, 300);
```

Toggle specific element
```javascript
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
```

Add a Class
```javascript
$(".item").addClass("highlighted");
```
Add some CSS
```javascript
$("div").css("background-color","#008800");
```
Add HTML inside a div
```javascript
$('div').html("I love jQuery!");
```
Remove an attribute from an element
```javascript
$('#home .intro-text').removeAttr('style');
```
Toggle - Show/Hide Element
```javascript
$(this).siblings(".flight-info__carrier").toggle();
```
Gets the value of a checkbox
```javascript
$('input:checkbox:checked').val();
```
Add's a p tag with the text below to the container called item
```javascript
$(".item").append("<p>This is some text" + inputReceived + "</p>");
```
This is used when the page has loaded and new elements have been added
```javascript
$(document).on("click", ".item", function(){
    // this is the item that has been clicked
    $(this).remove();
});
```
Remove the outline of links in IE
```javascript
for(var i=0; i<document.links.length; i++) {
  document.links[i].onfocus = function() {this.blur();};
}
```

Use event to target an element

```javascript
$('.spoiler').on('click', 'button', function(event){
  console.log(event); // see what info is on the clicked elements
  console.log(event.target); // use .target to see WHICH element code is clicked
   // instead of $('spoiler span').hide(); this one hides only the clicked element, ideal if there are a few buttons that are clicked
   $(event.target).hide(); // hides the clicked button, see below
 //  or
   $(this).hide();
})
```

Expand element
```javascript
$( ".btn--read-more" ).click(function() {
    $( ".slide" ).slideToggle( "fast" );

    if($(this).hasClass('active')) {
      $(this).html('More');
      $(this).removeClass('active');
    } else {
      $(this).html('Less');
      $(this).addClass('active');
    }

    return false;
});
```

Another Method of view more/less

```javascript
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
```
```html
<div class="product-text__more">
    <a href="#nogo">Read more</a>
</div>

<div class="product-text__full">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
</div>
```

<a name="data-attr"></a>

## Use Data Attributes instead of an ID or Class

```javascript
$('[data-role="open-burger-nav"]').click(function () {
```

```html
<a href="#" data-role="open-burger-nav" class="ui-burger">
```

<a name="doc-ready"></a>

## Document Ready/Resize

This is how to apply a document ready.

```javascript

$(document).ready(function() {

});
```

This is also the shorthand method

```javascript
$(function() {

});
```


This will apply different events at different sizes.

```javascript
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
```

This is to add the resize to the list of functions
```javascript
$(document).ready(function () {
    initUi();
    testingResize()// need's to be called on ready so add to list of functions at the top

    $(window).resize(function() {
        testingResize(); // also called on resize
    }).resize();
})
```
* A codepen example of this can be found [here](https://codepen.io/kmp/pen/mAOmVp)

<a name="closest-element"></a>

## Find the Closest Element

```javascript
function initExpandOptions() {
  $("[data-option-expand]").click(function(e) {
      e.preventDefault(); // stop the default action for click
      // when clicked find the closest 'data-option-container which is the parent and then find the container I want to expand up and down'
       $(this).closest("[data-option-container]").find("[data-option-content]").slideToggle("fast");
  });
}
```

This is the HTML for the above:

```html
<div class="booking__actions" data-option-container> // This is the parent container it looks for
    <ul class="booking__actions-options">
            <li>
                  <a href="#" data-option-expand>Click to open</a> // This is the clicked element
            </li>
      </ul>
      <ul data-option-content> // This will expand and close
            <li>...
```

Here is another way of getting the closest element, but using .hover

```javascript
$(".container").hover(function () {
    // Find closest container , then find the .page-copy tag within, then slide
  $(this).closest(".container").find(".page-copy").slideToggle("fast");
});
```

<a name="moving elements"></a>

## Moving Elements

Move to the bottom of an element

```javascript
var tweet = '<div>Hello</div>';
$(‘#tweets).append(tweet);
```

```html
<section id=“tweets”>
  <h2>Latest Tweets</h2>
  <p>Here are the tweets</p>
  <div>Hello</div>
</section>
```

Move to the top of an element

```javascript
$(‘#tweets).prepend(tweet);
```

```html
<section id=“tweets”>
  <div>Hello</div>
  <h2>Latest Tweets</h2>
  <p>Here are the tweets</p>
</section>
```

Put before the element

```javascript
$(‘#tweets).before(tweet);
```

```html
<div>Hello</div>
<section id=“tweets”>
  <h2>Latest Tweets</h2>
  <p>Here are the tweets</p>
</section>
```

Put after the element

```javascript
$(‘#tweets).after(tweet); 
```

```html
<section id=“tweets”>
  <h2>Latest Tweets</h2>
  <p>Here are the tweets</p>
</section>
<div>Hello</div>
```

changes the whole html of the element

```javascript
$(‘#tweets p).html(tweet);
```

```html
<section id=“tweets”>
  <h2>Latest Tweets</h2>
  <p><div>Hello</div></p>
</section>
```

changes the text inside the element

```javascript
$(‘#tweets p).text(‘Hello’);
```

```html
<section id=“tweets”>
  <div>Hello</div>
  <h2>Latest Tweets</h2>
  <p>Hello</p>
</section>
```

<a name="traversing-the-dom"></a>

## Traversing the DOM
Find the next element

```javascript
$(‘.contact’).next().css("background", "red");
```
Find the element before

```javascript
$(‘.contact’).prev().css("background", "red");
```
Targets the parent of .contact

```javascript
$(‘.contact’).parent().css("background", "red");
```
Find the elements inside .contact

```javascript
$(‘.contact’).children().css("background", "red");
```
Finds and element within .contact _(quicker than $(‘.contact .facebook’)_

```javascript
$(‘.contact’).find(‘.facebook’).css("background", "red");
```
Moves up the DOM to target the closest parent `<section>`
```javascript
$(‘.contact’).closest(‘section’).css("background", "red");
```
<a name="clickbox"></a>

## ClickBox is a way to make an element clickable without having it set an an '<a>'
```javascript
$(".clickBox").click(function(){
     window.location=$(this).find("a").attr("href"); 
     return false;
});
```

```html
<div class="clickBox">
    <a href="#nogo"></a>
</div>
```

<a name="sticky-nav"></a>

## Sticky Nav after One Scroll

```javascript
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
```
There is also an [example of this](https://codepen.io/collection/XQdYeP/) on CodePen (not a page scroll)

<a name="mq"></a>

## Media Queries Targetting

Finds the height of the viewport
```javascript
var viewportHeight = $(window).height();// finds height of viewport
```

Targetting a specific media query

```javascript
 if (window.matchMedia("(min-width:769px)").matches) {
    document.write('<script src="js/pikaday.min.js.gz"><\/script>')
}
```

Basic version

```javascript
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
```


Assign the carousel to only show below 959px using Modernizr

```javascript
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
```



<a name="sliding-panels"></a>

## Sliding Panels off Page on to Page

Animate a panel sliding up from being hidden off page - ie a small tab, when clicked shows all content 

```javascript
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
```
```html
<a class="recently-viewed__link collapsed">Recently Viewed</a>
```

```CSS
.recently-viewed {
  bottom: -200px; // THIS WILL ANIMATE TO 0 on click
}
```

Another method is:

```javascript
$("#slide-in").click(function() {
  $(".case-study-detail").animate({ right: '0%' }, 'slow');
  $(".case-study-detail").show();
  $( ".case-study" ).addClass( "fixed-background" );

  setTimeout(function () {
  $(".menu-trigger").addClass("black-menu");
}, 500);

});
```

<a name=“clicking-anything-other-than”></a>

## Clicking on the body to close a div, but not when clicking a specific container

````
function initCloseBookingStrip() {
// Use a flag so we can avoid the eventPropagation behaviour. By default we set it to false, unless you click inside the pane where we set it true.  We then only do the hiding behaviour if the flag is still set to false as we know they must have clicked outside the pane

var insidePane = false;
		
$('.booking-module').click(function(event) {
   insidePane = true;
});		
		
$(window).click(function() {
	if (!insidePane){
		$('.booking-module__panel').hide();
		} else {
		insidePane = false;
	}
});
}
````