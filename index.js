const express = require('express');

const app = express();

const PORT_NUMBER = 3000;

app.get('/products', (req, res) => res.send('Hello Products, API with MySQL!'));

app.listen(PORT_NUMBER, () => console.log(`Products API listening on port ${PORT_NUMBER}!`));