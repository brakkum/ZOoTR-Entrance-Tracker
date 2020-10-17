import Houses from './Houses'
import Grottos from './Grottos'
import EntranceTypes from './EntranceTypes'
import Dungeons from './Dungeons'
import OverworldAreas from './OverworldAreas'

const InteriorConnection = {
  // one way connection to windmill from dampe's grave
  // when dampe's grave is accessed
  [Grottos["Dampe's Grave"]]: {
    location: Houses.Windmill,
    type: EntranceTypes.House,
    entranceObject: {
      entrance: Grottos["Dampe's Grave"],
      interior: Grottos["Dampe's Grave"]
    }
  },
  [Dungeons['Spirit Temple']]: {
    location: OverworldAreas['Desert Colossus'],
    type: EntranceTypes.Overworld,
    entranceObject: {
      area: null,
      entrance: Dungeons['Spirit Temple']
    }
  }
}

export default InteriorConnection
