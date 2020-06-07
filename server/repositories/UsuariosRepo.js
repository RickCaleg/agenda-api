const con = require('../helpers/sequelize-connection');
const model = require('../models/UsuariosModel');
const table = model(con.sequelize, con.Sequelize);

async function autenticar({ usuario, senha }) {
    return await table.findOne({
        where: {
            Usuario: usuario,
            Senha: senha
        }
    });
}

async function get(id) {
    try {
        const result = await table.findOne({
            where: {
                IDUsuario: id
            },
            attributes: {
                exclude: ['Senha']
            }
        });

        return { sucesso: true, msg: 'Usuário encontrado', usuario: result };
    } catch (err) {
        return { sucesso: false, msg: 'Falha ao buscar usuário' };
    }
}

async function post(usuario) {
    try {
        const result = await table.create(usuario);

        delete result.dataValues.Senha;

        return { sucesso: true, msg: 'Usuário inserido com sucesso', usuario: result };
    } catch (err) {
        switch (err.original.code) {
            case 'ER_DUP_ENTRY':
                return { sucesso: false, msg: 'Usuário já cadastrado' };
                break;
            default:
                return { sucesso: false, msg: 'Erro ao inserir usuário' };
                break;
        }
    }
}

module.exports = { autenticar, get, post };