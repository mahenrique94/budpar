angular.module('budpar').controller('BudgetController', function($routeParams, $scope, $location, BudgetService) {
    $scope.budgets = [];
    $scope.filter = '';
    
    if($routeParams.budgetId) {
        BudgetService.get({id : $routeParams.budgetId}, function(budget) {
            $scope.budget = budget;
        }, function(error) {
          console.log(error);
        });
    } else {
        $scope.budget = new BudgetService();
    }
    
    $scope.getTotal = function(costs) {
        var total = 0;
        for(var i = 0; i < costs.length; i++) {
            total += costs[i].value; 
        };
        return total;
    };
    
    function findBudgets() {
        BudgetService.query(function(budgets) {
            $scope.budgets = budgets;
        }, function(error) { 
            console.log(error); 
        });
    };
    
    $scope.remover = function(budget) {
        BudgetService.delete({id : budget._id}, findBudgets, function(error) {
           console.log(error);
        });
    };
    
    $scope.save = function() {
        $scope.budget.$save().then(function() {
            $location.path('/');
        })  
    };
    
    $scope.spliceCosts = function(costName) {
        if(costName == undefined) {
            var cost = {
                name : document.getElementById('cost-name').value,
                value : document.getElementById('cost-value').value
            };
            if ($scope.budget.costs == undefined)
                $scope.budget.costs = new Array();
            $scope.budget.costs.splice(($scope.budget.costs.length + 1), 0, cost);
        } else {
            for(var i = 0; i < $scope.budget.costs.length; i++) {
                if($scope.budget.costs[i].name == costName)
                    $scope.budget.costs.splice(i, 1);
            }
        }
        document.getElementById('cost-name').value = '';
        document.getElementById('cost-value').value = '';
        document.getElementById('cost-name').focus();
    };
    
    $scope.spliceTeachers = function(teacherName) {
        if(teacherName == undefined) {
            var teacher = {
                name : document.getElementById('teacher-name').value
            };
            if ($scope.budget.teachers == undefined)
                $scope.budget.teachers = new Array();
            $scope.budget.teachers.splice(($scope.budget.teachers.length + 1), 0, teacher);
        } else {
            for(var i = 0; i < $scope.budget.teachers.length; i++) {
                if($scope.budget.teachers[i].name == teacherName)
                    $scope.budget.teachers.splice(i, 1);
            }
        }
        document.getElementById('teacher-name').value = '';
        document.getElementById('teacher-name').focus();
    };
    
    findBudgets();
    
});