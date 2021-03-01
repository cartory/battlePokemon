import { Model, DataTypes } from 'sequelize'

import sequelize from '../sequelize'

class Pokemon extends Model { }
class PokemonType extends Model { }

Pokemon.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    ability: DataTypes.STRING,
    name: DataTypes.STRING,
    spriteFront: DataTypes.STRING,
    spriteBack: DataTypes.STRING,
    // STATS
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    specialAttack: DataTypes.INTEGER,
    specialDefense: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
}, { sequelize })

PokemonType.init({}, { sequelize })

export {
    Pokemon, PokemonType
}