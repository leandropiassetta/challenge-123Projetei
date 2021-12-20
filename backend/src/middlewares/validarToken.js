const { verificarToken } = require('../api/auth/jwt');

const validarToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  try {
    const dataUser = verificarToken(authorization);
    req.user = dataUser;
  } catch ({ error: message }) {
    return res.status(401).json({ message: 'Token expirado ou inválido' });
  }

  next();
};

module.exports = {
  validarToken
};
