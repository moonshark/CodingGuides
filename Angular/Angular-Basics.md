# Angular Basics
Angular applications at their most basic consist of three components. The template, the scope, and the controller are the three main building blocks of an Angular web application

```
<html ng-app="root">
    <body>
        <div ng-controller="index">{{message}}</div>
    </body>
</html>
```

### The Template (view)
The template is the **HTML portion of the app**. Templates contain additional syntax which allows data to be injected into them. Angular data can be injected, modified and removed from templates without ever requiring a page refresh. 

### The scope (model)

The scope is a very important. **The scope is the object that represents the "model" of your applicatio**n. It contains fields that store data which is presented to the user via the template, as well as functions which can be called when the user performs certain actions such as clicking a button.

```
angular.module('root', [])
  .controller("index", ["$scope", function ($scope) {
      $scope.message = "Hello World!";
}]);
```

### The controller

The controller plays somewhat of a supporting role in Angular applications. The **controller is a function which generally takes an empty scope object as a parameter and adds to it the fields and functions** that will be later exposed to the user via the view.

## An Angular App at its most basic level.

```
<body ng-app="root">
   <div ng-controller="index">{{message}}</div>
</body>
```

 1) define module and name it 'root'. 
    angular.module("root", [])
 2) Declare Controller
```
.controller("index",["$scope", function($scope){
```
3) Define a variable named message which will contain the string Hello World!
```
$scope.message = "Hello World";
```

Altogether will look like:

```
angular.module("root", [])
  .controller("index",["$scope", function($scope){
     $scope.message = "Hello World";
}]);
```
