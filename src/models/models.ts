import Item from './item'
import Move from './move'
import { Pokemon, PokemonType } from './pokemon'
import { Type, Effectiveness, types } from './type'

// ITEM 1...* POKEMON
Item.hasMany(Pokemon)
Pokemon.belongsTo(Item)
// POKEMON *...* TYPE
Pokemon.belongsToMany(Type, { through: PokemonType })
Type.belongsToMany(Pokemon, { through: PokemonType })
// POKEMON 1...* MOVE
Pokemon.hasMany(Move)
Move.belongsTo(Pokemon)
// TYPE 1...* TYPE
Type.hasMany(Move)
Move.belongsTo(Type)
// EFFECTIVENESS => TYPE *...* TYPE
Type.belongsToMany(Type, { through: Effectiveness, as: 'Target' })

export {
    types,
    Item, Type, PokemonType,
    Move, Pokemon, Effectiveness,
}