import { ConfigContext } from "../Context/ConfigContext";
import { AreaContext } from "../Context/AreaContext";
import { AreaTypes } from "../Data/Types/AreaTypes";
import { useContext } from "react";

export const useTrackerContext = () => {
    const { areas, setAreas } = useContext(AreaContext);
    const { config, setConfig } = useContext(ConfigContext);

    const setEntrance = (to, from) => {
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
        const type = areas[fromType];
        type.areas[fromArea].entrances[fromEntrance].leadsTo =
            { area: toArea, entrance: toEntrance };
        let updatedAreas = { [fromType]: type };
        let destinationType = toType === fromType ? type : areas[toType];
        if (config.decoupleEntrances.value) {
            destinationType.areas[toArea].entrances[toEntrance].comesFrom =
                `${fromArea}: ${fromEntrance}`;
        } else {
            if (!type.areas[fromArea].entrances[fromEntrance].isOneWay) {
                console.log(toType, toArea, toEntrance)
                console.log(destinationType)
                debugger
                destinationType.areas[toArea].entrances[toEntrance].leadsTo =
                    { area: fromArea, entrance: fromEntrance };
            }
        }
        // console.log(toType, toArea, toEntrance, destinationType.areas[toArea].entrances[toEntrance].leadsTo)
        // console.log(fromType, fromArea, fromEntrance, type.areas[fromArea].entrances[fromEntrance].leadsTo)
        updatedAreas[toType] = destinationType;
        setAreas({ ...areas, ...updatedAreas });
    };

    const resetEntrance = (to, from) => {
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
        const type = areas[fromType];
        type.areas[fromArea].entrances[fromEntrance].leadsTo = null;
        const updatedAreas = { [fromType]: type };
        const destinationType = toType === fromType ? type : areas[toType];
        if (config.decoupleEntrances.value) {
            delete destinationType.areas[toArea].entrances[toEntrance].comesFrom
        } else {
            if (!type.areas[fromArea].entrances[fromEntrance].isOneWay) {
                destinationType.areas[toArea].entrances[toEntrance].leadsTo = null;
            }
        }
        // console.log(toType, toArea, toEntrance, destinationType.areas[toArea].entrances[toEntrance].leadsTo)
        // console.log(fromType, fromArea, fromEntrance, type.areas[fromArea].entrances[fromEntrance].leadsTo)
        updatedAreas[toType] = destinationType;
        setAreas({ ...areas, ...updatedAreas });
    };

    const updateConfigOption = option => {
        const opt = config[option];
        opt.value = !opt.value;
        setConfig({...config, [option]: opt});
    };

    const getAvailableAreaTypes = () => {
        const availableSections = {};
        const decouple = config.decoupleEntrances.value;
        availableSections[AreaTypes.overworld] = areas[AreaTypes.overworld];
        if (decouple && config.shuffleDungeons.value) availableSections[AreaTypes.dungeon] = areas[AreaTypes.dungeon];
        if (decouple && config.shuffleHouses.value) availableSections[AreaTypes.house] = areas[AreaTypes.house];
        if (decouple && config.shuffleGrottos.value) availableSections[AreaTypes.grotto] = areas[AreaTypes.grotto];
        if (config.randomizeSongs.value) availableSections[AreaTypes.warpSong] = areas[AreaTypes.warpSong];
        if (config.randomizeSpawns.value) availableSections[AreaTypes.spawn] = areas[AreaTypes.spawn];
        return availableSections;
    };

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

    const getAvailableEntrancesForType = type => {
        let options = {};
        const shouldIncludeAll =
            type === AreaTypes.kaeporaGaebora ||
            type === AreaTypes.spawn ||
            type === AreaTypes.warpSong;
        if (shouldIncludeAll ||
            (config.shuffleOverworld.value &&
                (type === AreaTypes.overworld || config.mixEntrancePools.value))
        ) {
            options[AreaTypes.overworld] = areas[AreaTypes.overworld];
        }
        if (shouldIncludeAll ||
            (config.shuffleDungeons.value &&
                (type === AreaTypes.dungeon || config.mixEntrancePools.value))
        ) {
            options[AreaTypes.dungeon] = areas[AreaTypes.dungeon];
        }
        if (shouldIncludeAll ||
            (config.shuffleHouses.value &&
                (type === AreaTypes.house || config.mixEntrancePools.value))
        ) {
            options[AreaTypes.house] = areas[AreaTypes.house];
        }
        if (shouldIncludeAll ||
            (config.shuffleGrottos.value &&
                (type === AreaTypes.grotto || config.mixEntrancePools.value))
        ) {
            options[AreaTypes.grotto] = areas[AreaTypes.grotto];
        }
        return options;
    };

    return {
        areas,
        config,
        setEntrance,
        resetEntrance,
        updateConfigOption,
        typeShouldBeDisplayed
    };
};
