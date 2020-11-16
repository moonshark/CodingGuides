# Vue JS 2 * [Demo on CodePen](https://codepen.io/kmp/full/QWyVbpq)

## Bind Data to the DOM elements

This is done using either `v-bind:href` or the shortened methof of`:href`.

```javascript

new Vue({
  el: "#vue-app",
  data: {
    name: "Christopher",
    job: "Designer",
    website: "https://www.google.com",
    websiteTag: "<a href='https://www.google.com'>Another link</a>",
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + " " + this.name;
    }
  }
});

<div id="vue-app">
  <p>{{ name }}'s' job is {{job}}</p>

  <a :href="website">Using the website property</a>

  <p v-html="websiteTag"></p>

  <input type="text" :value="name">
</div>

```

Using methods to return a result

```javascript

new Vue({
  el: "#vue-app",
  data: {
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + " " + this.name;
    }
  }
});

// Call greet() function within the h1
<p>{{ greet('afternoon') }}</p>

```

***

 ## Two Way Data Binding - <code>v-model=""</code>

 <p>A way to get the value from the input and add into the span. As you add the name and add, it automatically updates the <code>name</code> and <code>age</code> variable</p>

```javascript
 new Vue({
  el: "#vue-app",
  data: {
    name: "Christopher"
  },
});

<label for="name">Name:</label>
<input type="text" id="name" v-model="name">
<span>Entered: {{name}}</span>

```
***

## Events: <code>v-on</code>

<p>You can use <code>v-on:click</code>, <code>v-on:dblclick</code> and so on. The shortened versions are:<code>@:click</code>, <code>@:dblclick</code></p>

```javascript

new Vue({
  el: "#vue-app",
  data: {
    age: 39,
  },
  methods: {
    add: function(inc){
      this.age += inc;
    },
    
    subtract: function(dec){
      this.age -= dec;
    },
  }
});

<button @click="subtract(1)">Subtract a Year</button>
<button @dblclick="subtract(10)">Subtract 10 Years</button>

<p>My age is {{age}}</p>
```
***
## Keyboard events - <code>v-on:keyup.tab</code>

<p>Listening to the user keypress, so inputting in a field as an example. Here is a <a href="https://vuejs.org/v2/guide/events.html#Key-Modifiers" target="_blank">list of ones you can use</a>.</p>

```javascript
new Vue({
  el: "#vue-app",
  data: {
  },
  methods: {    
    logName: function() {
      alert("You entered your name");
    }
  }
});

// This will only fire when you hit the enter key
 <input type="text" id="name" v-on:keyup.enter="logName">
 ```
***
## Dynamic CSS
<p>Dynamically add a class. <code>available = !available</code>, this means on click it will change the available to true and false</p>

```javascript
new Vue({
  el: "#vue-app",
  data: {
    available: false,
  },
  computed: {
    compClasses: function() {
      return {
        available: this.available,
      }
    }
  }
});

<button v-on:click="available = !available">Toggle Available</button>
 ```
***
 ## Conditionals - <code>v-if</code> <code>v-show</code> <code>v-else-if</code>

```javascript
new Vue({
  el: "#vue-app",
  data: {
    error: false,
    success: false,
  },
});

<button v-on:click="error = !error">Toggle Error</button>
<button v-on:click="success = !success">Toggle Success</button>

// If the error data is true, this will show. If it is not it is removed from the DOM
<p v-if="error">There has been an error</p>

// It only checks this if the above is false
<p v-else-if="success">Yes, it worked</p>
```
***
## Looping through lists with <code>v-for</code>

The below loops through each character within the data  property defined in the js called characters

```javascript
new Vue({
  el: "#vue-app",
  data: {
    // Array
    characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
  },
});

<ul>
  <li v-for="character in characters">{{ character }}</li>
</ul>
```

Pull array of objects into a list item. To show the index you would add brackets around the first item and add index to it

```javascript
new Vue({
  el: "#vue-app",
  data: {
    // Array of Objects
    ninjas: [
      { name: 'Ryu', age: 25 },
      { name: 'Yoshi', age: 35 },
      { name: 'Ken', age: 55 }
    ]
  },
});

// You can see that each of these below is in a new div. So lots of code

<div v-for="(ninja, index) in ninjas">
  <h3>{{ index }} .{{ ninja.name }} , {{ ninja.age }} years old</h3>
</div>

 // To prevent a new tag being made, you can change it to be a template
<template>
  <h3>{{ index }} .{{ ninja.name }}, {{ninja.age}} years old</h3>
 </template>

 // First cycling through this array. Then getting the value and the key from each object.

 <template v-for="ninja in ninjas">
    <div v-for="(val,key) in ninja">
        <p>{{ key }} - {{val}}</p>
    </div>
</template>
 ```