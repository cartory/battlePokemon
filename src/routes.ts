import { Router } from 'express'

import {
    Item, Move,
    Type, Pokemon,
} from './models/models'
const router = Router();

router
    .get('/pokemons', async (_, res) => {
        try {
            res.json(await Pokemon.findAll())
        } catch (error) {
            res.json(error)
        }
    })
    .get('/types', async (_, res) => {
        try {
            res.json(await Type.findAll())
        } catch (error) {
            res.json(error)
        }
    })
    .get('/moves', async(_, res) => {
        try {
            res.json(await Move.findAll())
        } catch (error) {
            res.json(error)
        }
    })
    .get('/items', async (_, res) => {
        try {
            res.json(await Item.findAll())
        } catch (error) {
            res.json(error)
        }
    })

export default router;