const Usuarios = require('../repositories/UsuariosRepo');

function autenticar({ usuario, senha }) {
    return new Promise(async (resolve, reject) => {
        const result = await Usuarios.autenticar({ usuario, senha });

        if (!result)
            return reject({ statusCode: 401, msg: 'Autenticação inválida' });

        return resolve(result);
    });
}

function get(id) {
    return new Promise(async (resolve, reject) => {
        const result = await Usuarios.get(id);

        if (!result)
            return reject({ statusCode: 500, msg: 'Erro ao buscar usuário' });
        else if (!result.sucesso)
            return reject({ statusCode: 500, msg: result.msg });
        else if (!result.usuario)
            return reject({ statusCode: 404, msg: 'Usuário não encontrado' });

        return resolve(result);
    });
}

function post(usuario) {
    return new Promise(async (resolve, reject) => {
        const result = await Usuarios.post(usuario);

        if (!result)
            return reject({ statusCode: 500, msg: 'Erro ao inserir usuário' });
        else if (!result.sucesso)
            return reject({ statusCode: 500, msg: result.msg });
        else if (!result.usuario)
            return reject({ statusCode: 500, msg: 'Erro ao inserir usuário' });

        return resolve(result);
    });
}

module.exports = { autenticar, get, post };