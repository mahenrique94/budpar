var mongoose = require('mongoose');

module.exports = function(database) {
    mongoose.connect('mongodb://localhost/' + database);
    
    mongoose.connection.on('connected', function() {
       console.log('Mongoose! Conectado no banco de dados: ' + database); 
    });
    
    mongoose.connection.on('disconnected', function() {
       console.log('Mongoose! Desconectado do banco de dados: ' + database); 
    });
    
    mongoose.connection.on('error', function() {
       console.log('Mongoose! Erro ao tentar conectar no banco: ' + database); 
    });
    
    process.on('SIGINIT', function() {
       mongoose.connection.close(function() {
           console.log('Mongoose! Disconectado por fim da aplicação');
           process.exit(0);
       });
    });
}