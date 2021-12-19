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

  return { message: 'Usuário atualizado com sucesso!' };
};

const buscaUser = async () => {
  const usuarios = await PessoasFisicas.findAll({
    attributes: {
      exclude: ['senha']
    }
  });

  return usuarios;
};

module.exports = { criarUsuario, buscaUser, editarUsuario };
