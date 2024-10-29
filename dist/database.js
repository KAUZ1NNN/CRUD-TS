"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres', 'postgres', '1212', {
    host: 'localhost',
    dialect: 'postgres',
});
sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados'))
    .catch(erro => console.error('Erro ao conectar:', erro));
exports.default = sequelize;
