var tasks = require('./models')

module.exports = {
    home: function(req, res){
        tasks.find({}, function(err, tasks){
            if(err){
                console.log("wrong");
            } else {
                console.log("nice")
                res.json(tasks)
            }
        })
    },
    oneTask: function(req,res) {
        tasks.findById(req.params.id)
        .then((data)=> {
            console.log("onetask")
            res.json(data);
        })
        .catch((err)=>{
            console.log("error in onetask")
            res.json(err);
        })
    }}