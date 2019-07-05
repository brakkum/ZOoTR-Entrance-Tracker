import AreaEntranceSeparator from "./AreaEntranceSeparator";
import EntranceTypes from "./DataObjects/EntranceTypes";
import Areas from "./DataObjects/AreasAndEntrances";
import SetLinksHouse from "./SetLinksHouse";
import React from "react";
import Area from "./Area";

export default class ZOoTREntranceTracker extends React.Component {

    state = {
        // should prompt for Link's House location show
        showStartSelection: false,
        // Interiors that have not yet been assigned
        availableInteriors: {},
        // DataObjects that have not yet been assigned
        availableEntrances: {},
        // Interior keys with an array of their location
        interiorLocations: {},
        // Overworld Area objects that are added to openAreas when found
        availableAreas: {},
        // This tracks all current areas and state involved
        openAreas: {}
    };

    // area: the area that the overworld pointer is located in
    // entrance: the overworld entrance in the area
    // location: the area->entrance pointer that is the new connection
    setOverworldToOverworld = (area, entrance, nextAreaAndEntrance) => {
        let [nextArea, nextEntrance] = nextAreaAndEntrance.split(AreaEntranceSeparator);
        let currentAreaAndEntrance = `${area}${AreaEntranceSeparator}${entrance}`;

        this.addArea(area);
        this.addArea(nextArea);

        this.addInteriorOrAreaLocation(nextAreaAndEntrance, area);
        this.addInteriorOrAreaLocation(currentAreaAndEntrance, nextArea);

        this.removeElementFromStateArray("availableEntrances", EntranceTypes.Overworld, nextAreaAndEntrance);
        this.removeElementFromStateArray("availableEntrances", EntranceTypes.Overworld, currentAreaAndEntrance);

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

        this.addInteriorOrAreaLocation(`${area}${AreaEntranceSeparator}${entrance}`, interior);

        this.setEntrance(area, entrance, interior);
        this.removeElementFromStateArray("availableEntrances", type, interior);

        if (this.state.showStartSelection) {
            this.setState({showStartSelection: false});
        }
    };

    // area: the area that the overworld pointer is located in
    // entrance: the overworld entrance in the area
    // landingAreaAndEntrance: the area->entrance pointer that is the new connection
    setKaeporaGaeboraEntrance = (area, entrance, landingAreaAndEntrance) => {
        // next area is the import part
        let [landingArea] = landingAreaAndEntrance.split(AreaEntranceSeparator);
        let currentAreaAndEntrance = `${area}${AreaEntranceSeparator}${entrance}`;

        this.addArea(landingArea);

        this.addInteriorOrAreaLocation(currentAreaAndEntrance, landingArea);

        this.setEntrance(area, entrance, landingAreaAndEntrance);
    };

    // area: the area that the overworld pointer is located in
    // entrance: the overworld entrance in the area, will always be KG
    // landingAreaAndEntrance: the area->entrance pointer that was used
    resetKaeporaGaeboraEntrance = (area, entrance, landingAreaAndEntrance) => {
        let [landingArea] = landingAreaAndEntrance.split(AreaEntranceSeparator);
        let currentAreaAndEntrance = `${area}${AreaEntranceSeparator}${entrance}`;

        // reset kaepora overworld pointer to empty
        let openAreas = this.state.openAreas;
        openAreas[area][entrance] = "";
        this.setState({openAreas: openAreas});

        // remove from interiorLocation array
        this.removeInteriorOrAreaLocation(currentAreaAndEntrance, landingArea);

        this.removeAreaIfEmpty(area);
        this.removeAreaIfEmpty(landingArea);
    };

    // locationPointer: an area->entrance pointer
    // interior: interior name to be used as key for array of pointers
    addInteriorOrAreaLocation = (locationPointer, interior) => {
        let interiorLocations = this.state.interiorLocations;
        if (interiorLocations[interior] === undefined) {
            interiorLocations[interior] = [];
        }
        interiorLocations[interior].push(locationPointer);
        this.setState({interiorLocations: interiorLocations});
    };

    // locationPointer: an area->entrance pointer
    // interior: interior name that is used as key for array of location pointers
    removeInteriorOrAreaLocation = (locationPointer, interior) => {
        let interiorLocations = this.state.interiorLocations;
        interiorLocations[interior].splice(interiorLocations[interior].indexOf(locationPointer), 1);
        if (interiorLocations[interior].length === 0) {
            delete interiorLocations[interior];
        }
        this.setState({interiorLocations: interiorLocations});
    };

    // area: the area the overworld pointer is set in
    // entrance: the entrance it is assigned to
    // nextAreaAndEntrance the area->entrance pointer for where the entrance leads
    resetOverworldEntrance = (area, entrance, connectedAreaAndEntrance) => {
        let [otherArea, otherEntrance] = connectedAreaAndEntrance.split(AreaEntranceSeparator);
        let currentAreaAndEntrance = `${area}${AreaEntranceSeparator}${entrance}`;

        // reset both overworld pointers to empty
        let openAreas = this.state.openAreas;
        openAreas[area][entrance] = "";
        openAreas[otherArea][otherEntrance] = "";
        this.setState({openAreas: openAreas});

        // remove from interiorLocation array
        this.removeInteriorOrAreaLocation(connectedAreaAndEntrance, area);
        this.removeInteriorOrAreaLocation(currentAreaAndEntrance, otherArea);

        // add the freed entrances back into the pool
        let availableEntrances = this.state.availableEntrances;
        availableEntrances[EntranceTypes.Overworld].push(connectedAreaAndEntrance);
        availableEntrances[EntranceTypes.Overworld].push(currentAreaAndEntrance);
        this.setState({availableEntrances: availableEntrances});

        this.removeAreaIfEmpty(area);
        this.removeAreaIfEmpty(otherArea);
    };

    resetEntrance = (area, entrance, interior) => {
        let openAreas = this.state.openAreas;
        openAreas[area][entrance] = "";
        let type = Areas[area][entrance].type;

        this.removeInteriorOrAreaLocation(`${area}${AreaEntranceSeparator}${entrance}`, interior);

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
                [EntranceTypes.House]: [],
                [EntranceTypes.Overworld]: [],
                [EntranceTypes.Grotto]: [],
                [EntranceTypes.Dungeon]: [],
                [EntranceTypes.KaeporaGaebora]: []
            };

            let availableInteriors = {
                [EntranceTypes.House]: [],
                [EntranceTypes.Overworld]: [],
                [EntranceTypes.Grotto]: [],
                [EntranceTypes.Dungeon]: [],
                [EntranceTypes.KaeporaGaebora]: []
            };

            let availableAreas = {};
            let interiorLocations = {};

            Object.keys(Areas).forEach(area => {
                availableAreas[area] = {};
                Object.keys(Areas[area]).forEach(entrance => {
                    let type = Areas[area][entrance].type;
                    let entranceName = `${area}${AreaEntranceSeparator}${entrance}`;
                    let interiorName = Areas[area][entrance].display || entrance;
                    availableEntrances[type].push(entranceName);
                    availableInteriors[type].push(interiorName);
                    if (type === EntranceTypes.Overworld) {
                        availableEntrances[EntranceTypes.KaeporaGaebora].push(entranceName);
                    }
                    availableAreas[area][entrance] = "";
                });
            });

            this.setState({
                availableInteriors: availableInteriors,
                availableEntrances: availableEntrances,
                interiorLocations: interiorLocations,
                availableAreas: availableAreas,
                showStartSelection: true
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

                {/* on load, set location of Link's House */}
                {showStartSelection ?
                    <SetLinksHouse
                        availableEntrances={availableHouses}
                        resetEntrance={this.resetEntrance}
                        setInteriorToAreaAndEntrance={this.setInteriorToAreaAndEntrance}
                    />
                    : ""
                }
                {/* collection of areas */}
                {/* these contain a list of entrances */}
                {/* these entrances can be linked to entrances in other areas */}
                {/* this triggers another area to be added to the collection */}
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
                        resetKaeporaGaeboraEntrance={this.resetKaeporaGaeboraEntrance}
                        setKaeporaGaeboraEntrance={this.setKaeporaGaeboraEntrance}
                        entrances={areas[area]}
                    />
                })}
            </div>
        );
    }
}
