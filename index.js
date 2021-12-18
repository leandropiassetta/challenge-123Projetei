const express = require('express');
const app = express();
const PORT = 3308;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const rotaLogin = require('./src/api/routes/rotaLogin');
const rotasDoUsuario = require('./src/api/routes/rotasUsuario');

app.use('/login', rotaLogin);
app.use('/usuario', rotasDoUsuario);

app.listen(PORT, () =>
  console.log(`O servidor está funcionando no http://localhost:${PORT}`)
);
