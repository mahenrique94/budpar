module.exports = function(app) {
    var controller = app.controllers.auth;
    
    app.post('/autenticacao', controller.autentication);
    app.use('/*', controller.checkToken);  
};