module.exports = (app) => {
    const level = require('../controllers/Levels/level-cont');
    const medium = require('../controllers/Mediums/medium-cont');
    const subject = require('../controllers/Subjects/subject-cont');
    const category = require('../controllers/Category/category-cont');
    const uploadImage = require('../middleware/upload-image');

    const router = require('express').Router();

    router.post("/add-levels", level.addLevel);
    router.get("/levels", level.findAllLevel);
    router.post("/add-mediums", medium.addMedium);
    router.get("/mediums", medium.findAllMedium);
    router.post("/add-subjects", subject.addSubject);
    router.get("/subjects", subject.findAllSubject);
    router.post("/uploadimages", uploadImage.single("image"), category.uploadCategory);
    router.get("/getimages", category.getCategory);
    
    
    app.use("/api/master", router);

};