import Item from './item'
import Move from './move'
import Pokemon from './pokemon'
import { Type, Effectiveness, types } from './type'

// ITEM 1...* POKEMON
Item.hasMany(Pokemon)
Pokemon.belongsTo(Item)
// POKEMON *...* TYPE
Pokemon.belongsToMany(Type, { through: 'Pokemon_Type' })
Type.belongsToMany(Pokemon, { through: 'Pokemon_Type' })
// POKEMON 1...* MOVE
Pokemon.hasMany(Move)
Move.belongsTo(Pokemon)
// TYPE 1...* TYPE
Type.hasMany(Move)
Move.belongsTo(Type)
// EFFECTIVENESS => TYPE *...* TYPE
Type.belongsToMany(Type, { through: Effectiveness, as: 'weakness', foreignKey: 'weaknessID'})
Type.belongsToMany(Type, { through: Effectiveness, as: 'effective', foreignKey: 'effectiveID'})

export {
    types,
    Item, Type,
    Move, Pokemon, Effectiveness,
}