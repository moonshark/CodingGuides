## Angular Routing

Routes let us map URLs to self-contained controllers and templates. 


- Directives are a way to make standalone UI components, like `<app-info>`
- Services are a way to make standalone communication logic, like `forecast` which fetches weather data from a server
- Routes are a way to manage apps containing more views.

An example of the below is: <https://codepen.io/kmp/pen/yqVLeP>

So far we've made AngularJS apps that display data in a single view index.html. But what happens when the app grows and needs to display more information? Stuffing more code to a single view will quickly make things messy.

A better solution is to use multiple templates that display different pieces of data based on the URL that the user is visiting. We can do this with Angular's application routes.

First, add a code tag like this where the content will be changing:

	<div ng-view></div>

1) `app.config()` method, we use Angular's `$routeProvider` to define the application routes.

	app.config(function ($routeProvider) { 
	  $routeProvider 
	    .when('/', { 
	      controller: 'HomeController', 
	      templateUrl: 'views/home.html' 
	    }) 
		.when('/photos/:id', {
		    controller: 'PhotoController',
		    templateUrl: 'views/photo.html'
		 })
	    .otherwise({ 
	      redirectTo: '/' 
	    }); 
	});


2) We used `.when()` to map the URL `/` to to the controller `HomeController` and the template `home.html`. We added a variable part named id to the URL, like this: `/photos/:id`.

3) Otherwise if a user accidentally visits a URL other than `/`, we just redirect to `/` using `.otherwise()`.

4) Now when a user visits `/`, a view will be constructed by injecting `home.html` into the `<div ng-view></div>` in *index.html*.

## templateUrl: 'views/home.html
The `home.html` uses `ng-repeat` to loop through each item in the `photos` array and display each photo.

	<div class="item col-md-4" ng-repeat="photo in photos">
	   <a href="#/photos/{{$index}}">
	      <img class="img-responsive" ng-src="{{ photo.url }}">
	      <p class="author">by {{ photo.author }}</p>
	   </a>
	</div>

## controller: 'HomeController'
The `HomeController` uses the service **js/services/photos.js** to fetch the array of all photos from <https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json> and stores it into `$scope.photos`.

	app.factory('photos', ['$http', function($http) {
	  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
	         .success(function(data) {
	           return data;
	         })
	         .error(function(data) {
	           return data;
	         });
	}]);

	app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
		  photos.success(function(data) {
		    $scope.photos = data;
		  });
		}]);

## controller: ‘PhotoController’

	.when('/photos/:id', {
        controller: 'PhotoController',
        templateUrl: 'views/photo.html'
     })

`PhotoController`, we used Angular's `$routeParams` to retrieve id from the URL by using `$routeParams.id`. Notice that we injected both `$routeParams` and the `photos` service into the `PhotoController` dependency array to make them available to use inside the controller.

	app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
	  photos.success(function(data) {
	    $scope.detail = data[$routeParams.id];
	  });
	}]);


Then to fetch an individual photo, we first used the `photos` service to fetch the array of photos from the server, and then used `$routeParams.id` to access the specific photo by its index.

As before, any properties attached to `$scope` become available to use in the view. This means in **photo.html**, we can display the photo's `detail` using expressions as done before.

	<div class="photo">
	  <div class="container">
	    <img ng-src="{{ detail.url }}">
	    <h2 class="photo-title"> {{detail.title}}</h2>
	    <p class="photo-author"> {{detail.author}}</p>
	    <p class="photo-views">{{detail.views | number}} </p>
	    <p class="photo-upvotes">{{detail.upvotes | number}} </p>
	    <p class="photo-pubdate">{{detail.pubdate | date}} </p>
	  </div>
	</div>
