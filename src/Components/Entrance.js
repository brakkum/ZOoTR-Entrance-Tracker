import { useTrackerContext } from "../Hooks/useTrackerContext";
import React from "react";

export default function Entrance({
    options,
    entrance,
    areaName,
    fromType,
    entranceName
}) {
    const {
        areas,
        config,
        setEntrance,
        resetEntrance,
    } = useTrackerContext();
    const selectOptions = [];
    const [fromArea, fromEntrance] = entrance.comesFrom ? entrance.comesFrom.split(": ") : [null, null];

    return (
        <div className="entrance">
            <div className={
                "entrance-name is-size-6 has-text-weight-bold "
            }>
                {entranceName}
                {entrance.comesFrom &&
                    <div
                        className="is-size-7 has-text-success-dark"
                    >
                        {fromArea}<br/>
                        {fromEntrance}
                    </div>
                }
            </div>
            <div className="entrance-spacer" />
            {entrance.leadsTo !== null ?
                <div className="area-display has-text-weight-semibold is-flex">
                    <div className="area-display-entrance">
                    <div className="">
                        {entrance.leadsTo.area}
                    </div>
                    <div className=" is-size-7 has-text-weight-normal">
                        {entrance.leadsTo.entrance} Entrance
                    </div>
                </div>
                    {!entrance.isImmutable &&
                        <span className="delete remove-choice is-pulled-right" onClick={() =>
                            resetEntrance(
                                {
                                    area: entrance.leadsTo.area,
                                    entrance: entrance.leadsTo.entrance,
                                    type: entrance.type
                                },
                                {
                                    area: areaName,
                                    entrance: entranceName,
                                    type: fromType
                                }
                            )
                        }/>
                    }
                </div>
                :
                // no endpoint set, so display available options to select
                <div className="select is-small entrance-select">
                    <select value="Not Checked" onChange={event =>
                        setEntrance(
                            JSON.parse(event.target.value),
                            {
                                area: areaName,
                                entrance: entranceName,
                                type: fromType
                            }
                        )
                    }>
                        <option value="Not Checked">Not Checked</option>
                        {
                            Object.entries(options).map(([optionLabel, group], i) => {
                                const optionSelectOptions = [];
                                // console.log(group)

                                Object.entries(group).sort().map(([areaLabel, groupArea], j) => {
                                    const areaOptions = [];
                                    // console.log(groupArea)

                                    Object.entries(groupArea.entrances).sort().map(([entranceLabel, areaEntrance], k) => {
                                        if (areaName === areaLabel && entranceName === entranceLabel) return null;
                                        // if (!config.decoupleEntrances.value && areas[optionLabel].areas[areaLabel].entrances[entranceLabel].leadsTo !== null) return null;

                                        areaOptions.push(
                                            <option
                                                value={JSON.stringify({
                                                    area: areaLabel,
                                                    entrance: entranceLabel,
                                                    type: areaEntrance.type
                                                })}
                                                className="entrance-options"
                                                key={k}
                                            >
                                                {entranceLabel}
                                            </option>
                                        );
                                        return null;
                                    });
                                    if (areaOptions.length > 0) {
                                        optionSelectOptions.push(
                                            <option disabled className="area-option" key={j}>
                                                {areaLabel}
                                            </option>,
                                            areaOptions
                                        );
                                    }
                                    return null;
                                });
                                if (optionSelectOptions.length > 0) {
                                    selectOptions.push(
                                        <optgroup label={optionLabel} key={i}>
                                            {optionSelectOptions}
                                        </optgroup>
                                    )
                                }
                                return null;
                            })
                        }
                        {selectOptions}
                    </select>
                </div>
            }
        </div>
    )
};
