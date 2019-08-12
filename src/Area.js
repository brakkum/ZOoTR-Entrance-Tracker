import EntranceTypes from "./DataObjects/EntranceTypes";
import Entrance from "./Entrance";
import React from "react";
import NavigableAreas from "./DataObjects/NavigableAreas";
import NavigableInteriors from "./DataObjects/NavigableInteriors";

export default class Area extends React.Component {

    returnUniqueItems = array => {
        return array.filter((item, i) => {
            return array.indexOf(item) === i;
        });
    };

    render() {
        let overworldOnly = this.props.overworldOnly;
        let areaName = this.props.areaName;
        let state = this.props.state;
        let area = this.props.area;
        let entrances = [];

        return(
            <div className="area-box-container box"
                 style={{
                     // set border to selected colors
                     // default solid grey
                     background: area.colors.length > 1 ?
                         `linear-gradient(to bottom right, ${area.colors.join(", ")}`
                         : area.colors.length === 1 ?
                             area.colors[0]
                             : "grey"
                 }}
            >
                <div className="box area-box">
                    <h4 className="is-size-4 has-text-weight-semibold">{areaName}</h4>
                    {/* iterate through the entrances of the area */}
                    {Object.keys(area.entrances).sort().map((entranceName, i) => {
                        // column layout
                        // entrance object derived from the area object
                        let entrance = area.entrances[entranceName];
                        if (overworldOnly && !(NavigableAreas.includes(entranceName) ||
                            NavigableInteriors.includes(entrance.interior))) {
                            return null;
                        }
                        // the type of entrance determines what
                        // options are displayed to pick from
                        let options = entrance.type === EntranceTypes.House ?
                            this.returnUniqueItems(state.availableHouses)
                            : entrance.type === EntranceTypes.Dungeon ?
                                state.availableDungeons
                                : entrance.type === EntranceTypes.Overworld ?
                                    state.availableOverworldEntrances
                                    : entrance.type === EntranceTypes.Grotto ?
                                        this.returnUniqueItems(state.availableGrottos)
                                        : entrance.type === EntranceTypes["Kaepora Gaebora"] ?
                                            state.allOverworldEntrances
                                            : []; // How did you get here??

                        // add to the correct column in area container
                        entrances.push(
                            <Entrance
                                key={i}
                                options={options}
                                entrance={entrance}
                                areaName={areaName}
                                entranceName={entranceName}
                                setEntrance={this.props.setEntrance}
                                resetEntrance={this.props.resetEntrance}
                                toggleClear={this.props.toggleClear}
                                startAsChild={this.props.startAsChild}
                            />
                        );
                        return null;
                    })}
                    {/* output the columns of area entrances */}
                    <div className="columns">
                        <div className="column">
                            {entrances.length > 2 ?
                                entrances.slice(0, Math.ceil(entrances.length / 2))
                                :
                                entrances
                            }
                        </div>
                        {entrances.length > 2 ?
                            <div className="column">
                                {entrances.slice(Math.ceil(entrances.length / 2))}
                            </div>
                            : ""
                        }
                    </div>
                </div>
            </div>
        )
    }
}
