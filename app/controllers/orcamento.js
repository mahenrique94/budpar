var sanitize = require('mongo-sanitize');
var controller = {};

module.exports = function(app) {
    var orcamento = app.models.orcamento;
    
    controller.list = function(req, res) {
        orcamento.find().exec().then(function(orcamentos) {
            res.json(orcamentos);
        }, function(error) {
           console.log(error)
           res.status(500).json(error); 
        });
    };
    
    controller.edit = function(req, res) {
        var _id = sanitize(req.params.id);
        orcamento.findById(_id).exec().then(function(orcamento) {
            if (!orcamento)
                throw new Error('Budget não foi encontrado');
            res.json(orcamento);
        }, function(error) {
            console.log(error);
            res.status(404).json(error);
        });
    };
    
    controller.delete = function(req, res) {
        var _id = sanitize(req.params.id);
        orcamento.remove({"_id" : _id}).exec().then(function() {
            res.status(204).end();
        }, function(error) {
            return console.log(error);
        });  
    };
    
    controller.save = function(req, res) {
        var _id = req.body._id;
        var data = {
            colacao : {
                empresa : req.body.colacao.empresa,
                endereco : {
                    rua : req.body.colacao.endereco.rua,
                    numero : req.body.colacao.endereco.numero,
                    cep : req.body.colacao.endereco.cep,
                    complemento : req.body.colacao.endereco.complemento || "",
                    bairro : req.body.colacao.endereco.bairro,
                    cidade : req.body.colacao.endereco.cidade,
                    estado : req.body.colacao.endereco.estado,
                    pais : req.body.colacao.endereco.pais
                }
            },
            formatura : {
                empresa : req.body.formatura.empresa,
                endereco : {
                    rua : req.body.formatura.endereco.rua,
                    numero : req.body.formatura.endereco.numero,
                    cep : req.body.formatura.endereco.cep,
                    complemento : req.body.formatura.endereco.complemento || "",
                    bairro : req.body.formatura.endereco.bairro,
                    cidade : req.body.formatura.endereco.cidade,
                    estado : req.body.formatura.endereco.estado,
                    pais : req.body.formatura.endereco.pais
                }
            },
            custos : req.body.custos,
            professores : req.body.professores
        };
        if (_id) {
            orcamento.findByIdAndUpdate(_id, data).exec().then(function(orcamento) {
                res.json(orcamento);
            }, function(error) {
               console.log(error);
               res.status(500).json(error); 
            });
        } else {
            orcamento.create(data).then(function(orcamento) {
                res.status(201).json(orcamento);
            }, function(error) {
               console.log(error);
               res.status(500).json(error); 
            });
        }
    };
    
    return controller;
};