const servicesDoUsuario = require('../services/servicesDoUsuario');

const criarUsuario = async (req, res) => {
  const infoUsuario = req.body;

  const usuarioNovo = await servicesDoUsuario.criarUsuario(infoUsuario);

  if (usuarioNovo.message) {
    return res.status(409).json({ message: usuarioNovo.message });
  }
  return res.status(201).json(usuarioNovo);
};

const editarUsuario = async (req, res) => {
  const { id } = req.params;
  // const tokenId = req.user.id;
  const infoUsuario = req.body;

  const usuario = await servicesDoUsuario.editarUsuario(
    id,
    // tokenId,
    infoUsuario
  );

  if (usuario.message) {
    return res.status(400).json({ message: usuario.message });
  }

  return res.status(200).json(usuario);
};

const buscaUser = async (_req, res) => {
  const usuarios = await servicesDoUsuario.buscaUser();

  return res.status(200).json(usuarios);
};

module.exports = { criarUsuario, buscaUser, editarUsuario };
