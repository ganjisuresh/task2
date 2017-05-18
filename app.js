var app=angular.module("myapp",['ngRoute']);
app.config(["$locationProvider",function($locationProvider){
          $locationProvider.hashPrefix('')
	}])
app.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:"pages/home.html",
		controller:"myHomeController"
	})
	.when("/register",{
		templateUrl:"pages/register.html",
		controller:"MyRegisterController"

	})
	.when("/login",{
		templateUrl:"pages/login.html",
	    controller:"MyLoginController"

	})
}])

app.controller("myHomeController",["$scope",function($scope){
	$scope.message="this is my home controller";
}])
app.controller("MyRegisterController",["$scope",function($scope){
	$scope.message="this is my register controller";
}])
app.controller("MyLoginController",["$scope",function($scope){
	$scope.message="this is my login controller";
}])
