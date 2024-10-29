import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes';
import sequelize from './database';

const app = express();
const PORTA = 3000;

app.use(express.json());
app.use('/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
    console.log('Requisição recebida na raiz');
    res.send('Bem-vindo a API de Usuários!');
});


sequelize.authenticate()
    .then(() => console.log('Conectado'))
    sequelize.sync()
    .then(() => console.log('Tabelas sincronizadas'))
    .catch((erro) => console.error('Erro na sincrinização:', erro))
    .catch((erro) => console.error('Erro ao conectar:', erro));

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
