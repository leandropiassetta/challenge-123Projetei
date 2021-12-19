const router = require('express').Router();

const {
  criarUsuario,
  listarUsuarios,
  visualizarUsuario,
  editarUsuario,
  deletarUsuario
} = require('../../controllers/controllersDoUsuario');

router.get('/', listarUsuarios);
router.get('/:id', visualizarUsuario);
router.post('/', criarUsuario);
router.put('/:id', editarUsuario);
router.delete('/:id', deletarUsuario);

module.exports = router;
