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
        let entrances =  Object.keys(entranceObject);
        let availableInteriors = this.props.availableInteriors;
        let availableEntrances = this.props.availableEntrances;
        let backgroundColor = Areas[area].color || "transparent";
        return(
            <div className="box area-box" style={{border: `3px solid ${backgroundColor}`}}>
                <h4 className="is-size-4">{area}</h4>
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
        )
    }
}
