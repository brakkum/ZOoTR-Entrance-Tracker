import RoutingLocationsToSkip from './DataObjects/RoutingLocationsToSkip';
import InteriorConnection from './DataObjects/InteriorConnection';
import ValidStartPoints from './DataObjects/ValidStartPoints';
import DivingEntrances from './DataObjects/DivingEntrances';
import OverworldAreas from './DataObjects/OverworldAreas';
import EntranceTypes from './DataObjects/EntranceTypes';
import useLocalStorage from './Hooks/useLocalStorage';
import Dungeons from './DataObjects/Dungeons';
import Grottos from './DataObjects/Grottos';
import Houses from './DataObjects/Houses';
import Songs from './DataObjects/Songs';
import RouteStep from './RouteStep';
import React from 'react';

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
    }
}

export default function RouteFinder ({ setRouteFinderStart, setRouteFinderEnd, availableLocations, hyrule, start, end, trackGaEvent, ...props }) {
  const [config, setConfig] = useLocalStorage('routingConfig', {
    isAdult: false,
    hasOcarina: false,
    hasLongShot: false,
    hasZoraScale: false,
    hasRutoLetter: false,
    hasZeldaLetter: false,
    hasSariaSong: false,
    hasZeldasLullaby: false,
  })

    const toggleConfigAttribute = attribute => {
    trackGaEvent('router', `toggle ${attribute} to ${!config[attribute]}`)
        setConfig({ ...config, [attribute]: !config[attribute] })
    };

  const newRouteFromEnd = () => {
    setRouteFinderStart(end)
        setRouteFinderEnd(null)
    };

  // start is always a string
  // end is an object
  // since start could be an area, dungeon, etc.
  const findStartFromEndObject = (previousCheck, derp, currentCheck, currentCheckLocation, availableLocations, currentlyBeingSearched = [], completelySearched = []) => {
    const startIsHouse = Houses[start] !== undefined
        let startIsGrotto = Grottos[start] !== undefined
        let startIsDungeon = Dungeons[start] !== undefined
        let startIsOverworld = OverworldAreas[start] !== undefined

        let locationIsSong = currentCheck.song !== undefined && Songs[currentCheck.song] !== undefined
        let locationIsGrotto = currentCheck.entrance !== undefined && currentCheck.interior !== undefined && Grottos[currentCheck.interior] !== undefined
        let locationIsHouse = currentCheck.entrance !== undefined && currentCheck.interior !== undefined && Houses[currentCheck.interior] !== undefined
        let locationIsDungeon = currentCheck.entrance !== undefined && currentCheck.interior !== undefined && Dungeons[currentCheck.interior] !== undefined
        let locationIsOverworld = currentCheck.area !== undefined && currentCheck.entrance !== undefined && OverworldAreas[currentCheck.area] !== undefined
        let locationIsInteriorConnection = currentCheck.area === null && currentCheck.entrance !== undefined && InteriorConnection[currentCheck.entrance] !== undefined

        let nextLocationToSearch = '';
    let shopEntrance = '';
    let shopExit = '';

    if (!currentlyBeingSearched.includes(end)) {
      currentlyBeingSearched.push(end)
        }

    if (currentlyBeingSearched.length > 200) {
      alert(`Sorry, something went wrong.\nDM @brakkum on the ZOoTR discord with the contents returned\nafter executing 'getAppState()' in the developer console.\nTell him you were trying to go from ${start} to ${end}.`)
            setRouteFinderStart(null)
            setRouteFinderEnd(null)
        }

    if (locationIsSong && !config.ignoreSongs) {
      return [{ start: start }, { song: currentCheck.song }]
        }

    if (locationIsHouse) {
      if (completelySearched.includes(currentCheck.interior) || currentlyBeingSearched.includes(currentCheck.interior)) {
        return []
            }

      if (startIsHouse) {
        if (currentCheck.interior === start) {
          return [{ start: currentCheck.interior }]
                }
      }

      if (currentCheck.interior === Houses["Link's House"] && config.considerChildSaveWarp) {
        return [{ start: start }, { entrance: 'Child Save Warp' }, { entrance: Houses["Link's House"] }]
            } else if (currentCheck.interior === Houses['Temple of Time'] && config.considerAdultSaveWarp) {
        return [{ start: start }, { entrance: 'Adult Save Warp' }, { entrance: Houses['Temple of Time'] }]
            }

      if (currentCheck.interior === Houses['Temple of Time'] ||
                currentCheck.interior === Houses.Windmill) {
        nextLocationToSearch = currentCheck.interior
            }

      const isPotionShop = currentCheck.interior === Houses['Potion Shop Front'] || currentCheck.interior === Houses['Potion Shop Back']

            if (isPotionShop && !(config.ignorePotionShopFromFront && currentCheck.interior === Houses['Potion Shop Back'])) {
        const currentPotionShopEntrance = currentCheck.interior
                let otherPotionShopEntrance = currentPotionShopEntrance === Houses['Potion Shop Front'] ? Houses['Potion Shop Back'] : Houses['Potion Shop Front']
                shopEntrance = otherPotionShopEntrance
                shopExit = currentPotionShopEntrance
                if (availableLocations[otherPotionShopEntrance] !== undefined) {
          const areaOtherEntranceLeadsTo = availableLocations[otherPotionShopEntrance][0].area
                    if (startIsOverworld && start === areaOtherEntranceLeadsTo) {
            return [{ start: start }, availableLocations[otherPotionShopEntrance][0], { entrance: shopExit }]
                    }
          nextLocationToSearch = areaOtherEntranceLeadsTo
                    if (!currentlyBeingSearched.includes(otherPotionShopEntrance)) {
            currentlyBeingSearched.push(otherPotionShopEntrance)
                    }
        }
      }
    }

    if (locationIsDungeon) {
      if (completelySearched.includes(currentCheck.interior) || currentlyBeingSearched.includes(currentCheck.interior)) {
        return []
            }

      if (startIsDungeon) {
        if (currentCheck.interior === start) {
          return [{ start: start }]
                }
      }
    }

    if (locationIsGrotto) {
      const isDampesGraveFromWindmill = currentCheck.interior === Grottos["Dampe's Grave"] &&
                currentCheck.entrance === Grottos["Dampe's Grave"] &&
                currentCheckLocation === Houses.Windmill

            if (startIsGrotto) {
        if (currentCheck.interior === start) {
          if (!(isDampesGraveFromWindmill && config.ignoreWindmillFromDampesGrave)) {
            return [{ start: start }]
                    }
        }
      }

      if (currentCheck.interior === Grottos["Dampe's Grave"] && !(isDampesGraveFromWindmill && config.ignoreWindmillFromDampesGrave)) {
        nextLocationToSearch = Grottos["Dampe's Grave"]
            }
    }

    if (locationIsOverworld) {
      if (completelySearched.includes(currentCheck.area) || currentlyBeingSearched.includes(currentCheck.area)) {
        return []
            }

      const isKaeporaGaeboraEntrance = currentCheck.entrance === EntranceTypes['Kaepora Gaebora']

            let isLostWoodsToBridgeEntrance = currentCheck.area === OverworldAreas['Lost Woods'] &&
                currentCheck.entrance === OverworldAreas['Lost Woods Bridge']

            let isGoronCityToDeathMountainCraterEntrance = currentCheck.area === OverworldAreas['Goron City'] &&
                currentCheck.entrance === OverworldAreas['Death Mountain Crater']

            let isZorasRiverLostWoodsEntrance = DivingEntrances[currentCheck.area] !== undefined &&
                DivingEntrances[currentCheck.area][currentCheck.entrance] !== undefined &&
                (currentCheck.area === OverworldAreas['Lost Woods'] || currentCheck.area === OverworldAreas["Zora's River"])

            let isLakeHyliaZorasDomainEntrance = DivingEntrances[currentCheck.area] !== undefined &&
                DivingEntrances[currentCheck.area][currentCheck.entrance] !== undefined &&
                (currentCheck.area === OverworldAreas["Zora's Domain"] || currentCheck.area === OverworldAreas['Lake Hylia'])

            let isSpiritTempleHandsEntrance = previousCheck.area === null && previousCheck.entrance === Dungeons['Spirit Temple']

            let isKakarikoGateEntrance = currentCheck.area === OverworldAreas['Kakariko Village'] && currentCheck.entrance === OverworldAreas['Death Mountain Trail']

            let isZorasDomainFromRiver = currentCheck.area === OverworldAreas["Zora's River"] && currentCheck.entrance === OverworldAreas["Zora's Domain"]

            let isZorasDomainToZorasFountainEntrance = (currentCheck.area === OverworldAreas["Zora's Domain"] && currentCheck.entrance === OverworldAreas["Zora's Fountain"]) ||
                (hyrule[currentCheck.area].entrances[currentCheck.entrance] !== undefined &&
                    ![null, undefined].includes(hyrule[currentCheck.area].entrances[currentCheck.entrance].leadsTo) &&
                    hyrule[currentCheck.area].entrances[currentCheck.entrance].leadsTo.area === OverworldAreas["Zora's Domain"] &&
                    hyrule[currentCheck.area].entrances[currentCheck.entrance].leadsTo.entrance === OverworldAreas["Zora's Fountain"])

            let isCrossingHauntedWasteland = false
            let previousCheckIsHauntedWasteland = previousCheck.area === OverworldAreas['Haunted Wasteland']
            if (previousCheckIsHauntedWasteland) {
        const hauntedWastelandEntraceBeingLedTo = hyrule[currentCheck.area].entrances[currentCheck.entrance].leadsTo.entrance
                let hauntedWastelandEntraceFromPreviousCheck = previousCheck.entrance
                isCrossingHauntedWasteland = hauntedWastelandEntraceBeingLedTo !== hauntedWastelandEntraceFromPreviousCheck
            }

      let isCrossingGerudoValley = false
            let previousCheckIsGerudoValley = previousCheck.area === OverworldAreas['Gerudo Valley']
            if (previousCheckIsGerudoValley) {
        const gerudoValleyEntranceBeingLedTo = hyrule[currentCheck.area].entrances[currentCheck.entrance].leadsTo.entrance
                let gerudoValleyEntranceFromPreviousCheck = previousCheck.entrance
                isCrossingGerudoValley =
                    (gerudoValleyEntranceBeingLedTo === OverworldAreas["Gerudo's Fortress"] && gerudoValleyEntranceFromPreviousCheck === OverworldAreas['Hyrule Field']) ||
                    (gerudoValleyEntranceBeingLedTo === OverworldAreas['Hyrule Field'] && gerudoValleyEntranceFromPreviousCheck === OverworldAreas["Gerudo's Fortress"])
            }

      let isPassingMido = false
            let previousCheckIsLostWoods = previousCheck.area === OverworldAreas['Lost Woods']
            if (previousCheckIsLostWoods) {
        const LostWoodsEntranceBeingLedTo = hyrule[currentCheck.area].entrances[currentCheck.entrance].leadsTo.entrance
                let LostWoodsEntranceFromPreviousCheck = previousCheck.entrance
        isPassingMido =
                    (LostWoodsEntranceBeingLedTo === OverworldAreas['Goron City'] && LostWoodsEntranceFromPreviousCheck === OverworldAreas['Sacred Forest Meadow']) ||
                    (LostWoodsEntranceBeingLedTo === OverworldAreas['Sacred Forest Meadow'] && LostWoodsEntranceFromPreviousCheck === OverworldAreas['Goron City']) ||
                    (LostWoodsEntranceBeingLedTo === OverworldAreas['Kokiri Forest'] && LostWoodsEntranceFromPreviousCheck === OverworldAreas['Sacred Forest Meadow']) ||
                    (LostWoodsEntranceBeingLedTo === OverworldAreas['Sacred Forest Meadow'] && LostWoodsEntranceFromPreviousCheck === OverworldAreas['Kokiri Forest']) ||
                    (LostWoodsEntranceBeingLedTo === OverworldAreas["Zora's River"] && LostWoodsEntranceFromPreviousCheck === OverworldAreas['Sacred Forest Meadow']) ||
                    (LostWoodsEntranceBeingLedTo === OverworldAreas['Sacred Forest Meadow'] && LostWoodsEntranceFromPreviousCheck === OverworldAreas["Zora's River"]) 
            }

    let currentCheckPassesOptions = true;
    //works        
    if(isKaeporaGaeboraEntrance && config.isAdult){
        currentCheckPassesOptions = false;
    }
    
    //???
    if(isSpiritTempleHandsEntrance){
        if(!config.isAdult || !config.hasLongShot){
            currentCheckPassesOptions = false;
        }
    }
    //works
    if(isZorasRiverLostWoodsEntrance && !config.hasZoraScale){
        currentCheckPassesOptions = false;
    }

    //works
    if(isCrossingHauntedWasteland){
        if((!config.isAdult || !config.hasLongShot)){
            currentCheckPassesOptions = false;
        }
    }

    //works
    if(isZorasDomainToZorasFountainEntrance){
        if(!config.isAdult && !config.hasRutoLetter){
            currentCheckPassesOptions = false;
        }
    }

    //works
    if(isLostWoodsToBridgeEntrance){
        if(!config.isAdult || !config.hasLongShot){
            currentCheckPassesOptions = false;
        }
    }

    //works
    if(isGoronCityToDeathMountainCraterEntrance && !config.isAdult){
        currentCheckPassesOptions = false;
    }

    //works
    if(isLakeHyliaZorasDomainEntrance && config.isAdult){
        currentCheckPassesOptions = false;
    }

    //works
    if(isKakarikoGateEntrance && !config.isAdult){
        if(!config.hasZeldaLetter){
            currentCheckPassesOptions = false;}
        
    }
    //works
    if(isCrossingGerudoValley && !config.isAdult){
        currentCheckPassesOptions = false;
    }

    if(isZorasDomainFromRiver && !(config.hasOcarina && config.hasZeldaLullaby)){
        console.log(config.hasOcarina)
        console.log(config.hasZeldaLullaby)
        currentCheckPassesOptions = false;
    }
    
    //works
    if(isPassingMido && config.isAdult){
        if(!config.hasOcarina || !config.hasSariaSong){
            currentCheckPassesOptions = false;    
        }
    }



            if (startIsOverworld) {
        if (completelySearched.includes(currentCheck.area) || currentlyBeingSearched.includes(currentCheck.area)) {
          return []
                }

        if (currentCheck.area === start) {
          if (currentCheckPassesOptions) {
            return [{ start: start }, { area: currentCheck.area, entrance: currentCheck.entrance }]
                    }
        }
      }

      if (currentCheckPassesOptions) {
        nextLocationToSearch = currentCheck.area
            }
    }

    if (locationIsInteriorConnection) {
      nextLocationToSearch = currentCheck.entrance
        }

    if (nextLocationToSearch !== '') {
      if (!currentlyBeingSearched.includes(nextLocationToSearch)) {
        currentlyBeingSearched.push(nextLocationToSearch)
            } else {
        return []
            }
      const nextArray = availableLocations[nextLocationToSearch]
            if (!nextArray) {
        return []
            }
      shuffleArray(nextArray)
            for (let i = 0; i < nextArray.length; i++) {
        const result = findStartFromEndObject(currentCheck, currentCheckLocation, nextArray[i], nextLocationToSearch, availableLocations, currentlyBeingSearched, completelySearched)
                if (result.length > 0) {
          if (locationIsHouse) {
            if (shopEntrance !== '' && shopExit !== '') {
              return [...result, availableLocations[shopEntrance][0], { entrance: shopExit }]
                        }
            return [...result, { entrance: currentCheck.interior }]
                    }
          return [...result, currentCheck]
                }
      }
      currentlyBeingSearched.splice(currentlyBeingSearched.indexOf(nextLocationToSearch), 1)
            completelySearched.push(nextLocationToSearch)
            return []
        } else {
      return []
        }
  }

    // start is always the same, as we look for it from end, end is current queued item
    const getRoutesFromStartToEnd = () => {
    if (availableLocations[end] === undefined) {
      return []
        }
    const endPaths = []
        let numberOfTriesPerEndLocation = 100

        availableLocations[end].forEach(endObject => {
      const pathsForThisEndLocation = []
            for (let i = 0; i < numberOfTriesPerEndLocation; i++) {
        const result = findStartFromEndObject({}, null, endObject, end, availableLocations)
                if (result.length > 0) {
          const path = [...result, { end: end }]
                    pathsForThisEndLocation.push(path)
                } else if (!ValidStartPoints.includes(end)) {
          // it's a place with many locations, e.g. a grotto
          // this particular path not possible, so return empty array
          pathsForThisEndLocation.push([])
                }
      }
      // include shortest path for this end point
      if (pathsForThisEndLocation.length > 0) {
        endPaths.push(pathsForThisEndLocation.reduce((a, b) => a.length <= b.length ? a : b))
            }
    })

        if (endPaths.length > 0) {
      if (ValidStartPoints.includes(end)) {
        return [endPaths.reduce((a, b) => a.length <= b.length ? a : b)]
            } else {
        return endPaths
            }
    } else {
      return []
        }
  }

    const getRoute = () => {
    if (!end || !start) {
      return null
        }
    const result = getRoutesFromStartToEnd()
        trackGaEvent('router', 'get route')
        return result
    };

  const availableLocationsKeys = Object.keys(availableLocations)
    if (availableLocationsKeys.length < 3) {
    return <h4 className='section is-size-4 has-text-centered'>More open areas necessary</h4>
    }
  const routes = getRoute()
    return (
    <div className='route-finder'>
      <div className='route-points-select'>
        <div className='route-select-start is-flex'>
          <h5 className='is-size-5'>Start:</h5>
          {start === null
                        ? <div className='select is-small'>
              <select value='Select Location' onChange={e => setRouteFinderStart(e.target.value)}>
                <option value=''>Select Location</option>
                {availableLocationsKeys.sort().map((location, i) => {
                  if (location === end || !ValidStartPoints.includes(location) || RoutingLocationsToSkip.includes(location)) {
                    return null
                                    }
                  return <option key={i} value={location}>
                    {location}
                  </option>
                })}
              </select>
            </div>
                        :                        <h5 className='is-size-5 is-flex selected-location'>
              {start}
              <span className='delete' onClick={() => setRouteFinderStart(null)}>x</span>
            </h5>}
        </div>
        <div className='route-select-end is-flex'>
          <h5 className='is-size-5'>End:</h5>
          {end === null
                        ? <div className='select is-small'>
              <select value='Select Location' onChange={e => setRouteFinderEnd(e.target.value)}>
                <option value=''>Select Location</option>
                {availableLocationsKeys.sort().map((location, i) => {
                  if (location === start || RoutingLocationsToSkip.includes(location)) {
                    return null
                                    }
                  return <option key={i} value={location}>
                    {location}
                  </option>
                })}
              </select>
            </div>
                        :                        <h5 className='is-size-5 is-flex selected-location'>
              {end}
              <span className='delete' onClick={() => setRouteFinderEnd(null)}>x</span>
            </h5>}
        </div>
      </div>
      {end && start && ValidStartPoints.includes(end) && <div className='buttons is-centered'>
        <button
          className='button is-small is-primary'
          onClick={newRouteFromEnd}
        >
                    New Route from End
        </button>
      </div>}
      
      <div className='routing-options buttons is-centered'>

      <button
          onClick={() => toggleConfigAttribute('isAdult')}
          className={'button is-small is-outlined ' + (config.isAdult ? 'is-danger' : 'is-dark')}
        >
                    Adult
          <span className='icon'>
            <i className={'fa ' + (config.isAdult ? 'fa-check' : 'fa-close')} />
          </span>
        </button>


        <button
          onClick={() => toggleConfigAttribute('hasOcarina')}
          className={'button is-small is-outlined ' + (config.hasOcarina ? 'is-danger' : 'is-dark')}
        >
                    Ocarina
          <span className='icon'>
            <i className={'fa ' + (config.hasOcarina ? 'fa-check' : 'fa-close')} />
          </span>
        </button>
        
        
        
        <button
          onClick={() => toggleConfigAttribute('hasZeldaLullaby')}
          className={'button is-small is-outlined ' + (config.hasZeldaLullaby ? 'is-danger' : 'is-dark')}
        >
                    Zelda's Lullaby
          <span className='icon'>
            <i className={'fa ' + (config.hasZeldaLullaby ? 'fa-check' : 'fa-close')} />
          </span>
        </button>
        
        
        
        
        <button
          onClick={() => toggleConfigAttribute('hasSariaSong')}
          className={'button is-small is-outlined ' + (config.hasSariaSong ? 'is-danger' : 'is-dark')}
        >
                    Saria's Song
          <span className='icon'>
            <i className={'fa ' + (config.hasSariaSong ? 'fa-check' : 'fa-close')} />
          </span>
        </button>
        
        
        
        
        <button
          onClick={() => toggleConfigAttribute('hasLongShot')}
          className={'button is-small is-outlined ' + (config.hasLongShot ? 'is-danger' : 'is-dark')}
        >
                    LongShot
          <span className='icon'>
            <i className={'fa ' + (config.hasLongShot ? 'fa-check' : 'fa-close')} />
          </span>
        </button>
        
        
        
        
        <button
          onClick={() => toggleConfigAttribute('hasZoraScale')}
          className={'button is-small is-outlined ' + (config.hasZoraScale ? 'is-danger' : 'is-dark')}
        >
                    Zora's Scale
          <span className='icon'>
            <i className={'fa ' + (config.hasZoraScale ? 'fa-check' : 'fa-close')} />
          </span>
        </button>
        
        
        
        
        <button
          onClick={() => toggleConfigAttribute('hasRutoLetter')}
          className={'button is-small is-outlined ' + (config.hasRutoLetter ? 'is-danger' : 'is-dark')}
        >
                    Ruto's letter
          <span className='icon'>
            <i className={'fa ' + (config.hasRutoLetter ? 'fa-check' : 'fa-close')} />
          </span>
        </button>
        
        
        
        
        <button
          onClick={() => toggleConfigAttribute('hasZeldaLetter')}
          className={'button is-small is-outlined ' + (config.hasZeldaLetter ? 'is-danger' : 'is-dark')}
        >
                    Zelda's Letter'
          <span className='icon'>
            <i className={'fa ' + (config.hasZeldaLetter ? 'fa-check' : 'fa-close')} />
          </span>
        </button>
        
        
        
      </div>
      {routes !== null && routes.length > 0
                ? <div className='section routing-results'>
          {routes.map((route, i) => {
            // each individual route
            if (route.length === 0) {
              return <div key={i} className='route columns is-vcentered'>
                <div className='route-step column has-text-centered'>
                                    Location not reachable from Start
                </div>
              </div>
            }
            let routeEndArea = null
                        let routeEndEntrance = null
                        let routeHasClearAttribute
                        let routeIsClear
                        return <div key={i} className='route columns is-vcentered'>
              {route.map((step, j) => {
                const isEndStep = j === route.length - 1
                                if (j === route.length - 2) {
                  routeEndArea = step.area
                                    routeEndEntrance = step.entrance
                                }
                routeHasClearAttribute = hyrule[routeEndArea] !== undefined &&
                                    hyrule[routeEndArea].entrances[routeEndEntrance] !== undefined &&
                                    hyrule[routeEndArea].entrances[routeEndEntrance].clear !== undefined
                                if (routeHasClearAttribute) {
                  routeIsClear = hyrule[routeEndArea].entrances[routeEndEntrance].clear
                                }

                // each step of a route
                return <RouteStep
                  key={j}
                  isEndStep={isEndStep}
                  routeIsClear={routeIsClear}
                  routeHasClearAttribute={routeHasClearAttribute}
                  step={step}
                  routeEndArea={routeEndArea}
                  routeEndEntrance={routeEndEntrance}
                  toggleEntranceClear={props.toggleEntranceClear}
                                       />
              })}
            </div>
          })}
        </div>
                :                routes !== null && routes.length === 0
                    ? <h4 className='is-size-4 has-text-centered'>Looks like this route isn't possible yet</h4>
                    :                    ''}
    </div>
  )
}
