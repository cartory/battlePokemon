import { effectiveness } from './effectiveness.const'
import { Type, Effectiveness } from '../../models/models'

const types = [
    ['normal', '#8c7d70'], ['fire', '#FFA500'],
    ['fighting', '#800000'], ['water', '#007FFF'],
    ['flying', '#7A9EF1'], ['grass', '#00FF00'],
    ['poison', '#800080'], ['electric', '#ffff00'],
    ['ground', '#c2b280'], ['psychic', '#FF69B4'],
    ['rock', '#964B00'], ['ice', '#00FFFF'],
    ['bug', '#808000'], ['dragon', '#4B0082'],
    ['ghost', '#9400d3'], ['dark', '#004242'],
    ['steel', '#8C92AC'], ['fairy', '#f984e5'],
];

const seed = () => {
    types.forEach(async type => {
        let _type = { name: type[0], color: type[1] }
        await Type.create(_type)
    })

    types.forEach(async type => {
        await seedEffectiveness(type[0])
    })
}

const seedEffectiveness = async (name: string) => {
    let type = await Type.findOne({ where: { name } })
    let TypeId = type?.getDataValue('id')

    let data = effectiveness.find(effectType => effectType[0] === name);

    data?.shift();
    data?.forEach(async effectType => {
        let targetName = effectType[0];
        let target = await Type.findOne({ where: { name: targetName } })
        let TargetId = target?.getDataValue('id')
        await Effectiveness.create({ TypeId, TargetId, value: effectType[1]})
    })
}

export default {
    seed
}