angular.module('budpar').controller('LoginController', function($scope, $http, $location) {
    $scope.usuario = {};
    $scope.message = {text : ''};
    
    $scope.autenticacao = function() {
        var usuario = $scope.usuario;
        $http.post('/autenticacao', {usuario : usuario.usuario, senha : usuario.senha}).then(function() {
            $location.path('/');  
        }, function(error) {
            console.log(error);
            $scope.usuario = {};
            $scope.message.text = 'Login ou senha inválido';
        });
    };
});