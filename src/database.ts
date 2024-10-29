import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres', 'postgres', '1212', {
    host: 'localhost',
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados'))
    .catch(erro => console.error('Erro ao conectar:', erro));

export default sequelize;
