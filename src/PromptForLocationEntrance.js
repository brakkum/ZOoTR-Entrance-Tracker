import React, { useState } from "react";

export default function PromptForLocationEntrance({ locationToPromptFor, showInitialAgeCheck, availableEntrances, startAsChild, type, ...props }) {

    const [selectedLocation, setSelectedLocation] = useState("");

    const setInteriorToAreaAndEntrance = () => {
        if (selectedLocation === "") {
            return;
        }
        props.setEntrance(JSON.parse(selectedLocation), { interior: locationToPromptFor });
        setSelectedLocation("");
    };

    if (!availableEntrances) {
        return null;
    }

    return (
        <div className="prompt columns">
            <div className="column">
                <h5 className="prompt-field is-size-5 has-text-centered prompt-question">
                    Where is {locationToPromptFor}?
                </h5>
            </div>
            <div className="prompt-field field column is-grouped has-addons has-addons-centered is-vcentered">
                <div className="select is-small control">
                    <select
                        onChange={e => setSelectedLocation(e.target.value)}
                        value={selectedLocation}
                    >
                        <option value="">Select a location</option>
                        {Object.keys(availableEntrances).sort().map((area, i) => {
                            if (availableEntrances[area].length === 0) {
                                return null;
                            }
                            return <optgroup
                                key={i}
                                label={area}
                            >
                                {availableEntrances[area].sort().map((entrance, i) => {
                                    return <option
                                        key={i}
                                        value={JSON.stringify({ area, entrance, type })}
                                    >
                                        {entrance}
                                    </option>
                                })}
                            </optgroup>
                        })
                        }
                    </select>
                </div>
                <button className="button is-small control" onClick={setInteriorToAreaAndEntrance}>
                    Add {locationToPromptFor}
                </button>
            </div>
            {showInitialAgeCheck &&
                <div className="prompt-field has-text-centered column">
                    <button
                        className="button is-small"
                        onClick={props.toggleStartAsChild}
                    >
                        Start as {startAsChild ? "Adult" : "Child"}
                    </button>
                </div>
            }
        </div>
    )
}
