import OverworldAreas from "./OverworldAreas";
import Dungeons from "./Dungeons";

// TODO: when key area or interior is added, add areas in array as well
const BonusAreas = {
    // if user wants to do a mega-flip to Lost Woods bridge
    [OverworldAreas.LostWoods]: [OverworldAreas.LostWoodsBridge],
    // Spirit Temple hands are always vanilla
    [Dungeons.SpiritTemple]: [OverworldAreas.DesertColossus]
};

export default BonusAreas;
