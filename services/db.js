const { Sequelize } = require('sequelize');
const config = require('../config').value;

const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000,
    },
});

module.exports = sequelize;
