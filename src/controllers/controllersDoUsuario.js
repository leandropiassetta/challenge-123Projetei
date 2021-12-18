const servicesDoUsuario = require('../services/servicesDoUsuario');

const criarUsuario = async (req, res) => {
  // Informações do usuário que estão vindo do formulário que ele está cadastrando oriunda minha aplicação via FrontEnd
  const infoUsuario = req.body;

  const usuarioNovo = await servicesDoUsuario.criarUsuario(infoUsuario);

  // Essa mensagem se vier irá avisar que o usuário já está cadastrado no meu banco de dados.
  if (usuarioNovo.message) {
    return res.status(409).json({ message: usuarioNovo.message });
  }
  // Se não voltar a mensagem oriunda do service, retorna um status de sucesso do tipo 201 que é o de criação
  return res.status(201).json(usuarioNovo);
};

module.exports = { criarUsuario };
