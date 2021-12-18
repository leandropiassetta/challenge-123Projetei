const router = require('express').Router();

const { criarUsuario } = require('../../controllers/controllersDoUsuario');

router.post('/', criarUsuario);

module.exports = router;
