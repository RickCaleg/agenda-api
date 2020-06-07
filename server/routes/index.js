const express = require('express');
const router = express.Router();

//Importando a rota de usuários
const usuarios = require('./UsuariosRouter');

router.get('/api-status', (req, res) => {
    return res.status(200).json({ status: 'ok' });
});

//Configurando e mapeando a rota de usuários
router.use('/usuarios', usuarios);

module.exports = router;