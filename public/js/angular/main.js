angular.module('budpar', ['ngAnimate', 'ngResource', 'ngRoute']).config(function($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
    
    $routeProvider.when('/orcamentos', {
        templateUrl : 'partials/orcamento/lista.html',
        controller : 'OrcamentoController'
    });
   
    $routeProvider.when('/orcamento', {
       templateUrl : 'partials/orcamento/formulario.html',
       controller : 'OrcamentoController' 
    });
   
    $routeProvider.when('/orcamento/:orcamentoId', {
       templateUrl : 'partials/orcamento/formulario.html',
       controller : 'OrcamentoController' 
    });
    
    $routeProvider.when('/login', {
       templateUrl : 'partials/login/formulario.html',
       controller : 'LoginController' 
    });
   
    $routeProvider.otherwise({redirectTo : '/orcamentos'});
});