var mongoose = require('mongoose');

module.exports = function () {
    var user = mongoose.Schema({
        name : {
            maxlength: 60,
            required : true,
            type: String,
            uppercase : true
        },
        login : {
            index : {
                unique : true
            },
            maxlength: 20,
            required : true,
            type: String,
            uppercase : true
        },
        password : {
            minlength: 8,
            maxlength: 8,
            required : true,
            type: String,
            uppercase : true
        },
        datecreate : {
            default : new Date(),
            type : String
        },
        dateupdate : {
            default : new Date(),
            type : String
        }
    });
    
    return mongoose.model('user', user, 'user');
};