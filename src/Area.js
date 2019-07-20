import EntranceTypes from "./DataObjects/EntranceTypes";
import Entrance from "./Entrance";
import React from "react";

export default class Area extends React.Component {

    returnUniqueItems = array => {
        return array.filter((item, i) => {
            return array.indexOf(item) === i;
        });
    };

    render() {
        let areaName = this.props.areaName;
        let hyrule = this.props.hyrule;
        let state = this.props.state;
        let area = this.props.area;
        let firstCol = [];
        let secondCol = [];

        return(
            <div className="area-box box"
                 style={{
                     // set border to selected colors
                     // default solid grey
                     background: area.colors.length > 1 ?
                         `linear-gradient(to bottom right, ${area.colors.join(", ")}`
                         : area.colors.length === 1 ?
                             area.colors.length[0]
                             : "grey"
                 }}
            >
                <div className="box">
                    <h4 className="is-size-4 has-text-weight-semibold">{areaName}</h4>
                    {/* iterate through the entrances of the area */}
                    {Object.keys(area.entrances).sort().map((entranceName, i) => {
                        // column layout
                        let entrancesLength = Object.keys(area.entrances).length;
                        let arrayToAddTo = i < entrancesLength / 2 ? firstCol : secondCol;
                        // entrance object derived from the area object
                        let entrance = area.entrances[entranceName];
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
                                            Object.keys(hyrule).sort()
                                            : []; // How did you get here??

                        // add to the correct column in area container
                        arrayToAddTo.push(
                            <Entrance
                                key={i}
                                options={options}
                                entrance={entrance}
                                areaName={areaName}
                                entranceName={entranceName}
                                setEntrance={this.props.setEntrance}
                                resetEntrance={this.props.resetEntrance}
                            />
                        );
                        return null;
                    })}
                    {/* output the columns of area entrances */}
                    <div className="columns">
                        <div className="column">
                            {firstCol}
                        </div>
                        {secondCol.length > 0 ?
                            <div className="column">
                                {secondCol}
                            </div>
                            : ""
                        }
                    </div>
                </div>
            </div>
        )
    }
}
