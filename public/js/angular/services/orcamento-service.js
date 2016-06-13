angular.module('budpar').factory('OrcamentoService', function($resource) {
   return $resource('/server/orcamento/:id'); 
});