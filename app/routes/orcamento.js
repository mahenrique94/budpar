module.exports = function(app) {
    var controller = app.controllers.orcamento;
    
    app.route('/server/orcamento').get(controller.list).post(controller.save);
    app.route('/server/orcamento/:id').get(controller.edit).delete(controller.delete);
};