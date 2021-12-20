const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3308;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const rotaLogin = require('./src/api/routes/rotaLogin');
const rotasDoUsuario = require('./src/api/routes/rotasUsuario');

app.use('/login', rotaLogin);
app.use('/usuarios', rotasDoUsuario);

app.listen(PORT, () =>
  console.log(`O servidor está funcionando no http://localhost:${PORT}`)
);
