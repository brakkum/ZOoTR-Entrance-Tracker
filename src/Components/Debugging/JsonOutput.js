import React, {useContext} from "react";
import {AreaContext} from "../../Context/AreaContext";

export const JsonOutput = ({data, ...other}) => {
    // const { areas } = useContext(AreaContext);
    // let output = {};
    // Object.entries(areas).map(([aName, area]) => {
    //     Object.entries(area.entrances).map(([eName, entrance]) => {
    //         if ((entrance.leadsTo !== null || entrance.comesFrom.length !== 0) && !entrance.isImmutable) output[aName] = entrance;
    //     });
    // });
    return <pre style={{backgroundColor: "#232123", color: "#e4e4e4", fontSize: "10px"}}>
        {JSON.stringify(data, null, " ")}
    </pre>
};
