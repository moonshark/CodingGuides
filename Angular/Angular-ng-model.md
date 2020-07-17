## Angular - 2 Way Bindings

Example is here <https://codepen.io/kmp/pen/LBLmXv>

`ng-model` allows us to bind values to HTML elements such as input fields. When using ngModel, not only are changesin the scope reflected in the view, but changes  in the view are reflected back into the scope.

`<input type="text" ng-model="favoriteWord" />`

`ng-model` takes an expression which is almost always the name of the $scope field to which we want to bind our element.

Once the values are bound, the double curly brace syntax displays each value.

The JS is like this:

```
angular.module("root", [])
    .controller("index", ["$scope", function($scope) {
        $scope.favoriteWord;
        $scope.favoriteColor;
        $scope.favoriteShape;
}]);
```

The HTML is like this for an input tag, it will show what you enter in the `{{favouriteWord}}`
```
<body ng-app="root">
	<div ng-controller="index">
		<input type="text" ng-model="favouriteWord" />
   {{favouriteWord}}
	</div>
</body>
```

On Radio buttons or checkboxes the `ng-model` needs adding on each selection, like this:

```
<body ng-app="root">
	<div ng-controller="index">
		<input type="radio" name="fc" value="Red" ng-model="favoriteColor">Red</input>
		<input type="radio" name="fc" value="Green" ng-model="favoriteColor">Green</input>
		{{favoriteColor}}
	</div>
</body>
```

A select box is different, just add `ng-model` to the `<select>` tag and **not each `<option>`**.

```
<body ng-app="root">
<div ng-controller="index" class="container">
		<select ng-model="favoriteShape">
			<option value="Circle">Circle</option>
			<option value="Triangle">Triangle</option>
		</select>
		{{favoriteShape}}
</div>
</body>

```