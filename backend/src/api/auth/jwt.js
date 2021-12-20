const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET || 'secret';

const criarToken = (user) => {
  const payload = { ...user };

  const jwtConfig = {
    expiresIn: '24h',
    algorithm: 'HS256'
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};

const verificarToken = (token) => {
  const payload = jwt.verify(token, secret);

  return payload;
};

module.exports = {
  criarToken,
  verificarToken
};
