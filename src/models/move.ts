import { Model, DataTypes } from 'sequelize'

import sequelize from '../sequelize'

class Move extends Model { }

const types = [
    'POISON', 'ATTACK',
    'BURN', 'PARALIZED',
    'SLEEP', 'CONFUSED',
    'FRZED',
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
    percent: DataTypes.FLOAT,

}, { sequelize })

export default Move