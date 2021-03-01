// export const types = [
//     'rock', 'ice',
//     'bug', 'dragon',
//     'ghost', 'dark',
//     'steel', 'fairy',
//     'normal', 'fire',
//     'flying', 'grass',
//     'fighting', 'water',
//     'ground', 'psychic',
//     'poison', 'electric',
// ];

const normal = [
    'normal',
    ['steel', 1],
    ['water', 1],
    ['bug', 1],
    ['dragon', 1],
    ['electric', 1],
    ['ghost', 0],
    ['fire', 1],
    ['fairy', 1],
    ['ice', 1],
    ['fighting', 1],
    ['normal', 1],
    ['grass', 1],
    ['psychic', 1],
    ['rock', 1],
    ['dark', 1],
    ['ground', 1],
    ['poison', 1],
    ['flying', 1],
]

const ice = [
    'ice',
    ['steel', 0.5],
    ['water', 0.5],
    ['bug', 2],
    ['dragon', 2],
    ['electric', 1],
    ['ghost', 1],
    ['fire', 0.5],
    ['fairy', 1],
    ['ice', 0.5],
    ['fighting', 1],
    ['normal', 1],
    ['grass', 2],
    ['psychic', 1],
    ['rock', 2],
    ['dark', 1],
    ['ground', 2],
    ['poison', 1],
    ['flying', 2],
]
const steel = [
    'steel',
    ['steel', 0.5],
    ['water', 1],
    ['bug', 1],
    ['dragon', 1],
    ['electric', 1],
    ['ghost', 1],
    ['fire', 0.5],
    ['fairy', 2],
    ['ice', 2],
    ['fighting', 1],
    ['normal', 1],
    ['grass', 1],
    ['psychic', 1],
    ['rock', 2],
    ['dark', 1],
    ['ground', 1],
    ['poison', 1],
    ['flying', 0.5],
]

const water = [
    'water',
    ['steel', 1],
    ['water', 0.5],
    ['bug', 1],
    ['dragon', 1],
    ['electric', 1],
    ['ghost', 1],
    ['fire', 2],
    ['fairy', 1],
    ['ice', 0.5],
    ['fighting', 1],
    ['normal', 1],
    ['grass', 0.5],
    ['psychic', 1],
    ['rock', 2],
    ['dark', 1],
    ['ground', 2],
    ['poison', 1],
    ['flying', 1],
]
const bug = [
    'bug',
    ['steel', 1],
    ['water', 1],
    ['bug', 1],
    ['dragon', 1],
    ['electric', 1],
    ['ghost', 1],
    ['fire', 0.5],
    ['fairy', 1],
    ['ice', 0.5],
    ['fighting', 1],
    ['normal', 1],
    ['grass', 2],
    ['psychic', 2],
    ['rock', 0.5],
    ['dark', 2],
    ['ground', 1],
    ['poison', 1],
    ['flying', 0.5],
]

const dragon = [
    'dragon',
    ['steel', 1],
    ['water', 1],
    ['bug', 1],

    ['dragon', 2],
    ['electric', 1],
    ['ghost', 1],

    ['fire', 1],
    ['fairy', 0],
    ['ice', 0.5],

    ['fighting', 1],
    ['normal', 1],
    ['grass', 0.5],

    ['psychic', 1],
    ['rock', 1],
    ['dark', 1],

    ['ground', 1],
    ['poison', 1],
    ['flying', 1],
]

const electric = [
    'electric',
    ['steel', 1],
    ['water', 2],
    ['bug', 1],

    ['dragon', 1],
    ['electric', 0.5],
    ['ghost', 1],

    ['fire', 1],
    ['fairy', 1],
    ['ice', 1],

    ['fighting', 1],
    ['normal', 1],
    ['grass', 0.5],

    ['psychic', 1],
    ['rock', 1],
    ['dark', 1],

    ['ground', 0],
    ['poison', 1],
    ['flying', 2],
]

const ghost = [
    'ghost',
    ['steel', 1],
    ['water', 1],
    ['bug', 0.5],

    ['dragon', 1],
    ['electric', 1],
    ['ghost', 1],

    ['fire', 1],
    ['fairy', 1],
    ['ice', 1],

    ['fighting', 0],
    ['normal', 0],
    ['grass', 1],

    ['psychic', 1],
    ['rock', 1],
    ['dark', 0.5],

    ['ground', 1],
    ['poison', 1],
    ['flying', 1],
]

const fire = [
    'fire',
    ['steel', 2],
    ['water', 0.5],
    ['bug', 2],

    ['dragon', 0.5],
    ['electric', 1],
    ['ghost', 1],

    ['fire', 0.5],
    ['fairy', 1],
    ['ice', 2],

    ['fighting', 1],
    ['normal', 1],
    ['grass', 2],

    ['psychic', 1],
    ['rock', 0.5],
    ['dark', 1],

    ['ground', 0.5],
    ['poison', 1],
    ['flying', 1],
]

const fairy = [
    'fairy',
    ['steel', 0.5],
    ['water', 1],
    ['bug', 0.5],

    ['dragon', 2],
    ['electric', 1],
    ['ghost', 1],

    ['fire', 1],
    ['fairy', 1],
    ['ice', 1],

    ['fighting', 2],
    ['normal', 1],
    ['grass', 0.5],

    ['psychic', 1],
    ['rock', 1],
    ['dark', 2],

    ['ground', 1],
    ['poison', 0.5],
    ['flying', 1],
]

const fighting = [
    'fighting',
    ['steel', 2],
    ['water', 1],
    ['bug', 1],

    ['dragon', 0.5],
    ['electric', 1],
    ['ghost', 0],

    ['fire', 1],
    ['fairy', 0.5],
    ['ice', 2],

    ['fighting', 1],
    ['normal', 2],
    ['grass', 1],

    ['psychic', 0.5],
    ['rock', 1],
    ['dark', 2],

    ['ground', 1],
    ['poison', 1],
    ['flying', 1],
]
const grass = [
    'grass',
    ['steel', 0.5],
    ['water', 2],
    ['bug', 0.5],

    ['dragon', 1],
    ['electric', 1],
    ['ghost', 1],

    ['fire', 0.5],
    ['fairy', 1],
    ['ice', 0.5],

    ['fighting', 1],
    ['normal', 1],
    ['grass', 0.5],

    ['psychic', 1],
    ['rock', 2],
    ['dark', 1],

    ['ground', 2],
    ['poison', 0.5],
    ['flying', 0.5],
]

const psychic = [
    'psychic',
    ['steel', 1],
    ['water', 1],
    ['bug', 0.5],

    ['dragon', 1],
    ['electric', 1],
    ['ghost', 1],

    ['fire', 1],
    ['fairy', 1],
    ['ice', 1],

    ['fighting', 2],
    ['normal', 1],
    ['grass', 0.5],

    ['psychic', 1],
    ['rock', 1],
    ['dark', 0],

    ['ground', 1],
    ['poison', 2],
    ['flying', 1],
]

const rock = [
    'rock',
    ['steel', 0.5],
    ['water', 0.5],
    ['bug', 2],

    ['dragon', 2],
    ['electric', 1],
    ['ghost', 1],

    ['fire', 1],
    ['fairy', 1],
    ['ice', 2],

    ['fighting', 1],
    ['normal', 1],
    ['grass', 0.5],

    ['psychic', 1],
    ['rock', 1],
    ['dark', 1],

    ['ground', 1],
    ['poison', 1],
    ['flying', 2],
]
const dark = [
    'dark',
    ['steel', 1],
    ['water', 1],
    ['bug', 0.5],

    ['dragon', 1],
    ['electric', 1],
    ['ghost', 2],

    ['fire', 1],
    ['fairy', 0.5],
    ['ice', 1],

    ['fighting', 0.5],
    ['normal', 1],
    ['grass', 1],

    ['psychic', 2],
    ['rock', 1],
    ['dark', 0.5],

    ['ground', 1],
    ['poison', 1],
    ['flying', 1],
]

const ground = [
    'ground',
    ['steel', 2],
    ['water', 0.5],
    ['bug', 1],

    ['dragon', 1],
    ['electric', 2],
    ['ghost', 1],

    ['fire', 2],
    ['fairy', 1],
    ['ice', 1],

    ['fighting', 1],
    ['normal', 1],
    ['grass', 1],

    ['psychic', 1],
    ['rock', 2],
    ['dark', 0.5],

    ['ground', 2],
    ['poison', 2],
    ['flying', 0],
]

const poison = [
    'poison',
    ['steel', 0],
    ['water', 1],
    ['bug', 0.5],

    ['dragon', 1],
    ['electric', 1],
    ['ghost', 1],

    ['fire', 1],
    ['fairy', 2],
    ['ice', 1],

    ['fighting', 1],
    ['normal', 1],
    ['grass', 2],

    ['psychic', 1],
    ['rock', 1],
    ['dark', 1],

    ['ground', 1],
    ['poison', 0.5],
    ['flying', 1],
]

const flying = [
    'flying',
    ['steel', 0.5],
    ['water', 1],
    ['bug', 2],

    ['dragon', 1],
    ['electric', 0.5],
    ['ghost', 1],

    ['fire', 1],
    ['fairy', 1],
    ['ice', 1],

    ['fighting', 2],
    ['normal', 1],
    ['grass', 2],

    ['psychic', 1],
    ['rock', 0.5],
    ['dark', 1],

    ['ground', 1],
    ['poison', 1],
    ['flying', 1],
]

export const effectiveness = [
    normal, bug, dark,
    rock, steel, water,
    ice, poison, psychic,

    ghost, grass, ground,
    fighting, fire, flying,
    dragon, electric, fairy,
]
