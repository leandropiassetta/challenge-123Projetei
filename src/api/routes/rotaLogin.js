const router = require('express').Router();

const { loginUsuario } = require('../../controllers/controllersDoUsuario');

router.post('/', loginUsuario);

module.exports = router;
