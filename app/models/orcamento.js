var mongoose = require('mongoose');

module.exports = function() {
    var orcamento = mongoose.Schema({
        colacao : {
            empresa : {
                maxlength : 60,
                required : true,
                type : String,
                uppercase : true
            },
            endereco : {
                rua : {
                    maxlength : 60,
                    required : true,
                    type : String,
                    uppercase : true
                },
                numero : {
                    maxlength : 10,
                    required : true,
                    type : String,
                    uppercase : true
                },
                cep : {
                    match : /[0-9]{5}-[0-9]{3}/,
                    maxlength : 9,
                    required : true,
                    type : String
                },
                complemento : {
                    maxlength : 30,
                    required : false,
                    type : String,
                    uppercase : true
                },
                bairro : {
                    maxlength : 60,
                    required : true,
                    type : String,
                    uppercase : true
                },
                cidade : {
                    maxlength : 60,
                    required : true,
                    type : String,
                    uppercase : true
                },
                estado : {
                    maxlength : 2,
                    minlength : 2,
                    required : true,
                    type : String,
                    uppercase : true
                },
                pais : {
                    maxlength : 60,
                    default : 'BRASIL',
                    required : true,
                    type : String,
                    uppercase : true
                }
            }
        },
        formatura : {
            empresa : {
                maxlength : 60,
                required : true,
                type : String,
                uppercase : true
            },
            endereco : {
                rua : {
                    maxlength : 60,
                    required : true,
                    type : String,
                    uppercase : true
                },
                numero : {
                    maxlength : 10,
                    required : true,
                    type : String,
                    uppercase : true
                },
                cep : {
                    match : /[0-9]{5}-[0-9]{3}/,
                    maxlength : 9,
                    required : true,
                    type : String
                },
                complemento : {
                    maxlength : 30,
                    required : false,
                    type : String,
                    uppercase : true
                },
                bairro : {
                    maxlength : 60,
                    required : true,
                    type : String,
                    uppercase : true
                },
                cidade : {
                    maxlength : 60,
                    required : true,
                    type : String,
                    uppercase : true
                },
                estado : {
                    maxlength : 2,
                    minlength : 2,
                    required : true,
                    type : String,
                    uppercase : true
                },
                pais : {
                    maxlength : 60,
                    default : 'BRASIL',
                    required : true,
                    type : String,
                    uppercase : true
                }
            }
        },
        custos : [{
            descricao : {
                maxlength : 30,
                required : true,
                type : String,
                uppercase : true
            },
            valor : {
                min : 0,
                required : true,
                type : Number
            }
        }],
        professores : [{
            nome : {
                maxlength : 60,
                required : true,
                type : String,
                uppercase : true
            },
        }],
        datacreate : {
            default : new Date(),
            type : String
        },
        dataupdate : {
            default : new Date(),
            type : String
        }
    });
    
    return mongoose.model('orcamento', orcamento, 'orcamento');
};