var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restfultasksnested');
    var taskSchema = new mongoose.Schema({
        title: {type: String},
        description: {type: String},
    }, {timestamps:true});

    mongoose.model('Task', taskSchema);
    var Task = mongoose.model('Task');

module.exports = Task