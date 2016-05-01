angular.module('budpar').factory('BudgetService', function($resource) {
   return $resource('/server/budgets/:id'); 
});