import NavigableInteriors from "./DataObjects/NavigableInteriors";
import NavigableAreas from "./DataObjects/NavigableAreas";
import EntranceTypes from "./DataObjects/EntranceTypes";
import Entrance from "./Entrance";
import React from "react";

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

    return (
        <div className="card area-card">
            <div className="card-header area-card-header has-background-dark">
                <h5 className="is-size-5 has-text-weight-semibold area-card-name">{areaName}</h5>
                <span
                    className="icon has-text-white"
                    onClick={() => props.toggleAreaExpanded(areaName)}
                >
                    {area.isExpanded ?
                        <i className="fa fa-minus area-expand-icon"></i> :
                        <i className="fa fa-plus area-expand-icon"></i>
                    }
                </span>
            </div>
            <div
                style={{
                    background: area.colors.length > 1 ?
                        `linear-gradient(to right, ${area.colors.join(", ")}`
                        : area.colors.length === 1 ?
                            area.colors[0]
                            : "grey",
                    height: "5px"
                }}
            >
            </div>
            {area.isExpanded && <div className="card-content area-card-content">
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
                <div className="columns card-columns">
                    <div className="column card-column">
                        {entrances}
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
