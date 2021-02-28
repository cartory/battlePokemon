import { Model, DataTypes } from 'sequelize'

import sequelize from '../sequelize'

class Move extends Model { }

const types = [
    'POISON', 'ATK', 'SPA',
    'BURN', 'PARALIZE',
    'SLEEP', 'CONFUSE',
    'FREEZED',
]


Move.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    name: DataTypes.STRING,
    type: DataTypes.ENUM({
        values: types
    }),
    damage: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    prob: DataTypes.FLOAT,
    recoil: DataTypes.FLOAT,
}, { sequelize })

export default Move