import path from 'path'
import { config } from 'dotenv'
import { Sequelize } from 'sequelize'

config()

export default new Sequelize({
    dialect: 'sqlite',
    database: 'pokemons',
    storage: path.join(__dirname, '/database/database.sqlite'),
    define: {
        timestamps: false,
        deletedAt: false,
    }
});