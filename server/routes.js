var controller = require('./controllers')
module.exports = function(app) {
    app.get('/tasks', controller.home);
    app.get('/tasks/:id', controller.oneTask);
}