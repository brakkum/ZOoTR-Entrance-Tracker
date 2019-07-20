import OverworldAreas from "./OverworldAreas";

const AreasToAdd = {
    // Gerudo Valley river exit is always vanilla
    [OverworldAreas.GerudoValley]: {
        "name": OverworldAreas.LakeHylia,
        "entranceObject": {
            "area": OverworldAreas.GerudoValley,
            "entrance": OverworldAreas.LakeHylia
        }
    }
};

export default AreasToAdd;
