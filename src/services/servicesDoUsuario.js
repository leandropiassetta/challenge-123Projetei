const { PessoasFisicas } = require('../models');
const { createToken } = require('../api/auth/jwt');

const criarUsuario = async (infoUsuario) => {
  const { cpf, nome, telefone, email, senha, dataDeNascimento } = infoUsuario;
  // Verifico no meu banco se já existe algum usuário com este email
  // const usuario = await PessoasFisicas.findOne({
  //   where: { email }
  // });
  // // Se tiver mando a mensagem de erro
  // if (usuario) {
  //   return { message: 'O usuário já se encontra cadastrado.' };
  // }

  // Desestruturo o cpf do retorno da função create do Sequelize, para utilizar adiante na hora de criar o token do usuário.
  const novoUsuario = await PessoasFisicas.create({
    cpf,
    nome,
    telefone,
    email,
    senha,
    dataDeNascimento
  });
  console.log(novoUsuario);
  const token = createToken({ cpf, email });

  return { token };
};

const buscaUser = async () => {
  const usuarios = await PessoasFisicas.findAll({
    attributes: {
      exclude: ['password']
    }
  });

  return usuarios;
};

module.exports = { criarUsuario, buscaUser };
