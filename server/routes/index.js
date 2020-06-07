const express = require('express');
const router = express.Router();

//Importando a rota de usuários
const user = require('./user');

router.get('/api-status', (req, res) => {
    return res.status(200).json({ status: 'ok' });
});

//Configurando e mapeando a rota de usuários
router.use('/user', user);

module.exports = router;