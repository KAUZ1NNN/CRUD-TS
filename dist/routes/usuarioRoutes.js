"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usuario_1 = __importDefault(require("../models/Usuario"));
const router = (0, express_1.Router)();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, idade } = req.body;
        console.log('Dados recebidos:', { nome, idade });
        const usuario = yield Usuario_1.default.create({ nome, idade });
        res.json(usuario);
    }
    catch (erro) {
        console.error('Erro ao criar usuário:', erro);
        res.status(500).json({ erro: 'Erro ao criar usuário' });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield Usuario_1.default.findAll();
        res.json(usuarios);
    }
    catch (erro) {
        console.error('Erro ao buscar usuários:', erro);
        res.status(500).json({ erro: 'Erro ao buscar usuários' });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield Usuario_1.default.findByPk(req.params.id);
        if (usuario) {
            res.json(usuario);
        }
        else {
            res.status(404).json({ erro: 'Usuário não encontrado' });
        }
    }
    catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar usuário' });
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, idade } = req.body;
        const usuario = yield Usuario_1.default.findByPk(req.params.id);
        if (usuario) {
            usuario.nome = nome;
            usuario.idade = idade;
            yield usuario.save();
            res.json(usuario);
        }
        else {
            res.status(404).json({ erro: 'Usuário não encontrado' });
        }
    }
    catch (erro) {
        res.status(500).json({ erro: 'Erro ao atualizar usuário' });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield Usuario_1.default.findByPk(req.params.id);
        if (usuario) {
            yield usuario.destroy();
            res.json({ mensagem: 'Usuário deletado' });
        }
        else {
            res.status(404).json({ erro: 'Usuário não encontrado' });
        }
    }
    catch (erro) {
        res.status(500).json({ erro: 'Erro ao deletar usuário' });
    }
}));
exports.default = router;
