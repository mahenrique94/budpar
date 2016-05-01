var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var helmet = require('helmet');

module.exports = function() {
    var app = express();
    
    // app.set('view engine', 'ejs');
    // app.set('views', './app/views');
    app.set('secret', 'chavesmaneiro');
    
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended : true}));    
    app.use(bodyParser.json());
    app.use(require('method-override')());
    
    app.use(helmet.xframe());
    app.use(helmet.xssFilter());
    app.use(helmet.nosniff());
    
    app.disabled('x-powered-by');   
    
    consign({cwd : 'app'}).include('models').then('controllers').then('routes/auth').then('routes').into(app);
    
    app.get('*', function(req, res) {
       res.status(404).render('404'); 
    });
           
   return app;           
};