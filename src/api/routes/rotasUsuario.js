const router = require('express').Router();

const {
  criarUsuario,
  buscaUser,
  editarUsuario,
  deletarUsuario
} = require('../../controllers/controllersDoUsuario');

router.get('/', buscaUser);
router.post('/', criarUsuario);
router.put('/:id', editarUsuario);
router.delete('/:id', deletarUsuario);

module.exports = router;
