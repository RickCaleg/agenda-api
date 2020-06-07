const express = require('express');
const router = express.Router();
const controller = require('../controllers/UsuariosController');

router.route('/:id').get(controller.get);
router.route('/').post(controller.post);

module.exports = router;