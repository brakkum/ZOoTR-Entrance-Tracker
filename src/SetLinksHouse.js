import AreaEntranceSeparator from "./AreaEntranceSeparator";
import React from "react";

export default class SetLinksHouse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedLocation: this.props.availableEntrances[0],
            availableEntrances: this.props.availableEntrances
        }
    }

    onSelectChange = event => {
        this.setState({selectedLocation: event.target.value})
    };

    setInteriorToAreaAndEntrance = () => {
        let [area, entrance] = this.state.selectedLocation.split(AreaEntranceSeparator);
        this.props.setInteriorToAreaAndEntrance(area, entrance, "Link's House");
    };

    render() {
        let availableEntrances = this.state.availableEntrances;
        return (
            <div className="prompt">
                <h3 className="is-size-3 has-text-centered">
                    Where does Link's house go to?
                </h3>
                <div className="field is-grouped has-addons has-addons-centered">
                    <div className="select control">
                        <select
                            onChange={this.onSelectChange}
                            value={this.state.selectedLocation}
                        >
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
