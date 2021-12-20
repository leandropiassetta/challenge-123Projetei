const { PessoasFisicas } = require('../models');
const { createToken } = require('../api/auth/jwt');

const loginUsuario = async (email) => {
  const usuario = await PessoasFisicas.findOne({ where: { email } });

  if (!usuario || undefined) {
    return { message: 'Campos inválidos' };
  }
  const token = createToken(email);

  return token;
};

module.exports = { loginUsuario };
