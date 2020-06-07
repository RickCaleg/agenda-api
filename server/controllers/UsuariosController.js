const Usuarios = require('../services/UsuariosService');

async function get(req, res) {
    return await Usuarios.get(req.params.id)
        .catch(err => { res.status(err.statusCode || 500).send(err); })
        .then(result => { res.status(200).send(result); });
}

async function post(req, res) {
    return await Usuarios.post(req.body.usuario)
        .catch(err => { res.status(err.statusCode || 500).send(err); })
        .then(result => { res.status(201).send(result); });
}

module.exports = { get, post };