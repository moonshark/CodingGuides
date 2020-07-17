## ng-click

The demo is here: <https://codepen.io/kmp/pen/oMedXq?editors=1010>

The template uses Angular's built-in `ng-click` directive. When the button is clicked, `ng-click` will tell AngularJS to run the `download()` function in the directive.

The `download()` function uses the `scope.installed` property to check if an app is installed. When an app is installed, `download()` does three things:

toggles the `.btn-active` class
changes the button text to "Uninstall"
changes `scope.installed` to `true`

	app.directive('installApp', function() { 
		  return { 
		    restrict: 'E', 
		    scope: {}, 
		    templateUrl: 'js/directives/installApp.html',
	      link: function(scope, element, attrs) { 
	        scope.buttonText = "Install", 
	        scope.installed = false, 
	
	        scope.download = function() { 
	          element.toggleClass('btn-active'); 
	          if(scope.installed) { 
	            scope.buttonText = "Install"; 
	            scope.installed = false; 
	          } else { 
	            scope.buttonText = "Uninstall"; 
	            scope.installed = true; 
	          } 
	        } 
	      }
		  }; 
		});

The code inside **installApp.html** is:

	<button class="btn btn-active" ng-click="download()"> 
	  {{ buttonText }} 
	</button>

Included in the HTML like:

	<install-app></install-app>