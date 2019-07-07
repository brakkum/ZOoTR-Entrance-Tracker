import EntranceTypes from "./DataObjects/EntranceTypes";
import Areas from "./DataObjects/AreasAndEntrances";
import Entrance from "./Entrance";
import React from "react";

export default class Area extends React.Component {

    returnUniqueItems = array => {
        return array.filter((item, i) => {
            return array.indexOf(item) === i;
        });
    };

    render() {
        let area = this.props.area;
        let entranceObject = this.props.entrances;
        let entrances =  Object.keys(entranceObject).sort();
        let availableInteriors = this.props.availableInteriors;
        let availableEntrances = this.props.availableEntrances;
        let backgroundColors = Areas[area].colors;
        return(
            <div className="area-box box" style={{
                    background: backgroundColors.length === 1 ?
                        backgroundColors[0] :
                        `linear-gradient(to bottom right, ${backgroundColors.join(", ")}`
                }}
            >
                <div className="box">
                    <h5 className="is-size-5">{area}</h5>
                    {entrances.map((entrance, i) => {
                        let entranceType = Areas[area].entrances[entrance].type;
                        return <Entrance
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
                            setInteriorToAreaAndEntrance={this.props.setInteriorToAreaAndEntrance}
                            setKaeporaGaeboraEntrance={this.props.setKaeporaGaeboraEntrance}
                            resetKaeporaGaeboraEntrance={this.props.resetKaeporaGaeboraEntrance}
                            interior={entranceObject[entrance]}
                            entrance={entrance}
                            area={area}
                            key={i}
                        />
                    })}
                </div>
            </div>
        )
    }
}
