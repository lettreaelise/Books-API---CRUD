const express = require('express');
const router = express.Router();
const { listarLivros, criarLivro, atualizarLivro, deletarLivro, obterLivroPorId } = require('../controllers/livroController');

// Rotas CRUD para livros
router.get('/', listarLivros);
router.post('/', criarLivro);
router.get('/:id', obterLivroPorId);
router.put('/:id', atualizarLivro);
router.delete('/:id', deletarLivro);

module.exports = router;
