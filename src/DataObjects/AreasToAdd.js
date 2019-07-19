import OverworldAreas from "./OverworldAreas";

const AreasToAdd = {
    // if user wants to do a mega-flip to Lost Woods bridge
    [OverworldAreas.LostWoods]: {
        "name": OverworldAreas.LostWoodsBridge,
        "entranceObject": {
            "area": OverworldAreas.LostWoods,
            "entrance": OverworldAreas.LostWoodsBridge
        }
    },
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
