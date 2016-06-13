var mongoose = require('mongoose');

module.exports = function () {
    var usuario = mongoose.Schema({
        nome : {
            maxlength: 60,
            required : true,
            type: String,
            uppercase : true
        },
        usuario : {
            index : {
                unique : true
            },
            maxlength: 20,
            required : true,
            type: String,
            uppercase : true
        },
        senha : {
            minlength: 8,
            maxlength: 8,
            required : true,
            type: String,
            uppercase : true
        },
        datacreate : {
            default : new Date(),
            type : String
        },
        dataupdate : {
            default : new Date(),
            type : String
        }
    });
    
    return mongoose.model('usuario', usuario, 'usuario');
};