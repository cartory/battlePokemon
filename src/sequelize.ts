import { Sequelize } from 'sequelize'
import { config } from 'dotenv'

config()

export default new Sequelize({
    dialect: 'sqlite',
    database: 'pokemons',
    define: {
        timestamps: false,
        deletedAt: false,
    }
});