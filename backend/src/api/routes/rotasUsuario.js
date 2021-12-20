const router = require('express').Router();
const { validarToken } = require('../../middlewares/validarToken');
const {
  checandoCampos,
  checarEmail
} = require('../../middlewares/validarUsuario');

const {
  criarUsuario,
  listarUsuarios,
  visualizarUsuario,
  editarUsuario,
  deletarUsuario
} = require('../../controllers/controllersDoUsuario');

router.get('/', listarUsuarios);
router.get('/:id', visualizarUsuario);
router.post('/', checandoCampos, checarEmail, criarUsuario);
router.put('/:id', editarUsuario);
router.delete('/:id', deletarUsuario);

module.exports = router;
