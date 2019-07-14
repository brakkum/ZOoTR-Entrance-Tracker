import AreaEntranceSeparator from "./Constants/AreaEntranceSeparator";
import React from "react";

export default class PromptForHouseEntrance extends React.Component {

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
        let houseToPromptFor = this.props.houseToPromptFor;
        let selectedLocation = this.state.selectedLocation;
        if (selectedLocation === "") {
            return;
        }
        let entranceObj = JSON.parse(selectedLocation);
        this.props.setHouseToAreaAndEntrance(houseToPromptFor, entranceObj);
        this.setState({selectedLocation: ""});
    };

    render() {
        let houseToPromptFor = this.props.houseToPromptFor;
        let availableEntrances = this.props.availableEntrances;
        if (!availableEntrances) {
            return null;
        }
        return (
            <div className="prompt section">
                <h4 className="is-size-4 has-text-centered">
                    Where does {houseToPromptFor} exit to?
                </h4>
                <br />
                <div className="field is-grouped has-addons has-addons-centered">
                    <div className="select is-small control">
                        <select
                            onChange={this.onSelectChange}
                            value={this.state.selectedLocation}
                        >
                            <option value="">Select a location</option>
                            {Object.keys(availableEntrances).sort().map((area, i) => {
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
                            })}
                        </select>
                    </div>
                    <button className="button is-small control" onClick={this.setInteriorToAreaAndEntrance}>
                        Add {houseToPromptFor}
                    </button>
                </div>
            </div>
        )
    }
}
