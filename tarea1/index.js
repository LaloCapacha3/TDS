const express = require("express");
require('dotenv').config();
const router = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(router)

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});