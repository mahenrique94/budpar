angular.module('budpar', ['ngAnimate', 'ngResource', 'ngRoute']).config(function($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
    
    $routeProvider.when('/budgets', {
        templateUrl : 'partials/budget/list.html',
        controller : 'BudgetController'
    });
   
    $routeProvider.when('/budget', {
       templateUrl : 'partials/budget/form.html',
       controller : 'BudgetController' 
    });
   
    $routeProvider.when('/budget/:budgetId', {
       templateUrl : 'partials/budget/form.html',
       controller : 'BudgetController' 
    });
    
    $routeProvider.when('/login', {
       templateUrl : 'partials/login/form.html',
       controller : 'LoginController' 
    });
   
    $routeProvider.otherwise({redirectTo : '/budgets'});
});