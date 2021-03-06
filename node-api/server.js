const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o Banco de Dados
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', { useNewUrlParser: true }
);
// Mapeamento das models
requireDir('./src/models');

const Product = mongoose.model('Product');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
