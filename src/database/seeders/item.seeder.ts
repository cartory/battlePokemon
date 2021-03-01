import { Item } from '../../models/models'

const items = [
    ['choice scarf', 'spe'],
    ['choice specs', 'spa'],
    ['choice band', 'att'],
    ['assault vest', 'spd'],
    ['eviolite', 'def']
]

export const boost = [
    'atk', 'def',
    'spa', 'spd', 'spe'
]

const seed = () => {
    items.forEach(async item => {
        let row = { name: item[0], type: boost[2], boost: 1.5 }
        await Item.create(row)
    })
}

export default {
    seed
}