import EntranceTypes from "./DataObjects/EntranceTypeEnum";
import Areas from "./DataObjects/AreasAndEntrances";
import React from "react";
import AreaEntranceSeparator from "./AreaEntranceSeparator";

export default class Entrance extends React.Component {

    setLocation = event => {
        let area = this.props.area;
        let entrance = this.props.entrance;
        let selection = event.target.value;
        let type = Areas[area][entrance].type;
        if (type === EntranceTypes.Overworld) {
            this.props.setOverworldToOverworld(area, entrance, selection);
        } else {
            this.props.setInteriorToAreaAndEntrance(area, entrance, selection);
        }
    };

    resetEntrance = () => {
        let area = this.props.area;
        let entrance = this.props.entrance;
        let interior = this.props.interior;
        let type = Areas[area][entrance].type;
        if (type === EntranceTypes.Overworld) {
            this.props.resetOverworldEntrance(area, entrance, interior);
        } else {
            this.props.resetEntrance(area, entrance, interior);
        }
    };

    render() {
        let availableLocations = this.props.availableLocations;
        let area = this.props.area;
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
                                if (Areas[area][entrance].type === EntranceTypes.Overworld &&
                                    location === `${area}${AreaEntranceSeparator}${entrance}`) {
                                    return "";
                                }
                                return <option key={i}>{location}</option>
                            })}
                        </select>
                    </div>
                }
            </div>
        )
    }
}
