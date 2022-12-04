module.exports = (app) => {
    const level = require('../controllers/Levels/level-cont');
    const medium = require('../controllers/Mediums/medium-cont');

    const router = require('express').Router();

    router.post("/add-levels", level.create);
    router.get("/levels", level.findAll);
    router.post("/add-mediums", medium.create);
    router.get("/mediums", medium.findAll);
 
    
    app.use("/api/master", router);

};