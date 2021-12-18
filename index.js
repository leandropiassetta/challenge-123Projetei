const express = require('express');
const app = express();
const PORT = 3306;

app.use(express.json());

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!!`));
