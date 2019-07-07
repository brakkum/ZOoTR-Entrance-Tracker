import OverworldAreas from "./OverworldAreas";
import Dungeons from "./Dungeons";

// TODO: when key area or interior is added, add areas in array as well
const AreasToAdd = {
    // Spirit Temple hands are always vanilla
    [Dungeons.SpiritTemple]: [OverworldAreas.DesertColossus],
    // if user wants to do a mega-flip to Lost Woods bridge
    [OverworldAreas.LostWoods]: [OverworldAreas.LostWoodsBridge],
    // Gerudo Valley river exit is always vanilla
    [OverworldAreas.GerudoValley]: [OverworldAreas.LakeHylia]
};

export default AreasToAdd;
