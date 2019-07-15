import EntranceTypes from "./DataObjects/EntranceTypes";
import Houses from "./DataObjects/Houses";
import React from "react";

export default class Entrance extends React.Component {

    render() {
        let options = this.props.options;
        let entrance = this.props.entrance;
        let areaName = this.props.areaName;
        let entranceName = this.props.entranceName;

        return(
            <div className="entrance">
                <h6 className={
                    "is-size-6 has-text-weight-semibold " +
                    // entrance has no assignment, make it clear
                    (entrance.interior === null || entrance.leadsTo === null ? "has-text-danger" : "")
                }>{entranceName}</h6>
                {entrance.interior !== undefined && entrance.interior !== null ?
                    // has an interior defined, so just display it
                    <div className="interior-display is-flex">
                        <span>
                            {entrance.interior}
                        </span>
                        {/* x icon for resetting an entrance to unchecked */}
                        {/* but once Link's House is set, leave it */}
                        {entrance.interior === Houses.LinksHouse ?
                            "" :
                            <span className="delete is-pulled-right" onClick={
                                () => this.props.resetEntrance({...entrance, area: areaName, entrance: entranceName})
                            } />
                        }
                    </div>
                    :
                    entrance.leadsTo !== undefined && entrance.leadsTo !== null
                        ?
                        // points to an area, and maybe an entrance
                        <div className="interior-display is-flex">
                            <span>
                                {/* show area at least */}
                                {entrance.leadsTo.area}
                                {/* show entrance if defined */}
                                {entrance.leadsTo.entrance !== undefined &&
                                <div>{entrance.leadsTo.entrance} Entrance</div>
                                }
                            </span>
                            <span className="delete is-pulled-right" onClick={() =>
                                this.props.resetEntrance(
                                    {
                                        ...entrance,
                                        area: areaName,
                                        entrance: entranceName
                                    }
                                )
                            } />
                        </div>
                        :
                        // no interior or area is set, so display available options to select
                        <div className="select is-small entrance-select">
                            <select value="Not Checked" onChange={event =>
                                this.props.setEntrance(
                                    // the area and entrance and type that is being assigned
                                    // used to determine steps to take in this.setEntrance
                                    {
                                        area: areaName,
                                        entrance: entranceName,
                                        type: entrance.type
                                    },
                                    // object that has interior key for houses, grottos, dungeons
                                    // or area and entrance keys for overworld and kaepora gaebora
                                    JSON.parse(event.target.value)
                                )
                            }>
                                <option value="Not Checked">Not Checked</option>
                                {options instanceof Array ?
                                    // if its an array, it's areas, houses, or grottos
                                    // map over them and make them options
                                    options.sort().map((interiorName, i) => {
                                        let objKey = entrance.type === EntranceTypes.KaeporaGaebora ? "area" : "interior";
                                        return <option key={i} value={JSON.stringify({[objKey]: interiorName})}>
                                            {interiorName}
                                        </option>
                                    })
                                    :
                                    // it's an overworld selection
                                    // iterate through the area keys and make them optGroups
                                    // make the entrance of that area selection options
                                    Object.keys(options).sort().map((optgroupArea, i) => {
                                        // don't make optGroups for empty areas
                                        // also don't show empty optGroup if it's
                                        // only entrance is the current entrance
                                        if (options[optgroupArea].length === 0 ||
                                            (options[optgroupArea].length === 1 &&
                                                options[optgroupArea][0] === entranceName)) {
                                            return null;
                                        }
                                        return <optgroup
                                            key={i}
                                            label={optgroupArea}
                                        >
                                            {options[optgroupArea].map((optgroupEntrance, j) => {
                                                // don't show current entrance as selectable option
                                                if (areaName === optgroupArea && entranceName === optgroupEntrance) {
                                                    return null;
                                                }
                                                return <option
                                                    key={j}
                                                    value={JSON.stringify({
                                                        area: optgroupArea,
                                                        entrance: optgroupEntrance
                                                    })}
                                                >
                                                    {optgroupEntrance}
                                                </option>
                                            })}
                                        </optgroup>
                                    })
                                }
                            </select>
                        </div>
                }
            </div>
        )
    }
}
