const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o Banco de Dados
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', { useNewUrlParser: true }
);
// Mapeamento das models
requireDir('./src/models');

const Product = mongoose.model('Product');

// Primeira Rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'https://github.com/facebook/react-native'
    });

    return res.send('Hello World!');
});

app.listen(3001);
