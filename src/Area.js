import EntranceTypes from "./DataObjects/EntranceTypes";
import Entrance from "./Entrance";
import React from "react";
import NavigableAreas from "./DataObjects/NavigableAreas";
import NavigableInteriors from "./DataObjects/NavigableInteriors";

const returnUniqueItems = array => {
    return array.filter((item, i) => {
        return array.indexOf(item) === i;
    });
};

export default function Area({
    overworldOnly,
    areaName,
    area,
    state,
    availableHouses,
    availableGrottos,
    availableDungeons,
    availableOverworldEntrances,
    allOverworldEntrances,
    ...props
}) {

    let entrances = [];

    return(
        <div className="area-box-container box"
            style={{
                // set border to selected colors
                // default solid grey
                background: area.colors.length > 1 ?
                    `linear-gradient(to bottom right, ${area.colors.join(", ")}`
                    : area.colors.length === 1 ?
                        area.colors[0]
                        : "grey"
            }}
        >
            <div className="box area-box">
                <h4 className="is-size-4 has-text-weight-semibold">{areaName}</h4>
                {/* iterate through the entrances of the area */}
                {Object.keys(area.entrances).sort().map((entranceName, i) => {
                    // column layout
                    // entrance object derived from the area object
                    let entrance = area.entrances[entranceName];

                    if (overworldOnly && !(NavigableAreas.includes(entranceName) ||
                        NavigableInteriors.includes(entrance.interior))) {
                        return null;
                    }
                    // the type of entrance determines what
                    // options are displayed to pick from
                    let options = entrance.type === EntranceTypes.House ?
                        returnUniqueItems(availableHouses)
                        : entrance.type === EntranceTypes.Dungeon ?
                            availableDungeons
                            : entrance.type === EntranceTypes.Overworld ?
                                availableOverworldEntrances
                                : entrance.type === EntranceTypes.Grotto ?
                                    returnUniqueItems(availableGrottos)
                                    : entrance.type === EntranceTypes["Kaepora Gaebora"] ?
                                        allOverworldEntrances
                                        : []; // How did you get here??

                    // add to the correct column in area container
                    entrances.push(
                        <Entrance
                            key={i}
                            options={options}
                            entrance={entrance}
                            areaName={areaName}
                            entranceName={entranceName}
                            setEntrance={props.setEntrance}
                            resetEntrance={props.resetEntrance}
                            toggleEntranceClear={props.toggleEntranceClear}
                            startAsChild={props.startAsChild}
                        />
                    );
                    return null;
                })}
                {/* output the columns of area entrances */}
                <div className="columns">
                    <div className="column">
                        {entrances.length > 2 ?
                            entrances.slice(0, Math.ceil(entrances.length / 2))
                            :
                            entrances
                        }
                    </div>
                    {entrances.length > 2 ?
                        <div className="column">
                            {entrances.slice(Math.ceil(entrances.length / 2))}
                        </div>
                        : ""
                    }
                </div>
            </div>
        </div>
    )
}
