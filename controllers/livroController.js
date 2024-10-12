const Livro = require('../models/livro');

// Listar todos os livros
exports.listarLivros = async (req, res) => {
    try {
        const livros = await Livro.find();
        res.json(livros);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Criar um novo livro
exports.criarLivro = async (req, res) => {
    const livro = new Livro({
        titulo: req.body.titulo,
        autor: req.body.autor,
        anoPublicacao: req.body.anoPublicacao
    });
    try {
        const novoLivro = await livro.save();
        res.status(201).json(novoLivro);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obter livro por ID
exports.obterLivroPorId = async (req, res) => {
    try {
        const livro = await Livro.findById(req.params.id);
        if (livro == null) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }
        res.json(livro);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Atualizar um livro
exports.atualizarLivro = async (req, res) => {
    try {
        const livro = await Livro.findById(req.params.id);
        if (livro == null) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        if (req.body.titulo != null) {
            livro.titulo = req.body.titulo;
        }
        if (req.body.autor != null) {
            livro.autor = req.body.autor;
        }
        if (req.body.anoPublicacao != null) {
            livro.anoPublicacao = req.body.anoPublicacao;
        }

        const livroAtualizado = await livro.save();
        res.json(livroAtualizado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Deletar um livro
exports.deletarLivro = async (req, res) => {
    try {
        const livro = await Livro.findByIdAndDelete(req.params.id);
        if (!livro) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        res.json({ message: 'Livro deletado com sucesso' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
