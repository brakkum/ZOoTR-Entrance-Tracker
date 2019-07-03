import AreaEntranceSeparator from "./AreaEntranceSeparator";
import SetLinksHouse from "./SetLinksHouse";
import Areas from "./Entrances/AreasAndEntrances";
import React from "react";
import Area from "./Area";

export default class ZOoTREntranceTracker extends React.Component {

    state = {
        showStartSelection: false,
        availableInteriors: {}, // Interiors that have not yet been assigned
        availableEntrances: {}, // Entrances that have not yet been assigned
        availableAreas: {}, // Areas that have not yet been accessed
        openAreas: {} // This defines what the current layout is
    };

    // area: the area that the overworld pointer is located in
    // entrance: the overworld entrance in the area
    // location: the area->entrance pointer that is the new connection
    setOverworldToOverworld = (area, entrance, nextAreaAndEntrance) => {
        let [nextArea, nextEntrance] = nextAreaAndEntrance.split(AreaEntranceSeparator);
        let currentAreaAndEntrance = `${area}${AreaEntranceSeparator}${entrance}`;
        console.log(area, entrance)
        console.log(nextArea, nextEntrance)
        this.addArea(area);
        this.addArea(nextArea);

        this.removeElementFromStateArray("availableEntrances", "overworld", nextAreaAndEntrance);
        this.removeElementFromStateArray("availableEntrances", "overworld", currentAreaAndEntrance);

        this.setEntrance(nextArea, nextEntrance, currentAreaAndEntrance);
        this.setEntrance(area, entrance, nextAreaAndEntrance);
    };

    // area: the area that the entrance is located in
    // entrance: the entrance being assigned and interior
    // interior: the house/dungeon/grotto being assigned to a location
    setInteriorToAreaAndEntrance = (area, entrance, interior) => {
        let type = Areas[area][entrance].type;

        this.removeElementFromStateArray("availableInteriors", type, interior);
        this.addArea(area);

        this.setEntrance(area, entrance, interior);
        this.removeElementFromStateArray("availableEntrances", type, interior);

        if (this.state.showStartSelection) {
            this.setState({showStartSelection: false});
        }
    };

    // area: the area the overworld pointer is set in
    // entrance: the entrance it is assigned to
    // nextAreaAndEntrance the area->entrance pointer for where the entrance leads
    resetOverworldEntrance = (area, entrance, nextAreaAndEntrance) => {
        let [nextArea, nextEntrance] = nextAreaAndEntrance.split(AreaEntranceSeparator);
        let currentAreaAndEntrance = `${area}${AreaEntranceSeparator}${entrance}`;

        // reset both overworld pointers to empty
        let openAreas = this.state.openAreas;
        openAreas[area][entrance] = "";
        openAreas[nextArea][nextEntrance] = "";
        this.setState({openAreas: openAreas});

        // add the freed entrances back into the pool
        let availableEntrances = this.state.availableEntrances;
        availableEntrances["overworld"].push(nextAreaAndEntrance);
        availableEntrances["overworld"].push(currentAreaAndEntrance);
        this.setState({availableEntrances: availableEntrances});

        this.removeAreaIfEmpty(area);
        this.removeAreaIfEmpty(nextArea);
    };

    resetEntrance = (area, entrance, interior) => {
        let openAreas = this.state.openAreas;
        openAreas[area][entrance] = "";
        let type = Areas[area][entrance].type;

        let availableInteriors = this.state.availableInteriors;
        availableInteriors[type].push(interior);
        this.setState({availableInteriors: availableInteriors});
        this.setState({openAreas: openAreas});
    };

    removeAreaIfEmpty = areaName => {
        let areas = this.state.openAreas;
        let area = areas[areaName];
        let empty = true;
        if (!area) {
            return;
        }
        Object.keys(area).forEach(entrance => {
            if (area[entrance] !== "") { empty = false; }
        });
        if (empty) {
            delete areas[areaName];
            this.setState({openAreas: areas});
        }
    };

    setEntrance = (area, entrance, interior) => {
        let openAreas = this.state.openAreas;
        openAreas[area][entrance] = interior;
        this.setState({openAreas: openAreas});
    };

    addArea = area => {
        let openAreas = this.state.openAreas;
        if (area in openAreas) {
            // area is already available
            return;
        }
        openAreas[area] = this.state.availableAreas[area];
        this.setState({openAreas: {}});
        this.setState({openAreas: openAreas});
    };

    removeElementFromStateArray = (array, type, interior) => {
        let indexOfElement = this.state[array][type].indexOf(interior);
        let elements = this.state[array];
        elements[type].splice(indexOfElement, 1);
        this.setState({[array]: elements});
    };

    componentDidMount() {
        // TODO: check for local storage here later
        let local = false;
        if (local) {

        } else {

            let availableEntrances = {
                "house": [],
                "overworld": [],
                "grotto": [],
                "dungeon": []
            };

            let availableInteriors = {
                "house": [],
                "overworld": [],
                "grotto": [],
                "dungeon": []
            };

            let availableAreas = {};

            Object.keys(Areas).forEach(area => {
                availableAreas[area] = {};
                Object.keys(Areas[area]).forEach(entrance => {
                    let type = Areas[area][entrance].type;
                    let entranceName = `${area}${AreaEntranceSeparator}${entrance}`;
                    availableEntrances[type].push(entranceName);
                    availableInteriors[type].push(entrance);
                    availableAreas[area][entrance] = "";
                });
            });

            this.setState({
                availableInteriors: availableInteriors,
                availableEntrances: availableEntrances,
                availableAreas: availableAreas,
                showStartSelection: true,
            });
        }
    };

    render() {
        let showStartSelection = this.state.showStartSelection;
        let availableHouses = this.state.availableEntrances.house;
        let areas = this.state.openAreas;
        return (
            <div className="app">
                {/* search section */}
                {/* from a currently active location to another currently active location only */}

                {/* collection of areas */}
                {/* these contain a list of entrances */}
                {/* these entrances can be linked to entrances in other areas */}
                {/* this triggers another area to be added to the collection */}
                {showStartSelection ?
                    <SetLinksHouse
                        availableEntrances={availableHouses}
                        resetEntrance={this.resetEntrance}
                        setInteriorToAreaAndEntrance={this.setInteriorToAreaAndEntrance}
                    />
                    : ""
                }
                {Object.keys(areas).sort().map((area, i) => {
                    return <Area
                        key={i}
                        area={area}
                        resetEntrance={this.resetEntrance}
                        setOverworldToOverworld={this.setOverworldToOverworld}
                        setInteriorToAreaAndEntrance={this.setInteriorToAreaAndEntrance}
                        availableInteriors={this.state.availableInteriors}
                        availableEntrances={this.state.availableEntrances}
                        resetOverworldEntrance={this.resetOverworldEntrance}
                        entrances={areas[area]}
                    />
                })}
            </div>
        );
    }
}
