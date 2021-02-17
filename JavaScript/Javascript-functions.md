# Functions

Functions take in values. Do some work and usually return a value.

![](function-definition.jpg)

```javascript
// Defining the func
function calculateBill() {
  const total = 100 * 1.13;  // variable only available in the func
  console.log(total);
  return total; // allows you to use this outside the func
}

// This will NOT work
calculateBill("The bill is" + total);

//  1- To use the return you either, add to a variable
const myTotal = calculateBill();
console.log(myTotal);

// 2 -  use backticks
console.log(`Your bill is £${calculateBill()});
```

<!-- **Passing Arguments to a Function**

```javascript
function sayGreeting(greeting) {
  var response = prompt("What is your name?");
  alert(greeting + ", " + response);
}

sayGreeting("Have a Good Day");
// The above passes in 'Have a good day to the alert'
```

**Return a value from a function**

```javascript
function add(a,b) {
  return a + b; // this returns the result
}
console.log( add(20,30) );
console.log( add(120,300) );
``` -->
