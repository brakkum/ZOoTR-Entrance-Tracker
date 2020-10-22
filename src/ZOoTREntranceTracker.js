import PromptForLocationEntrance from './PromptForLocationEntrance'
import InteriorConnection from './DataObjects/InteriorConnection'
import OverworldAreas from './DataObjects/OverworldAreas'
import getInitialState from './Functions/getInitialState'
import React, { useState, useLayoutEffect } from 'react'
import EntranceTypes from './DataObjects/EntranceTypes'
import useLocalStorage from './Hooks/useLocalStorage'
import AreasToAdd from './DataObjects/AreasToAdd'
import Grottos from './DataObjects/Grottos'
import Houses from './DataObjects/Houses'
import RouteFinder from './RouteFinder'
import Songs from './Songs'
import Menu from './Menu'
import Area from './Area'

export default function ZOoTREntranceTracker ({ ReactGA }) {
  const init = getInitialState()

  // state tracked in localStorage
  const [availableOverworldEntrances, setAvailableOverworldEntrances] = useLocalStorage('availableOverworldEntrances', init.availableOverworldEntrances)
  const [availableGrottoEntrances, setAvailableGrottoEntrances] = useLocalStorage('availableGrottoEntrances', init.availableGrottoEntrances)
  const [availableHouseEntrances, setAvailableHouseEntrances] = useLocalStorage('availableHouseEntrances', init.availableHouseEntrances)
  const [allOverworldEntrances, setAllOverworldEntrances] = useLocalStorage('allOverworldEntrances', init.allOverworldEntrances)
  const [availableDungeons, setAvailableDungeons] = useLocalStorage('availableDungeons', init.availableDungeons)
  const [interiorEntrances, setInteriorEntrances] = useLocalStorage('interiorEntrances', init.interiorEntrances)
  const [availableGrottos, setAvailableGrottos] = useLocalStorage('availableGrottos', init.availableGrottos)
  const [routeFinderStart, setRouteFinderStart] = useLocalStorage('routeFinderStart', init.routeFinderStart)
  const [availableHouses, setAvailableHouses] = useLocalStorage('availableHouses', init.availableHouses)
  const [showRouteFinder, setShowRouteFinder] = useLocalStorage('showRouteFinder', init.showRouteFinder)
  const [routeFinderEnd, setRouteFinderEnd] = useLocalStorage('routeFinderEnd', init.routeFinderEnd)
  const [overworldOnly, setOverworldOnly] = useLocalStorage('overworldOnly', init.overworldOnly)
  const [startAsChild, setStartAsChild] = useLocalStorage('startAsChild', init.startAsChild)
  const [hyrule, setHyrule] = useLocalStorage('hyrule', init.hyrule)
  const [songs, setSongs] = useLocalStorage('songs', init.songs)

  // state for app layout, reset on page load
  const [menuHeight, setMenuHeight] = useState(0)
  const [songsHeight, setSongsHeight] = useState(0)
  const [windowChanges, setWindowChanges] = useState(false)

  // trigger re-render when window size changes
  // cause menu and songs to reassess sizing
  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  })

  const handleResize = () => {
    setWindowChanges(!windowChanges)
  }

  const trackGaEvent = (category, action) => {
    ReactGA.event({
      category,
      action
    })
  }

  const getLocationsToPromptForBasedOnState = () => {
    const prompts = []
    const startPointSelected = interiorEntrances[Houses["Link's House"]] !== undefined || interiorEntrances[Houses['Temple of Time']] !== undefined

    if (!startPointSelected) {
      if (startAsChild) {
        prompts.push(Houses["Link's House"])
      } else {
        prompts.push(Houses['Temple of Time'])
      }
      // Don't allow any other prompts if start point isn't set
      return prompts
    } else if (!startAsChild && interiorEntrances[Houses["Link's House"]] === undefined) {
      prompts.push(Houses["Link's House"])
    }

    if (overworldOnly && interiorEntrances[Grottos["Dampe's Grave"]] === undefined) {
      prompts.push(Grottos["Dampe's Grave"])
    }

    let windmillEntranceFound
    if (interiorEntrances[Houses.Windmill] === undefined) {
      windmillEntranceFound = false
    } else if (interiorEntrances[Houses.Windmill] !== undefined &&
            interiorEntrances[Houses.Windmill].length === 1 &&
            interiorEntrances[Houses.Windmill][0].interior !== Grottos["Dampe's Grave"]) {
      windmillEntranceFound = true
    } else if (interiorEntrances[Houses.Windmill].length >= 2) {
      windmillEntranceFound = true
    } else {
      windmillEntranceFound = false
    }

    if ((overworldOnly && !windmillEntranceFound) ||
            (!overworldOnly && !windmillEntranceFound && interiorEntrances[Grottos["Dampe's Grave"]] !== undefined)) {
      prompts.push(Houses.Windmill)
    }

    if (songs['Prelude of Light'].collected &&
            (interiorEntrances[Houses['Temple of Time']] === undefined ||
                interiorEntrances[Houses['Temple of Time']].length === 1)) {
      prompts.push(Houses['Temple of Time'])
    }

    if (interiorEntrances[Houses['Potion Shop Back']] !== undefined &&
            interiorEntrances[Houses['Potion Shop Front']] === undefined) {
      prompts.push(Houses['Potion Shop Front'])
    } else if (interiorEntrances[Houses['Potion Shop Front']] !== undefined &&
            interiorEntrances[Houses['Potion Shop Back']] === undefined) {
      prompts.push(Houses['Potion Shop Back'])
    }

    return prompts
  }

  const resetState = () => {
    const initialState = getInitialState()

    setHyrule(initialState.hyrule)
    setInteriorEntrances(initialState.interiorEntrances)
    setAvailableOverworldEntrances(initialState.availableOverworldEntrances)
    setAvailableDungeons(initialState.availableDungeons)
    setAvailableHouses(initialState.availableHouses)
    setAvailableHouseEntrances(initialState.availableHouseEntrances)
    setAvailableGrottos(initialState.availableGrottos)
    setAvailableGrottoEntrances(initialState.availableGrottoEntrances)
    setSongs(initialState.songs)
    setShowRouteFinder(initialState.showRouteFinder)
    setStartAsChild(initialState.startAsChild)
    setOverworldOnly(initialState.overworldOnly)
    setRouteFinderStart(initialState.routeFinderStart)
    setRouteFinderEnd(initialState.routeFinderEnd)
    setAllOverworldEntrances(initialState.allOverworldEntrances)
  }

  const setPropertiesOfEntrance = (_hyrule, area, entrance, obj) => {
    const _area = _hyrule[area]
    Object.keys(obj).forEach((prop) => {
      _area.entrances[entrance][prop] = obj[prop]
    })
    return { ..._hyrule, [area]: _area }
  }

  const setPropertiesOfArea = (_hyrule, area, obj) => {
    if (_hyrule[area] === undefined) {
      console.error(`${area} is not an area`)
    }
    const _area = _hyrule[area]
    Object.keys(obj).forEach(prop => {
      _area[prop] = obj[prop]
    })
    return { ...hyrule, [area]: _area }
  }

  const toggleEntranceClear = (area, entrance) => {
    let _hyrule = hyrule
    _hyrule = setPropertiesOfEntrance(_hyrule, area, entrance, { clear: !hyrule[area].entrances[entrance].clear })
    trackGaEvent('tracker', 'toggle entrance clear')
    setHyrule({ ..._hyrule })
  }

  const toggleAreaExpanded = (area) => {
    let _hyrule = hyrule
    trackGaEvent('tracker', `set ${area} isExpanded: ${!hyrule[area].isExpanded}`)
    _hyrule = setPropertiesOfArea(_hyrule, area, { isExpanded: !hyrule[area].isExpanded })
    setHyrule({ ..._hyrule })
  }

  const expandAllAreas = () => {
    const _hyrule = hyrule
    trackGaEvent('tracker', 'expand all areas')
    Object.keys(_hyrule).forEach(area => {
      _hyrule[area].isExpanded = true
    })
    setHyrule({ ..._hyrule })
  }

  const hideAllAreas = () => {
    const _hyrule = hyrule
    trackGaEvent('tracker', 'hide all areas')
    Object.keys(_hyrule).forEach(area => {
      if (_hyrule[area].isAccessible) {
        _hyrule[area].isExpanded = false
      }
    })
    setHyrule({ ..._hyrule })
  }

  const setOverworldEntrance = (_hyrule, area, entrance, obj) => {
    _hyrule = setPropertiesOfEntrance(_hyrule, area, entrance, { leadsTo: obj })
    return _hyrule
  }

  const toggleSongCollected = song => {
    let _interiorEntrances = interiorEntrances
    let _hyrule = hyrule
    const _song = songs[song]
    // toggle song
    _song.collected = !songs[song].collected
    // change state based on new collected status
    if (_song.collected) {
      if (_song.locationType === EntranceTypes.Overworld) {
        [_hyrule, _interiorEntrances] = setAreaToAccessible(_hyrule, _interiorEntrances, _song.location)
      }
      [_hyrule, _interiorEntrances] = addInteriorEntrance(
        _hyrule,
        _interiorEntrances,
        {
          [_song.location]: { song: song }
        }
      )
    } else {
      [_hyrule, _interiorEntrances] = removeInteriorEntrances(
        _hyrule,
        _interiorEntrances,
        {
          [_song.location]: [{ song: song }]
        }
      )
      if (_song.locationType === EntranceTypes.Overworld) {
        [_hyrule, _interiorEntrances] = hideAreasIfEmpty(_hyrule, _interiorEntrances, [_song.location])
      }
    }
    trackGaEvent('tracker', 'toggle song collected')
    setSongs({ ...songs, [song]: _song })
    setInteriorEntrances({ ..._interiorEntrances })
    setHyrule({ ..._hyrule })
  }

  const addInteriorEntrance = (_hyrule, _interiorEntrances, obj) => {
    Object.keys(obj).forEach(location => {
      if (_interiorEntrances[location] === undefined) {
        _interiorEntrances[location] = []
      }
      _interiorEntrances[location].push(obj[location])
      if (InteriorConnection[location] !== undefined) {
        if (_interiorEntrances[InteriorConnection[location].location] === undefined) {
          _interiorEntrances[InteriorConnection[location].location] = []
        }
        _interiorEntrances[InteriorConnection[location].location].push(InteriorConnection[location].entranceObject)
        if (InteriorConnection[location].type === EntranceTypes.Overworld) {
          setPropertiesOfArea(_hyrule, InteriorConnection[location].location, { isAccessible: true })
        }
      }
    })
    return [_hyrule, _interiorEntrances]
  }

  const removeInteriorEntrances = (_hyrule, _interiorEntrances, obj) => {
    const _locationsAndObjects = {}

    Object.keys(obj).forEach(location => {
      _locationsAndObjects[location] = obj[location]
      if (InteriorConnection[location] !== undefined) {
        if (_locationsAndObjects[InteriorConnection[location].location] === undefined) {
          _locationsAndObjects[InteriorConnection[location].location] = []
        }
        _locationsAndObjects[InteriorConnection[location].location].push(InteriorConnection[location].entranceObject)
      }
    })
    const _locationsObj = {}
    const _locationsToFilter = Object.keys(_locationsAndObjects)

    for (let i = 0; i < _locationsToFilter.length; i++) {
      const locationBeingFiltered = _locationsToFilter[i]
      let _location = _interiorEntrances[locationBeingFiltered]
      if (_location === undefined) {
        continue
      }
      _locationsAndObjects[locationBeingFiltered].forEach(entranceObj => {
        _location = _location.filter(entrance => {
          return !(
            entrance.area === entranceObj.area &&
                        entrance.entrance === entranceObj.entrance &&
                        entrance.interior === entranceObj.interior &&
                        entrance.song === entranceObj.song
          )
        })
      })
      if (_location.length === 0) {
        delete _interiorEntrances[locationBeingFiltered];
        [_hyrule, _interiorEntrances] = hideAreasIfEmpty(_hyrule, _interiorEntrances, [locationBeingFiltered])
      } else {
        _locationsObj[locationBeingFiltered] = _location
      }
    };
    _interiorEntrances = { ..._interiorEntrances, ..._locationsObj }
    return [_hyrule, _interiorEntrances, Object.keys(_locationsAndObjects)]
  }

  const toggleKaeporaLanding = (_hyrule, sourceArea, destinationArea) => {
    if (sourceArea === OverworldAreas['Death Mountain Trail']) {
      _hyrule = setPropertiesOfArea(_hyrule, destinationArea, { hasKaeporaDeathMountainTrailLanding: !hyrule[destinationArea].hasKaeporaDeathMountainTrailLanding })
    } else if (sourceArea === OverworldAreas['Lake Hylia']) {
      _hyrule = setPropertiesOfArea(_hyrule, destinationArea, { hasKaeporaLakeHyliaLanding: !hyrule[destinationArea].hasKaeporaLakeHyliaLanding })
    }
    return _hyrule
  }

  const resetOverworldEntrance = (_hyrule, area, entrance) => {
    _hyrule = setPropertiesOfEntrance(_hyrule, area, entrance, { leadsTo: null })
    return _hyrule
  }

  const returnArrayForType = type => {
    if (type === EntranceTypes.House) {
      return availableHouses
    } else if (type === EntranceTypes.Dungeon) {
      return availableDungeons
    } else if (type === EntranceTypes.Grotto) {
      return availableGrottos
    }
    return []
  }

  const setArrayForType = (type, array) => {
    if (type === EntranceTypes.House) {
      setAvailableHouses([...array])
    } else if (type === EntranceTypes.Dungeon) {
      setAvailableDungeons([...array])
    } else if (type === EntranceTypes.Grotto) {
      setAvailableGrottos([...array])
    }
  }

  const removeInteriorFromPool = (type, interior) => {
    const array = returnArrayForType(type)
    if (!array) {
      return
    }
    array.splice(array.indexOf(interior), 1)
    setArrayForType(type, [...array])
  }

  const addInteriorBackIntoPool = (type, interior) => {
    const array = returnArrayForType(type)
    if (!array) {
      return
    }
    array.push(interior)
    setArrayForType(type, [...array])
  }

  const returnObjectForType = type => {
    if (type === EntranceTypes.Overworld) {
      return availableOverworldEntrances
    } else if (type === EntranceTypes.House) {
      return availableHouseEntrances
    } else if (type === EntranceTypes.Grotto) {
      return availableGrottoEntrances
    }
    return {}
  }

  const setObjectForType = (type, object) => {
    if (type === EntranceTypes.Overworld) {
      setAvailableOverworldEntrances({ ...object })
    } else if (type === EntranceTypes.House) {
      setAvailableHouseEntrances({ ...object })
    } else if (type === EntranceTypes.Grotto) {
      setAvailableGrottoEntrances({ ...object })
    }
  }

  const removeItemFromObjectArray = (area, type, item) => {
    const _obj = returnObjectForType(type)
    const _array = _obj[area]
    _array.splice(_obj[area].indexOf(item), 1)
    setObjectForType(type, { ..._obj, [area]: _array })
  }

  const addItemToObjectArray = (area, type, item) => {
    const _obj = returnObjectForType(type)
    const _array = _obj[area]
    _array.push(item)
    setObjectForType(type, { ..._obj, [area]: _array })
  }

  const removeAvailableEntrance = (area, entrance, type) => {
    switch (type) {
      default:
        break

      case EntranceTypes.House:
        removeItemFromObjectArray(area, EntranceTypes.House, entrance)
        break

      case EntranceTypes.Grotto:
        removeItemFromObjectArray(area, EntranceTypes.Grotto, entrance)
        break

      case EntranceTypes.Overworld:
        removeItemFromObjectArray(area, EntranceTypes.Overworld, entrance)
        break
    }
  }

  const addAvailableEntrance = (area, entrance, type) => {
    switch (type) {
      default:
        break
      case EntranceTypes.House:
        addItemToObjectArray(area, EntranceTypes.House, entrance)
        break

      case EntranceTypes.Grotto:
        addItemToObjectArray(area, EntranceTypes.Grotto, entrance)
        break

      case EntranceTypes.Overworld:
        addItemToObjectArray(area, EntranceTypes.Overworld, entrance)
        break
    }
  }

  const setInterior = (_hyrule, area, entrance, interior) => {
    _hyrule = setPropertiesOfEntrance(_hyrule, area, entrance, { clear: false, interior: interior })
    return _hyrule
  }

  const resetInterior = (_hyrule, area, entrance) => {
    _hyrule = setPropertiesOfEntrance(_hyrule, area, entrance, { interior: null })
    return _hyrule
  }

  const setAreaToAccessible = (_hyrule, _interiorEntrances, area) => {
    // on first time, check for areas to add
    if (!_hyrule[area].isAccessible) {
      if (AreasToAdd[area] !== undefined) {
        [_hyrule, _interiorEntrances] = addInteriorEntrance(
          _hyrule,
          _interiorEntrances,
          {
            [AreasToAdd[area].name]: AreasToAdd[area].entranceObject
          }
        )
        _hyrule = setPropertiesOfArea(_hyrule, AreasToAdd[area].name, { isAccessible: true })
      }
    }
    _hyrule = setPropertiesOfArea(_hyrule, area, { isAccessible: true })
    return [_hyrule, _interiorEntrances]
  }

  const areaIsEmpty = (_hyrule, areaName) => {
    const area = _hyrule[areaName]
    if (area === undefined) {
      return false
    }
    let empty = true
    if (area.hasKaeporaLakeHyliaLanding || area.hasKaeporaDeathMountainTrailLanding) {
      empty = false
    }
    Object.keys(area.entrances).forEach(key => {
      const entrance = area.entrances[key]
      if (entrance.interior !== undefined && entrance.interior !== null) {
        empty = false
      } else if (entrance.leadsTo !== undefined && entrance.leadsTo !== null) {
        empty = false
      }
    })
    if (interiorEntrances[areaName] !== undefined &&
            interiorEntrances[areaName].length > 0) {
      empty = false
    }
    return empty
  }

  const hideAreasIfEmpty = (_hyrule, _interiorEntrances, areas) => {
    for (let i = 0; i < areas.length; i++) {
      const areaName = areas[i]
      if (areaIsEmpty(_hyrule, areaName)) {
        _hyrule = setPropertiesOfArea(_hyrule, areaName, { isAccessible: false })
        if (AreasToAdd[areaName] !== undefined) {
          [_hyrule, _interiorEntrances] = removeInteriorEntrances(
            _hyrule,
            _interiorEntrances,
            {
              [AreasToAdd[areaName].name]: [AreasToAdd[areaName].entranceObject]
            }
          );
          [_hyrule, _interiorEntrances] = hideAreasIfEmpty(_hyrule, _interiorEntrances, [AreasToAdd[areaName].name])
        }
        if (routeFinderStart === areaName) {
          setRouteFinderStart(null)
        } else if (routeFinderEnd === areaName) {
          setRouteFinderEnd(null)
        }
      }
    };
    return [_hyrule, _interiorEntrances]
  }

  const setEntrance = (vanilla, selection) => {
    let _interiorEntrances = interiorEntrances
    let _hyrule = hyrule
    switch (vanilla.type) {
      case EntranceTypes.Overworld: {
        const area = vanilla.area
        const entrance = vanilla.entrance
        const selectedArea = selection.area
        const selectedEntrance = selection.entrance

        _hyrule = setOverworldEntrance(_hyrule, area, entrance, { area: selectedArea, entrance: selectedEntrance })
        _hyrule = setOverworldEntrance(_hyrule, selectedArea, selectedEntrance, { area, entrance })

        removeAvailableEntrance(area, entrance, 'Overworld')
        removeAvailableEntrance(selectedArea, selectedEntrance, 'Overworld');

        [_hyrule, _interiorEntrances] = addInteriorEntrance(
          _hyrule,
          _interiorEntrances,
          {
            [area]: { area: selectedArea, entrance: selectedEntrance },
            [selectedArea]: { area: area, entrance: entrance }
          }
        );

        [_hyrule, _interiorEntrances] = setAreaToAccessible(_hyrule, _interiorEntrances, area);
        [_hyrule, _interiorEntrances] = setAreaToAccessible(_hyrule, _interiorEntrances, selectedArea)
        trackGaEvent('tracker', 'set overworld entrance')
        break
      }
      // grottos, houses, and dungeons all
      // use the same 'interior' attribute
      case EntranceTypes.Grotto:
      case EntranceTypes.House:
      case EntranceTypes.Dungeon: {
        const area = vanilla.area
        const entrance = vanilla.entrance
        const interior = selection.interior

        _hyrule = setInterior(_hyrule, area, entrance, interior)

        removeInteriorFromPool(vanilla.type, interior);

        [_hyrule, _interiorEntrances] = addInteriorEntrance(
          _hyrule,
          _interiorEntrances,
          {
            [interior]: { area: area, entrance: entrance },
            [area]: { entrance: entrance, interior: interior }
          }
        );

        [_hyrule, _interiorEntrances] = setAreaToAccessible(_hyrule, _interiorEntrances, area)

        if (vanilla.type === EntranceTypes.House) {
          removeAvailableEntrance(area, entrance, 'house')
        } else if (vanilla.type === EntranceTypes.Grotto) {
          removeAvailableEntrance(area, entrance, 'grotto')
        }
        trackGaEvent('tracker', 'set interior entrance')
        break
      }
      case EntranceTypes['Kaepora Gaebora']: {
        const area = vanilla.area
        const entrance = vanilla.entrance
        const selectedArea = selection.area
        const selectedEntrance = selection.entrance

        _hyrule = toggleKaeporaLanding(_hyrule, area, selectedArea)
        _hyrule = setOverworldEntrance(_hyrule, area, entrance, { area: selectedArea, entrance: selectedEntrance });

        [_hyrule, _interiorEntrances] = addInteriorEntrance(
          _hyrule,
          _interiorEntrances,
          {
            [selectedArea]: { area: area, entrance: entrance }
          }
        );

        [_hyrule, _interiorEntrances] = setAreaToAccessible(_hyrule, _interiorEntrances, selectedArea)
        trackGaEvent('tracker', 'set kaepora entrance')
        break
      }
      default: {
        throw Error('Invalid type: ' + vanilla.type)
      }
    }
    setInteriorEntrances({ ..._interiorEntrances })
    setHyrule({ ..._hyrule })
  }

  const resetEntrance = (obj) => {
    let searchTerm = null
    let _interiorEntrances = interiorEntrances
    let _hyrule = hyrule
    switch (obj.type) {
      case EntranceTypes.Overworld: {
        const area = obj.area
        const entrance = obj.entrance
        const leadsToArea = obj.leadsTo.area
        const leadsToEntrance = obj.leadsTo.entrance
        searchTerm = area

        _hyrule = resetOverworldEntrance(_hyrule, area, entrance)
        _hyrule = resetOverworldEntrance(_hyrule, leadsToArea, leadsToEntrance)

        addAvailableEntrance(area, entrance, EntranceTypes.Overworld)
        addAvailableEntrance(leadsToArea, leadsToEntrance, EntranceTypes.Overworld)
        let areasAffected;
        [_hyrule, _interiorEntrances, areasAffected] = removeInteriorEntrances(
          _hyrule,
          _interiorEntrances,
          {
            [area]: [{ area: leadsToArea, entrance: leadsToEntrance }],
            [leadsToArea]: [{ area: area, entrance: entrance }]
          }
        );

        [_hyrule, _interiorEntrances] = hideAreasIfEmpty(_hyrule, _interiorEntrances, areasAffected)
        trackGaEvent('tracker', 'reset overworld entrance')
        break
      }
      case EntranceTypes.Grotto:
      case EntranceTypes.House:
      case EntranceTypes.Dungeon: {
        const area = obj.area
        const entrance = obj.entrance
        const interior = obj.interior
        searchTerm = interior

        _hyrule = resetInterior(_hyrule, area, entrance)

        addInteriorBackIntoPool(obj.type, interior)

        let areasAffected;
        [_hyrule, _interiorEntrances, areasAffected] = removeInteriorEntrances(
          _hyrule,
          _interiorEntrances,
          {
            [interior]: [{ area: area, entrance: entrance }],
            [area]: [{ entrance: entrance, interior: interior }]
          }
        );

        [_hyrule, _interiorEntrances] = hideAreasIfEmpty(_hyrule, _interiorEntrances, areasAffected)
        if (obj.type === EntranceTypes.House) {
          addAvailableEntrance(area, entrance, EntranceTypes.House)
        } else if (obj.type === EntranceTypes.Grotto) {
          addAvailableEntrance(area, entrance, EntranceTypes.Grotto)
        }
        trackGaEvent('tracker', 'reset interior entrance')
        break
      }
      case EntranceTypes['Kaepora Gaebora']: {
        const area = obj.area
        const leadsToArea = obj.leadsTo.area

        _hyrule = toggleKaeporaLanding(_hyrule, area, leadsToArea)
        _hyrule = resetOverworldEntrance(_hyrule, area, obj.entrance)

        let areasAffected;
        [_hyrule, _interiorEntrances, areasAffected] = removeInteriorEntrances(
          _hyrule,
          _interiorEntrances,
          {
            [leadsToArea]: [{ area: area, entrance: EntranceTypes['Kaepora Gaebora'] }]
          }
        );

        [_hyrule, _interiorEntrances] = hideAreasIfEmpty(_hyrule, _interiorEntrances, areasAffected)
        trackGaEvent('tracker', 'reset kaepora entrance')
        break
      }
      default: {
        throw Error('Invalid type: ' + obj.type)
      }
    }
    if (searchTerm !== null) {
      if (routeFinderStart === searchTerm) {
        setRouteFinderStart(null)
      } else if (routeFinderEnd === searchTerm) {
        setRouteFinderEnd(null)
      }
    }
    setInteriorEntrances({ ..._interiorEntrances })
    setHyrule({ ..._hyrule })
  }

  const locationsToPromptFor = getLocationsToPromptForBasedOnState()

  return (
    <div className='zootr-entrance-tracker'>

      <Menu
        setMenuHeight={setMenuHeight}
        resetState={resetState}
        trackGaEvent={trackGaEvent}
      />

      <div className='top-padding' style={{ height: menuHeight }} />

      {Object.keys(interiorEntrances).length >= 1 &&
        <div className='app-config flex-wraps'>
          <div className='entrances-control config-control'>
            <div className='field is-grouped'>
              <p className='control'>
                <a
                  href='#overworld'
                  className={'button is-outlined is-small ' + (!overworldOnly ? 'is-link' : 'is-dark')}
                  onClick={() => {
                    trackGaEvent('config', 'show all entrances')
                    setOverworldOnly(false)
                  }}
                >
                                    All Entrances
                </a>
              </p>
              <p className='control'>
                <a
                  href='#overworld'
                  className={'button is-outlined is-small ' + (overworldOnly ? 'is-link' : 'is-dark')}
                  onClick={() => {
                    trackGaEvent('config', 'show overworld only')
                    setOverworldOnly(true)
                  }}
                >
                                    Overworld and Dungeon Entrances
                </a>
              </p>
            </div>
          </div>
          <div className='router-control config-control'>
            <div className='field is-grouped'>
              <p className='control'>
                <a
                  href='#routing'
                  className={'button is-outlined is-small ' + (showRouteFinder ? 'is-link' : 'is-dark')}
                  onClick={() => {
                    trackGaEvent('config', 'show route finder')
                    setShowRouteFinder(true)
                  }}
                >
                                    Show Router
                </a>
              </p>
              <p className='control'>
                <a
                  href='#routing'
                  className={'button is-outlined is-small ' + (!showRouteFinder ? 'is-link' : 'is-dark')}
                  onClick={() => {
                    trackGaEvent('config', 'hide route finder')
                    setShowRouteFinder(false)
                  }}
                >
                                    Hide Router
                </a>
              </p>
            </div>
          </div>
          <div className='area-expansion-control config-control'>
            <div className='field is-grouped'>
              <p className='control'>
                <a
                  href='#expand'
                  className='button is-outlined is-small'
                  onClick={expandAllAreas} // tracked in the function
                >
                                    Expand All Entrances
                </a>
              </p>
              <p className='control'>
                <a
                  href='#expand'
                  className='button is-outlined is-small'
                  onClick={hideAllAreas} // tracked in the function
                >
                                    Hide All Entrances
                </a>
              </p>
            </div>
          </div>
        </div>}

      {showRouteFinder
        ? <RouteFinder
          availableLocations={interiorEntrances}
          toggleEntranceClear={toggleEntranceClear}
          hyrule={hyrule}
          start={routeFinderStart}
          end={routeFinderEnd}
          setRouteFinderStart={setRouteFinderStart}
          setRouteFinderEnd={setRouteFinderEnd}
          trackGaEvent={trackGaEvent}
          />
        : ''}

      <div className='user-prompts'>
        {locationsToPromptFor.length > 0 &&
                    locationsToPromptFor.map((location, i) => {
                      return <PromptForLocationEntrance
                        key={i}
                        locationToPromptFor={location}
                        availableEntrances={
                          Houses[location] !== undefined
                            ? availableHouseEntrances
                            : availableGrottoEntrances
                        }
                        type={Houses[location] !== undefined ? EntranceTypes.House : EntranceTypes.Grotto}
                        setEntrance={setEntrance}
                        showInitialAgeCheck={
                          (startAsChild && interiorEntrances[Houses["Link's House"]] === undefined) ||
                                (!startAsChild && interiorEntrances[Houses['Temple of Time']] === undefined)
                        }
                        startAsChild={startAsChild}
                        toggleStartAsChild={() => setStartAsChild(!startAsChild)}
                      />
                    })}
      </div>

      <div className='areas-container is-flex-desktop is-flex-tablet is-multiline flex-wraps'>
        {/* iterate through the areas of Hyrule */}
        {hyrule !== undefined && Object.keys(hyrule).sort().map((areaName, i) => {
          // get the current areas object from state
          const area = hyrule[areaName]
          // if it's not accessible, we don't want to display it
          if (!area.isAccessible) {
            return null
          }

          return <Area
            key={i}
            area={area}
            availableDungeons={availableDungeons}
            availableHouses={availableHouses}
            availableOverworldEntrances={availableOverworldEntrances}
            availableGrottos={availableGrottos}
            allOverworldEntrances={allOverworldEntrances}
            areaName={areaName}
            setEntrance={setEntrance}
            resetEntrance={resetEntrance}
            toggleEntranceClear={toggleEntranceClear}
            overworldOnly={overworldOnly}
            startAsChild={startAsChild}
            toggleAreaExpanded={toggleAreaExpanded}
                 />
        })}
      </div>

      <div className='bottom-padding' style={{ height: songsHeight * 2 }} />

      {/* display songs that can be collected and may open new areas */}
      {Object.keys(interiorEntrances).length > 1 && <Songs
        toggleSongCollected={toggleSongCollected}
        setSongsHeight={setSongsHeight}
        songs={songs}
      />}

    </div>

  )
}
