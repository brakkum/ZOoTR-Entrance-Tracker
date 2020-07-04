import { TrackerConfig } from "../Data/Config/TrackerConfig";
import {useLocalStorage} from "../Hooks/useLocalStorage";
import { cloneDeep } from "lodash";
import React, {useState} from "react";

let ConfigContext = React.createContext(null);

function ConfigContextProvider(props) {
    // TODO: replace with localStorage hook
    let [config, setConfig] = useState(cloneDeep(TrackerConfig));//useLocalStorage("item-config", cloneDeep(TrackerConfig));

    const value = {
        config,
        setConfig
    };

    return (
        <ConfigContext.Provider value={value}>
            {props.children}
        </ConfigContext.Provider>
    );
}

export { ConfigContext, ConfigContextProvider };
