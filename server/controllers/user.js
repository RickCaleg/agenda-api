//Importando o service de usuários
const user = require('../services/user');

//Método que retorna todos os usuários
async function getAll(req, res) {
    console.log('getAll');
    return await user
        .getAll()
        .catch(err => {
            return res.status(err.statusCode || 500).send(err);
        })
        .then(q => {
            return res.send(q);
        });
}

//Método que retorna apenas um usuário de acordo com o id informado
async function get(req, res) {
    console.log('get');
    return await user
        .get(req.params.id)
        .catch(err => {
            return res.status(err.statusCode || 500).send(err);
        })
        .then(q => {
            return res.status(200).send(q);
        });
}

//Método que adiciona um usuário
async function post(req, res) {
    return await user
        .post(req.body.user)
        .catch(err => {
            return res.status(err.statusCode).send(err);
        })
        .then(q => {
            return res.status(200).send('ok');
        });
}

//Método que edita um usuário
async function put(req, res) {
    return await user
        .put(req.body.user)
        .catch(err => {
            return res.status(err.statusCode || 500).send(err);
        })
        .then(q => {
            return res.status(200).send('ok');
        });
}

//Método que deleta um usuário
async function del(req, res) {
    return await user
        .del(req.params.id)
        .catch(err => {
            return res.status(err.statusCode || 500).send(err);
        })
        .then(q => {
            return res.status(200).end('ok');
        });
}

//Aqui estamos exportando todos os métodos que criamos para que consigamos acessar eles de outros arquivos
//como por exemplo o arquivo de rotas
module.exports = { getAll, get, post, put, del };