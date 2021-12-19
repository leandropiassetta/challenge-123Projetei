const router = require('express').Router();

const { loginUsuario } = require('../../controllers/controllerDoLogin');

router.post('/', loginUsuario);

module.exports = router;
