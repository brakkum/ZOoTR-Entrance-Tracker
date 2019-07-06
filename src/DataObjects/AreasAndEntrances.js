import OverworldAreas from "./OverworldAreas";
import EntranceTypes from "./EntranceTypes";
import Entrances from "./Entrances";
import Dungeons from "./Dungeons";
import Grottos from "./Grottos";
import Houses from "./Houses";

export default {
    "Death Mountain Trail": {
        "color": "darkred",
        "entrances": {
            [Dungeons.DodongosCavern]: {
                "type": EntranceTypes.Dungeon
            },
            "Goron City": {
                "type": EntranceTypes.Overworld
            },
            "Storms Grotto": {
                "type": EntranceTypes.Grotto
            }
        }
    },
    [OverworldAreas.KokiriForest]: {
        "color": "#88B04B",
        "entrances": {
            "Link's House": {
                "type": EntranceTypes.House,
                "display": Houses.LinksHouse
            },
            "Shop": {
                "type": EntranceTypes.House,
            },
            [OverworldAreas.LostWoods]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.LostWoodsBridge]: {
                "type": EntranceTypes.Overworld
            },
            [Entrances.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto
            }
        }
    },
    "Kakariko Village": {
        "entrances": {
            "Skulltula House": {
                "type": EntranceTypes.House
            },
            "Windmill": {
                "type": EntranceTypes.House
            },
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld
            },
            "Open Grotto": {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto
            },
            "Redead Grotto": {
                "type": EntranceTypes.Grotto
            }
        }
    },
    [OverworldAreas.HyruleField]: {
        "entrances": {
            [OverworldAreas.KakarikoVillage]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.LostWoodsBridge]: {
                "type": EntranceTypes.Overworld
            }
        }
    },
    [OverworldAreas.LakeHylia]: {
        "entrances": {
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld
            },
            [Entrances.KaeporaGaebora]: {
                "type": EntranceTypes.KaeporaGaebora
            },
            [Houses.LakeHyliaLab]: {
                "type": EntranceTypes.House
            }
        }
    },
    [OverworldAreas.LostWoods]: {
        "entrances": {
            [OverworldAreas.KokiriForest]: {
                "type": EntranceTypes.Overworld
            }
        }
    },
    [OverworldAreas.LostWoodsBridge]: {
        "entrances": {
            [OverworldAreas.KokiriForest]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld
            }
        }
    },
    [OverworldAreas.DesertColossus]: {
        "entrances": {
            [Dungeons.SpiritTemple]: {
                "type": EntranceTypes.Dungeon
            }
        }
    }
};
