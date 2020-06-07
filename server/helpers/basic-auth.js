const userService = require('../services/UsuariosService');

module.exports = basicAuth;

async function basicAuth(req, res, next) {
    
    //URLs disponíveis publicamente
    if (req.path.toLowerCase() === '/usuarios/' && req.method === 'POST') {
        return next();
    }

    //Verifica se o header de autenticação existe
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({
            statusCode: 401,
            msg: 'Acesso negado. Envie o header de autorização.'
        });
    }

    //Verifica as credenciais
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [usuario, senha] = credentials.split(':');

    //Consulta as credenciais no banco
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