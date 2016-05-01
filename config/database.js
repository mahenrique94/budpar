var mongoose = require('mongoose');

module.exports = function(database) {
    mongoose.connect('mongodb://localhost/' + database);
    
    mongoose.connection.on('connected', function() {
       console.log('Mongoose! Connected on database: ' + database); 
    });
    
    mongoose.connection.on('disconnected', function() {
       console.log('Mongoose! Disconnected on database: ' + database); 
    });
    
    mongoose.connection.on('error', function() {
       console.log('Mongoose! Error about connecting on database: ' + database); 
    });
    
    process.on('SIGINIT', function() {
       mongoose.connection.close(function() {
           console.log('Mongoose! Disconnected by session finish');
           process.exit(0);
       });
    });
}