import AreaEntranceSeparator from "./Constants/AreaEntranceSeparator";
import PromptForHouseEntrance from "./PromptForHouseEntrance";
import EntranceTypes from "./DataObjects/EntranceTypes";
import LocalStorage from "./Constants/LocalStorage";
import AreasAndEntrances from "./DataObjects/AreasAndEntrances";
import AreasToAdd from "./DataObjects/AreasToAdd";
import Grottos from "./DataObjects/Grottos";
import Houses from "./DataObjects/Houses";
import Songs from "./DataObjects/Songs";
import Menu from "./DataObjects/Menu";
import React from "react";
import Area from "./Area";
import Song from "./Song";
import Entrance from "./Entrance";

export default class ZOoTREntranceTracker extends React.Component {

    state = {
        areasAndEntrances: {}, // master world state
        interiorEntrances: {}, // area/interior keys access array of location objects
        availableEntrances: {}, // area key accesses array of entrances
        availableOverworldEntrances: {}, // area key accesses array of overworld entrances
        availableDungeons: [], // dungeons not yet assigned to dungeon entrance
        availableHouses: [], // houses not yet assigned to house entrance
        availableHouseEntrances: {},
        availableGrottos: [], // grottos not yet assigned to grotto entrance
        allAreas: [], // array of all area names for Kaepora Gaebora
        openAreas: [], // the areas that can currently be accessed
        songs: {} // songs state
    };

    setEntrance = () => {
        // TODO
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
        this.addAdditionalAreas(nextArea);

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
    setHouseToAreaAndEntrance = (house, entranceObj) => {
        let areasAndEntrances = this.state.areasAndEntrances;
        let availableHouses = this.state.availableHouses;
        let availableHouseEntrances = this.state.availableHouseEntrances;
        let area = entranceObj.area;
        let entrance = entranceObj.entrance;

        areasAndEntrances[area].entrances[entrance].interior = house;
        availableHouses.splice(availableHouses.indexOf(house), 1);
        availableHouseEntrances[area].splice(availableHouses.indexOf(house), 1);

        this.addAreaIfNotAvailable(area);
        this.addAdditionalAreas(house);
    };

    // area: the area that the overworld pointer is located in
    // entrance: the overworld entrance in the area
    // landingAreaAndEntrance: the area->entrance pointer that is the new connection
    setKaeporaGaeboraEntrance = (area, entrance, landingAreaAndEntrance) => {
        // next area is the import part
        let [landingArea] = landingAreaAndEntrance.split(AreaEntranceSeparator);
        let currentAreaAndEntrance = `${area}${AreaEntranceSeparator}${entrance}`;

        this.addAreaIfNotAvailable(landingArea);
        this.addAdditionalAreas(landingArea);

        this.addInteriorOrAreaLocation(currentAreaAndEntrance, landingArea);

        this.setEntrance(area, entrance, landingAreaAndEntrance);
    };

    addAdditionalAreas = area => {
        if (AreasToAdd[area] !== undefined) {
            AreasToAdd[area].forEach(area => {
                this.addAreaIfNotAvailable(area);
            })
        }
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
        availableEntrances[EntranceTypes.Overworld] = availableEntrances[EntranceTypes.Overworld].sort();
        this.setState({availableEntrances: availableEntrances});

        this.removeAreaIfEmpty(area);
        this.removeAreaIfEmpty(otherArea);
    };

    // TODO
    resetEntrance = (area, entrance, interior) => {
        let openAreas = this.state.openAreas;
        openAreas[area][entrance] = "";
        let type = AreasAndEntrances[area].entrances[entrance].type;

        this.removeInteriorOrAreaLocation(`${area}${AreaEntranceSeparator}${entrance}`, interior);

        let availableInteriors = this.state.availableInteriors;
        availableInteriors[type].push(interior);
        availableInteriors[type] = availableInteriors[type].sort();
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
        openAreas.push(area);
        this.setState({openAreas: openAreas});
    };

    removeElementFromStateArray = (array, type, interior) => {
        let indexOfElement = this.state[array][type].indexOf(interior);
        let elements = this.state[array];
        elements[type].splice(indexOfElement, 1);
        this.setState({[array]: elements});
    };

    houseToPromptForBasedOnState = () => {
        let interiorEntrances = this.state.interiorEntrances;
        let songs = this.state.songs;
        if (interiorEntrances[Houses.LinksHouse] === undefined) {
            return Houses.LinksHouse;
        } else if (interiorEntrances[Grottos.DampesGrave] !== undefined &&
                interiorEntrances[Houses.Windmill] === undefined) {
            return Houses.Windmill;
        } else if (songs["Prelude of Light"].collected &&
            interiorEntrances[Houses.TempleOfTime] === undefined) {
            return Houses.TempleOfTime;
        }
        return null;
    };

    resetHouseInteriorLocation = interior => {
        let interiors = this.state.interiorLocations;
        let availableInteriors = this.state.availableInteriors;
        let openAreas = this.state.openAreas;
        if (!(interior in interiors)) {
            return;
        }
        let [area, entrance] = interiors[interior][0].split(AreaEntranceSeparator);
        openAreas[area][entrance] = "";
        this.setState({openAreas: openAreas});
        delete interiors[interior];
        availableInteriors[EntranceTypes.House].push(interior);
        this.setState({
            interiorLocations: interiors,
            availableInteriors: availableInteriors
        });
        this.removeAreaIfEmpty(area);
    };

    addSong = song => {
        let songs = this.state.songs;
        songs[song.name].collected = true;
        if (song.areaType === EntranceTypes.Overworld) {
            this.addAreaIfNotAvailable(song.area);
        }
        this.setState({songs: songs})
    };

    removeSong = song => {
        let songs = this.state.songs;
        songs[song.name].collected = false;
        if (song.areaType === EntranceTypes.Overworld) {
            this.removeAreaIfEmpty(song.area);
        } else if (song.areaType === EntranceTypes.House) {
            this.resetHouseInteriorLocation(song.area);
        }
        this.setState({songs: songs});
    };

    setupTracker = () => {

        let areasAndEntrances = AreasAndEntrances; // master world state
        let interiorEntrances = {}; // area/interior keys access array of location objects
        let availableEntrances = {}; // area key accesses array of entrances
        let availableOverworldEntrances = {}; // available entrances of type Overworld
        let availableDungeons = []; // dungeons not yet assigned to dungeon entrance
        let availableHouses = []; // houses not yet assigned to house entrance
        let availableHouseEntrances = {}; // areas and the houses within them
        let availableGrottos = []; // grottos not yet assigned to grotto entrance
        let allAreas = []; // array of all area names for Kaepora Gaebora
        let openAreas = []; // the areas that can currently be accessed
        let songs = Songs; // songs state

        Object.keys(areasAndEntrances).forEach(area => {
            allAreas.push(area);
            availableEntrances[area] = [];
            availableOverworldEntrances[area] = [];

            Object.keys(areasAndEntrances[area].entrances).forEach(entranceName => {

                availableEntrances[area].push(entranceName);
                let entrance = areasAndEntrances[area].entrances[entranceName];
                let type = entrance.type;

                if (type === EntranceTypes.Overworld) {
                    availableOverworldEntrances[area].push(entranceName);
                } else if (type === EntranceTypes.Dungeon) {
                    availableDungeons.push(entranceName);
                } else {
                    let displayName = entrance.display || entranceName;

                    if (type === EntranceTypes.House) {
                        availableHouses.push(displayName);
                        if (availableHouseEntrances[area] === undefined) {
                            availableHouseEntrances[area] = [];
                        }
                        availableHouseEntrances[area].push(entranceName);
                    } else if (type === EntranceTypes.Grotto) {
                        availableGrottos.push(displayName);
                    }
                }
            });
        });

        this.setState({
            areasAndEntrances: areasAndEntrances,
            interiorEntrances: interiorEntrances,
            availableEntrances: availableEntrances,
            availableOverworldEntrances: availableOverworldEntrances,
            availableDungeons: availableDungeons,
            availableHouses: availableHouses,
            availableHouseEntrances: availableHouseEntrances,
            availableGrottos: availableGrottos,
            allAreas: allAreas,
            openAreas: openAreas,
            songs: songs
        });
    };

    returnUniqueItems = array => {
        return array.filter((item, i) => {
            return array.indexOf(item) === i;
        });
    };

    saveState = () => {
        let state = this.state;
        localStorage.setItem(LocalStorage.state, JSON.stringify(state));
    };

    loadState = () => {
        let stringState = localStorage.getItem(LocalStorage.state);
        let state = JSON.parse(stringState);
        if (state) {
            this.setState(state);
        }
    };

    resetState = () => {
        localStorage.removeItem(LocalStorage.state);
        this.setupTracker();
    };

    componentDidMount() {
        this.setupTracker();
        this.loadState();
    };

    render() {
        let areasAndEntrances = this.state.areasAndEntrances;
        let openAreas = this.state.openAreas;
        let houseToPromptFor = this.houseToPromptForBasedOnState();
        let songs = this.state.songs;

        return (
            <div className="zootr-entrance-tracker">
                {/* search section */}
                {/* from a currently active location to another currently active location only */}

                <Menu
                    saveState={this.saveState}
                    resetState={this.resetState}
                />

                <div className="top-padding" />
                <div className="user-prompts">
                    {houseToPromptFor !== null ?
                        <PromptForHouseEntrance
                            houseToPromptFor={houseToPromptFor}
                            availableEntrances={this.state.availableHouseEntrances}
                            setHouseToAreaAndEntrance={this.setHouseToAreaAndEntrance}
                        />
                        : ""
                    }
                </div>

                {/* collection of areas */}
                {/* these contain a list of entrances */}
                {/* these entrances can be linked to entrances in other areas */}
                {/* this triggers another area to be added to the collection */}
                <div className="areas-container is-flex-desktop is-flex-tablet is-multiline flex-wraps">
                    {openAreas.map((areaName, i) => {
                        let area = areasAndEntrances[areaName];
                        let firstCol = [];
                        let secondCol = [];
                        return <div className="area-box box" key={i} style={{
                            background: area.colors.length === 1 ?
                                area.colors[0] :
                                `linear-gradient(to bottom right, ${area.colors.join(", ")}`
                        }}
                        >
                            <div className="box">
                                <h4 className="is-size-4 has-text-weight-semibold">{areaName}</h4>
                                {Object.keys(area.entrances).sort().map((entranceName, j) => {
                                    let entrancesLength = Object.keys(area.entrances).length;
                                    let arrayToAddTo = j < entrancesLength / 2 ? firstCol : secondCol;
                                    let entrance = area.entrances[entranceName];
                                    let options = entrance.type === EntranceTypes.House ?
                                        this.returnUniqueItems(this.state.availableHouses)
                                        : entrance.type === EntranceTypes.Dungeon ?
                                        this.state.availableDungeons
                                        : entrance.type === EntranceTypes.Overworld ?
                                            this.state.availableOverworldEntrances
                                            : entrance.type === EntranceTypes.Grotto ?
                                                this.returnUniqueItems(this.state.availableGrottos)
                                                : entrance.type === EntranceTypes.KaeporaGaebora ?
                                                    this.state.allAreas
                                                    : []; // How did you get here??

                                    arrayToAddTo.push(
                                        <div className="entrance" key={j}>
                                            <h6 className={
                                                "is-size-6 has-text-weight-semibold " +
                                                (entrance.interior === null || entrance.leadsTo === null ? "has-text-danger" : "")
                                            }>{entranceName}</h6>
                                            {entrance.interior !== undefined && entrance.interior !== null ?
                                                <div className="interior-display is-flex">
                                                    <span>
                                                        {entrance.interior}
                                                    </span>
                                                    {/* once Link's House is set, leave it */}
                                                    {entrance.interior === Houses.LinksHouse ?
                                                        "" :
                                                        <span className="delete is-pulled-right" onClick={this.resetEntrance} />
                                                    }
                                                </div> :
                                                <div className="select is-small entrance-select">
                                                    <select value="Not Checked" onChange={this.setLocation}>
                                                        <option value="Not Checked">Not Checked</option>
                                                        {options instanceof Array ?
                                                            options.map((interiorName, l) => {
                                                                if (entrance.type === EntranceTypes.Overworld &&
                                                                    entranceName === interiorName) {
                                                                    return null;
                                                                }
                                                                return <option key={l} value={interiorName}>{interiorName}</option>
                                                            })
                                                            :
                                                            Object.keys(options).sort().map((optgroupArea, k) => {
                                                                return <optgroup
                                                                    key={k}
                                                                    label={optgroupArea}
                                                                >
                                                                    {options[optgroupArea].map((optgroupEntrance, l) => {
                                                                        return <option
                                                                            key={l}
                                                                            value={JSON.stringify({
                                                                                area: optgroupArea,
                                                                                entrance: optgroupEntrance
                                                                            })}
                                                                        >
                                                                            {optgroupEntrance}
                                                                        </option>
                                                                    })}
                                                                </optgroup>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            }
                                        </div>
                                    );
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
                    })}
                </div>

                <div className="bottom-padding" />

                <div className="songs-container navbar is-fixed-bottom has-background-dark">
                    {Object.keys(songs).map((song, i) => {
                        return <Song
                            key={i}
                            song={songs[song]}
                            addSong={this.addSong}
                            removeSong={this.removeSong}
                        />
                    })}
                </div>
            </div>
        );
    }
}
