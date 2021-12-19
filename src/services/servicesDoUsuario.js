const { PessoasFisicas } = require('../models');
const { createToken } = require('../api/auth/jwt');

const criarUsuario = async (infoUsuario) => {
  const { cpf, nome, telefone, email, senha, dataDeNascimento } = infoUsuario;
  // Verifico no meu banco se já existe algum usuário com este email
  const usuario = await PessoasFisicas.findOne({
    where: { email }
  });
  // Se tiver mando a mensagem de erro
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

const editarUsuario = async (id, tokenId, infoUsuario) => {
  if (infoUsuario.cpf) {
    return { message: 'CPF não pode ser editado!' };
  }

  return PessoasFisicas.update({ infoUsuario }, { where: { id: Number(id) } });
};

const buscaUser = async () => {
  const usuarios = await PessoasFisicas.findAll({
    attributes: {
      exclude: ['password']
    }
  });

  return usuarios;
};

module.exports = { criarUsuario, buscaUser, editarUsuario };
