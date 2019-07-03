import Areas from "./Entrances/AreasAndEntrances";
import React from "react";
import Entrance from "./Entrance";

export default class Area extends React.Component {

    render() {
        let area = this.props.area;
        let entrances =  Object.keys(this.props.entrances);
        let availableInteriors = this.props.availableInteriors;
        let availableEntrances = this.props.availableEntrances;
        return(
            <div>
                <h2>{area}</h2>
                {entrances.map((entrance, i) => {
                    let entranceType = Areas[area][entrance].type;
                    return <Entrance
                        availableLocations={entranceType === "house" ? availableInteriors.house
                            : entranceType === "dungeon" ? availableInteriors.dungeon
                                : entranceType === "overworld" ? availableEntrances.overworld
                                    : availableInteriors.grotto}
                        resetEntrance={this.props.resetEntrance}
                        resetOverworldEntrance={this.props.resetOverworldEntrance}
                        setOverworldToOverworld={this.props.setOverworldToOverworld}
                        setInteriorToAreaAndEntrance={this.props.setInteriorToAreaAndEntrance}
                        interior={this.props.entrances[entrance]}
                        area={this.props.area}
                        entrance={entrance}
                        key={i}
                    />
                })}
            </div>
        )
    }
}
