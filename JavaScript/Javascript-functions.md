# Functions

Functions take in values. Do some work and usually return a value.

![](function-definition.jpg)

**Defining the function.**

```javascript
function calculateBill() {
  const total = 100 * 1.13; // only use total in this function
  return total; // allows you to use this outside the func
}
```

**Calling the function**

```javascript
// This will not work
calculateBill("The bill is" + total);
```

You can use the return by either assigning a variable or using backticks

```javascript
// 1 - use a variable
const myTotal = calculateBill();
console.log(myTotal);

// 2 -  use backticks and interpolation
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
