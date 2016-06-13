angular.module('budpar').factory('TokenInterceptor', function($q, $location, $window) {
   var interceptor = {};
   
   interceptor.request = function(config) {
       config.headers = config.headers || {};
       if ($window.sessionStorage.token) {
           console.log('Enviando token em cada requisição');
           config.headers['x-access-token'] = $window.sessionStorage.token;
       }
       return config;
   }, interceptor.response = function (response) {
       var token = response.headers('x-access-token');
       if (token != null) {
           $window.sessionStorage.token = token;
           console.log('Token salvo no cache da sessão: ' + token);
       }
       return response;
   }, interceptor.responseError = function(rejection) {
       if (rejection != null && rejection.status == 401) {
           console.log('Deletando token da sessão');
           delete $window.sessionStorage.token;
           $location.path('/login');
       }
       return $q.reject(rejection);
   }
   
   return interceptor;
});