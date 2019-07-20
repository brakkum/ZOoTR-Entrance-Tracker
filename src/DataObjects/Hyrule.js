import OverworldAreas from "./OverworldAreas";
import EntranceTypes from "./EntranceTypes";
import Entrances from "./Entrances";
import Dungeons from "./Dungeons";
import Grottos from "./Grottos";
import Houses from "./Houses";

export default {
    [OverworldAreas["Castle Town Entrance"]]: {
        "colors": [
            "#dddddd",
            "#cdcdcd"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Hyrule Field"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.Market]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Houses["Guard Hut/Poe Collector"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Death Mountain Crater"]]: {
        "colors": [
            "#633c13",
            "#90201e"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Death Mountain Trail"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Goron City"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos["Boulder Near Death Mountain Trail"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos["Boulder Near Goron City"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["3 Scrubs"],
                "clear": false,
                "interior": null
            },
            [Houses["Great Fairy's Fountain"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Dungeons["Fire Temple"]]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Death Mountain Trail"]]: {
        "colors": [
            "#a07136",
            "#916249"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Kakariko Village"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Dungeons["Dodongo's Cavern"]]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [OverworldAreas["Goron City"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos["Storms Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos["Cow Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "clear": false,
                "interior": null
            },
            [Houses["Great Fairy's Fountain"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [OverworldAreas["Death Mountain Crater"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Entrances["Kaepora Gaebora"]]: {
                "type": EntranceTypes["Kaepora Gaebora"],
                "leadsTo": null
            }
        }
    },
    [OverworldAreas["Desert Colossus"]]: {
        "colors": [
            "#b79f60",
            "#c1ad96"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [Grottos["Boulder Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["2 Scrubs"],
                "clear": false,
                "interior": null
            },
            [Houses["Great Fairy's Fountain"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Dungeons["Spirit Temple"]]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [OverworldAreas["Haunted Wasteland"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            }
        }
    },
    [OverworldAreas["Gerudos Fortress"]]: {
        "colors": [
            "#947d5a",
            "#cbb186"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [Dungeons["Gerudo Training Grounds"]]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [OverworldAreas["Gerudo Valley"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Haunted Wasteland"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos["Storms Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Fairy Fountain"],
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Gerudo Valley"]]: {
        "colors": [
            "#946333",
            "#cbc3ae"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "attachedArea": {
            "name": OverworldAreas["Lake Hylia"]
        },
        "entrances": {
            [OverworldAreas["Hyrule Field"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Gerudos Fortress"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos["Boulder on Ledge"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Diving Rupee Grotto"],
                "clear": false,
                "interior": null
            },
            [Grottos["Storms Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["2 Scrubs"],
                "clear": false,
                "interior": null
            },
            [Houses["Bosses Hut"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Goron City"]]: {
        "colors": [
            "#c09557",
            "#c07b50"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Death Mountain Trail"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Death Mountain Crater"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Lost Woods"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Houses.Shop]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Grottos["Open Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Three Scrubs"],
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.Graveyard]: {
        "colors": [
            "#6f8367",
            "#836b68",
            "#968299"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Kakariko Village"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null,
            },
            [Dungeons["Shadow Temple"]]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [Houses["Dampe's Hut"]]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Grottos["Royal Family's Tomb"]]: {
                "type": EntranceTypes.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos["Shield Grave"]]: {
                "type": EntranceTypes.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos["Redead Grave"]]: {
                "type": EntranceTypes.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos["Dampe's Grave"]]: {
                "type": EntranceTypes.Grotto,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Haunted Wasteland"]]: {
        "colors": [
            "#d0b682",
            "#6e6d82"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Gerudos Fortress"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Desert Colossus"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            }
        }
    },
    [OverworldAreas["Hyrule/Ganon's Castle"]]: {
        "colors": [
            "#a7a4e1",
            "#e9ecee",
            "#964145"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [Houses["Child Great Fairy's Fountain"]]: {
                "type": EntranceTypes.House,
                "display": Houses["Great Fairy's Fountain"],
                "clear": false,
                "interior": null
            },
            [Houses["Adult Great Fairy's Fountain"]]: {
                "type": EntranceTypes.House,
                "display": Houses["Great Fairy's Fountain"],
                "clear": false,
                "interior": null
            },
            [OverworldAreas.Market]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos["Storms Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Skulltula Grotto"],
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Hyrule Field"]]: {
        "colors": [
            "#7cab61",
            "#c9bc80"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Lost Woods Bridge"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Zora's River"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Kakariko Village"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos["Tree Near Kakariko Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Skulltula Grotto"],
                "clear": false,
                "interior": null
            },
            [OverworldAreas["Castle Town Entrance"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos["Boulder Near Castle Town"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [OverworldAreas["Lon Lon Ranch"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos["Boulder Across River"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Fairy Fountain"],
                "clear": false,
                "interior": null
            },
            [Grottos["Lone Tree In West Field"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Diving Grotto"],
                "clear": false,
                "interior": null
            },
            [Grottos["Boulder Near Gerudo Valley"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Skulltula Grotto"],
                "clear": false,
                "interior": null
            },
            [OverworldAreas["Gerudo Valley"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Lake Hylia"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos["Near Lake Hylia Bomb Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["1 Scrub"],
                "clear": false,
                "interior": null
            },
            [Grottos["Open Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos["Boulder in Trees"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Kakariko Village"]]: {
        "colors": [
            "#a5aa9c",
            "#aa9191"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Hyrule Field"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Death Mountain Trail"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.Graveyard]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Dungeons["Bottom of the Well"]]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [Houses["Skulltula House"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.Windmill]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses["Impa's House Front"]]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses["Impa's House Cow"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses["Bottom House"]]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses["Shooting Gallery"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.Bazaar]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop,
                "clear": false,
                "interior": null
            },
            [Houses["Granny's Potion Shop"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Grottos["Open Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos["Bomb Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Redead Grotto"],
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Kokiri Forest"]]: {
        "colors": [
            "#82b047",
            "#644e42"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Lost Woods Bridge"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Lost Woods"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Dungeons["Deku Tree"]]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [Houses["Know-It-All House"]]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses["Mido's House"]]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses["Link's House"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses["Saria's House"]]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses["Twins House"]]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses.Shop]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Grottos["Storms Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Lake Hylia"]]: {
        "colors": [
            "#888bb0",
            "#8cabb0"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Hyrule Field"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Zora's Domain"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Entrances["Kaepora Gaebora"]]: {
                "type": EntranceTypes["Kaepora Gaebora"],
                "leadsTo": null
            },
            [Grottos.Grave]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Three Scrubs"],
                "clear": false,
                "interior": null
            },
            [Houses["Lake Hylia Lab"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.Fishing]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Dungeons["Water Temple"]]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Lon Lon Ranch"]]: {
        "colors": [
            "#c5aa79",
            "#d0bfb2",
            "#8fc771"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Hyrule Field"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Houses["Talon's House"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.Stable]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses["Lon Lon Tower"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Grottos["Open Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Three Scrubs"],
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Lost Woods"]]: {
        "colors": [
            "#51852b",
            "#a4af32"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Kokiri Forest"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Goron City"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Sacred Forest Meadow"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Zora's River"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos["Forest Stage"]]: {
                "type": EntranceTypes.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos["Boulder Near Goron City"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos["Boulder Near Sacred Forest Meadow"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["2 Scrubs"],
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Lost Woods Bridge"]]: {
        "colors": [
            "#51852b",
            "#796b4f",
            "#a4af32"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Kokiri Forest"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Hyrule Field"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            }
        }
    },
    [OverworldAreas.Market]: {
        "colors": [
            "#9b9e93",
            "#736c79",
            "#af9084"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Castle Town Entrance"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Temple of Time Entrance"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Hyrule/Ganon's Castle"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Houses.Bazaar]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop,
                "clear": false,
                "interior": null
            },
            [Houses["Potion Shop"]]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop,
                "clear": false,
                "interior": null
            },
            [Houses["Shooting Gallery"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses["Bombchu Bowling"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses["Bombchu Shop"]]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop,
                "clear": false,
                "interior": null
            },
            [Houses["Treasure Chest Game"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses["Back Alley House"]]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses["Mask Shop"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Sacred Forest Meadow"]]: {
        "colors": [
            "#72c041",
            "#9caf7c"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Lost Woods"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Dungeons["Forest Temple"]]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [Grottos["Bomb Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Wolfos Grotto"],
                "clear": false,
                "interior": null
            },
            [Grottos["Open Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Fairy Fountain"],
                "clear": false,
                "interior": null
            },
            [Grottos["Storms Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["2 Scrubs"],
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Temple of Time Entrance"]]: {
        "colors": [
            "#74856e",
            "#83766a"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.Market]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Houses["Temple of Time"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Zora's Domain"]]: {
        "colors": [
            "#658285",
            "#cfccec"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Zora's River"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Zora's Fountain"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Lake Hylia"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Houses.Shop]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop,
                "clear": false,
                "interior": null
            },
            [Grottos["Storms Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Fairy Fountain"],
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Zora's Fountain"]]: {
        "colors": [
            "#949cc6",
            "#8e8872"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Zora's Domain"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Dungeons["Jabu Jabu's Belly"]]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [Dungeons["Ice Cavern"]]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [Houses["Great Fairy's Fountain"]]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas["Zora's River"]]: {
        "colors": [
            "#9996c6",
            "#5c8e56"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas["Hyrule Field"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Zora's Domain"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas["Lost Woods"]]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos["Storms Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["2 Scrubs"],
                "clear": false,
                "interior": null
            },
            [Grottos["Open Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos["Boulder Grotto"]]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos["Fairy Fountain"],
                "clear": false,
                "interior": null
            }
        }
    },
};
