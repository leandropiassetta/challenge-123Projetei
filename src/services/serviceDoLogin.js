const { PessoasFisicas } = require('../models');
const { createToken } = require('../api/auth/jwt');

const loginUsuario = async (email) => {
  // Meu service login irá receber um email do controller e vai verificar no banco de dados
  // se tem algum usuário cadastrado lá dentro com o email recebido...
  const usuario = await PessoasFisicas.findOne({ where: { email } });
  // Se não tiver retorna uma mensagem de erro //
  if (!usuario || undefined) {
    return { message: 'Campos inválidos' };
  }
  // Se tiver cadastrado vai retornar um Token, confirmando que o usuário esta autenticado para continuar usando a aplicação //
  const token = createToken(email);

  return token;
};

module.exports = { loginUsuario };
