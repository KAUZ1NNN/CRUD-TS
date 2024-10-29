import { Router } from 'express';
import Usuario from '../models/Usuario';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { nome, idade } = req.body;
        console.log('Dados recebidos:', { nome, idade });
        const usuario = await Usuario.create({ nome, idade });
        res.json(usuario);
    } catch (erro) {
        console.error('Erro ao criar usuário:', erro); 
        res.status(500).json({ erro: 'Erro ao criar usuário' });
    }
});



router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (erro) {
        console.error('Erro ao buscar usuários:', erro);
        res.status(500).json({ erro: 'Erro ao buscar usuários' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ erro: 'Usuário não encontrado' });
        }
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar usuário' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { nome, idade } = req.body;
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            usuario.nome = nome;
            usuario.idade = idade;
            await usuario.save();
            res.json(usuario);
        } else {
            res.status(404).json({ erro: 'Usuário não encontrado' });
        }
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao atualizar usuário' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            await usuario.destroy();
            res.json({ mensagem: 'Usuário deletado' });
        } else {
            res.status(404).json({ erro: 'Usuário não encontrado' });
        }
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao deletar usuário' });
    }
});

export default router;
