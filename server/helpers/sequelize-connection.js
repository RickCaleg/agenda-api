const config = require('../config/env').dataConfig.MYSQL;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    port: config.port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: false
});

//Validando a conexão com o banco
sequelize.authenticate()
    .catch(err => console.log('[DATABASE] - Connection failed'));

module.exports = { Sequelize, sequelize };