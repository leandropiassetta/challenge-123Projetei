const { verifyToken } = require('../api/auth/jwt');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  try {
    const dataUser = verifyToken(authorization);
    req.user = dataUser;
  } catch ({ error: message }) {
    return res.status(401).json({ message: 'Token expirado ou inválido' });
  }

  next();
};

module.exports = {
  validateToken
};
