import React, { useState } from "react";
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

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

export default function RouteFinder({ setRouteFinderStart, setRouteFinderEnd, availableLocations, hyrule, start, end, ...props }) {

    const [config, setConfig] = useState({
        ignoreKaeporaGaebora: false,
        ignoreSongs: false,
        ignoreCrossingHauntedWasteland: false,
        ignoreLostWoodsToBridge: false,
        ignoreGoronCityDMC: false,
        ignoreLostWoodsZorasRiverEntrances: false,
        ignoreLakeHyliaZorasDomainEntrance: false,
        ignoreWindmillFromDampesGrave: false,
        ignoreSpiritTempleHandsExit: false
    });

    const toggleConfigAttribute = attribute => {
        setConfig({ ...config, [attribute]: !config[attribute] });
    };

    const newRouteFromEnd = () => {
        setRouteFinderStart(end);
        setRouteFinderEnd(null);
    }

    // start is always a string
    // end is an object
    // since start could be an area, dungeon, etc.
    const findStartFromEndObject = (startName, endName, previousCheck, previousCheckLocation, currentCheck, currentCheckLocation, availableLocations, currentlyBeingSearched = [], completelySearched = []) => {
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

        if (locationIsSong && !config.ignoreSongs) {
            return [{ start: startName }, { song: currentCheck.song }];
        }

        if (locationIsHouse) {
            if (completelySearched.includes(currentCheck.interior) || currentlyBeingSearched.includes(currentCheck.interior)) {
                return [];
            }

            if (startIsHouse) {
                if (currentCheck.interior === startName) {
                    return [{ start: currentCheck.interior }];
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
                    return [{ start: startName }];
                }
            }
        }

        if (locationIsGrotto) {
            let isDampesGraveFromWindmill = currentCheck.interior === Grottos["Dampe's Grave"] &&
                currentCheck.entrance === Grottos["Dampe's Grave"] &&
                currentCheckLocation === Houses.Windmill;

            if (startIsGrotto) {
                if (currentCheck.interior === startName) {
                    if (!(isDampesGraveFromWindmill && config.ignoreWindmillFromDampesGrave)) {
                        return [{ start: startName }];
                    }
                }
            }

            if (currentCheck.interior === Grottos["Dampe's Grave"] && !(isDampesGraveFromWindmill && config.ignoreWindmillFromDampesGrave)) {
                nextLocationToSearch = Grottos["Dampe's Grave"];
            }
        }

        if (locationIsOverworld) {
            if (completelySearched.includes(currentCheck.area) || currentlyBeingSearched.includes(currentCheck.area)) {
                return [];
            }

            let isKaeporaGaeboraEntrance = currentCheck.entrance === EntranceTypes["Kaepora Gaebora"];

            let previousCheckIsHauntedWasteland = previousCheck.area === OverworldAreas["Haunted Wasteland"];

            let isLostWoodsToBridgeEntrance = currentCheck.area === OverworldAreas["Lost Woods"] &&
                currentCheck.entrance === OverworldAreas["Lost Woods Bridge"];

            let isGoronCityToDeathMountainCraterEntrance = currentCheck.area === OverworldAreas["Goron City"] &&
                currentCheck.entrance === OverworldAreas["Death Mountain Crater"];

            let isZorasRiverLostWoodsEntrance = DivingEntrances[currentCheck.area] !== undefined &&
                DivingEntrances[currentCheck.area][currentCheck.entrance] !== undefined &&
                (currentCheck.area === OverworldAreas["Lost Woods"] || currentCheck.area === OverworldAreas["Zora's River"]);

            let isLakeHyliaZorasDomainEntrance = DivingEntrances[currentCheck.area] !== undefined &&
                DivingEntrances[currentCheck.area][currentCheck.entrance] !== undefined &&
                (currentCheck.area === OverworldAreas["Zora's Domain"] || currentCheck.area === OverworldAreas["Lake Hylia"]);

            let isSpiritTempleHandsEntrance = previousCheck.area === null && previousCheck.entrance === Dungeons["Spirit Temple"];

            if (previousCheckIsHauntedWasteland) {
                let hauntedWastelandEntraceBeingLedTo = hyrule[currentCheck.area].entrances[currentCheck.entrance].leadsTo.entrance;
                let hauntedWastelandEntraceFromPreviousCheck = previousCheck.entrance;
                if (hauntedWastelandEntraceBeingLedTo !== hauntedWastelandEntraceFromPreviousCheck &&
                    config.ignoreCrossingHauntedWasteland) {
                    return [];
                }
            }

            if (startIsOverworld) {
                if (currentCheck.area === startName) {
                    if (!(isKaeporaGaeboraEntrance && config.ignoreKaeporaGaebora) &&
                        !(isLostWoodsToBridgeEntrance && config.ignoreLostWoodsToBridge) &&
                        !(isSpiritTempleHandsEntrance && config.ignoreSpiritTempleHandsExit) &&
                        !(isGoronCityToDeathMountainCraterEntrance && config.ignoreGoronCityDMC) &&
                        !(isZorasRiverLostWoodsEntrance && config.ignoreLostWoodsZorasRiverEntrances) &&
                        !(isLakeHyliaZorasDomainEntrance && config.ignoreLakeHyliaZorasDomainEntrance)) {
                        return [{ start: startName }, { area: currentCheck.area, entrance: currentCheck.entrance }];
                    }
                }
            }

            if (!(isKaeporaGaeboraEntrance && config.ignoreKaeporaGaebora) &&
                !(isLostWoodsToBridgeEntrance && config.ignoreLostWoodsToBridge) &&
                !(isSpiritTempleHandsEntrance && config.ignoreSpiritTempleHandsExit) &&
                !(isGoronCityToDeathMountainCraterEntrance && config.ignoreGoronCityDMC) &&
                !(isZorasRiverLostWoodsEntrance && config.ignoreLostWoodsZorasRiverEntrances) &&
                !(isLakeHyliaZorasDomainEntrance && config.ignoreLakeHyliaZorasDomainEntrance)) {
                nextLocationToSearch = currentCheck.area;
            }
        }

        if (locationIsInteriorConnection) {
            nextLocationToSearch = currentCheck.entrance;
        }

        if (nextLocationToSearch !== "") {
            currentlyBeingSearched.push(nextLocationToSearch);
            let nextArray = availableLocations[nextLocationToSearch];
            if (!nextArray) {
                return [];
            }
            shuffleArray(nextArray);
            for (let i = 0; i < nextArray.length; i++) {
                let result = findStartFromEndObject(startName, endName, currentCheck, currentCheckLocation, nextArray[i], nextLocationToSearch, availableLocations, currentlyBeingSearched, completelySearched);
                if (result.length > 0) {
                    if (locationIsHouse) {
                        return [...result, { entrance: currentCheck.interior }];
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
    const getRoutesFromStartToEnd = (startName, endName) => {
        if (availableLocations[endName] === undefined) {
            return [];
        }
        let endPaths = [];
        let numberOfTriesPerEndLocation = 100;

        availableLocations[endName].forEach(endObject => {
            let pathsForThisEndLocation = [];
            for (let i = 0; i < numberOfTriesPerEndLocation; i++) {
                let result = findStartFromEndObject(startName, endName, {}, null, endObject, endName, availableLocations);
                if (result.length > 0) {
                    let path = [...result, { end: endName }];
                    pathsForThisEndLocation.push(path);
                } else if (!ValidStartPoints.includes(endName)) {
                    // it's a place with many locations, e.g. a grotto
                    // this particular path not possible, so return empty array
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

    const getRoute = () => {
        if (!end || !start) {
            return null;
        }
        let result = getRoutesFromStartToEnd(start, end);
        return result;
    };

    let availableLocationsKeys = Object.keys(availableLocations);
    if (availableLocationsKeys.length < 3) {
        return <h4 className="section is-size-4 has-text-centered">More open areas necessary</h4>;
    }
    let routes = getRoute();
    return (
        <div className="route-finder">
            <div className="route-points-select">
                <div className="route-select-start is-flex">
                    <h5 className="is-size-5">Start:</h5>
                    {start === null ?
                        <div className="select is-small">
                            <select value="Select Location" onChange={e => setRouteFinderStart(e.target.value)}>
                                <option value="">Select Location</option>
                                {availableLocationsKeys.sort().map((location, i) => {
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
                            <span className="delete" onClick={() => setRouteFinderStart(null)}>x</span>
                        </h5>
                    }
                </div>
                <div className="route-select-end is-flex">
                    <h5 className="is-size-5">End:</h5>
                    {end === null ?
                        <div className="select is-small">
                            <select value="Select Location" onChange={e => setRouteFinderEnd(e.target.value)}>
                                <option value="">Select Location</option>
                                {availableLocationsKeys.sort().map((location, i) => {
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
                            <span className="delete" onClick={() => setRouteFinderEnd(null)}>x</span>
                        </h5>
                    }
                </div>
            </div>
            {end && start && ValidStartPoints.includes(end) && <div className="buttons is-centered">
                <button
                    className="button is-small is-primary"
                    onClick={newRouteFromEnd}
                >
                    New Route from End
                </button>
            </div>
            }
            <div className="routing-options buttons is-centered">
                <button
                    onClick={() => toggleConfigAttribute("ignoreKaeporaGaebora")}
                    className={"button is-small is-outlined " + (config.ignoreKaeporaGaebora ? "is-danger" : "is-dark")}
                >
                    Ignore Kaepora Gaebora
                </button>
                <button
                    onClick={() => toggleConfigAttribute("ignoreSongs")}
                    className={"button is-small is-outlined " + (config.ignoreSongs ? "is-danger" : "is-dark")}
                >
                    Ignore Songs
                </button>
                <button
                    onClick={() => toggleConfigAttribute("ignoreCrossingHauntedWasteland")}
                    className={"button is-small is-outlined " + (config.ignoreCrossingHauntedWasteland ? "is-danger" : "is-dark")}
                >
                    Ignore Crossing Haunted Wasteland
                </button>
                <button
                    onClick={() => toggleConfigAttribute("ignoreLostWoodsToBridge")}
                    className={"button is-small is-outlined " + (config.ignoreLostWoodsToBridge ? "is-danger" : "is-dark")}
                >
                    Ignore Bridge from Lost Woods
                </button>
                <button
                    onClick={() => toggleConfigAttribute("ignoreGoronCityDMC")}
                    className={"button is-small is-outlined " + (config.ignoreGoronCityDMC ? "is-danger" : "is-dark")}
                >
                    Ignore Death Mountain Crater Entrance in Goron City
                </button>
                <button
                    onClick={() => toggleConfigAttribute("ignoreLostWoodsZorasRiverEntrances")}
                    className={"button is-small is-outlined " + (config.ignoreLostWoodsZorasRiverEntrances ? "is-danger" : "is-dark")}
                >
                    Ignore Lost Woods/Zora's River Entrances
                </button>
                <button
                    onClick={() => toggleConfigAttribute("ignoreLakeHyliaZorasDomainEntrance")}
                    className={"button is-small is-outlined " + (config.ignoreLakeHyliaZorasDomainEntrance ? "is-danger" : "is-dark")}
                >
                    Ignore Zora's Domain/Lake Hylia Entrances
                </button>
                <button
                    onClick={() => toggleConfigAttribute("ignoreWindmillFromDampesGrave")}
                    className={"button is-small is-outlined " + (config.ignoreWindmillFromDampesGrave ? "is-danger" : "is-dark")}
                >
                    Ignore Windmill from Dampe's Grave
                </button>
                <button
                    onClick={() => toggleConfigAttribute("ignoreSpiritTempleHandsExit")}
                    className={"button is-small is-outlined " + (config.ignoreSpiritTempleHandsExit ? "is-danger" : "is-dark")}
                >
                    Ignore Spirit Temple Hands Exit
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
                                    toggleEntranceClear={props.toggleEntranceClear}
                                />
                            })}
                        </div>
                    })}
                </div>
                :
                routes !== null && routes.length === 0 ?
                    <h4 className="is-size-4 has-text-centered">Looks like this route isn't possible yet</h4>
                    :
                    ""
            }
        </div>
    )
}
