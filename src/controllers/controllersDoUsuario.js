const servicesDoUsuario = require('../services/servicesDoUsuario');

const criarUsuario = async (req, res) => {
  const infoUsuario = req.body;

  const usuarioNovo = await servicesDoUsuario.criarUsuario(infoUsuario);

  if (usuarioNovo.message) {
    return res.status(409).json({ message: usuarioNovo.message });
  }
  return res.status(201).json(usuarioNovo);
};

const listarUsuarios = async (_req, res) => {
  const usuarios = await servicesDoUsuario.listarUsuarios();

  return res.status(200).json(usuarios);
};

const visualizarUsuario = async (req, res) => {
  const { id } = req.params;

  const usuario = await servicesDoUsuario.visualizarUsuario(id);

  return res.status(200).json(usuario);
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

  return res.status(200).json({ message: 'Atualizado com sucesso!' });
};

const deletarUsuario = async (req, res) => {
  const { id } = req.params;

  const usuario = await servicesDoUsuario.deletarUsuario(id);

  if (usuario.message) {
    return res.status(400).json({ message: usuario.message });
  }

  res.status(200).json({ message: 'Deletado com sucesso!' });
};

module.exports = {
  criarUsuario,
  listarUsuarios,
  visualizarUsuario,
  editarUsuario,
  deletarUsuario
};
