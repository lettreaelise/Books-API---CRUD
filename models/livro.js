const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    anoPublicacao: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Livro', LivroSchema);
