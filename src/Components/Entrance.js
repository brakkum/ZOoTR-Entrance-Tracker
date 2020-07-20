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
        setEntrance,
        resetEntrance,
    } = useTrackerContext();
    const selectOptions = [];
    if (entrance.comesFrom && entrance.comesFrom.length) console.log(entrance.comesFrom);
    const hasOptions = options && Object.keys(options).length > 0;
    return (
        <div className="entrance">
            <h4 className={
                "entrance-name has-text-weight-bold"
            }>
                {entranceName}
                {
                    entrance.comesFrom !== undefined &&
                    entrance.comesFrom.length !== 0 &&
                    entrance.comesFrom.map((source, i) => {
                        const [fromArea, fromEntrance] = source.split(": ");
                        return <div
                            key={i}
                            className="is-size-7 has-text-success-dark"
                        >
                            {fromArea}<br/>
                            {fromEntrance}
                        </div>
                    })
                }
            </h4>
            <div className="entrance-spacer" />
            {(entrance.leadsTo !== null || !hasOptions) ?
                <div className="area-display has-text-weight-semibold is-flex">
                    <div className="area-display-entrance">
                    <div className="chosen-area-name">
                        {!hasOptions ? entrance.leadsToVanilla.area : entrance.leadsTo.area}
                    </div>
                    <div className="has-text-weight-normal chosen-entrance-name">
                        {!hasOptions ? entrance.leadsToVanilla.entrance : entrance.leadsTo.entrance}
                    </div>
                </div>
                    {!entrance.isImmutable && hasOptions &&
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
                // no destination set, so display available options to select
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

                                Object.entries(group).sort().map(([areaLabel, groupArea], j) => {
                                    const areaOptions = [];

                                    Object.entries(groupArea.entrances).sort().map(([entranceLabel, areaEntrance], k) => {
                                        if (areaName === areaLabel && entranceName === entranceLabel) return null;

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
