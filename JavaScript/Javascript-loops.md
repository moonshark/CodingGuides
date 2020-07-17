#  Javascript  Loops

**for each** - accesses each item in an array

```javascript
//variable name, then each movie	
movies.forEach(function(movie){
  alert(movie); // show each movie within the array
});
```

another way of doing it is using the new arrow syntax  (=>). This is a new, shorter syntax for writing functions in JavaScript.

```javascript
movies.forEach( movie => alert(movie) );
```

**for/of loops**

For loops are frequently used for actions that need to run a particular number of times. The for loop consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by the code that should run each time the condition remains true.

```javascript
const fruits = ['apple', 'pear', 'cherry'];

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
// logs apple, pear, cherry
```

**while**
The while loop repeats a block of JavaScript code until a particular condition is no longer true. For example, in this code, we start with a variable named counter. At the beginning of the loop, the JavaScript interpreter compares the value in the counter variable to 10. If the value inside counter is less then 10, the loop runs.

The loop logs the value inside the counter variable to the console, then increases the value inside counter by 1. After going through the loop 10 times, the counter value is set to 10, the condition is false and the loop is done.

```javascript
var counter = 1;
while (counter < 10 ) {
  console.log( counter );
  counter = counter + 1;
}
```
**do...while**
The do...while loop is closely related to the while loop. do...while creates a loop that executes a statement until the test condition evaluates to false.

The main difference between while and do...while is that do...while doesn't check the condition until the code block has run once. Then, if the condition is true, it runs again...and again...until the condition is no longer true.

```javascript
var counter = 1;
do {
  counter = counter + 1;
  console.log( counter );
} while (counter < 10);
```

**map()**
The map() array iteration method is used to transform each item in an array into something else, leaving the original array unchanged. For example, this code will capitalize all the words within the fruits array:

```javascript
const fruits = ['apple', 'pear', 'cherry'];

const capitalizedFruits = fruits.map( fruit => fruit.toUpperCase() );
console.log(capitalizedFruits);
// [ 'APPLE', 'PEAR', 'CHERRY' ]
```