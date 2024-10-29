import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class Usuario extends Model {
    public id!: number;
    public nome!: string;
    public idade!: number;
}

Usuario.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps:false,
        modelName: 'Usuario',
        tableName: 'usuarios',
    }
);

export default Usuario;
