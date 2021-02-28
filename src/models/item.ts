import { Model, DataTypes } from 'sequelize'

import sequelize from '../sequelize'

class Item extends Model { }

const boost = [
    'atk', 'def',
    'spa', 'spd', 'spe'
]

Item.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    name: DataTypes.STRING,
    boost: DataTypes.FLOAT,
    type: DataTypes.ENUM({ values: boost }),
}, { sequelize })

export default Item