//Mapeando a tabela que criamos para que a noss api consiga enxergar ela
module.exports = {
    user: function user(queryInterface, Sequelize) {
        return queryInterface.define(
            'user',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                nome: {
                    type: Sequelize.STRING
                },
                email: {
                    type: Sequelize.STRING
                },
                usuario: {
                    type: Sequelize.STRING
                },
                senha: {
                    type: Sequelize.STRING
                }
            },
            {
                timestamps: false,
                freezeTableName: true
            }
        );
    }
};