# Objects

Consist of properties - a variable and a method - something that can be done. You assign objects by using curly braces. An object has properties and methods. Almost everything is an object in JavaScript, including Arrays.

A good explanation is:

> Imagine you have two pocket folders with several slots each where you store your papers. Each slot on the first pocket folder is labeled 1,2,3,4, etc. Each slot on the second pocket folder is labeled "Bills to pay", "Gas receipts", "Medical receipts", etc. If you call home you would tell your brother/sister to "get the document out of pocket number 3". Or, if on the other folder, "You will find the receipt on the pocket labeled "Medical receipts". The numeric folder is an array or you can also call it an "ordered list" because it is numerically ordered. We know it is an array when its values are surrounded by [ ]. The labeled folder is what you call an object but its real name is "unordered list" or "hash". We know it is an unordered list if it has labels and it is surrounded by { }

```javascript
var movie = {
  title: 'Wonder Woman', 
  time: '2pm',
  cost: '£4.00'
}
alert( movie.title );
// this shows the movie title 'Wonder Woman'
```

you can change the value by doing this, which will show an alert of 'Avengers'

```javascript
alert( movie.title  = 'Avengers');
```

add a new property to the movie object, you would do this:

```javascript
movie.status = "Unavailable";
```

This would now be:

```javascript
var movie = {
  status: "Unavailable"
  title: 'Wonder Woman', 
  time: '2pm',
  cost: '£4.00'
}
	
console.log(movie); // this will show all the propertie and values in the object.
```

Common to combine array with objects to arrays, add objects to an array.

```javascript
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
```

Loops through the above to check status

```javascript
for (var movie of movies) {
  if ( movie.status === 'available' ) {
    // If the value of status is available then it will do this
    console.log("The movie" + movie.title + " plays at" + movie.time);
  }
}
```

A cleaner way of doing the above is using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), so no need for lots of quotes and plus signs, just use back ticks. Like so:

```javascript
for (var movie of movies) {
  if ( movie.status === 'available' ) {
    console.log(`The movie ${movie.title} plays at ${movie.time}`);
  } else {
    console.log(`Sorry, the movie ${movie.title} is sold out`); 
  }
}
```