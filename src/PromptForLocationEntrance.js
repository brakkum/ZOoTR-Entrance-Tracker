import React from "react";
import EntranceTypes from "./DataObjects/EntranceTypes";

export default class PromptForLocationEntrance extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedLocation: "",
        }
    }

    onSelectChange = event => {
        this.setState({selectedLocation: event.target.value})
    };

    setInteriorToAreaAndEntrance = () => {
        let locationToPromptFor = this.props.locationToPromptFor;
        let selectedLocation = this.state.selectedLocation;
        if (selectedLocation === "") {
            return;
        }
        let entranceObj = JSON.parse(selectedLocation);
        if (this.props.type === EntranceTypes.House) {
            entranceObj.type = EntranceTypes.House;
            this.props.setEntrance(entranceObj, {interior: locationToPromptFor});
        } else if (this.props.type === EntranceTypes.Grotto) {
            entranceObj.type = EntranceTypes.Grotto;
            this.props.setEntrance(entranceObj, {interior: locationToPromptFor});
        }
        this.setState({selectedLocation: ""});
    };

    render() {
        let locationToPromptFor = this.props.locationToPromptFor;
        let showInitialAgeCheck = this.props.showInitialAgeCheck;
        let availableEntrances = this.props.availableEntrances;
        let startAsChild = this.props.startAsChild;
        if (!availableEntrances) {
            return null;
        }
        return (
            <div className="prompt columns">
                <h4 className="is-size-4 has-text-centered column prompt-question">
                    Where is {locationToPromptFor}?
                </h4>
                <div className="field is-grouped has-addons has-addons-centered is-vcentered column prompt-select">
                    <div className="select is-small control">
                        <select
                            onChange={this.onSelectChange}
                            value={this.state.selectedLocation}
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
                                    {availableEntrances[area].map((entrance, i) => {
                                        return <option
                                            key={i}
                                            value={JSON.stringify({area, entrance})}
                                        >
                                            {entrance}
                                        </option>
                                    })}
                                </optgroup>
                                })
                            }
                        </select>
                    </div>
                    <button className="button is-small control" onClick={this.setInteriorToAreaAndEntrance}>
                        Add {locationToPromptFor}
                    </button>
                {showInitialAgeCheck &&
                    <div className="has-text-centered column">
                        <button
                            className="button "
                            onClick={this.props.toggleStartAsChild}
                        >
                            Start as {startAsChild ? "Adult" : "Child"}
                        </button>
                    </div>
                }
                </div>
            </div>
        )
    }
}
