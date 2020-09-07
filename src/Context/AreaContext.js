import { OverworldAreas } from "../Data/Areas/OverworldAreas";
import { WarpSongAreas } from "../Data/Areas/WarpSongAreas";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { DungeonAreas } from "../Data/Areas/DungeonAreas";
import { GrottoAreas } from "../Data/Areas/GrottoAreas";
import { HouseAreas } from "../Data/Areas/HouseAreas";
import { SpawnAreas } from "../Data/Areas/SpawnAreas";
import { cloneDeep } from "lodash";
import * as React from "react";
import {useState} from "react";

const getInitialAreas = () => {
    return {
        ...cloneDeep(OverworldAreas),
        ...cloneDeep(WarpSongAreas),
        ...cloneDeep(DungeonAreas),
        ...cloneDeep(GrottoAreas),
        ...cloneDeep(HouseAreas),
        ...cloneDeep(SpawnAreas),
    };
};

let AreaContext = React.createContext(null);

function AreaContextProvider(props) {
    // const [areas, setAreas] = useLocalStorage("areas", getInitialAreas());
    const [areas, setAreas] = useState(getInitialAreas());

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

