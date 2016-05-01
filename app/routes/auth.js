module.exports = function(app) {
    var controller = app.controllers.auth;
    
    app.post('/autentication', controller.autentication);
    app.use('/*', controller.checkToken);  
};