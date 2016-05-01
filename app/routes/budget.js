module.exports = function(app) {
    var controller = app.controllers.budget;
    
    app.route('/server/budgets').get(controller.list).post(controller.save);
    app.route('/server/budgets/:id').get(controller.edit).delete(controller.delete);
};