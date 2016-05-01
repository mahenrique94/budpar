var sanitize = require('mongo-sanitize');
var controller = {};

module.exports = function(app) {
    var budget = app.models.budget;
    
    controller.list = function(req, res) {
        budget.find().exec().then(function(budgets) {
            res.json(budgets);
        }, function(error) {
           console.log(error)
           res.status(500).json(error); 
        });
    };
    
    controller.edit = function(req, res) {
        var _id = sanitize(req.params.id);
        budget.findById(_id).exec().then(function(budget) {
            if (!budget)
                throw new Error('Budget not found');
            res.json(budget);
        }, function(error) {
            console.log(error);
            res.status(404).json(error);
        });
    };
    
    controller.delete = function(req, res) {
        var _id = sanitize(req.params.id);
        budget.remove({"_id" : _id}).exec().then(function() {
            res.status(204).end();
        }, function(error) {
            return console.log(error);
        });  
    };
    
    controller.save = function(req, res) {
        var _id = req.body._id;
        var data = {
            degree : {
                companyname : req.body.degree.companyname,
                address : {
                    street : req.body.degree.address.street,
                    number : req.body.degree.address.number,
                    zipcode : req.body.degree.address.zipcode,
                    complement : req.body.degree.address.complement || "",
                    district : req.body.degree.address.district,
                    city : req.body.degree.address.city,
                    state : req.body.degree.address.state,
                    country : req.body.degree.address.country
                }
            },
            graduation : {
                companyname : req.body.graduation.companyname,
                address : {
                    street : req.body.graduation.address.street,
                    number : req.body.graduation.address.number,
                    zipcode : req.body.graduation.address.zipcode,
                    complement : req.body.graduation.address.complement || "",
                    district : req.body.graduation.address.district,
                    city : req.body.graduation.address.city,
                    state : req.body.graduation.address.state,
                    country : req.body.graduation.address.country
                }
            },
            costs : req.body.costs,
            teachers : req.body.teachers
        };
        if (_id) {
            budget.findByIdAndUpdate(_id, data).exec().then(function(budget) {
                res.json(budget);
            }, function(error) {
               console.log(error);
               res.status(500).json(error); 
            });
        } else {
            budget.create(data).then(function(budget) {
                res.status(201).json(budget);
            }, function(error) {
               console.log(error);
               res.status(500).json(error); 
            });
        }
    };
    
    return controller;
};