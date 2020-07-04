import { OverworldAreas } from "../Data/Areas/OverworldAreas";
import { WarpSongAreas } from "../Data/Areas/WarpSongAreas";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { DungeonAreas } from "../Data/Areas/DungeonAreas";
import { GrottoAreas } from "../Data/Areas/GrottoAreas";
import { HouseAreas } from "../Data/Areas/HouseAreas";
import { SpawnAreas } from "../Data/Areas/SpawnAreas";
import { AreaTypes } from "../Data/Types/AreaTypes";
import { cloneDeep } from "lodash";
import * as React from "react";
import {useState} from "react";

const getInitialAreas = () => {
    return {
        ...cloneDeep(OverworldAreas.areas),
        ...cloneDeep(WarpSongAreas.areas),
        ...cloneDeep(DungeonAreas.areas),
        ...cloneDeep(GrottoAreas.areas),
        ...cloneDeep(HouseAreas.areas),
        ...cloneDeep(SpawnAreas.areas)
    };
};

let AreaContext = React.createContext(null);

function AreaContextProvider(props) {
    const [areas, setAreas] = useState(getInitialAreas());//useLocalStorage("areas", getInitialAreas());

    const value = {
        areas,
        setAreas
    };

    return (
        <AreaContext.Provider value={value}>
            {props.children}
        </AreaContext.Provider>
    );
}

export { AreaContext, AreaContextProvider };

