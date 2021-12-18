const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET || 'secret';

const createToken = (user) => {
  const payload = { ...user };

  const jwtConfig = {
    expiresIn: '24h',
    algorithm: 'HS256'
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};

const verifyToken = (token) => {
  const payload = jwt.verify(token, secret);

  return payload;
};

module.exports = {
  createToken,
  verifyToken
};
