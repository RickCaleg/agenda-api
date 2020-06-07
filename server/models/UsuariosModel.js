module.exports = function (queryInterface, Sequelize) {
    return queryInterface.define('Usuarios', {
        IDUsuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Usuario: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        Senha: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Nome: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
};