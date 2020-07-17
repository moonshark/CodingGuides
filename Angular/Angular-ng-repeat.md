## Repeaters

`ng-repeat` gives you the power to define a template for a single item in a collection, and then have it be repeated for all the elements in a collection.
  
  `<tr ng-repeat=“product in products”>`
  
Where `products` is a collection in scope and `product` is a variable used to reference each element throughout the iteration. ‘products’ is classed as being an iterable. It is good practice to use a singular option of the `$scope.products` value you create, in this case ‘product’

The JS is like this:

```
angular.module("root", [])
    .controller("index", ["$scope", function($scope) {
        $scope.products = [
          {id: 1, name: "Hockey puck"},
          {id: 2, name: "Golf club"},
          {id: 3, name: "Baseball bat"},
          {id: 4, name: "Lacrosse stick"}
        ];
}]);
```

The HTML is:

```
<body ng-app="root">
	<div ng-controller="index" class="container">  
	  <table>
		<tr ng-repeat="product in products" ng-class="{oddRow: $odd}">
			<td>{{product.id}}</td>
			<td>{{product.name}}</td>
		</tr>
	  </table>
	</div>
</body>
```

This will output everything in the array and also add a class to each odd row in the list.