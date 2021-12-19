const { PessoasFisicas } = require('../models');
const { createToken } = require('../api/auth/jwt');

const criarUsuario = async (infoUsuario) => {
  const { cpf, nome, telefone, email, senha, dataDeNascimento } = infoUsuario;
  const usuario = await PessoasFisicas.findOne({
    where: { email }
  });
  if (usuario) {
    return { message: 'O usuário já se encontra cadastrado.' };
  }

  const { id } = await PessoasFisicas.create({
    cpf,
    nome,
    telefone,
    email,
    senha,
    dataDeNascimento
  });

  const token = createToken({ id, email });

  return { token };
};

const listarUsuarios = async () => {
  const usuarios = await PessoasFisicas.findAll({
    attributes: {
      exclude: ['senha']
    }
  });

  return usuarios;
};

const visualizarUsuario = async (id) => {
  const usuario = await PessoasFisicas.findByPk(id);

  if (usuario === null) {
    return { message: 'Não existe esse usuário' };
  }

  return usuario;
};

const editarUsuario = async (id, /* tokenId */ infoUsuario) => {
  // if (infoUsuario.cpf) {
  //   return { message: 'CPF não pode ser editado!' };
  // }
  const usuario = await PessoasFisicas.update(
    { ...infoUsuario },
    { where: { id: Number(id) } }
  );

  if (usuario[0] === 0) {
    return { message: 'Usuário não encontrado ou não atualizado!' };
  }

  return usuario;
};

const deletarUsuario = async (id) => {
  const usuario = await PessoasFisicas.destroy({ where: { id: Number(id) } });

  if (usuario === 0) {
    return { message: 'Usuário não encontrado!' };
  }

  return usuario;
};

module.exports = {
  criarUsuario,
  listarUsuarios,
  visualizarUsuario,
  editarUsuario,
  deletarUsuario
};
