Vue.component('vue-prism-editor', VuePrismEditor)
new Vue({
    // Element on the page this instance is going to control
    el: "#vue-app",
    data: {
        name: "Christopher",
        age: 39,
        job: "Designer",
        website: "https://www.google.com",
        websiteTag: "<a href='https://www.google.com'>Another link</a>",
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        error2: false,
        success2: false,
        // Array
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        // Array of Objects
        ninjas: [{
                name: 'Ryu',
                age: 25
            },
            {
                name: 'Yoshi',
                age: 35
            },
            {
                name: 'Ken',
                age: 55
            }
        ],
        health: 100,
        ended: false,
        output: 'Your fav food'
    },
    methods: {
        // Use the value entered in the HTML and return here.
        greet: function(time) {
            return 'Good ' + time + " " + this.name;
        },

        add: function(inc) {
            this.age += inc;
        },

        subtract: function(dec) {
            this.age -= dec;
        },

        updateXY: function(event) {
            // Access event object
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert("You Clicked me");
        },
        logName: function() {
            alert("You entered your name");
        },
        logAge: function() {
            alert("You entered your age");
        },
        punch: function() {
            this.health -= 10; // Takes off 10
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function() {
            this.health = 100; // Back to 100%;
            this.ended = false // Resets back to false
        },
        readRefs: function() {
            // Log all the refs on the page when it is ran
            console.log(this.$refs);

            // Update the ouput data with the value
            this.output = this.$refs.input.value;

            // Find the refs for the div.
            console.log("The inner text of the div is " + this.$refs.test.innerText);
        }
    },
    computed: {
        addToA: function() {
            // Return a age with a added to it
            return this.a + this.age;
        },
        addToB: function() {
            return this.b + this.age;
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});



// Making a re-usable component. 1st parameter is the name, 2nd is the output.
Vue.component('greeting', {

    // Add a button to run the function when you hit the button
    template: '<p>Hey there, I am {{name}}. <button v-on:click="changeName">Change Name</button></p>',

    // Data MUST be a function so when used on multiple instances, when you change
    // the name, it will only change on that one and not all of them
    data: function() {
        return {
            name: 'Mo Salah'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Sadio Mane';
        }
    }
});

var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'
    },
    methods: {
        changeTitle: function() {
            one.title = 'This has been changed';
        }
    }
});

// Changing outside of the vue will mean it automatically does this.
// two.title = 'Changed from outside';