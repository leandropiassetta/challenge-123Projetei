const servicesDoUsuario = require('../services/servicesDoUsuario');

const criarUsuario = async (req, res) => {
  const infoUsuario = req.body;

  const usuarioNovo = await servicesDoUsuario.criarUsuario(infoUsuario);

  if (usuarioNovo.message) {
    return res.status(409).json({ message: usuarioNovo.message });
  }
  return res.status(201).json(usuarioNovo);
};

const editaUsuario = async (req, res) => {};

const buscaUser = async (req, res) => {
  const usuarios = await servicesDoUsuario.buscaUser();

  return res.status(200).json(usuarios);
};

module.exports = { criarUsuario, buscaUser, editaUsuario };
