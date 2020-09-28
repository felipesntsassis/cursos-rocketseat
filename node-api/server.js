const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o Banco de Dados
mongoose.connect(
    'mongodb://localhost:27017', { useNewUrlParser: true }
)

// Primeira Rota
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3001);
