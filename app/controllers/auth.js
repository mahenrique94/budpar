var jwt = require('jsonwebtoken');
var controller = {};

module.exports = function(app) {
    var usuario = app.models.usuario;
    
    controller.autentication = function(req, res) {
        usuario.findOne({usuario : req.body.usuario, senha : req.body.senha}).then(function(usuario) {
            if (!usuario) {
                console.log('Usuário ou senha inválidos');
                res.sendStatus(401);
            } else {
                var token = jwt.sign(usuario.usuario, app.get('secret'), {expiresIn : 84600});
                console.log('Token criado e enviado no cabeçalho da resposta');
                res.set('x-access-token', token);
                res.end();
            }
        });
    };
    
    controller.checkToken = function(req, res, next) {
        var token = req.headers['x-access-token'];
        if (token) {
            console.log('Checking token...');
            jwt.verify(token, app.get('secret'), function(err, decoded) {
               if (err) {
                   console.log('Token inválido');
                   return res.sendStatus(401);
               }
               console.log('Token válido');
               req.usuario = decoded;
               next();
            });
        } else {
            console.log('Token não foi enviado');
            res.sendStatus(401);
        }
    };
    
    return controller;
};