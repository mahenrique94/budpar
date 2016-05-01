angular.module('budpar').controller('LoginController', function($scope, $http, $location) {
    $scope.user = {};
    $scope.message = {text : ''};
    
    $scope.autentication = function() {
        var user = $scope.user;
        $http.post('/autentication', {login : user.login, password : user.password}).then(function() {
            $location.path('/');  
        }, function(error) {
            console.log(error);
            $scope.user = {};
            $scope.message.text = 'Login ou senha inválido';
        });
    };
});