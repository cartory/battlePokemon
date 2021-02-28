import { Model, DataTypes } from 'sequelize'

import sequelize from '../sequelize'

class Item extends Model { }

Item.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    name: DataTypes.STRING,
    type: DataTypes.FLOAT,
}, { sequelize })

export default Item