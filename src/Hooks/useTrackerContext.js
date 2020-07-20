import { ConfigContext } from "../Context/ConfigContext";
import { AreaContext } from "../Context/AreaContext";
import { AreaTypes } from "../Data/Types/AreaTypes";
import { useContext } from "react";
import { cloneDeep } from "lodash";
import {HouseNames} from "../Data/Names/HouseNames";
import {HouseEntranceLabels} from "../Data/Names/HouseEntranceLabels";

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
        if (entrancesAreDecoupled()) {
            updatedAreas[toArea].entrances[toEntrance].comesFrom.push(`${fromArea}: ${fromEntrance}`);
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
        if (entrancesAreDecoupled()) {
            updatedAreas[toArea].entrances[toEntrance].comesFrom =
                updatedAreas[toArea].entrances[toEntrance].comesFrom.filter((comesFrom) => {
                    return comesFrom !== `${fromArea}: ${fromEntrance}`;
                });
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

    const poolsAreMixed = () => config.mixEntrancePools.value;
    const entrancesAreDecoupled = () => config.decoupleEntrances.value;
    const owlsAreRandomized = () => config.randomizeOwl.value;
    const songsAreRandomized = () => config.randomizeSongs.value;
    const spawnsAreRandomized = () => config.randomizeSpawns.value;
    const overworldsAreRandomized = () => config.shuffleOverworld.value;
    const dungeonsAreRandomized = () => config.shuffleDungeons.value;
    const housesAreRandomized = () => config.shuffleHouses.value;
    const grottosAreRandomized = () => config.shuffleGrottos.value;
    const typesThatShouldBeHiddenWhenEntrancesAreNotDecoupled = [
        AreaTypes.grotto,
        AreaTypes.house,
        AreaTypes.dungeon
    ];

    const typeShouldBeDisplayed = ({ type, hideUnlessDecoupled }) => {
        if (hideUnlessDecoupled && !entrancesAreDecoupled()) return false;
        if (type === AreaTypes.kaeporaGaebora && !owlsAreRandomized()) return false;
        if (type === AreaTypes.warpSong && !songsAreRandomized()) return false;
        if (type === AreaTypes.spawn && !spawnsAreRandomized()) return false;
        if (type === AreaTypes.overworld && !overworldsAreRandomized()) return false;
        if (type === AreaTypes.dungeon && !dungeonsAreRandomized()) return false;
        if (type === AreaTypes.house && !housesAreRandomized()) return false;
        if (type === AreaTypes.grotto && !grottosAreRandomized()) return false;
        return true;
    };

    const getSectionTypesThatAreShuffled = () => {
        const types = [];
        types.push(AreaTypes.overworld);
        if (songsAreRandomized()) types.push(AreaTypes.warpSong);
        if (spawnsAreRandomized()) types.push(AreaTypes.spawn);
        if (dungeonsAreRandomized()) types.push(AreaTypes.dungeon);
        if (housesAreRandomized()) types.push(AreaTypes.house);
        if (grottosAreRandomized()) types.push(AreaTypes.grotto);
        return types;
    };

    const shouldEntranceBeDisplayedAsOptionForType = (typeForSelectOptions, entranceTypeBeingChecked) => {
        const typesThatAlwaysIncludeAllEntrances = [AreaTypes.spawn, AreaTypes.warpSong, AreaTypes.kaeporaGaebora];

        switch (entranceTypeBeingChecked) {
            case AreaTypes.overworld:
            case AreaTypes.dungeon:
            case AreaTypes.grotto:
            case AreaTypes.house: {
                if (
                    typeIsRandomized(entranceTypeBeingChecked) &&
                    (
                        typeForSelectOptions === entranceTypeBeingChecked ||
                        poolsAreMixed() ||
                        typesThatAlwaysIncludeAllEntrances.includes(typeForSelectOptions)
                    )
                ) {
                    return true;
                }
                return false;
            }
            // these should never be shown as 'to' options
            case AreaTypes.kaeporaGaebora:
            case AreaTypes.warpSong:
            case AreaTypes.spawn:
            default: {
                return false;
            }
        }
    };

    const getTrackerSectionsAndTypePossibilities = () => {
        // Used for displaying enabled types
        const trackerSections = {};
        // Used for tracking what sections should displayed for a type
        const possibleEntrances = {};
        // Get the types that should be shown
        const shuffledTypes = getSectionTypesThatAreShuffled();
        for (const type of shuffledTypes) {
            possibleEntrances[type] = {};
            // hide sections that should not be shown when entrances aren't decoupled
            if (!typesThatShouldBeHiddenWhenEntrancesAreNotDecoupled.includes(type) || !entrancesAreDecoupled()) {
                continue;
            }
            trackerSections[type] = {};
        }

        Object.entries(areas).map(([areaName, area]) => {
            const areaType = area.type;
            Object.entries(area.entrances).map(([entranceName, entrance]) => {
                const entranceType = entrance.type;
                // should this entrance be shown in tracker layout
                if ((typeIsRandomized(areaType) && entrancesAreDecoupled()) || areaType === AreaTypes.overworld) {
                    if (trackerSections[areaType] === undefined) {
                        trackerSections[areaType] = {};
                    }
                    if (trackerSections[areaType][areaName] === undefined) {
                        trackerSections[areaType][areaName] = cloneDeep(area);
                        trackerSections[areaType][areaName].entrances = {};
                    }
                    trackerSections[areaType][areaName].entrances[entranceName] = entrance;
                }
                // should it be shown as option for types available
                for (const shuffledType of shuffledTypes) {
                    if (shouldEntranceBeDisplayedAsOptionForType(shuffledType, entranceType)) {
                        if (entrance.leadsTo !== null) continue;
                        if (possibleEntrances[shuffledType][entranceType] === undefined) {
                            possibleEntrances[shuffledType][entranceType] = {};
                        }
                        if (possibleEntrances[shuffledType][entranceType][areaName] === undefined) {
                            possibleEntrances[shuffledType][entranceType][areaName] = {};
                            possibleEntrances[shuffledType][entranceType][areaName].entrances = {};
                        }
                        possibleEntrances[shuffledType][entranceType][areaName].entrances[entranceName] = entrance;
                    }
                }
            });
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
        getSectionTypesToDisplay: getSectionTypesThatAreShuffled,
        // getPossibleEntrancesForAvailableTypes,
        getTrackerSectionsAndTypePossibilities
    };
};
