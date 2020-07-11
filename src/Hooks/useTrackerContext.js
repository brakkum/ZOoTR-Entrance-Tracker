import { ConfigContext } from "../Context/ConfigContext";
import { AreaContext } from "../Context/AreaContext";
import { AreaTypes } from "../Data/Types/AreaTypes";
import { useContext } from "react";
import { cloneDeep } from "lodash";
import {HouseNames} from "../Data/Names/HouseNames";

export const useTrackerContext = () => {
    const { areas, setAreas } = useContext(AreaContext);
    const { config, setConfig } = useContext(ConfigContext);

    const setEntrance = (to, from) => {
        const updatedAreas = cloneDeep(areas);
        const {
            type: fromType,
            area: fromArea,
            entrance: fromEntrance
        } = from;
        const {
            type: toType,
            area: toArea,
            entrance: toEntrance
        } = to;
        updatedAreas[fromArea].entrances[fromEntrance].leadsTo =
            { area: toArea, entrance: toEntrance };
        if (config.decoupleEntrances.value) {
            updatedAreas[toArea].entrances[toEntrance].comesFrom =
                `${fromArea}: ${fromEntrance}`;
        } else {
            if (!updatedAreas[fromArea].entrances[fromEntrance].isOneWay) {
                updatedAreas[toArea].entrances[toEntrance].leadsTo =
                    { area: fromArea, entrance: fromEntrance };
            }
        }
        setAreas({ ...areas, ...updatedAreas });
    };

    const resetEntrance = (to, from) => {
        const updatedAreas = cloneDeep(areas);
        const {
            type: fromType,
            area: fromArea,
            entrance: fromEntrance
        } = from;
        const {
            type: toType,
            area: toArea,
            entrance: toEntrance
        } = to;
        updatedAreas[fromArea].entrances[fromEntrance].leadsTo = null;
        if (config.decoupleEntrances.value) {
            delete updatedAreas[toArea].entrances[toEntrance].comesFrom
        } else {
            if (!updatedAreas[fromArea].entrances[fromEntrance].isOneWay) {
                updatedAreas[toArea].entrances[toEntrance].leadsTo = null;
            }
        }
        setAreas({ ...areas, ...updatedAreas });
    };

    const updateConfigOption = option => {
        const opt = config[option];
        opt.value = !opt.value;
        setConfig({...config, [option]: opt});
    };

    // const getAvailableAreaTypes = () => {
    //     const availableSections = {};
    //     const decouple = config.decoupleEntrances.value;
    //     availableSections[AreaTypes.overworld] = areas[AreaTypes.overworld];
    //     if (decouple && config.shuffleDungeons.value) availableSections[AreaTypes.dungeon] = areas[AreaTypes.dungeon];
    //     if (decouple && config.shuffleHouses.value) availableSections[AreaTypes.house] = areas[AreaTypes.house];
    //     if (decouple && config.shuffleGrottos.value) availableSections[AreaTypes.grotto] = areas[AreaTypes.grotto];
    //     if (config.randomizeSongs.value) availableSections[AreaTypes.warpSong] = areas[AreaTypes.warpSong];
    //     if (config.randomizeSpawns.value) availableSections[AreaTypes.spawn] = areas[AreaTypes.spawn];
    //     return availableSections;
    // };

    const typeIsRandomized = type => {
          return {
              [AreaTypes.warpSong]: config.randomizeSongs.value,
              [AreaTypes.spawn]: config.randomizeSpawns.value,
              [AreaTypes.overworld]: config.shuffleOverworld.value,
              [AreaTypes.dungeon]: config.shuffleDungeons.value,
              [AreaTypes.house]: config.shuffleHouses.value,
              [AreaTypes.grotto]: config.shuffleGrottos.value
          }[type];
    };

    const poolsAreShuffled = () => config.mixEntrancePools.value;

    const typeShouldBeDisplayed = ({ type, hideUnlessDecoupled }) => {
        // console.log(type)
        if (hideUnlessDecoupled && !config.decoupleEntrances.value) return false;
        if (type === AreaTypes.kaeporaGaebora && !config.randomizeOwl.value) return false;
        if (type === AreaTypes.warpSong && !config.randomizeSongs.value) return false;
        if (type === AreaTypes.spawn && !config.randomizeSpawns.value) return false;
        if (type === AreaTypes.overworld && !config.shuffleOverworld.value) return false;
        if (type === AreaTypes.dungeon && !config.shuffleDungeons.value) return false;
        if (type === AreaTypes.house && !config.shuffleHouses.value) return false;
        if (type === AreaTypes.grotto && !config.shuffleGrottos.value) return false;
        return true;
    };

    const getSectionTypesToDisplay = () => {
        const types = [];
        types.push(AreaTypes.overworld);
        if (config.randomizeSongs.value) types.push(AreaTypes.warpSong);
        if (config.randomizeSpawns.value) types.push(AreaTypes.spawn);
        if (config.shuffleDungeons.value) types.push(AreaTypes.dungeon);
        if (config.shuffleHouses.value) types.push(AreaTypes.house);
        if (config.shuffleGrottos.value) types.push(AreaTypes.grotto);
        return types;
    };

    const shouldAreaBeDisplayedAsOptionForType = (sourceType, destinationType) => {
        const alwaysIncludeAll = [AreaTypes.spawn, AreaTypes.warpSong, AreaTypes.kaeporaGaebora];
        // console.log((typeIsRandomized(destinationType) && config.mixEntrancePools.value),
        //     alwaysIncludeAll.includes(sourceType),
        //     sourceType === destinationType)
        // spawns, warps, and owls are never selectable locations
        if (alwaysIncludeAll.includes(destinationType)) return false;
        if (alwaysIncludeAll.includes(sourceType) && !typeIsRandomized(sourceType)) return false;
        if (sourceType === destinationType) return true;
        if (typeIsRandomized(destinationType) && poolsAreShuffled()) return true;
        return false;
    };

    const getTrackerSectionsAndTypePossibilities = () => {
        // Used for displaying enabled types
        const trackerSections = {};
        // Used for tracking what sections should displayed for a type
        const possibleEntrances = {};
        // Get the types that should be shown
        const shownTypes = getSectionTypesToDisplay();
        for (const type of shownTypes) {
            trackerSections[type] = {};
            possibleEntrances[type] = {}; // key of type, with an object of keys types
        }

        // Loop over keys/objects of master areas state
        Object.entries(areas).map(([areaName, area]) => {
            // type of area we're looking at
            const areaType = area.type;
            // is this area type going to be shown?
            if (shownTypes.includes(areaType)) {
                // loop over the areas entrances to determine what should be displayed
                Object.entries(area.entrances).map(([entranceName, entrance]) => {
                    const entranceType = entrance.type;
                    // should it be shown in tracker layout
                    if (typeIsRandomized(entranceType)) {
                        if (trackerSections[areaType][areaName] === undefined) {
                            trackerSections[areaType][areaName] = cloneDeep(area);
                            trackerSections[areaType][areaName].entrances = {};
                        }
                        trackerSections[areaType][areaName].entrances[entranceName] = entrance;
                        // should it be shown as option for types available
                        for (const type of shownTypes) {
                            // console.warn(areaName, entranceName, type)
                            if (shouldAreaBeDisplayedAsOptionForType(type, areaType)) {
                                // console.error('yep')
                                if (possibleEntrances[type][areaType] === undefined) possibleEntrances[type][areaType] = {};
                                if (possibleEntrances[type][areaType][areaName] === undefined) {
                                    possibleEntrances[type][areaType][areaName] = cloneDeep(area);
                                    possibleEntrances[type][areaType][areaName].entrances = {};
                                }
                                possibleEntrances[type][areaType][areaName].entrances[entranceName] = entrance;
                            }
                        }
                    }
                });
            }
            return null;
        });
        return { trackerSections, possibleEntrances };
    };

    return {
        areas,
        config,
        setEntrance,
        resetEntrance,
        updateConfigOption,
        typeShouldBeDisplayed,
        getSectionTypesToDisplay,
        // getPossibleEntrancesForAvailableTypes,
        getTrackerSectionsAndTypePossibilities
    };
};
