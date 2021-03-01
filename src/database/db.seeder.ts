import sequelize from '../sequelize'
import type from './seeders/type.seeder'
import item from './seeders/item.seeder'
import pokemon from './seeders/pokemon.seeder'

const seedDB = async () => {
    item.seed()
    type.seed()
    pokemon.seed()
}

sequelize
    .authenticate()
    .then(async () => {
        try {
            await sequelize.sync({ force: true })
            await seedDB()
            console.log(`\x1b[32mDB DATABASE SEEDED!!\x1b[0m`)
        } catch (error) {
            console.error(error)

        }
    })
    .catch((err) => console.error(err))