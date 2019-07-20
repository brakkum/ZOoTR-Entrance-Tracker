import OverworldAreas from "./OverworldAreas";

const AreasToAdd = {
    // Gerudo Valley river exit is always vanilla
    [OverworldAreas["Gerudo Valley"]]: {
        "name": OverworldAreas["Lake Hylia"],
        "entranceObject": {
            "area": OverworldAreas["Gerudo Valley"],
            "entrance": OverworldAreas["Lake Hylia"]
        }
    }
};

export default AreasToAdd;
