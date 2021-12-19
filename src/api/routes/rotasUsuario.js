const router = require('express').Router();

const {
  criarUsuario,
  buscaUser,
  editarUsuario
} = require('../../controllers/controllersDoUsuario');

router.post('/', criarUsuario);
router.put('/:id', editarUsuario);
router.get('/', buscaUser);

module.exports = router;
