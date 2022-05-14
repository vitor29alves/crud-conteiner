const { Model } = require('sequelize');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('crud', 'root', '@Vjesus29', {
    host: 'localhost',
    dialect: 'mysql',
    query:{raw: true}
})

module.exports = sequelize;