
const db = require('../models');
const Student = db.student;

module.exports.create = async (req, res) => {
    try{
        console.log(req.body);
        const name = req.body.name;
        const address = req.body.address;
        const contactNumber = req.body.contactNumber;
        const batch = req.body.batch;
        const targetYear = req.body.targetYear;
        const email = req.body.email;
        const optionalSubject = req.body.optionalSubject;
        await Student.create({
            name: name,
            address: address,
            contactNumber: contactNumber,
            batch: batch,
            targetYear: targetYear,
            email: email,
            optionalSubject: optionalSubject
            })
            .then(res.status(201).send(`Student added`));
    }catch(error){
        console.log(error);
    }
};

module.exports.findAll = async (req, res) => {
    try{
        const users = await Student.findAll();
        res.send(users);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
};

module.exports.delete = async (req, res) => {
    try{
        const id = req.params.id;
        const users = await Student.findOne({where: {id: id}});
        if (!users){
           console.log("err");
        }
        users.destroy();
        res.status(200).send(`User deleted with ID: ${id}`);
        //res.redirect('/api/student');
    }catch(err){
            console.log(err);
    }
};

module.exports.update = async (req, res) => {
    try{
        const id = req.params.id;
        const users = await Student.findOne({where: {id: id}});
        if (!users){
            console.log("err");
        }
        users.update({
            name: req.body.name,
            address: req.body.address,
            contactNumber: req.body.contactNumber,
            batch: req.body.batch,
            targetYear: req.body.targetYear,
            email: req.body.email,
            optionalSubject: req.body.optionalSubject
        });
        res.status(200).send(`User modified with ID: ${id}`);
    }catch(err){
        console.log(err);
    }
};