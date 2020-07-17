## Basic Angular App Layout

This is the live demo <https://codepen.io/kmp/pen/qyONVP?editors=1010>

Use the Angular Chrome Plugin.

`<body ng-app="myApp">` // directive
`<div class="main" ng-controller="MainController">` // a controller
`$scope.title = 'The best app ever’;` // an expression

1) **A module contains the different components of an AngularJS app**. This one below is called myApp.

`var app = angular.module("myApp", []);`

2) On the page we added `<body ng-app="myApp">`. The ng-app is called a directive. It tells AngularJS that the **myApp module will live within the <body> element**, termed the application's scope. In other words, we used the ng-app directive to define the application scope.


3) We created a new controller named MainController. **A controller manages the app's data**. Here we use the property title to store a string, and attach it to `$scope`


```javascript
app.controller("MainController", ['$scope', function($scope) {
    $scope.title = 'The best app ever';
    $scope.promo = "Buy one get one free";
    $scope.product = {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08')
    }
  }
]);
```

4) Then we added `<div class="main" ng-controller="MainController">`
Like ng-app, ng-controller is a directive that defines the controller scope. This means that properties attached to $scope in MainController become available to use within `<div class="main">`

5) Inside `<div class="main">` we accessed `$scope.title` using `{{ title }}`.
**This is called an expression. Expressions are used to display values on the page**.

---

## Filters

An example of a filter is from the last demo. The price added in the controller is ’19’. To turn it into a currency value, so this:

``` html
<p class="title">{{ product.name | uppercase }} </p>
<p class="price">{{ product.price | currency }} </p>
<p class="date">{{product.pubdate | date}}</p>
```

---

## Quick Review

* A module contains the different components of an AngularJS app
* A controller manages the app's data
* An expression displays values on the page
* A filter formats the value of an expression

## Loop through array.

Live demo <https://codepen.io/kmp/pen/JBXzyY>

This is like above, but now this loops through an array in the controller instead of just one product.

```javascript

var app = angular.module("myApp", []);

app.controller("MainController", ['$scope',
	function($scope) {
    $scope.title = 'The best app ever';
    $scope.promo = "Buy one get one free";
    $scope.products = [ 
      { 
        name: 'The Book of Trees', 
        price: 19, 
        pubdate: new Date('2014', '03', '08'), 
        cover: 'https://placeimg.com/640/480/animals’,
				likes: 0
      }, 
      { 
        name: 'Program or be Programmed', 
        price: 8, 
        pubdate: new Date('2013', '08', '01'), 
        cover: 'https://placeimg.com/640/480/animals?t=1531818096595’,
				likes: 0
      } 
    ];
		$scope.plusOne = function(index) { 
      $scope.products[index].likes += 1; 
    };
  }
]);
```

In the HTML, we have this: `<div ng-repeat="product in products”`.

ng-repeat is a directive. It loops through an array and displays each element. Here, the ng-repeat repeats all the HTML inside `<div class="col-md-6">` for each element in the products array.

The image tag needs to be `<img ng-src="{{ product.cover }}"> `

``` html
<body ng-app="myApp">
    <div class="main" ng-controller="MainController">
      <div class="container">
        <h1>{{ title }}</h1>
        <h2>{{ promo }}</h2>
         <div ng-repeat="product in products" class="col-md-6"> 
          <div class="thumbnail"> 
            <img src="{{product.cover}}"> 
            <p class="title">{{ product.name }}</p> 
            <p class="price">{{ product.price | currency }}</p> 
            <p class="date">{{ product.pubdate | date }}</p>
            <div class="rating"> 
              <p class="likes" ng-click="plusOne($index)">+ {{product.likes}}</p> 
            </div>
          </div> 
        </div>
      </div>
    </div>

    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>
  </body>
```

### ng-click

In this example, the ng-click makes the likes amount go up when you click it.

```
<p class="likes" ng-click="plusOne($index)">+ {{product.likes}}</p>
```

```
$scope.plusOne = function(index) { 
	 $scope.products[index].likes += 1; 
};
```

The `ng-click` is a directive. When `<p class="likes">` is clicked, `ng-click` tells AngularJS to run the `plusOne() function` in the controller.

The `plusOne() function` gets the index of the product that was clicked, and then adds one to that product's likes property.

Notice that the `plusOne()` doesn't interact with the view at all; it just updates the controller. Any change made to the controller shows up in the view.