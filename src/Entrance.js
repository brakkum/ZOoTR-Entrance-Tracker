import Areas from "./Entrances/AreasAndEntrances";
import React from "react";

export default class Entrance extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            area: this.props.area,
            type: Areas[this.props.area][this.props.entrance].type
        };
    }

    setLocation = event => {
        if (this.state.type === "overworld") {
            this.props.setOverworldToOverworld(this.state.area, this.props.entrance, event.target.value);
            this.setState({interior: event.target.value})
        } else {
            this.props.setInteriorToAreaAndEntrance(this.props.area, this.props.entrance, event.target.value);
            this.setState({interior: event.target.value})
        }
    };

    resetEntrance = () => {
        if (this.state.type === "overworld") {
            this.setState({interior: ""});
            this.props.resetOverworldEntrance(this.state.area, this.props.entrance, this.props.interior);
        } else {
            this.setState({interior: ""});
            this.props.resetEntrance(this.state.area, this.props.entrance, this.props.interior);
        }
    };

    render() {
        let availableLocations = this.props.availableLocations;
        let entrance = this.props.entrance;
        let interior = this.props.interior;
        return(
            <div>
                <span>{entrance}</span>
                {interior !== "" ?
                    <span>
                        {interior}
                        {/* once Link's House is set, leave it */}
                        {interior === "Link's House" ?
                            "" :
                            <span onClick={this.resetEntrance}>X</span>
                        }
                    </span> :
                    <div>
                        <select onChange={this.setLocation}>
                            <option value={"Not Checked"}>Not Checked</option>
                            {availableLocations.map((location, i) => {
                                return <option key={i}>{location}</option>
                            })}
                        </select>
                    </div>
                }
            </div>
        )
    }
}
