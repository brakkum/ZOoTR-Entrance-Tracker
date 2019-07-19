import Houses from "./Houses";
import Grottos from "./Grottos";
import EntranceTypes from "./EntranceTypes";
import Dungeons from "./Dungeons";
import OverworldAreas from "./OverworldAreas";

const InteriorConnection = {
    // one way connection to windmill from dampe's grave
    // when dampe's grave is accessed
    [Grottos.DampesGrave]: {
        "location": Houses.Windmill,
        "type": EntranceTypes.House,
        "entranceObject": {
            "area": null,
            "entrance": Grottos.DampesGrave
        }
    },
    [Dungeons.SpiritTemple]: {
        "location": OverworldAreas.DesertColossus,
        "type": EntranceTypes.Overworld,
        "entranceObject": {
            "area": null,
            "entrance": Dungeons.SpiritTemple
        }
    }
};

export default InteriorConnection;
