"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
const PORTA = 3000;
app.use(express_1.default.json());
app.use('/usuarios', usuarioRoutes_1.default);
app.get('/', (req, res) => {
    console.log('Requisição recebida na raiz');
    res.send('Bem-vindo a API de Usuários!');
});
database_1.default.authenticate()
    .then(() => console.log('Conectado'));
database_1.default.sync()
    .then(() => console.log('Tabelas sincronizadas'))
    .catch((erro) => console.error('Erro na sincrinização:', erro))
    .catch((erro) => console.error('Erro ao conectar:', erro));
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
