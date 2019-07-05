import AreaEntranceSeparator from "./AreaEntranceSeparator";
import React from "react";

export default class PromptForInteriorEntrance extends React.Component {

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
        let interiorToPromptFor = this.props.interiorToPromptFor;
        let selectedLocation = this.state.selectedLocation;
        if (selectedLocation === "") {
            return;
        }
        let [area, entrance] = selectedLocation.split(AreaEntranceSeparator);
        this.props.setInteriorToAreaAndEntrance(area, entrance, interiorToPromptFor);
        this.setState({selectedLocation: ""})
    };

    render() {
        let interiorToPromptFor = this.props.interiorToPromptFor;
        let availableEntrances = this.props.availableEntrances;
        if (!availableEntrances) {
            return null;
        }
        return (
            <div className="prompt">
                <h3 className="is-size-3 has-text-centered">
                    Where does {interiorToPromptFor} go to?
                </h3>
                <div className="field is-grouped has-addons has-addons-centered">
                    <div className="select control">
                        <select
                            onChange={this.onSelectChange}
                            value={this.state.selectedLocation}
                        >
                            <option value="">Select a location</option>
                            {availableEntrances.map((entrance, i) => {
                                return <option
                                    key={i}
                                    value={entrance}
                                >
                                    {entrance}
                                </option>
                            })}
                        </select>
                    </div>
                    <button className="button control" onClick={this.setInteriorToAreaAndEntrance}>
                        Add Link's House
                    </button>
                </div>
            </div>
        )
    }
}
