const express = require('express');
const mongoose = require('mongoose');
const app = express();
const livroRoutes = require('./routes/livroRoutes');

// Middleware
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/livrosdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Rotas
app.use('/api/livros', livroRoutes);

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
