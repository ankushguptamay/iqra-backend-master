
const db = require('../../models');
const Level = db.level;

exports.create = async (req, res) => {
    try{
        var levelCode;
        const levels = await Level.findAll();
        if(levels.length == 0){
            levelCode = "S100500";
        }else{
            var lastLevel = levels[levels.length - 1];
            var lastDigits = lastLevel.levelCode.substring(1, 7);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            levelCode = "S" + incrementedDigits;
        }
        await Level.create({
            levelCode: levelCode,
            level: req.body.level,
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Level."
            });
        });
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const levels = await Level.findAll();
        res.status(200).send(levels);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}