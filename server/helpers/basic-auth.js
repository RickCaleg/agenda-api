const userService = require('../services/user');

module.exports = basicAuth;

async function basicAuth(req, res, next) {
    //Make authenticate path public
    if (req.path === '/users/authenticate') {
        return next();
    }

    //Check for basic auth header
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({
            statusCode: 401,
            msg: 'Acesso negado. Envie o header de autorização.'
        });
    }

    //Verify auth credentials
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [usuario, senha] = credentials.split(':');


    userService
        .autenticar({ usuario, senha })
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            return res.status(err.statusCode || 401).send(err);
        });
}