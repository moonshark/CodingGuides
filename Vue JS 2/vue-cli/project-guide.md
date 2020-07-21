# Understanding Vue JS

Within the main.js file you see the following. The `render` is for the root component `App` that is importing and rendering the contents to `#app`. This is just creating a new vue instance.

``` javascript
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
```

There is a template already setup, and this is called `app.vue`

Within the `app.vue` file delete the CSS, Name in script file and all other HTML it adds in as default.

# Importing the Vue Component to the main.js

## Registering Globally

In the **main.js** file you include the new component. First the name of the component 'Ninjas' is used. Then the object we need. The object is inside of ninjas.vue.

**main.js**

``` javascript
import Ninjas from './Ninjas.vue'

// ninjas is the new HTML tag we can use. Ninjas is the call for the above
Vue.component('ninjas', Ninjas);
```

## Registering Globally 
Instead of globally you can also register locally. You would do this by not including any of the import statements in the main.js. Instead, you would do something like:

``` html
<template>
  <div>
      <h1>{{ title }}</h1>
      <!-- Can use a HTML type tag as using it here Vue.component('ninjas' -->
      <ninjas></ninjas>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Ninja App'
    }
  }
}

// To register locally you would just do the following:
import NInjas from './Ninjas.vue'
export default {
  components: {
    'ninjas' : NInjas
  },
  data () {
    return {
      title: 'Ninja App'
    }
  }
}
</script>
```

# Import another component

To create a new component make another `.vue` file. Duplicate the content from the ready made one and amend. In this example I have made **Ninjas.vue**.

There can only be one root component within a `<template>` so, you need to include a `<div>` to wrap all code.

This is cycling through the `ninjas` and outputting on the screen.

**Ninjas.vue**

``` html
<template>
  <div>
    <h1>List of Ninjas</h1>
    <ul>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu']
    }
  }
}
</script>
```

Inside of **App.vue** you can include this new component by using just the new HTML tag. Can use a HTML type tag as using it here Vue.component('ninjas'..

**App.vue**

``` html
<template>
  <div>
      <h1>{{ title }}</h1>
      <ninjas></ninjas>
  </div>
</template>
```

# Register Vue Component
To register Globally, first you include the name of the component which is `'Ninjas'`. Then the object we need. The object is inside of `ninjas.vue`.

``` javascript
Vue.component('ninjas', Ninjas);
```

# Add CSS Scope

You can add CSS as usual but if you want only the CSS specific to a component you would do the following. This just means ONLY the H1 within this template will use the green colour.

``` css
<style scoped>
  h1 {
    color: green;
  }
</style>
```

When inspecting the code in Chrome it adds attributes on the h1 like this rather than adding style:

``` html
<h1 data-v-7ba5bd90="">Ninja App</h1>
```