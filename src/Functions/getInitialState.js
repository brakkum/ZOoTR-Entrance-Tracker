import Hyrule from '../DataObjects/Hyrule'
import Songs from '../DataObjects/Songs'
import EntranceTypes from '../DataObjects/EntranceTypes'

export default function getInitialState () {
  const hyrule = JSON.parse(JSON.stringify(Hyrule)) // master world state
  const interiorEntrances = {} // area/interior keys access array of location objects
  const availableOverworldEntrances = {} // available entrances of type Overworld
  const availableDungeons = [] // dungeons not yet assigned to dungeon entrance
  const availableHouses = [] // houses not yet assigned to house entrance
  const availableHouseEntrances = {} // areas and the houses within them
  const availableGrottos = [] // grottos not yet assigned to grotto entrance
  const availableGrottoEntrances = {} // overworld grotto entrances
  const songs = JSON.parse(JSON.stringify(Songs)) // songs state
  const showRouteFinder = false // hide route finder on start
  const startAsChild = true // default to starting as child
  const overworldOnly = false // show all entrances by default
  const allOverworldEntrances = {} // all entrances, never modified

  Object.keys(Hyrule).forEach(area => {
    availableOverworldEntrances[area] = []
    availableGrottoEntrances[area] = []
    allOverworldEntrances[area] = []

    Object.keys(Hyrule[area].entrances).forEach(entranceName => {
      const entrance = Hyrule[area].entrances[entranceName]
      const type = entrance.type

      if (type === EntranceTypes.Overworld) {
        availableOverworldEntrances[area].push(entranceName)
        allOverworldEntrances[area].push(entranceName)
      } else if (type === EntranceTypes.Dungeon) {
        availableDungeons.push(entranceName)
      } else {
        const displayName = entrance.display || entranceName

        if (type === EntranceTypes.House) {
          availableHouses.push(displayName)
          if (availableHouseEntrances[area] === undefined) {
            availableHouseEntrances[area] = []
          }
          availableHouseEntrances[area].push(entranceName)
        } else if (type === EntranceTypes.Grotto) {
          availableGrottos.push(displayName)
          availableGrottoEntrances[area].push(entranceName)
        }
      }
    })
  })

  return {
    hyrule,
    interiorEntrances,
    availableOverworldEntrances,
    availableDungeons,
    availableHouses,
    availableHouseEntrances,
    availableGrottos,
    availableGrottoEntrances,
    songs,
    showRouteFinder,
    startAsChild,
    overworldOnly,
    routeFinderStart: null,
    routeFinderEnd: null,
    routeFinderAge: true,
    allOverworldEntrances
  }
}
