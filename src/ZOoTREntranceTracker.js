import PromptForInteriorEntrance from "./PromptForInteriorEntrance";
import AreaEntranceSeparator from "./AreaEntranceSeparator";
import EntranceTypes from "./DataObjects/EntranceTypes";
import Areas from "./DataObjects/AreasAndEntrances";
import AreasToAdd from "./DataObjects/AreasToAdd";
import Grottos from "./DataObjects/Grottos";
import Houses from "./DataObjects/Houses";
import React from "react";
import Area from "./Area";

export default class ZOoTREntranceTracker extends React.Component {

    state = {
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
    // nextAreaAndEntrance: the area->entrance pointer that is the new connection
    setOverworldToOverworld = (area, entrance, nextAreaAndEntrance) => {
        let [nextArea, nextEntrance] = nextAreaAndEntrance.split(AreaEntranceSeparator);
        let currentAreaAndEntrance = `${area}${AreaEntranceSeparator}${entrance}`;

        // add the areas (kinda overkill since one has to be defined already)
        this.addAreaIfNotAvailable(area);
        this.addAreaIfNotAvailable(nextArea);
        // add any secondary areas if applicable
        if (AreasToAdd[nextArea] !== undefined) {
            AreasToAdd[nextArea].forEach(area => {
                this.addAreaIfNotAvailable(area);
            })
        }

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
        let type = Areas[area].entrances[entrance].type;

        this.removeElementFromStateArray("availableInteriors", type, interior);
        this.addAreaIfNotAvailable(area);
        // add any secondary areas if applicable
        if (AreasToAdd[interior] !== undefined) {
            AreasToAdd[interior].forEach(area => {
                this.addAreaIfNotAvailable(area);
            })
        }

        this.addInteriorOrAreaLocation(`${area}${AreaEntranceSeparator}${entrance}`, interior);

        this.setEntrance(area, entrance, interior);
        this.removeElementFromStateArray("availableEntrances", type, interior);
    };

    // area: the area that the overworld pointer is located in
    // entrance: the overworld entrance in the area
    // landingAreaAndEntrance: the area->entrance pointer that is the new connection
    setKaeporaGaeboraEntrance = (area, entrance, landingAreaAndEntrance) => {
        // next area is the import part
        let [landingArea] = landingAreaAndEntrance.split(AreaEntranceSeparator);
        let currentAreaAndEntrance = `${area}${AreaEntranceSeparator}${entrance}`;

        this.addAreaIfNotAvailable(landingArea);
        // add any secondary areas if applicable
        if (AreasToAdd[landingArea] !== undefined) {
            AreasToAdd[landingArea].forEach(area => {
                this.addAreaIfNotAvailable(area);
            })
        }

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
        let type = Areas[area].entrances[entrance].type;

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

    addAreaIfNotAvailable = area => {
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

    interiorToPromptForBasedOnState = () => {
        let interiorLocations = this.state.interiorLocations;
        if (interiorLocations[Houses.LinksHouse] === undefined) {
            return Houses.LinksHouse;
        } else if (interiorLocations[Grottos.DampesGrave] !== undefined &&
                    interiorLocations[Houses.Windmill] === undefined) {
            return Houses.Windmill;
        }
        return "";
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
                Object.keys(Areas[area].entrances).forEach(entrance => {
                    let entranceObject = Areas[area].entrances[entrance];
                    let type = entranceObject.type;
                    let entranceName = `${area}${AreaEntranceSeparator}${entrance}`;
                    let interiorName = entranceObject.display || entrance;
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
                availableAreas: availableAreas
            });
        }
    };

    render() {
        let areas = this.state.openAreas;
        let interiorToPromptFor = this.interiorToPromptForBasedOnState();

        return (
            <div className="zootr-entrance-tracker">
                {/* search section */}
                {/* from a currently active location to another currently active location only */}

                <div className="user-prompts">
                    {/* on load, set location of Link's House */}
                    {interiorToPromptFor !== "" ?
                        <PromptForInteriorEntrance
                            interiorToPromptFor={interiorToPromptFor}
                            availableEntrances={this.state.availableEntrances.house}
                            resetEntrance={this.resetEntrance}
                            setInteriorToAreaAndEntrance={this.setInteriorToAreaAndEntrance}
                        />
                        : ""
                    }
                </div>
                {/* collection of areas */}
                {/* these contain a list of entrances */}
                {/* these entrances can be linked to entrances in other areas */}
                {/* this triggers another area to be added to the collection */}
                <div className="is-flex-desktop is-flex-tablet is-multiline flex-wraps">
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
            </div>
        );
    }
}
