module.exports = (app) => {
    const level = require('../controllers/Levels/level-cont');

    const router = require('express').Router();

    router.post("/add-levels", level.create);
    router.get("/levels", level.findAll);
 
    
    app.use("/api/master", router);

};