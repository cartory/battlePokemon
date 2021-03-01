import { Pokemon, Move, Type, Item, PokemonType } from '../../models/models'
import { GreninjaMoves, pikachuMoves, trevenantMoves } from './move.const'
const pokemons = [
    [
        'greninja',
        'spriteFront', 'spriteBack',
        72,
        95, 67,
        103, 71,
        122,
        'protean',
    ],
    [
        'pikachu',
        'spriteFront', 'spriteBack',
        55,
        80, 65,
        75, 65,
        120,
        'proteanLightning Rod',
    ],
    [
        'trevanant',
        'spriteFront', 'spriteback',
        85,
        110, 80,
        65, 82,
        56,
        'frisk',
    ]
]

const types = [
    ['water', 'dark'],
    ['electric'],
    ['ghost', 'grass'],
]

const moveSet = [
    GreninjaMoves,
    pikachuMoves,
    trevenantMoves,
]

const seed = () => {
    let i: number = 0;
    pokemons.forEach(async pokemon => {
        let items: number = await Item.count()
        let ItemId: number = Math.floor(Math.random() * items) + 1;
        let typesID: any[] = []

        for (let index = 0; index < types[i].length; index++) {
            const name = types[i][index];
            let type = await Type.findOne({ where: { name } })
            typesID.push(type?.getDataValue('id'))
        }

        i++;
        
        let row = {
            name: pokemon[0],
            spriteFront: pokemon[1],
            spriteBack: pokemon[2],
            ability: pokemon[9],
            hp: pokemon[3],
            attack: pokemon[4],
            defense: pokemon[5],
            specialAttack: pokemon[6],
            specialDefense: pokemon[7],
            speed: pokemon[8],
            ItemId,
        }

        let lastPokemon = await Pokemon.create(row)
        let PokemonId = lastPokemon.getDataValue('id')


        typesID.forEach(async (TypeId) => {
            await PokemonType.create({
                PokemonId,
                TypeId,
            })
        })

        let moves = moveSet[(PokemonId - 1) % moveSet.length]
        moves?.forEach(async move => {
            let name = move.pop();
            let type = await Type.findOne({ where: { name } })
            let _row = {
                name: move[0],
                type: move[1],
                damage: move[2],
                prob: move[3],
                recoil: move[4],
                PokemonId,
                TypeId: type?.getDataValue('id'),
            }
            await Move.create(_row, { fields: Object.keys(_row) })
        })
    })
}

export default {
    seed
}