const user = require('../repositories/user');

function autenticar({ usuario, senha }) {
    return new Promise(async (resolve, reject) => {
        const query = await user.autenticar({ usuario: usuario, senha: senha });

        if (!query)
            return reject({ statusCode: 401, msg: 'Autenticação inválida' });

        return resolve(query);
    });
}

function getAll() {
    return new Promise(async (resolve, reject) => {
        const query = await user.getAll();

        if (!query)
            return reject({ statusCode: 400, msg: 'Erro ao buscar os usuários' });

        return resolve(query);
    });
}

function get(id) {
    return new Promise(async (resolve, reject) => {
        const query = await user.get(id);

        if (!query)
            return reject({ statusCode: 400, msg: 'Erro: usuário não encontrado' });

        return resolve(query);
    });
}

function post(p) {
    return new Promise(async (resolve, reject) => {
        const query = await user.post(p);

        if (!query)
            return reject({ statusCode: 400, msg: 'Erro ao inserir o usuário' });

        return resolve(query);
    });
}

function put(p) {
    return new Promise(async (resolve, reject) => {
        const query = await user.put(p);

        if (!query)
            return reject({ statusCode: 400, msg: 'Erro: usuário não encontrado' });

        return resolve(query);
    });
}

function del(id) {
    return new Promise(async (resolve, reject) => {
        const query = await user.del(id);

        if (!query)
            return reject({ statusCode: 400, msg: 'Erro: usuário não encontrado' });
    
        return resolve(query);
    });
}

module.exports = { autenticar, getAll, get, post, put, del };