import InteriorConnection from "./DataObjects/InteriorConnection";
import PromptForHouseEntrance from "./PromptForHouseEntrance";
import LocalStorageKey from "./Constants/LocalStorageKey";
import OverworldAreas from "./DataObjects/OverworldAreas";
import EntranceTypes from "./DataObjects/EntranceTypes";
import AreasToAdd from "./DataObjects/AreasToAdd";
import Grottos from "./DataObjects/Grottos";
import Hyrule from "./DataObjects/Hyrule";
import Houses from "./DataObjects/Houses";
import Songs from "./DataObjects/Songs";
import Menu from "./Menu";
import React from "react";
import Area from "./Area";
import Song from "./Song";
import RouteFinder from "./RouteFinder";

export default class ZOoTREntranceTracker extends React.Component {

    state = {
        hyrule: {}, // master world state
        interiorEntrances: {}, // area/interior keys access array of location objects
        availableOverworldEntrances: {}, // area key accesses array of overworld entrances
        availableDungeons: [], // dungeons not yet assigned to dungeon entrance
        availableHouses: [], // houses not yet assigned to house entrance
        availableHouseEntrances: {}, // house entrances that have not been used
        availableGrottos: [], // grottos not yet assigned to grotto entrance
        songs: {}, // songs state
        showRouteFinder: false // show route finder
    };

    toggleRouteFinder = () => {
        this.setState({showRouteFinder: !this.state.showRouteFinder});
    };

    setupTracker = () => {
        let hyrule = Hyrule; // master world state
        let interiorEntrances = {}; // area/interior keys access array of location objects
        let availableOverworldEntrances = {}; // available entrances of type Overworld
        let availableDungeons = []; // dungeons not yet assigned to dungeon entrance
        let availableHouses = []; // houses not yet assigned to house entrance
        let availableHouseEntrances = {}; // areas and the houses within them
        let availableGrottos = []; // grottos not yet assigned to grotto entrance
        let songs = Songs; // songs state

        Object.keys(Hyrule).forEach(area => {
            availableOverworldEntrances[area] = [];

            Object.keys(Hyrule[area].entrances).forEach(entranceName => {

                let entrance = Hyrule[area].entrances[entranceName];
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
            hyrule,
            interiorEntrances,
            availableOverworldEntrances,
            availableDungeons,
            availableHouses,
            availableHouseEntrances,
            availableGrottos,
            songs
        });
    };

    houseToPromptForBasedOnState = () => {
        let interiorEntrances = this.state.interiorEntrances;
        let songs = this.state.songs;
        if (interiorEntrances[Houses.LinksHouse] === undefined) {
            return Houses.LinksHouse;
        } else if (interiorEntrances[Grottos.DampesGrave] !== undefined &&
            interiorEntrances[Houses.Windmill].length <= 1) {
            return Houses.Windmill;
        } else if (songs["Prelude of Light"].collected &&
            interiorEntrances[Houses.TempleOfTime].length === 1) {
            return Houses.TempleOfTime;
        }
        return null;
    };

    saveState = () => {
        let state = this.state;
        localStorage.setItem(LocalStorageKey.state, JSON.stringify(state));
    };

    loadState = () => {
        let stringState = localStorage.getItem(LocalStorageKey.state);
        let state = JSON.parse(stringState);
        if (state) {
            this.setState(state);
        }
    };

    resetState = () => {
        localStorage.removeItem(LocalStorageKey.state);
        this.setupTracker();
    };

    addAdditionalAreas = areaName => {
        if (AreasToAdd[areaName] !== undefined) {
            console.log("add additional area: ",AreasToAdd[areaName])
            this.setAreaToAccessible(AreasToAdd[areaName].name);
            this.addInteriorEntrance(AreasToAdd[areaName].name, AreasToAdd[areaName].entranceObject);
        }
    };

    removeAdditionalAreas = areaName => {
        if (AreasToAdd[areaName] !== undefined) {
            console.log("remove additional area: ",AreasToAdd[areaName])
            this.removeAreaIfEmpty(AreasToAdd[areaName].name);
            this.removeInteriorEntrance(AreasToAdd[areaName].name, AreasToAdd[areaName].entranceObject);
        }
    };

    setOverworldEntrance = (area, entrance, obj) => {
        let hyrule = this.state.hyrule;
        hyrule[area].entrances[entrance].leadsTo = obj;
        this.setState({hyrule});
    };

    setAreaToAccessible = area => {
        let hyrule = this.state.hyrule;
        hyrule[area].isAccessible = true;
        this.setState({hyrule});
    };

    addInteriorEntrance = (location, obj) => {
        console.log("adding interior entrance: ", location, obj);
        let interiorEntrances = this.state.interiorEntrances;
        if (interiorEntrances[location] === undefined) {
            interiorEntrances[location] = [];
        }
        interiorEntrances[location].push(obj);
        if (InteriorConnection[location] !== undefined) {
            console.log('add additional int ent: ',InteriorConnection[location])
            this.addInteriorEntrance(
                InteriorConnection[location].location,
                InteriorConnection[location].entranceObject
            );
            if (InteriorConnection[location].type === EntranceTypes.Overworld) {
                this.setAreaToAccessible(InteriorConnection[location].location);
            }
        }
        this.setState({interiorEntrances});
    };

    // type is only necessary for songs at the moment
    removeInteriorEntrance = (location, obj) => {
        console.log("removing interior entrance: ", location, obj);
        let interiorEntrances = this.state.interiorEntrances;
        if (InteriorConnection[location] !== undefined) {
            console.log('remove additional int ent: ',InteriorConnection[location])
            this.removeInteriorEntrance(
                InteriorConnection[location].location,
                InteriorConnection[location].entranceObject
            );
            if (InteriorConnection[location].type === EntranceTypes.Overworld) {
                this.removeAreaIfEmpty(InteriorConnection[location].location);
            }
        }
        if (interiorEntrances[location] === undefined) {
            return;
        }
        interiorEntrances[location] = interiorEntrances[location].filter(entrance => {
            return !(
                entrance.area === obj.area &&
                entrance.entrance === obj.entrance &&
                entrance.interior === obj.interior &&
                entrance.song === obj.song
            );
        });
        if (interiorEntrances[location].length === 0) {
            delete interiorEntrances[location];
        }
        this.setState({interiorEntrances});
    };

    acquireSong = song => {
        console.log("add song: ", song)
        let songs = this.state.songs;
        songs[song].collected = true;
        if (songs[song].locationType === EntranceTypes.Overworld) {
            this.setAreaToAccessible(songs[song].location);
        }
        this.addInteriorEntrance(songs[song].location, songs[song].object);
        this.addAdditionalAreas(songs[song].location);
        this.setState({songs});
    };

    removeSong = song => {
        console.log("remove song: ", song)
        let songs = this.state.songs;
        songs[song].collected = false;
        this.removeInteriorEntrance(songs[song].location, songs[song].object);
        if (songs[song].locationType === EntranceTypes.Overworld) {
            this.removeAreaIfEmpty(songs[song].location);
        }
        this.setState({songs});
    };

    setKaeporaLanding = (sourceArea, destinationArea) => {
        let hyrule = this.state.hyrule;
        if (sourceArea === OverworldAreas.DeathMountainTrail) {
            hyrule[destinationArea].hasKaeporaDeathMountainTrailLanding = true;
        } else if (sourceArea === OverworldAreas.LakeHylia) {
            hyrule[destinationArea].hasKaeporaLakeHyliaLanding = true;
        }
        this.setState({hyrule});
    };

    removeKaeporaLanding = (sourceArea, destinationArea) => {
        let hyrule = this.state.hyrule;
        if (sourceArea === OverworldAreas.DeathMountainTrail) {
            hyrule[destinationArea].hasKaeporaDeathMountainTrailLanding = false;
        } else if (sourceArea === OverworldAreas.LakeHylia) {
            hyrule[destinationArea].hasKaeporaLakeHyliaLanding = false;
        }
        this.setState({hyrule});
    };

    setInterior = (area, entrance, interior) => {
        let hyrule = this.state.hyrule;
        hyrule[area].entrances[entrance].interior = interior;
        this.setState({hyrule});
    };

    resetOverworldEntrance = (area, entrance) => {
        let hyrule = this.state.hyrule;
        hyrule[area].entrances[entrance].leadsTo = null;
        this.setState({hyrule});
    };

    removeOverworldEntranceFromPool = (area, entrance) => {
        let availableOverworldEntrances = this.state.availableOverworldEntrances;
        availableOverworldEntrances[area].splice(availableOverworldEntrances[area].indexOf(entrance), 1);
        this.setState({availableOverworldEntrances});
    };

    removeInteriorFromPool = (type, interior) => {
        let array;
        if (type === EntranceTypes.House) {
            array = this.state.availableHouses;
        } else if (type === EntranceTypes.Dungeon) {
            array = this.state.availableDungeons;
        } else if (type === EntranceTypes.Grotto) {
            array = this.state.availableGrottos;
        }
        if (!array) {
            return;
        }
        array.splice(array.indexOf(interior), 1);
        this.setState({[`available${type}s`]: array});
    };

    addInteriorBackIntoPool = (type, interior) => {
        let array;
        if (type === EntranceTypes.House) {
            array = this.state.availableHouses;
        } else if (type === EntranceTypes.Dungeon) {
            array = this.state.availableDungeons;
        } else if (type === EntranceTypes.Grotto) {
            array = this.state.availableGrottos;
        }
        if (!array) {
            return;
        }
        array.push(interior);
        this.setState({[`available${type}s`]: array});
    };

    resetInterior = (area, entrance) => {
        let hyrule = this.state.hyrule;
        hyrule[area].entrances[entrance].interior = null;
        this.setState({hyrule});
    };

    addOverworldEntranceBackIntoPool = (area, entrance) => {
        let availableOverworldEntrances = this.state.availableOverworldEntrances;
        availableOverworldEntrances[area].push(entrance);
        this.setState({availableOverworldEntrances});
    };

    removeAreaIfEmpty = areaName => {
        let interiorEntrances = this.state.interiorEntrances;
        let hyrule = this.state.hyrule;
        let area = hyrule[areaName];
        if (area.hasKaeporaLakeHyliaLanding || area.hasKaeporaDeathMountainTrailLanding) {
            return;
        }
        let empty = true;
        Object.keys(area.entrances).forEach(key => {
            let entrance = area.entrances[key];
            if (entrance.interior !== undefined && entrance.interior !== null) {
                empty = false;
            } else if (entrance.leadsTo !== undefined && entrance.leadsTo !== null) {
                empty = false;
            }
        });
        Object.keys(AreasToAdd).forEach(areaToAddFor => {
            if (AreasToAdd[areaToAddFor].name === areaName &&
                hyrule[areaToAddFor] !== undefined &&
                hyrule[areaToAddFor].isAccessible) {
                empty = false;
            }
        });
        if (interiorEntrances[areaName] !== undefined &&
            interiorEntrances[areaName].length > 0) {
            empty = false;
        }
        if (empty) {
            hyrule[areaName].isAccessible = false;
        }
        this.setState({hyrule});
        if (AreasToAdd[areaName] !== undefined) {
            this.removeAreaIfEmpty(AreasToAdd[areaName].name);
        }
    };

    removeAvailableHouseEntrance = (area, entrance) => {
        let availableHouseEntrances = this.state.availableHouseEntrances;
        availableHouseEntrances[area].splice(availableHouseEntrances[area].indexOf(entrance), 1);
        this.setState({availableHouseEntrances});
    };

    addAvailableHouseEntrance = (area, entrance) => {
        let availableHouseEntrances = this.state.availableHouseEntrances;
        availableHouseEntrances[area].push(entrance);
        this.setState({availableHouseEntrances});
    };

    resetEntrance = (obj) => {
        switch (obj.type) {
            case EntranceTypes.Overworld: {
                let area = obj.area;
                let entrance = obj.entrance;
                let leadsToArea = obj.leadsTo.area;
                let leadsToEntrance = obj.leadsTo.entrance;

                this.resetOverworldEntrance(area, entrance);
                this.resetOverworldEntrance(leadsToArea, leadsToEntrance);

                this.addOverworldEntranceBackIntoPool(area, entrance);
                this.addOverworldEntranceBackIntoPool(leadsToArea, leadsToEntrance);

                this.removeInteriorEntrance(area, {area: leadsToArea, entrance: leadsToEntrance});
                this.removeInteriorEntrance(leadsToArea, {area, entrance});

                this.removeAdditionalAreas(area);
                this.removeAdditionalAreas(leadsToArea);

                this.removeAreaIfEmpty(area);
                this.removeAreaIfEmpty(leadsToArea);
                break;
            }
            case EntranceTypes.Grotto:
            case EntranceTypes.House:
            case EntranceTypes.Dungeon: {
                let area = obj.area;
                let entrance = obj.entrance;
                let interior = obj.interior;

                this.resetInterior(area, entrance);

                this.addInteriorBackIntoPool(obj.type, interior);
                this.removeInteriorEntrance(interior, {area, entrance});
                this.removeInteriorEntrance(area, {entrance, interior});
                if (obj.type === EntranceTypes.Dungeon) {
                    this.removeInteriorEntrance(entrance, {interior});
                }

                this.removeAreaIfEmpty(area);
                if (obj.type === EntranceTypes.House) {
                    this.addAvailableHouseEntrance(area, entrance);
                }
                break;
            }
            case EntranceTypes.KaeporaGaebora: {
                let area = obj.area;
                let leadsToArea = obj.leadsTo.area;

                this.removeKaeporaLanding(area, leadsToArea);
                this.resetOverworldEntrance(area, obj.entrance);

                this.removeInteriorEntrance(leadsToArea, {area, entrance: EntranceTypes.KaeporaGaebora});

                this.removeAreaIfEmpty(area);
                this.removeAreaIfEmpty(leadsToArea);
                break;
            }
            default: {
                throw Error("Invalid type: " + obj.type);
            }
        }
    };

    setEntrance = (vanilla, selection) => {
        switch (vanilla.type) {
            case EntranceTypes.Overworld: {
                let area = vanilla.area;
                let entrance = vanilla.entrance;
                let selectedArea = selection.area;
                let selectedEntrance = selection.entrance;

                this.setOverworldEntrance(area, entrance, {area: selectedArea, entrance: selectedEntrance});
                this.setOverworldEntrance(selectedArea, selectedEntrance, {area, entrance});

                this.removeOverworldEntranceFromPool(area, entrance);
                this.removeOverworldEntranceFromPool(selectedArea, selectedEntrance);

                this.addInteriorEntrance(area, {area: selectedArea, entrance: selectedEntrance});
                this.addInteriorEntrance(selectedArea, {area, entrance});

                this.setAreaToAccessible(area);
                this.setAreaToAccessible(selectedArea);

                this.addAdditionalAreas(area);
                this.addAdditionalAreas(selectedArea);
                break;
            }
            // grottos, houses, and dungeons all
            // use the same 'interior' attribute
            case EntranceTypes.Grotto:
            case EntranceTypes.House:
            case EntranceTypes.Dungeon: {
                let area = vanilla.area;
                let entrance = vanilla.entrance;
                let interior = selection.interior;

                this.setInterior(area, entrance, interior);

                this.removeInteriorFromPool(vanilla.type, interior);
                this.addInteriorEntrance(interior, {area, entrance});
                this.addInteriorEntrance(area, {entrance, interior});
                if (vanilla.type === EntranceTypes.Dungeon) {
                    this.addInteriorEntrance(entrance, {interior});
                }

                this.setAreaToAccessible(area);
                this.addAdditionalAreas(interior);
                this.addAdditionalAreas(area);
                if (vanilla.type === EntranceTypes.House) {
                    this.removeAvailableHouseEntrance(area, entrance);
                }
                break;
            }
            case EntranceTypes.KaeporaGaebora: {
                let area = vanilla.area;
                let entrance = vanilla.entrance;
                let selectedArea = selection.area;

                this.setKaeporaLanding(area, selectedArea);
                this.setOverworldEntrance(area, entrance, {area: selectedArea});

                this.addInteriorEntrance(selectedArea, {area, entrance});

                this.setAreaToAccessible(selectedArea);
                this.addAdditionalAreas(selectedArea);
                break;
            }
            default: {
                throw Error("Invalid type: " + vanilla.type);
            }
        }
    };

    componentDidMount() {
        this.setupTracker();
        this.loadState();
    };

    render() {
        let hyrule = this.state.hyrule;
        let houseToPromptFor = this.houseToPromptForBasedOnState();
        let songs = this.state.songs;
        let showRouteFinder = this.state.showRouteFinder;

        return (
            <div className="zootr-entrance-tracker">

                <Menu
                    saveState={this.saveState}
                    resetState={this.resetState}
                    toggleRouteFinder={this.toggleRouteFinder}
                    routeFinderVisible={showRouteFinder}
                />

                <div className="top-padding" />

                {showRouteFinder ?
                    <RouteFinder
                        availableLocations={this.state.interiorEntrances}
                        hyrule={hyrule}
                    />
                    :
                    ""
                }

                <div className="user-prompts">
                    {houseToPromptFor !== null ?
                        <PromptForHouseEntrance
                            houseToPromptFor={houseToPromptFor}
                            availableHouseEntrances={this.state.availableHouseEntrances}
                            setEntrance={this.setEntrance}
                        />
                        : ""
                    }
                </div>

                <div className="app-container is-flex-desktop is-flex-tablet is-multiline flex-wraps">
                    {/* iterate through the areas of Hyrule */}
                    {hyrule !== undefined && Object.keys(hyrule).sort().map((areaName, i) => {
                        // get the current areas object from state
                        let area = hyrule[areaName];
                        // if it's not accessible, we don't want to display it
                        if (!area.isAccessible) {
                            return null;
                        }
                        return <Area
                            key={i}
                            area={area}
                            state={this.state}
                            hyrule={hyrule}
                            areaName={areaName}
                            setEntrance={this.setEntrance}
                            resetEntrance={this.resetEntrance}
                        />
                    })}
                </div>

                <div className="bottom-padding" />

                {/* display songs that can be collected and may open new areas */}
                <div className="songs-container navbar is-fixed-bottom has-background-dark">
                    {Object.keys(songs).map((song, i) => {
                        return <Song
                            key={i}
                            song={songs[song]}
                            acquireSong={this.acquireSong}
                            removeSong={this.removeSong}
                        />
                    })}
                </div>
            </div>
        );
    }
}
