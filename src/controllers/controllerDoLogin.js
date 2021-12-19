const serviceDoLogin = require('../services/serviceDoLogin');

const loginUsuario = async (req, res) => {
  const { email } = req.body;
  const token = await serviceDoLogin.loginUsuario(email);
  // Se conter uma propriedade mensage, retorna o status 400 de 'Bad request' com a mensagem que eu defino na camada services.
  if (token.message) {
    return res.status(400).json({ message: token.message });
  }
  // Retorna sucesso, com o token gerado para o usuário conseguir operar dentro do meu sistema.
  return res.status(200).json({ token });
};

module.exports = {
  loginUsuario
};
