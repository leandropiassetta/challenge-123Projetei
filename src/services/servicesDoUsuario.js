const { CadastroDePessoas } = require('../models');
const { createToken } = require('../api/auth/jwt');

const criarUsuario = async ({
  cpf,
  nome,
  telefone,
  email,
  senha,
  dataDeNascimento
}) => {
  // Verifico no meu banco se já existe algum usuário com este email
  const usuario = await CadastroDePessoas.findOne({
    where: { email }
  });
  // Se tiver mando a mensagem de erro
  if (usuario) {
    return { message: 'O usuário já se encontra cadastrado.' };
  }

  // Desestruturo o cpf do retorno da função create do Sequelize, para utilizar adiante na hora de criar o token do usuário.
  const novoUsuario = await CadastroDePessoas.create({
    cpf,
    nome,
    telefone,
    senha,
    dataDeNascimento
  });
  console.log(novoUsuario);
  const token = createToken({ cpf, email });

  return { token };
};

module.exports = { criarUsuario };
