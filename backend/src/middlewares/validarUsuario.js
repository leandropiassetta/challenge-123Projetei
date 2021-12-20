const { PessoasFisicas } = require('../models');

function checandoCampos(req, res, next) {
  const { cpf, nome, telefone, email, dataDeNascimento } = req.body;

  if (!cpf || !nome || !telefone || !email || !dataDeNascimento) {
    return res
      .status(400)
      .json({ message: 'Todos os campos são obrigatórios!' });
  }
  next();
}

async function checarEmail(req, res, next) {
  const { email } = req.body;

  const emailValido = /^[\w.]+@[a-z]+\.\w{2,3}$/g.test(email);

  if (!emailValido) {
    return res
      .status(400)
      .json({ message: 'Email inválido, digite novamente!' });
  }

  next();
}

module.exports = {
  checandoCampos,
  checarEmail
};
