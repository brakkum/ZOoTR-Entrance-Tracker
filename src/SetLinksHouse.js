import React from "react";
import AreaEntranceSeparator from "./AreaEntranceSeparator";

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
            <div>
                <h2>
                    Where does Link's house go to?
                </h2>
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
                <button onClick={this.setInteriorToAreaAndEntrance}>
                    Add Link's House
                </button>
            </div>
        )
    }
}
