import React from "react";
import Houses from "./DataObjects/Houses";
import Grottos from "./DataObjects/Grottos";
import Dungeons from "./DataObjects/Dungeons";
import OverworldAreas from "./DataObjects/OverworldAreas";
import Songs from "./DataObjects/Songs";
import EntranceTypes from "./DataObjects/EntranceTypes";
import ValidStartPoints from "./DataObjects/ValidStartPoints";
import InteriorConnection from "./DataObjects/InteriorConnection";
import DivingEntrances from "./DataObjects/DivingEntrances";
import RouteStep from "./RouteStep";

export default class RouteFinder extends React.Component {

    state = {
        start: null,
        end: null,
        ignoreKaeporaGaebora: false,
        ignoreSongs: false,
        ignoreHauntedWasteland: false,
        ignoreLostWoodsToBridge: false,
        ignoreGoronCityDMC: false,
        ignoreDivingEntrances: false,
        ignoreWindmillFromDampesGrave: false
    };

    setStart = start => {
        if (start === "") {
            return;
        }
        this.props.setRouteFinderStart(start);
        this.setState({start});
    };

    resetStart = () => {
        this.props.setRouteFinderStart(null);
        this.setState({start: null});
    };

    setEnd = end => {
        if (end === "") {
            return;
        }
        this.props.setRouteFinderEnd(end);
        this.setState({end});
    };

    resetEnd = () => {
        this.props.setRouteFinderEnd(null);
        this.setState({end: null});
    };

    toggleStateAttribute = attribute => {
        this.setState({[attribute]: !this.state[attribute]});
    };

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    newRouteFromEnd = () => {
        let end = this.state.end;
        this.props.setRouteFinderStart(end);
        this.props.setRouteFinderEnd(null);
        this.setState({start: end, end: null});
    }

    // start is always a string
    // end is an object
    // since start could be an area, dungeon, etc.
    findStartFromEndObject = (startName, endName, previousCheck, currentCheck, availableLocations, currentlyBeingSearched = [], completelySearched = []) => {
        let startIsHouse = Houses[startName] !== undefined;
        let startIsGrotto = Grottos[startName] !== undefined;
        let startIsDungeon = Dungeons[startName] !== undefined;
        let startIsOverworld = OverworldAreas[startName] !== undefined;

        let locationIsSong = currentCheck.song !== undefined && Songs[currentCheck.song] !== undefined;
        let locationIsGrotto = currentCheck.entrance !== undefined && currentCheck.interior !== undefined && Grottos[currentCheck.interior] !== undefined;
        let locationIsHouse = currentCheck.entrance !== undefined && currentCheck.interior !== undefined && Houses[currentCheck.interior] !== undefined;
        let locationIsDungeon = currentCheck.entrance !== undefined && currentCheck.interior !== undefined && Dungeons[currentCheck.interior] !== undefined;
        let locationIsOverworld = currentCheck.area !== undefined && currentCheck.entrance !== undefined && OverworldAreas[currentCheck.area] !== undefined;
        let locationIsInteriorConnection = currentCheck.area === null && currentCheck.entrance !== undefined && InteriorConnection[currentCheck.entrance] !== undefined;

        let nextLocationToSearch = "";

        if (!currentlyBeingSearched.includes(endName)) {
            currentlyBeingSearched.push(endName);
        }

        if (locationIsSong && !this.state.ignoreSongs) {
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

            if (currentCheck.interior === Houses["Temple of Time"] ||
                currentCheck.interior === Houses["Windmill"]) {
                nextLocationToSearch = currentCheck.interior;
            }

            if (currentCheck.interior === Houses["Potion Shop Back"]) {
                nextLocationToSearch = Houses["Potion Shop Front"];
            } else if (currentCheck.interior === Houses["Potion Shop Front"]) {
                nextLocationToSearch = Houses["Potion Shop Back"];
            }
        }

        if (locationIsDungeon) {
            if (completelySearched.includes(currentCheck.interior) || currentlyBeingSearched.includes(currentCheck.interior)) {
                return [];
            }

            if (startIsDungeon) {
                if (currentCheck.interior === startName) {
                    return [{start: startName}];
                }
            }
        }

        if (locationIsGrotto) {
            if (startIsGrotto) {
                if (currentCheck.interior === startName) {
                    return [{start: startName}];
                }
            }

            if (currentCheck.interior === Grottos["Dampe's Grave"] && !this.state.ignoreWindmillFromDampesGrave) {
                nextLocationToSearch = Grottos["Dampe's Grave"];
            }
        }

        if (locationIsOverworld) {
            if (completelySearched.includes(currentCheck.area) || currentlyBeingSearched.includes(currentCheck.area)) {
                return [];
            }

            let isDivingEntrance = DivingEntrances[currentCheck.area] !== undefined && DivingEntrances[currentCheck.area][currentCheck.entrance] !== undefined;

            if (startIsOverworld) {
                if (currentCheck.area === startName) {
                    if (!(currentCheck.entrance === EntranceTypes["Kaepora Gaebora"] && this.state.ignoreKaeporaGaebora) &&
                        !(currentCheck.area === OverworldAreas["Lost Woods"] && previousCheck.area === OverworldAreas["Lost Woods Bridge"] && this.state.ignoreLostWoodsToBridge) &&
                        !(currentCheck.area === OverworldAreas["Goron City"] && currentCheck.entrance === OverworldAreas["Death Mountain Crater"] && this.state.ignoreGoronCityDMC) &&
                        !(isDivingEntrance && this.state.ignoreDivingEntrances)) {
                        return [{start: startName}, {area: currentCheck.area, entrance: currentCheck.entrance}];
                    }
                }
            }

            if (!(currentCheck.entrance === EntranceTypes["Kaepora Gaebora"] && this.state.ignoreKaeporaGaebora) &&
                !(currentCheck.area === OverworldAreas["Haunted Wasteland"] && this.state.ignoreHauntedWasteland) && 
                !(currentCheck.area === OverworldAreas["Lost Woods"] && previousCheck.area === OverworldAreas["Lost Woods Bridge"] && this.state.ignoreLostWoodsToBridge) &&
                !(currentCheck.area === OverworldAreas["Goron City"] && currentCheck.entrance === OverworldAreas["Death Mountain Crater"] && this.state.ignoreGoronCityDMC) &&
                !(isDivingEntrance && this.state.ignoreDivingEntrances)) {
                nextLocationToSearch = currentCheck.area;
            }
        }

        if (locationIsInteriorConnection) {
            nextLocationToSearch = currentCheck.entrance;            
        }

        if (nextLocationToSearch !== "") {
            currentlyBeingSearched.push(nextLocationToSearch);
            let nextArray = availableLocations[nextLocationToSearch];
            this.shuffleArray(nextArray);
            for (let i = 0; i < nextArray.length; i++) {
                let result = this.findStartFromEndObject(startName, endName, currentCheck, nextArray[i], availableLocations, currentlyBeingSearched, completelySearched);
                if (result.length > 0) {
                    if (locationIsHouse) {
                        return [...result, {entrance: currentCheck.interior}];
                    }
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
        let numberOfTries = 100;

        if (availableLocations[endName] === undefined) {
            return [];
        }

        availableLocations[endName].forEach(endObject => {
            let pathsForThisEndLocation = [];
            for (let i = 0; i < numberOfTries; i ++) {
                let result = this.findStartFromEndObject(startName, endName, {}, endObject, availableLocations);
                if (result.length > 0) {
                    let path = [...result, {end: endName}];
                    pathsForThisEndLocation.push(path);
                } else if (!ValidStartPoints.includes(endName)) {
                    // it's a place with many locations, e.g. a grotto
                    // this patricular path not possible, so use empty array
                    pathsForThisEndLocation.push([]);
                }
            }
            // include shortest path for this end point
            if (pathsForThisEndLocation.length > 0) {
                endPaths.push(pathsForThisEndLocation.reduce((a, b) => a.length <= b.length ? a : b));
            }
        });

        if (endPaths.length > 0) {
            if (ValidStartPoints.includes(endName)) {
                return [endPaths.reduce((a, b) => a.length <= b.length ? a : b)];
            } else {
                return endPaths;
            }
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
        return result;
    };

    componentDidMount = () => {
        this.setState({start: this.props.start, end: this.props.end});
    };

    render() {
        let availableLocations = Object.keys(this.props.availableLocations);
        if (availableLocations.length < 3) {
            return <h4 className="section is-size-4 has-text-centered">More open areas necessary</h4>;
        }
        let hyrule = this.props.hyrule;
        let start = this.state.start;
        let end = this.state.end;
        let routes = this.getRoute();
        return (
            <div className="route-finder">
                <div className="route-points-select">
                    <div className="route-select-start is-flex">
                        <h5 className="is-size-5">Start:</h5>
                        {start === null ?
                            <div className="select is-small">
                                <select value="Select Location" onChange={e => this.setStart(e.target.value)}>
                                    <option value="">Select Location</option>
                                    {availableLocations.sort().map((location, i) => {
                                        if (location === end || !ValidStartPoints.includes(location)) {
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
                    <div className="route-select-end is-flex">
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
                {end && start && ValidStartPoints.includes(end) && <div className="buttons is-centered">
                    <button
                        className="button is-small is-primary"
                        onClick={this.newRouteFromEnd}
                    >
                            New Route from End
                        </button>
                    </div>
                }
                <div className="routing-options buttons is-centered">
                    <button
                        onClick={() => this.toggleStateAttribute("ignoreKaeporaGaebora")}
                        className={"button is-small is-outlined " + (this.state.ignoreKaeporaGaebora ? "is-danger" : "is-dark")}
                    >
                        Ignore Kaepora Gaebora
                    </button>
                    <button
                        onClick={() => this.toggleStateAttribute("ignoreSongs")}
                        className={"button is-small is-outlined " + (this.state.ignoreSongs ? "is-danger" : "is-dark")}
                    >
                        Ignore Songs
                    </button>
                    <button
                        onClick={() => this.toggleStateAttribute("ignoreHauntedWasteland")}
                        className={"button is-small is-outlined " + (this.state.ignoreHauntedWasteland ? "is-danger" : "is-dark")}
                    >
                        Ignore Haunted Wasteland
                    </button>
                    <button
                        onClick={() => this.toggleStateAttribute("ignoreLostWoodsToBridge")}
                        className={"button is-small is-outlined " + (this.state.ignoreLostWoodsToBridge ? "is-danger" : "is-dark")}
                    >
                        Ignore Bridge from Lost Woods
                    </button>
                    <button
                        onClick={() => this.toggleStateAttribute("ignoreGoronCityDMC")}
                        className={"button is-small is-outlined " + (this.state.ignoreGoronCityDMC ? "is-danger" : "is-dark")}
                    >
                        Ignore Death Mountain Crater Entrance in Goron City
                    </button>
                    <button
                        onClick={() => this.toggleStateAttribute("ignoreDivingEntrances")}
                        className={"button is-small is-outlined " + (this.state.ignoreDivingEntrances ? "is-danger" : "is-dark")}
                    >
                        Ignore Diving Entrances
                    </button>
                    <button
                        onClick={() => this.toggleStateAttribute("ignoreWindmillFromDampesGrave")}
                        className={"button is-small is-outlined " + (this.state.ignoreWindmillFromDampesGrave ? "is-danger" : "is-dark")}
                    >
                        Ignore Windmill from Dampe's Grave
                    </button>
                </div>
                {routes !== null && routes.length > 0 ?
                    <div className="section routing-results">
                        {routes.map((route, i) => {
                            // each individual route
                            if (route.length === 0) {
                                return <div key={i} className="route columns is-vcentered">
                                    <div className="route-step column has-text-centered">
                                        Location not reachable from Start
                                    </div>
                                </div>
                            }
                            let routeEndArea = null;
                            let routeEndEntrance = null;
                            let routeHasClearAttribute;
                            let routeIsClear;
                            return <div key={i} className="route columns is-vcentered">
                                {route.map((step, j) => {
                                    let isEndStep = j === route.length - 1;
                                    if (j === route.length - 2) {
                                        routeEndArea = step.area;
                                        routeEndEntrance = step.entrance;
                                    }
                                    routeHasClearAttribute = hyrule[routeEndArea] !== undefined &&
                                        hyrule[routeEndArea].entrances[routeEndEntrance] !== undefined &&
                                            hyrule[routeEndArea].entrances[routeEndEntrance].clear !== undefined;
                                    if (routeHasClearAttribute) {
                                        routeIsClear = hyrule[routeEndArea].entrances[routeEndEntrance].clear;
                                    }
                                    // each step of a route
                                    return <RouteStep
                                        key={j}
                                        isEndStep={isEndStep}
                                        routeIsClear={routeIsClear}
                                        routeHasClearAttribute={routeHasClearAttribute}
                                        step={step}
                                        routeEndArea={routeEndArea}
                                        routeEndEntrance={routeEndEntrance}
                                        toggleClear={this.props.toggleClear}
                                    />
                                })}
                            </div>
                        })}
                    </div>
                    :
                    routes !== null && routes.length === 0
                    ?
                        <h4 className="is-size-4 has-text-centered">Looks like this route isn't possible yet</h4>
                    :
                    ""
                }
            </div>
        )
    }
}
