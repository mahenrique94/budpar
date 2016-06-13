angular.module('budpar').controller('OrcamentoController', function($routeParams, $scope, $location, OrcamentoService) {
    $scope.orcamentos = [];
    $scope.filter = '';
    
    if($routeParams.orcamentoId) {
        OrcamentoService.get({id : $routeParams.orcamentoId}, function(orcamento) {
            $scope.orcamento = orcamento;
        }, function(error) {
          console.log(error);
        });
    } else {
        $scope.orcamento = new OrcamentoService();
    }
    
    $scope.getTotal = function(custos) {
        var total = 0;
        for(var i = 0; i < custos.length; i++) {
            total += custos[i].valor; 
        };
        return total;
    };
    
    function findOrcamentos() {
        OrcamentoService.query(function(orcamentos) {
            $scope.orcamentos = orcamentos;
        }, function(error) { 
            console.log(error); 
        });
    };
    
    $scope.remover = function(orcamento) {
        OrcamentoService.delete({id : orcamento._id}, findOrcamentos, function(error) {
           console.log(error);
        });
    };
    
    $scope.save = function() {
        $scope.orcamento.$save().then(function() {
            $location.path('/');
        })  
    };
    
    $scope.spliceCustos = function(descricao) {
        if(descricao == undefined) {
            var custo = {
                descricao : document.getElementById('custo-descricao').value,
                valor : document.getElementById('custo-valor').value
            };
            if ($scope.orcamento.custos == undefined)
                $scope.orcamento.custos = new Array();
            $scope.orcamento.custos.splice(($scope.orcamento.custos.length + 1), 0, custo);
        } else {
            for(var i = 0; i < $scope.orcamento.custos.length; i++) {
                if($scope.orcamento.custos[i].descricao == descricao)
                    $scope.orcamento.custos.splice(i, 1);
            }
        }
        document.getElementById('custo-descricao').value = '';
        document.getElementById('custo-valor').value = '';
        document.getElementById('custo-descricao').focus();
    };
    
    $scope.spliceProfessores = function(nome) {
        if(nome == undefined) {
            var professor = {
                nome : document.getElementById('professor-nome').value
            };
            if ($scope.orcamento.professores == undefined)
                $scope.orcamento.professores = new Array();
            $scope.orcamento.professores.splice(($scope.orcamento.professores.length + 1), 0, professor);
        } else {
            for(var i = 0; i < $scope.orcamento.professores.length; i++) {
                if($scope.orcamento.professores[i].nome == nome)
                    $scope.orcamento.professores.splice(i, 1);
            }
        }
        document.getElementById('professor-nome').value = '';
        document.getElementById('professor-nome').focus();
    };
    
    findOrcamentos();
    
});