import { Router } from 'express'

import {
    Item, Move,
    Type, Pokemon, Effectiveness
} from './models/models'
const router = Router();

router
    .get('/pokemons', async (_, res) => {
        try {
            res.json(await Pokemon.findAll({
                include: [
                    { model: Type },
                    { model: Item },
                    { model: Move, include: [{ model: Type }] },
                ]
            }))
        } catch (error) {
            res.json(error)
        }
    })
    .get('/types', async (_, res) => {
        try {
            res.json(await Type.findAll({
                include: [
                    { model: Type, as: 'Target' }
                ]
            }))
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    })
    .get('/effectiveness', async (_, res) => {
        try {
            res.json(await Effectiveness.findAll())
        } catch (error) {
            res.json(error)
        }
    })
    .get('/moves', async (_, res) => {
        try {
            res.json(await Move.findAll({
                include: [
                    { model: Type }
                ]
            }))
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