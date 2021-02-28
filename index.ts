import cors from 'cors'
import morgan from 'morgan'
import express from 'express'

import router from './src/routes'
import sequelize from './src/sequelize'

sequelize
    .authenticate()
    .then(() => console.log(`\x1b[32mDB Connected Successfully!!\x1b[0m`))
    .catch(error => console.error(error))

express()
    //  SETUP
    .use(cors())
    .use(morgan('dev'))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    //  ROUTES
    .use("/api", router)
    .get("/", (_, res) => {
        res.send('<h1>Welcome to besafe API</h1>')
    })
    .listen(process.env.PORT, () => {
        console.log(`Server running on \x1b[33mhttp://${process.env.HOST}:${process.env.PORT}\x1b[0m`);
    })