import OverworldAreas from './OverworldAreas'
import Dungeons from './Dungeons'

const NavigableAreas = [
  ...Object.keys(OverworldAreas),
  ...Object.keys(Dungeons)
]

export default NavigableAreas
