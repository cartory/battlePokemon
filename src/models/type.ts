import { Model, DataType, DataTypes } from 'sequelize'

import sequelize from '../sequelize'

class Type extends Model { }
class Effectiveness extends Model { }

export const types = [
    'rock', 'ice',
    'bug', 'dragon',
    'ghost', 'dark',
    'steel', 'fairy',
    'normal', 'fire',
    'flying', 'grass',
    'fighting', 'water',
    'ground', 'psychic',
    'poison', 'electric',
];

Type.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    name: DataTypes.ENUM({
        values: types
    }),
    color: DataTypes.STRING
}, { sequelize })

Effectiveness.init({
    value: DataTypes.FLOAT,
}, { sequelize })

export {
    Type, Effectiveness
};