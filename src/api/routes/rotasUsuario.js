const router = require('express').Router();

const { criandoUsuario } = require('../../controllers/controllersDoUsuario');

router.post('/', criandoUsuario);

module.exports = router;
