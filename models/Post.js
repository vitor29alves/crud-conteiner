const Sequelize = require('sequelize');
const dataBase = require('./db');


const Post = dataBase.define('conteiners', {

    cliente: { type: Sequelize.STRING, allowNull: false },
    num_conteiner: { type: Sequelize.STRING },
    tipo: { type: Sequelize.STRING },
    status: { type: Sequelize.STRING },
    categoria: { type: Sequelize.STRING },
    movimentacao: { type: Sequelize.STRING }
})

module.exports = Post;