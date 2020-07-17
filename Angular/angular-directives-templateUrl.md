##  Angular App using Directives

Why is creating your own directives useful?

1) **Readability.** Directives let you write expressive HTML. Looking at index.html you can understand the app's behavior just by reading the HTML.
2) **Reusability.** Directives let you create self-contained units of functionality. We could easily plug in this directive into another AngularJS app and avoid writing a lot of repetitive HTML.

This is the live demo <https://codepen.io/kmp/pen/OwXGJZ?editors=1010>

	<body ng-app="AppMarketApp">
	    <div class="main" ng-controller="MainController">
	      <div class="container">
	         <div class="card"> 
	          <app-info info="move"></app-info> 
	        </div>
	        <div class="card"> 
	          <app-info info="shutterbugg"></app-info> 
	        </div>
	      	<div class="card"> 
	          <app-info info="gameboard"></app-info> 
	        </div>
	      </div>
	    </div>
	</body>

We wrote code to teach the browser a new HTML element `<app-info>`, and used it in the view to display each app's details.

First in **js/directives/appInfo.js**, we made a new directive. We used `app.directive` to create a new directive named `’appInfo’`. It returns an object with three options:

	app.directive('appInfo', function() { 
	  return { 
	    restrict: 'E', 
	    scope: { 
	      info: '=' 
	    }, 
	    templateUrl: 'js/directives/appInfo.html' 
	  }; 
	});

* `restrict` specifies how the directive will be used in the view. The `’E’` means it will be used as a new HTML element.

* `scope` specifies that we will pass information into this directive through an attribute named `info`. The `=` tells the directive to look for an attribute named `info` in the `<app-info>` element, like this:
 ```<app-info info="shutterbugg"></app-info>```

The data in `info` becomes available to use in the template given by `templateURL`.

* `templateUrl` specifies the HTML to use in order to display the data in `scope.info`. Here we use the HTML in js/directives/appInfo.html.

Looking at **js/directives/appInfo.html**, we define the HTML to display details about an app, like its title and price. We use expressions and filters to display the data.

	<img class="icon" ng-src="{{ info.icon }}"> 
	<h2 class="title">{{ info.title }}</h2> 
	<p class="developer">{{ info.developer }}</p> 
	<p class="price">{{ info.price | currency }}</p>

Then in **index.html** we use the new directive as the HTML element `<app-info>`. We pass in objects from the controller's scope `($scope.shutterbugg)` into the `<app-info>` element's `info` attribute so that it displays.
`<app-info info="shutterbugg"></app-info>`

##Built-in and Custom Directives
AngularJS comes with a few built-in directives, like `ng-repeat` and `ng-click`.

AngularJS makes it possible to create your own custom directives, such as `<app-info>`.

We can use Angular's built-in directives together with custom directives to create more readable apps.

## ng-repeat

For reference, here's how to use `ng-repeat`:

	<div ng-repeat="product in products">
	  <img ng-src="{{ product.cover }}">
	  <p class="title">{{ product.name }}</p>
	</div>

Here is another way of using it:

	<div class="card" ng-repeat="app in applications"> 
	    <app-info info="app"></app-info> 
	 </div>

The above is using the following, with the `app` being the variable declared right at the top and the `applications` being the `$scope.applications`:

	var app = angular.module('AppMarketApp', []);
	
	app.controller('MainController', ['$scope', function($scope) {
	  $scope.applications = [ 
	    { 
	      icon: 'https://placeimg.com/200/280/nature', 
	      title: 'MOVE', 
	      developer: 'MOVE, Inc.', 
	      price: 0.99
	    }, 
	    { 
	      icon: 'https://placeimg.com/200/280/nature', 
	      title: 'Shutterbugg', 
	      developer: 'Chico Dusty', 
	      price: 2.99
	    }
	  ]
	}]);


