var jwt = require('jsonwebtoken');
var controller = {};

module.exports = function(app) {
    var user = app.models.user;
    
    controller.autentication = function(req, res) {
        user.findOne({login : req.body.login, password : req.body.password}).then(function(user) {
            if (!user) {
                console.log('Login or password incorrect');
                res.sendStatus(401);
            } else {
                console.log(app.get('secret'));
                var token = jwt.sign(user.login, app.get('secret'), {expiresIn : 84600});
                console.log('Token created and sent on header of the answer');
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
                   console.log('Token was wrong');
                   return res.sendStatus(401);
               }
               console.log('Token accepted');
               req.user = decoded;
               next();
            });
        } else {
            console.log('Token wasn\'t sent');
            res.sendStatus(401);
        }
    };
    
    return controller;
};