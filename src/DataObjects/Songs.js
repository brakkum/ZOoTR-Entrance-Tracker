import OverworldAreas from './OverworldAreas'
import EntranceTypes from './EntranceTypes'
import Houses from './Houses'

const Songs = {
  'Minuet of Forest': {
    name: 'Minuet of Forest',
    color: '#6db863',
    location: OverworldAreas['Sacred Forest Meadow'],
    locationType: EntranceTypes.Overworld,
    object: {
      song: 'Minuet of Forest'
    },
    collected: false
  },
  'Bolero of Fire': {
    name: 'Bolero of Fire',
    color: '#eb5d49',
    location: OverworldAreas['Death Mountain Crater'],
    locationType: EntranceTypes.Overworld,
    object: {
      song: 'Bolero of Fire'
    },
    collected: false
  },
  'Serenade of Water': {
    name: 'Serenade of Water',
    color: '#7a8cd6',
    location: OverworldAreas['Lake Hylia'],
    locationType: EntranceTypes.Overworld,
    object: {
      song: 'Serenade of Water'
    },
    collected: false
  },
  'Requiem of Spirit': {
    name: 'Requiem of Spirit',
    color: '#eec68b',
    location: OverworldAreas['Desert Colossus'],
    locationType: EntranceTypes.Overworld,
    object: {
      song: 'Requiem of Spirit'
    },
    collected: false
  },
  'Nocturne of Shadow': {
    name: 'Nocturne of Shadow',
    color: '#a371a9',
    location: OverworldAreas.Graveyard,
    locationType: EntranceTypes.Overworld,
    object: {
      song: 'Nocturne of Shadow'
    },
    collected: false
  },
  'Prelude of Light': {
    name: 'Prelude of Light',
    color: '#fff877',
    location: Houses['Temple of Time'],
    locationType: EntranceTypes.House,
    object: {
      song: 'Prelude of Light'
    },
    collected: false
  }
}

export default Songs
