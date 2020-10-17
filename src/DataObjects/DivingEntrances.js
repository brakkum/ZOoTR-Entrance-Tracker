import OverworldAreas from './OverworldAreas'

const DivingEntrances = {
  [OverworldAreas['Lake Hylia']]: {
    [OverworldAreas["Zora's Domain"]]: OverworldAreas["Zora's Domain"]
  },
  [OverworldAreas['Lost Woods']]: {
    [OverworldAreas["Zora's River"]]: OverworldAreas["Zora's River"]
  },
  [OverworldAreas["Zora's Domain"]]: {
    [OverworldAreas['Lake Hylia']]: OverworldAreas['Lake Hylia']
  },
  [OverworldAreas["Zora's River"]]: {
    [OverworldAreas['Lost Woods']]: OverworldAreas['Lost Woods']
  }
}

export default DivingEntrances
