import { Model, DataTypes } from 'sequelize'

import sequelize from '../sequelize'

class Pokemon extends Model {  }

Pokemon.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    name: DataTypes.STRING,
    sprite: DataTypes.STRING,
    // STATS
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    specialAttack: DataTypes.INTEGER,
    specialDefense: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
}, { sequelize })

export default Pokemon