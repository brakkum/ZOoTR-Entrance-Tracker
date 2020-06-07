import Dungeons from "./Dungeons";
import OverworldAreas from "./OverworldAreas";
import Grottos from "./Grottos";
import Houses from "./Houses";

const ValidStartPoints = [
    ...Object.keys(Dungeons),
    ...Object.keys(OverworldAreas),
    Grottos["Dampe's Grave"],
    Grottos["Diving Grotto"],
    Grottos["Diving Rupee Grotto"],
    Grottos["Forest Stage"],
    Grottos["Redead Grave"],
    Grottos["Redead Grotto"],
    Grottos["Composer Grave"],
    Grottos["Shield Grave"],
    Grottos["Wolfos Grotto"],
    Houses["Bombchu Bowling"],
    Houses["Carpenter Tent"],
    Houses["Fishing"],
    Houses["Granny's Potion Shop"],
    Houses["Guard Hut/Poe Collector"],
    Houses["Impa's House Cow"],
    Houses["Lakeside Laboratory"],
    Houses["Link's House"],
    Houses["Lon Lon Tower"],
    Houses["Mask Shop"],
    Houses["Skulltula House"],
    Houses["Stable"],
    Houses["Temple of Time"],
    Houses["Treasure Box Shop"],
    Houses["Windmill"],
    Houses["Talon's House"]
];

export default ValidStartPoints;
