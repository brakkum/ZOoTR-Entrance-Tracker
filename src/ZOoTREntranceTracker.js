import InteriorConnection from "./DataObjects/InteriorConnection";
import PromptForHouseEntrance from "./PromptForHouseEntrance";
import OverworldAreas from "./DataObjects/OverworldAreas";
import EntranceTypes from "./DataObjects/EntranceTypes";
import LocalStorage from "./Constants/LocalStorage";
import AreasToAdd from "./DataObjects/AreasToAdd";
import Grottos from "./DataObjects/Grottos";
import Hyrule from "./DataObjects/Hyrule";
import Houses from "./DataObjects/Houses";
import Songs from "./DataObjects/Songs";
import Menu from "./DataObjects/Menu";
import React from "react";
import Area from "./Area";
import Song from "./Song";

export default class ZOoTREntranceTracker extends React.Component {

    state = {
        hyrule: {}, // master world state
        interiorEntrances: {}, // area/interior keys access array of location objects
        availableOverworldEntrances: {}, // area key accesses array of overworld entrances
        availableDungeons: [], // dungeons not yet assigned to dungeon entrance
        availableHouses: [], // houses not yet assigned to house entrance
        availableHouseEntrances: {}, // house entrances that have not been used
        availableGrottos: [], // grottos not yet assigned to grotto entrance
        songs: {} // songs state
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
            interiorEntrances[Houses.Windmill] === undefined) {
            return Houses.Windmill;
        } else if (songs["Prelude of Light"].collected &&
            interiorEntrances[Houses.TempleOfTime].length === 1) {
            return Houses.TempleOfTime;
        }
        return null;
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

    addInteriorEntrance = (location, entranceObject) => {
          let interiorEntrances = this.state.interiorEntrances;
          if (interiorEntrances[location] === undefined) {
              interiorEntrances[location] = [];
          }
          interiorEntrances[location].push(entranceObject);
          if (InteriorConnection[location] !== undefined && InteriorConnection[location] !== null) {
              interiorEntrances[location].push(InteriorConnection[location]);
          }
          this.setState({interiorEntrances});
    };

    addAdditionalAreas = area => {
        let hyrule = this.state.hyrule;
        if (AreasToAdd[area] !== undefined) {
            AreasToAdd[area].forEach(addOnArea => {
                hyrule[addOnArea].isAccessible = true;
            })
        }
        this.setState({hyrule});
    };

    removeAdditionalAreas = area => {
        if (AreasToAdd[area] !== undefined) {
            AreasToAdd[area].forEach(addOnArea => {
                this.removeAreaIfEmpty(addOnArea);
            });
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

    removeInteriorEntrance = (type, location, entranceObject) => {
        let interiorEntrances = this.state.interiorEntrances;
        interiorEntrances[location] = interiorEntrances[location].filter(entrance => {
            if (type === EntranceTypes.Song) {
                return entrance.song !== entranceObject.song;
            } else {
                return entrance.area !== entranceObject.area ||
                    entrance.entrance !== entranceObject.entrance;
            }
        });
        if (InteriorConnection[location] !== undefined) {
            interiorEntrances[location] = interiorEntrances[location].filter(entrance => {
                return entrance.interior !== InteriorConnection[location].interior
            });
        }
        if (interiorEntrances[location].length === 0) {
            delete interiorEntrances[location];
        }
        this.setState({interiorEntrances});
    };

    acquireSong = song => {
        let songs = this.state.songs;
        songs[song].collected = true;
        if (songs[song].areaType === EntranceTypes.Overworld) {
            this.setAreaToAccessible(songs[song].area);
        }
        this.addInteriorEntrance(songs[song].area, {song});
        this.addAdditionalAreas(songs[song].area);
        this.setState({songs});
    };

    removeSong = song => {
        let songs = this.state.songs;
        songs[song].collected = false;
        if (songs[song].areaType === EntranceTypes.Overworld) {
            this.removeAreaIfEmpty(songs[song].area);
        }
        this.removeInteriorEntrance(EntranceTypes.Song, songs[song].area, {song});
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
            if (AreasToAdd[areaToAddFor].includes(areaName) && hyrule[areaToAddFor].isAccessible) {
                empty = false;
            }
        });
        if (empty) {
            hyrule[areaName].isAccessible = false;
            if (AreasToAdd[areaName] !== undefined) {
                AreasToAdd[areaName].forEach(name => {
                    this.removeAreaIfEmpty(name);
                });
            }
        }
        this.setState({hyrule});
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

    resetEntrance = (entranceObj) => {
        switch (entranceObj.type) {
            case EntranceTypes.Overworld: {
                let area = entranceObj.area;
                let entrance = entranceObj.entrance;
                let leadsToArea = entranceObj.leadsTo.area;
                let leadsToEntrance = entranceObj.leadsTo.entrance;

                this.resetOverworldEntrance(area, entrance);
                this.resetOverworldEntrance(leadsToArea, leadsToEntrance);

                this.addOverworldEntranceBackIntoPool(area, entrance);
                this.addOverworldEntranceBackIntoPool(leadsToArea, leadsToEntrance);

                this.removeInteriorEntrance(entranceObj.type, area, entranceObj.leadsTo);
                this.removeInteriorEntrance(entranceObj.type, leadsToArea, entranceObj);

                this.removeAreaIfEmpty(area);
                this.removeAreaIfEmpty(leadsToArea);
                break;
            }
            case EntranceTypes.Grotto:
            case EntranceTypes.House:
            case EntranceTypes.Dungeon: {
                let area = entranceObj.area;
                let entrance = entranceObj.entrance;
                let interior = entranceObj.interior;

                this.resetInterior(area, entrance);

                this.addInteriorBackIntoPool(entranceObj.type, interior);
                this.removeInteriorEntrance(entranceObj.type, interior, entranceObj);

                this.removeAreaIfEmpty(area);
                this.removeAdditionalAreas(interior);
                if (entranceObj.type === EntranceTypes.House) {
                    this.addAvailableHouseEntrance(area, entrance);
                }
                break;
            }
            case EntranceTypes.KaeporaGaebora: {
                let area = entranceObj.area;
                let leadsToArea = entranceObj.leadsTo.area;

                this.removeKaeporaLanding(area, leadsToArea);
                this.resetOverworldEntrance(area, entranceObj.entrance);

                this.removeInteriorEntrance(entranceObj.type, leadsToArea, entranceObj);

                this.removeAreaIfEmpty(area);
                this.removeAreaIfEmpty(leadsToArea);
                break;
            }
            default: {
                throw Error("Invalid type: " + entranceObj.type);
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
                            availableHouseEntrances={this.state.availableHouseEntrances}
                            setEntrance={this.setEntrance}
                        />
                        : ""
                    }
                </div>

                <div className="areas-container is-flex-desktop is-flex-tablet is-multiline flex-wraps">
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
