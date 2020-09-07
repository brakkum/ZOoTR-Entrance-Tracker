import { ConfigContext } from "../Context/ConfigContext";
import { AreaContext } from "../Context/AreaContext";
import { 
    GROTTO, 
    HOUSE, 
    DUNGEON,
    OVERWORLD
} from "../Data/Types/AreaTypes";
import { 
    DUNGEON_ENTRANCE, 
    GROTTO_ENTRANCE, 
    HOUSE_ENTRANCE, 
    OVERWORLD_ENTRANCE, 
    KAEPORA_GAEBORA, 
    WARP_SONG, 
    SPAWN 
} from "../Data/Types/EntranceTypes";
import { useContext } from "react";
import { cloneDeep } from "lodash";

export const useTrackerContext = () => {
    const { areas, setAreas } = useContext(AreaContext);
    const { config, setConfig } = useContext(ConfigContext);

    const poolsAreMixed = config.mixEntrancePools.value;
    const entrancesAreDecoupled = config.decoupleEntrances.value;
    const owlsAreRandomized = config.randomizeOwl.value;
    const songsAreRandomized = config.randomizeSongs.value;
    const spawnsAreRandomized = config.randomizeSpawns.value;
    const overworldsAreRandomized = config.shuffleOverworld.value;
    const dungeonsAreRandomized = config.shuffleDungeons.value;
    const housesAreRandomized = config.shuffleHouses.value;
    const grottosAreRandomized = config.shuffleGrottos.value;
    const typesThatShouldBeHiddenWhenEntrancesAreNotDecoupled = [
        GROTTO,
        HOUSE,
        DUNGEON
    ];

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
        if (entrancesAreDecoupled) {
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
        if (entrancesAreDecoupled) {
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
              [WARP_SONG]: config.randomizeSongs.value,
              [SPAWN]: config.randomizeSpawns.value,
              [OVERWORLD]: config.shuffleOverworld.value,
              [DUNGEON]: config.shuffleDungeons.value,
              [HOUSE]: config.shuffleHouses.value,
              [GROTTO]: config.shuffleGrottos.value,
              [KAEPORA_GAEBORA]: config.randomizeOwl.value
          }[type];
    };

    const getSectionTypesThatAreShuffled = () => {
        const types = [];
        types.push(OVERWORLD);
        if (songsAreRandomized) types.push(WARP_SONG);
        if (spawnsAreRandomized) types.push(SPAWN);
        if (dungeonsAreRandomized) types.push(DUNGEON);
        if (housesAreRandomized) types.push(HOUSE);
        if (grottosAreRandomized) types.push(GROTTO);
        if (owlsAreRandomized) types.push(KAEPORA_GAEBORA);
        return types;
    };

    const shouldEntranceBeDisplayedAsOptionForType = (typeForSelectOptions, entranceTypeBeingChecked) => {
        const typesThatAlwaysIncludeAllEntrances = [SPAWN, WARP_SONG, KAEPORA_GAEBORA];

        switch (entranceTypeBeingChecked) {
            case OVERWORLD:
                if (overworldsAreRandomized) {
                    return true;
                }
            case DUNGEON:
            case GROTTO:
            case HOUSE: {
                if (
                    (typeIsRandomized(entranceTypeBeingChecked) || typesThatAlwaysIncludeAllEntrances.includes(typeForSelectOptions)) &&
                    (
                        typeForSelectOptions === entranceTypeBeingChecked ||
                        poolsAreMixed ||
                        typesThatAlwaysIncludeAllEntrances.includes(typeForSelectOptions)
                    )
                ) {
                    return true;
                }
                return false;
            }
            // these should never be shown as 'to' options
            case KAEPORA_GAEBORA:
            case WARP_SONG:
            case SPAWN:
            default: {
                return false;
            }
        }
    };

    const getTrackerSectionsAndTypePossibilities = () => {
        // Used for displaying enabled types
        const trackerSections = {
            [SPAWN]: {},
            [OVERWORLD]: {},
            [HOUSE]: {},
            [GROTTO]: {},
            [DUNGEON]: {},
            [WARP_SONG]: {}
        };
        // Used for tracking what sections should displayed for a type
        const possibleEntrances = {
            [SPAWN]: {},
            [OVERWORLD]: {},
            [HOUSE]: {},
            [GROTTO]: {},
            [DUNGEON]: {},
            [WARP_SONG]: {}
        };
        // Get the types that should be shown
        // const shuffledTypes = getSectionTypesThatAreShuffled();
        // for (const type of shuffledTypes) {
        //     possibleEntrances[type] = {};
        //     if (!typesThatShouldBeHiddenWhenEntrancesAreNotDecoupled.includes(type) || !entrancesAreDecoupled) {
        //     // hide sections that should not be shown when entrances aren't decoupled
        //         continue;
        //     }
        //     trackerSections[type] = {};
        // }

        Object.entries(areas).map(([areaName, area]) => {
            const areaType = area.type;
            Object.entries(area.entrances).map(([entranceName, entrance]) => {
                const entranceType = entrance.type;
                // should this entrance be shown in tracker layout
                // if ((typeIsRandomized(areaType) && entrancesAreDecoupled) || areaType === OVERWORLD) {
                if (trackerSections[areaType] === undefined) {
                    trackerSections[areaType] = {};
                }
                if (trackerSections[areaType][areaName] === undefined) {
                    trackerSections[areaType][areaName] = cloneDeep(area);
                    trackerSections[areaType][areaName].entrances = {};
                }
                trackerSections[areaType][areaName].entrances[entranceName] = entrance;
                // }
                // should it be shown as option for types available
                // for (const shuffledType of shuffledTypes) {
                for (let type in possibleEntrances) {
                    // if (shouldEntranceBeDisplayedAsOptionForType(shuffledType, entranceType)) {
                    //     if ((entrance.leadsTo !== null && entrancesAreDecoupled) || (entrance.comesFrom && entrance.comesFrom.length > 0)) continue;
                    if (possibleEntrances[type][entranceType] === undefined) {
                        possibleEntrances[type][entranceType] = {};
                    }
                    if (possibleEntrances[type][entranceType][areaName] === undefined) {
                        possibleEntrances[type][entranceType][areaName] = {};
                        possibleEntrances[type][entranceType][areaName].entrances = {};
                    }
                    possibleEntrances[type][entranceType][areaName].entrances[entranceName] = entrance;
                    // }
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
        // getPossibleEntrancesForAvailableTypes,
        getTrackerSectionsAndTypePossibilities
    };
};
