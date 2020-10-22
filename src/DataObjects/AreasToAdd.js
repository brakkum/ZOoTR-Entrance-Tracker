import OverworldAreas from './OverworldAreas'

const AreasToAdd = {
  // Gerudo Valley river exit is always vanilla
  [OverworldAreas['Gerudo Valley']]: {
    name: OverworldAreas['Lake Hylia'],
    entranceObject: {
      area: OverworldAreas['Gerudo Valley'],
      entrance: OverworldAreas['Lake Hylia']
    }
  },
  [OverworldAreas['Lost Woods']]: {
    name: OverworldAreas['Lost Woods Bridge'],
    entranceObject: {
      area: OverworldAreas['Lost Woods'],
      entrance: OverworldAreas['Lost Woods Bridge']
    }
  }
}

export default AreasToAdd
