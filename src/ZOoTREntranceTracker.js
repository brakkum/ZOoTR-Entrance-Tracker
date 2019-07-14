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
        let interiorEntrances = this.state.interiorEntrances;
        let area = entranceObj.area;
        let entrance = entranceObj.entrance;

        areasAndEntrances[area].entrances[entrance].interior = house;
        availableHouses.splice(availableHouses.indexOf(house), 1);
        availableHouseEntrances[area].splice(availableHouses.indexOf(house), 1);
        interiorEntrances[house] = [];
        interiorEntrances[house].push(entranceObj);

        this.addAreaIfNotAvailable(area);
        this.addAdditionalAreas(area);
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

    // TODO
    setEntrance = (entranceSelected, selection) => {
        console.log(entranceSelected, selection);

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


                <div className="areas-container is-flex-desktop is-flex-tablet is-multiline flex-wraps">
                    {/* iterate through the current areas that are open */}
                    {openAreas.map((areaName, i) => {
                        // get the current areas object from state
                        let area = areasAndEntrances[areaName];
                        // area entrances shown in two columns
                        // to prevent extremely tall areas
                        let firstCol = [];
                        let secondCol = [];
                        return <div className="area-box box" key={i}
                            style={{
                                // set border to selected colors
                                // default solid grey
                                background: area.colors.length > 1 ?
                                    `linear-gradient(to bottom right, ${area.colors.join(", ")}`
                                    : area.colors.length === 1 ?
                                        area.colors.length[0]
                                        : "grey"
                            }}
                        >
                            <div className="box">
                                <h4 className="is-size-4 has-text-weight-semibold">{areaName}</h4>
                                {/* iterate through the entrances of the area */}
                                {Object.keys(area.entrances).sort().map((entranceName, j) => {
                                    // column layout
                                    let entrancesLength = Object.keys(area.entrances).length;
                                    let arrayToAddTo = j < entrancesLength / 2 ? firstCol : secondCol;
                                    // entrance object derived from the area object
                                    let entrance = area.entrances[entranceName];
                                    // the type of entrance determines what
                                    // options are displayed to pick from
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

                                    // add to the correct column in area container
                                    arrayToAddTo.push(
                                        <div className="entrance" key={j}>
                                            <h6 className={
                                                "is-size-6 has-text-weight-semibold " +
                                                // entrance has no assignment, make it clear
                                                (entrance.interior === null || entrance.leadsTo === null ? "has-text-danger" : "")
                                            }>{entranceName}</h6>
                                            {entrance.interior !== undefined && entrance.interior !== null ?
                                                // has an interior defined, so just display it
                                                <div className="interior-display is-flex">
                                                    <span>
                                                        {entrance.interior}
                                                    </span>
                                                    {/* x icon for resetting an entrance to unchecked */}
                                                    {/* but once Link's House is set, leave it */}
                                                    {entrance.interior === Houses.LinksHouse ?
                                                        "" :
                                                        <span className="delete is-pulled-right" onClick={this.resetEntrance} />
                                                    }
                                                </div>
                                                :
                                                entrance.leadsTo !== undefined && entrance.leadsTo !== null
                                                ?
                                                // points to an area, and maybe an entrance
                                                <div className="interior-display is-flex">
                                                    <span>
                                                        {/* show area at least */}
                                                        {entrance.leadsTo.area +
                                                        // show entrance if defined
                                                        entrance.leadsTo.entrance !== undefined ?
                                                            `: ${entrance.leadsTo.entrance} Entrance` : ""}
                                                    </span>
                                                    <span className="delete is-pulled-right" onClick={this.resetEntrance} />
                                                </div>
                                                :
                                                // no interior or area is set, so display available options to select
                                                <div className="select is-small entrance-select">
                                                    <select value="Not Checked" onChange={event =>
                                                        this.setEntrance(
                                                            // the area and entrance and type that is being assigned
                                                            // used to determine steps to take in this.setEntrance
                                                            {
                                                                area: areaName,
                                                                entrance: entranceName,
                                                                type: entrance.type
                                                            },
                                                            // object that has interior key for houses, grottos, dungeons
                                                            // or area and entrance keys for overworld and kaepora gaebora
                                                            JSON.parse(event.target.value)
                                                        )
                                                    }>
                                                        <option value="Not Checked">Not Checked</option>
                                                        {options instanceof Array ?
                                                            // if its an array, it's areas, houses, or grottos
                                                            // map over them and make them options
                                                            options.map((interiorName, k) => {
                                                                return <option key={k} value={JSON.stringify({interior: interiorName})}>
                                                                    {interiorName}
                                                                </option>
                                                            })
                                                            :
                                                            // it's an overworld selection
                                                            // iterate through the area keys and make them optGroups
                                                            // make the entrance of that area selection options
                                                            Object.keys(options).sort().map((optgroupArea, k) => {
                                                                // don't make optGroups for empty areas
                                                                // also don't show empty optGroup if it's
                                                                // only entrance is the current entrance
                                                                if (options[optgroupArea].length === 0 ||
                                                                    (options[optgroupArea].length === 1 &&
                                                                        options[optgroupArea][0] === entranceName)) {
                                                                    return null;
                                                                }
                                                                return <optgroup
                                                                    key={k}
                                                                    label={optgroupArea}
                                                                >
                                                                    {options[optgroupArea].map((optgroupEntrance, l) => {
                                                                        // don't show current entrance as selectable option
                                                                        if (areaName === optgroupArea && entranceName === optgroupEntrance) {
                                                                            return null;
                                                                        }
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
                                {/* output the columns of area entrances */}
                                <div className="columns">
                                    <div className="column">
                                        {firstCol}
                                    </div>
                                    {secondCol.length > 0 ?
                                        <div className="column">
                                            {secondCol}
                                        </div>
                                        : ""
                                    }
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <div className="bottom-padding" />

                {/* display songs that can be collected and may open new areas */}
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
