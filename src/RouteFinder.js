import React from "react";
import Houses from "./DataObjects/Houses";
import Grottos from "./DataObjects/Grottos";
import Dungeons from "./DataObjects/Dungeons";
import OverworldAreas from "./DataObjects/OverworldAreas";
import Songs from "./DataObjects/Songs";

export default class RouteFinder extends React.Component {

    state = {
        start: null,
        end: null,
        locationsBeingSearched: []
    };

    setStart = start => {
        if (start === "") {
            return;
        }
        this.setState({start});
    };

    resetStart = () => {
        this.setState({start: null});
    };

    setEnd = end => {
        if (end === "") {
            return;
        }
        this.setState({end});
    };

    resetEnd = () => {
        this.setState({end: null});
    };

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    // start is always a string
    // end is an object
    // since start could be an area, dungeon, etc.
    findStartFromEndObject = (startName, endName, currentCheck, availableLocations, currentlyBeingSearched = [], completelySearched = []) => {
        let startIsHouse = Houses[startName] !== undefined;
        let startIsGrotto = Grottos[startName] !== undefined;
        let startIsDungeon = Dungeons[startName] !== undefined;
        let startIsOverworld = OverworldAreas[startName] !== undefined;

        let locationIsSong = currentCheck.song !== undefined && Songs[currentCheck.song] !== undefined;
        let locationIsGrotto = currentCheck.entrance !== undefined && currentCheck.interior !== undefined && Grottos[currentCheck.interior] !== undefined;
        let locationIsHouse = currentCheck.entrance !== undefined && currentCheck.interior !== undefined && Houses[currentCheck.interior] !== undefined;
        let locationIsDungeon = currentCheck.entrance !== undefined && currentCheck.interior !== undefined && Dungeons[currentCheck.interior] !== undefined;
        let locationIsOverworld = currentCheck.area !== undefined && currentCheck.entrance !== undefined && OverworldAreas[currentCheck.area] !== undefined;

        let nextLocationToSearch = "";

        if (locationIsSong) {
            return [{start: startName}, {song: currentCheck.song}];
        }

        if (locationIsHouse) {
            if (completelySearched.includes(currentCheck.interior) || currentlyBeingSearched.includes(currentCheck.interior)) {
                return [];
            }

            if (startIsHouse) {
                if (currentCheck.interior === startName) {
                    return [{start: currentCheck.interior}];
                }
            }

            if (currentCheck.interior === Houses.Windmill) {
                nextLocationToSearch = Houses.Windmill;
            }
        }

        if (locationIsDungeon) {
            if (completelySearched.includes(currentCheck.interior) || currentlyBeingSearched.includes(currentCheck.interior)) {
                return [];
            }

            if (startIsDungeon) {
                if (currentCheck.interior === startName) {
                    return [{start: startName}, {entrance: currentCheck.entrance}];
                }
            }

            nextLocationToSearch = currentCheck.interior;
        }

        if (locationIsGrotto) {
            if (startIsGrotto) {
                if (currentCheck.interior === startName) {
                    return [{start: startName}, {entrance: currentCheck.entrance, interior: currentCheck.interior}];
                }
            }

            if (currentCheck.interior === Grottos["Dampe's Grave"]) {
                nextLocationToSearch = Grottos["Dampe's Grave"];
            }
        }

        if (locationIsOverworld) {
            if (completelySearched.includes(currentCheck.area) || currentlyBeingSearched.includes(currentCheck.area)) {
                return [];
            }

            if (startIsOverworld) {
                if (currentCheck.area === startName) {
                    return [{start: startName}, {area: currentCheck.area, entrance: currentCheck.entrance}];
                }
            }

            nextLocationToSearch = currentCheck.area;
        }

        if (nextLocationToSearch !== "") {
            currentlyBeingSearched.push(nextLocationToSearch);
            let nextArray = availableLocations[nextLocationToSearch];
            this.shuffleArray(nextArray);
            for (let i = 0; i < nextArray.length; i++) {
                let result = this.findStartFromEndObject(startName, endName, nextArray[i], availableLocations, currentlyBeingSearched, completelySearched);
                if (result.length > 0) {
                    return [...result, currentCheck];
                }
            }
            currentlyBeingSearched.splice(currentlyBeingSearched.indexOf(nextLocationToSearch), 1);
            completelySearched.push(nextLocationToSearch);
            return [];
        } else {
            return [];
        }
    };

    // start is always the same, as we look for it from end, end is current queued item
    getRoutesFromStartToEnd = (startName, endName) => {
        let availableLocations = this.props.availableLocations;
        let endPaths = [];
        let numberOfTries = 20;

        availableLocations[endName].forEach(endObject => {
            let pathsForThisEndLocation = [];
            for (let j = 0; j < numberOfTries; j ++) {
                let result = this.findStartFromEndObject(startName, endName, endObject, availableLocations);
                if (result.length > 0) {
                    let path = [...result, {end: endName}];
                    pathsForThisEndLocation.push(path);
                }
            }
            // include shortest path for this end point
            if (pathsForThisEndLocation.length > 0) {
                endPaths.push(pathsForThisEndLocation.reduce((a, b) => a.length <= b.length ? a : b));
            }
        });

        if (endPaths.length > 0) {
            return endPaths.reduce((a, b) => a.length <= b.length ? a : b);
        } else {
            return [];
        }
    };

    getRoute = () => {
        let end = this.state.end;
        let start = this.state.start;
        if (!end || !start) {
            return null;
        }
        let result = this.getRoutesFromStartToEnd(start, end);
        console.log(result);
        return result;
    };

    render() {
        let availableLocations = Object.keys(this.props.availableLocations);
        if (availableLocations.length < 2) {
            return <h4 className="is-size-4 has-text-centered">More open areas necessary</h4>;
        }
        let start = this.state.start;
        let end = this.state.end;
        let route = this.getRoute();
        return(
            <div className="route-finder">
                <div className="route-points-select">
                    <div className="route-select-start is-flex">
                        <h5 className="is-size-5">Start:</h5>
                        {start === null ?
                            <div className="select is-small">
                                <select value="Select Location" onChange={e => this.setStart(e.target.value)}>
                                    <option value="">Select Location</option>
                                    {availableLocations.sort().map((location, i) => {
                                        if (location === end) {
                                            return null;
                                        }
                                        return <option key={i} value={location}>
                                            {location}
                                        </option>
                                    })}
                                </select>
                            </div>
                            :
                            <h5 className="is-size-5 is-flex selected-location">
                                {start}
                                <span className="delete" onClick={this.resetStart}>x</span>
                            </h5>
                        }
                    </div>
                    <div className="route-select-end is-flex is-centered">
                        <h5 className="is-size-5">End:</h5>
                            {end === null ?
                                <div className="select is-small">
                                    <select value="Select Location" onChange={e => this.setEnd(e.target.value)}>
                                        <option value="">Select Location</option>
                                        {availableLocations.sort().map((location, i) => {
                                            if (location === start) {
                                                return null;
                                            }
                                            return <option key={i} value={location}>
                                                {location}
                                            </option>
                                        })}
                                    </select>
                                </div>
                                :
                                <h5 className="is-size-5 is-flex selected-location">
                                    {end}
                                    <span className="delete" onClick={this.resetEnd}>x</span>
                                </h5>
                            }
                    </div>
                </div>
                {route !== null ?
                    <div className="result">

                    </div>
                    :
                    ""
                }
            </div>
        )
    }
}
