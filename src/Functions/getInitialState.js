import Hyrule from "../DataObjects/Hyrule";
import Songs from "../DataObjects/Songs";
import EntranceTypes from "../DataObjects/EntranceTypes";

export default function getInitialState() {
    let hyrule = JSON.parse(JSON.stringify(Hyrule)); // master world state
    let interiorEntrances = {}; // area/interior keys access array of location objects
    let availableOverworldEntrances = {}; // available entrances of type Overworld
    let availableDungeons = []; // dungeons not yet assigned to dungeon entrance
    let availableHouses = []; // houses not yet assigned to house entrance
    let availableHouseEntrances = {}; // areas and the houses within them
    let availableGrottos = []; // grottos not yet assigned to grotto entrance
    let availableGrottoEntrances = {}; // overworld grotto entrances
    let songs = JSON.parse(JSON.stringify(Songs)); // songs state
    let showRouteFinder = false; // hide route finder on start
    let startAsChild = true; // default to starting as child
    let overworldOnly = false; // show all entrances by default
    let allOverworldEntrances = {}; // all entrances, never modified

    Object.keys(Hyrule).forEach(area => {
        availableOverworldEntrances[area] = [];
        availableGrottoEntrances[area] = [];
        allOverworldEntrances[area] = [];

        Object.keys(Hyrule[area].entrances).forEach(entranceName => {

            let entrance = Hyrule[area].entrances[entranceName];
            let type = entrance.type;

            if (type === EntranceTypes.Overworld) {
                availableOverworldEntrances[area].push(entranceName);
                allOverworldEntrances[area].push(entranceName);
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
                    availableGrottoEntrances[area].push(entranceName);
                }
            }
        });
    });

    return {
        hyrule,
        interiorEntrances,
        availableOverworldEntrances,
        availableDungeons,
        availableHouses,
        availableHouseEntrances,
        availableGrottos,
        availableGrottoEntrances,
        songs,
        showRouteFinder,
        startAsChild,
        overworldOnly,
        routeFinderStart: null,
        routeFinderEnd: null,
        allOverworldEntrances
    };
}
