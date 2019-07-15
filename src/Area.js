import EntranceTypes from "./DataObjects/EntranceTypes";
import Hyrule from "./DataObjects/Hyrule";
import Entrance from "./Entrance";
import React from "react";

export default class Area extends React.Component {

    returnUniqueItems = array => {
        return array.filter((item, i) => {
            return array.indexOf(item) === i;
        });
    };

    render() {
        let area = this.props.area; // area object
        let entrances = area.entrances;
        let availableInteriors = this.props.availableInteriors;
        let availableEntrances = this.props.availableEntrances;
        let backgroundColors = Hyrule[area].colors;
        let firstCol = [];
        let secondCol = [];

        return(
            <div className="area-box box" style={{
                    background: backgroundColors.length === 1 ?
                        backgroundColors[0] :
                        `linear-gradient(to bottom right, ${backgroundColors.join(", ")}`
                }}
            >
                <div className="box">
                    <h4 className="is-size-4 has-text-weight-semibold">{area}</h4>
                    {entrances.map((entrance, i) => {
                        let entrancesLength = entrances.length;
                        let entranceType = Hyrule[area].entrances[entrance].type;
                        let arrayToAddTo = i < entrancesLength / 2 ? firstCol : secondCol;
                        arrayToAddTo.push(<Entrance
                            availableLocations={
                                entranceType === EntranceTypes.House ?
                                this.returnUniqueItems(availableInteriors.house)
                                    : entranceType === EntranceTypes.Dungeon ?
                                    availableInteriors.dungeon
                                        : entranceType === EntranceTypes.Overworld ?
                                        availableEntrances.overworld
                                            : entranceType === EntranceTypes.Grotto ?
                                            this.returnUniqueItems(availableInteriors.grotto)
                                                : entranceType === EntranceTypes.KaeporaGaebora ?
                                                availableEntrances.kaeporaGaebora
                                                    : [] // How did you get here??
                            }
                            resetEntrance={this.props.resetEntrance}
                            resetOverworldEntrance={this.props.resetOverworldEntrance}
                            setOverworldToOverworld={this.props.setOverworldToOverworld}
                            setInteriorToAreaAndEntrance={this.props.setHouseToAreaAndEntrance}
                            setKaeporaGaeboraEntrance={this.props.setKaeporaGaeboraEntrance}
                            resetKaeporaGaeboraEntrance={this.props.resetKaeporaGaeboraEntrance}
                            // interior={entranceObject[entrance]}
                            entrance={entrance}
                            area={area}
                            key={i}
                        />);
                        return null;
                    })}
                    <div className="columns">
                        <div className="column">
                            {firstCol}
                        </div>
                        {secondCol.length > 0 ?
                            <div className="column">
                                {secondCol}
                            </div>
                            : ""}
                    </div>
                </div>
            </div>
        )
    }
}
