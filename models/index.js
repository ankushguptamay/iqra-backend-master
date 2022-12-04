const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.level = require('./Master/level')(sequelize, Sequelize);
db.medium = require('./Master/medium')(sequelize, Sequelize);
db.subject = require('./Master/subject')(sequelize, Sequelize);
db.category = require('./Category/category')(sequelize, Sequelize);

module.exports = db;