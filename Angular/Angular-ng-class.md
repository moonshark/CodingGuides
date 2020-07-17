## Binding CSS classes - ng-class

This is the demo <https://codepen.io/kmp/pen/LBLmXv>

Angular lets us bind scope values to input fields, it also allows us to bind scope values as class names to HTML elements.
  
`ng-class` - bind a CSS class to an HTML element. Takes as input an expression which must evaluate to one of the following.

- A string of space-delimited class names.
- An array of class names.
- A map (object) where the keys are class names and the values are boolean values indicating whether or not to apply the class.

The JS would be like this:

```
angular.module("root", [])
    .controller("index", ["$scope", function($scope) {
        $scope.value = 1;
        $scope.isBold = function () {
			return $scope.value % 2 === 0;
		};
        $scope.isItalic = function () {
			return $scope.value % 3 === 0;
		};
        $scope.isUnderlined = function () {
			return $scope.value % 5 === 0;
		};
}]);
```

The HTML is like this, this will change the font style depending on what you enter, so if you enter 2, 4, 6 etc it is bold, 3, 6, 9 etc would be italic and 5,10,15 etc would be underlined.

```
<body ng-app="root">
	<div ng-controller="index" class="container">  
	  <input type="text" ng-model="value" />
	  <span ng-class="{bold: isBold(), italic: isItalic(), underline: isUnderlined()}">Example Text</span>
	</div>
</body>
```