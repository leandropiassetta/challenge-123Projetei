const router = require('express').Router();

const {
  criarUsuario,
  buscaUser,
  editaUsuario
} = require('../../controllers/controllersDoUsuario');

router.post('/', criarUsuario);
router.put('/', editaUsuario);
router.get('/', buscaUser);

module.exports = router;
