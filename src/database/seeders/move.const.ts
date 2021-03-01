import { Type } from '../../models/models'

const typeMove = [
    'rock', 'ice',
    'bug', 'dragon',
    'ghost', 'dark',
    'steel', 'fairy',
    'normal', 'fire',
    'flying', 'grass',
    'fighting', 'water',
    'ground', 'psychic',
    'poison', 'electric',
];

const types = [
    'POISON', 'ATK', 'SPA',
    'BURN', 'PARALIZE',
    'SLEEP', 'CONFUSE',
    'FREEZED',
]

export const GreninjaMoves = [
    ["ice beam", types[2], 90, 1, 0, 'ice'],
    ["dark pulse", types[2], 80, 1, 0, 'dark'],
    ["scald", types[2], 80, 1, 0, 'water'],
    ["toxic", types[0], 0, .9, 0, 'poison'],
];

export const pikachuMoves = [
    ["volt tackle", types[1], 120, 1, .1, 'electric'],
    ["brick break", types[1], 75, 1, 0, 'fighting'],
    ["thunder punch", types[1], 75, 0, 'electric'],
    ["thunder wave", types[0], 0, .9, 0, 'electric'],
];

export const trevenantMoves = [
    ["will-o-wisp", types[3], 0, .85, 0, 'ghost'],
    ["horn leech", types[1], 75, 1, 0, 'grass'],
    ["shadow claw", types[1], 70, 1, 0, 'ghost'],
    ["earthquake", types[1], 100, 1, 0, 'ground'],
];