# Functions
**Passing Arguments to a Function**

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
```

