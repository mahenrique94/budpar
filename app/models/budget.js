var mongoose = require('mongoose');

module.exports = function() {
    var budget = mongoose.Schema({
        degree : {
            companyname : {
                maxlength : 60,
                required : true,
                type : String,
                uppercase : true
            },
            address : {
                street : {
                    maxlength : 60,
                    required : true,
                    type : String,
                    uppercase : true
                },
                number : {
                    maxlength : 10,
                    required : true,
                    type : String,
                    uppercase : true
                },
                zipcode : {
                    match : /[0-9]{5}-[0-9]{3}/,
                    maxlength : 9,
                    required : true,
                    type : String
                },
                complement : {
                    maxlength : 30,
                    required : false,
                    type : String,
                    uppercase : true
                },
                district : {
                    maxlength : 60,
                    required : true,
                    type : String,
                    uppercase : true
                },
                city : {
                    maxlength : 60,
                    required : true,
                    type : String,
                    uppercase : true
                },
                state : {
                    maxlength : 2,
                    minlength : 2,
                    required : true,
                    type : String,
                    uppercase : true
                },
                country : {
                    maxlength : 60,
                    default : 'BRASIL',
                    required : true,
                    type : String,
                    uppercase : true
                }
            }
        },
        graduation : {
            companyname : {
                maxlength : 60,
                required : true,
                type : String,
                uppercase : true
            },
            address : {
                street : {
                    maxlength : 60,
                    required : true,
                    type : String,
                    uppercase : true
                },
                number : {
                    maxlength : 10,
                    required : true,
                    type : String,
                    uppercase : true
                },
                zipcode : {
                    match : /[0-9]{5}-[0-9]{3}/,
                    maxlength : 9,
                    required : true,
                    type : String
                },
                complement : {
                    maxlength : 30,
                    required : true,
                    type : String,
                    uppercase : true
                },
                district : {
                    maxlength : 60,
                    required : true,
                    type : String,
                    uppercase : true
                },
                city : {
                    maxlength : 60,
                    required : true,
                    type : String,
                    uppercase : true
                },
                state : {
                    maxlength : 2,
                    minlength : 2,
                    required : true,
                    type : String,
                    uppercase : true
                },
                country : {
                    maxlength : 60,
                    default : 'BRASIL',
                    required : true,
                    type : String,
                    uppercase : true
                }
            }
        },
        costs : [{
            name : {
                maxlength : 30,
                required : true,
                type : String,
                uppercase : true
            },
            value : {
                min : 0,
                required : true,
                type : Number
            }
        }],
        teachers : [{
            name : {
                maxlength : 60,
                required : true,
                type : String,
                uppercase : true
            },
        }],
        datecreate : {
            default : new Date(),
            type : String
        },
        dateupdate : {
            default : new Date(),
            type : String
        }
    });
    
    return mongoose.model('budget', budget, 'budget');
};