import {
    CASTLE_GROUNDS,
    CASTLE_TOWN_ENTRANCE,
    DEATH_MOUNTAIN_CRATER,
    DEATH_MOUNTAIN_TRAIL,
    DESERT_COLOSSUS,
    GERUDO_VALLEY,
    GERUDOS_FORTRESS,
    GORON_CITY,
    GRAVEYARD,
    HAUNTED_WASTELAND,
    HYRULE_FIELD, HYRULE_FIELD_FROM_BRIDGE,
    KAKARIKO_VILLAGE,
    KOKIRI_FOREST, KOKIRI_FOREST_FROM_BRIDGE,
    LAKE_HYLIA,
    LON_LON_RANCH,
    LOST_WOODS,
    LOST_WOODS_BRIDGE_FROM_HYRULE_FIELD, LOST_WOODS_BRIDGE_FROM_KOKIRI_FOREST,
    MARKET, SACRED_FOREST_MEADOW, TEMPLE_OF_TIME_ENTRANCE, ZORAS_DOMAIN, ZORAS_FOUNTAIN,
    ZORAS_RIVER
} from "../Names/OverworldNames";
import {DUNGEON, HOUSE, OVERWORLD} from "../Types/AreaTypes";
import {
    OVERWORLD_ENTRANCE,
    HOUSE_ENTRANCE,
    GROTTO_ENTRANCE,
    DUNGEON_ENTRANCE,
    KAEPORA_GAEBORA
} from "../Types/EntranceTypes";
import {
    ADULT_GREAT_FAIRYS_FOUNTAIN,
    ADULT_SHOOTING_GALLERY, BACK_ALLEY_HOUSE,
    BACK_ENTRANCE,
    BAZAAR,
    BAZAAR_ONE,
    BAZAAR_TWO, BOMBCHU_BOWLING, BOMBCHU_SHOP,
    BOTTOM_HOUSE,
    CARPENTER_TENT,
    CHILD_GREAT_FAIRYS_FOUNTAIN, CHILD_SHOOTING_GALLERY,
    DAMPES_HUT, FISHING,
    GORON_SHOP,
    GRANNYS_POTION_SHOP,
    GREAT_FAIRYS_FOUNTAIN,
    GREAT_FAIRYS_FOUNTAIN_FIVE,
    GREAT_FAIRYS_FOUNTAIN_FOUR,
    GREAT_FAIRYS_FOUNTAIN_ONE, GREAT_FAIRYS_FOUNTAIN_SIX,
    GREAT_FAIRYS_FOUNTAIN_THREE,
    GREAT_FAIRYS_FOUNTAIN_TWO,
    GUARD_HUT_POE_SHOP, HOUSE_ONE,
    HOUSE_WITH_TALON,
    IMPAS_HOUSE,
    IMPAS_HOUSE_COW,
    IMPAS_HOUSE_FRONT,
    IMPAS_HOUSE_ROOF,
    KNOW_IT_ALL_HOUSE, KOKIRI_SHOP, LAKESIDE_LABORATORY,
    LINKS_HOUSE, LON_LON_TOWER, MASK_SHOP,
    MIDOS_HOUSE, POTION_SHOP,
    POTION_SHOP_BACK,
    POTION_SHOP_FRONT,
    POTION_SHOP_WITH_BACKDOOR, SARIAS_HOUSE, SHOP,
    SKULLTULA_HOUSE, STABLE, TALONS_HOUSE, TEMPLE_OF_TIME, TREASURE_BOX_SHOP, TWINS_HOUSE,
    WINDMILL, ZORA_SHOP
} from "../Names/HouseNames";
import {DOOR, ENTRANCE} from "../Names/EntranceNames";
import {
    BOMB_GROTTO,
    BOULDER_ACROSS_RIVER,
    BOULDER_GROTTO,
    BOULDER_IN_TREES,
    BOULDER_NEAR_CASTLE_TOWN,
    BOULDER_NEAR_DEATH_MOUNTAIN_TRAIL,
    BOULDER_NEAR_GERUDO_VALLEY,
    BOULDER_NEAR_GORON_CITY, BOULDER_NEAR_SACRED_FOREST_MEADOW,
    BOULDER_ON_LEDGE,
    COMPOSERS_GRAVE,
    COW_GROTTO,
    DAMPES_GRAVE,
    DIVING_RUPEE_GROTTO, FAIRY_FOUNTAIN_FIVE, FAIRY_FOUNTAIN_FOUR,
    FAIRY_FOUNTAIN_ONE, FAIRY_FOUNTAIN_THREE,
    FAIRY_FOUNTAIN_TWO,
    FOREST_STAGE,
    GENERIC_GROTTO_EIGHT,
    GENERIC_GROTTO_FIVE,
    GENERIC_GROTTO_FOUR, GENERIC_GROTTO_NINE,
    GENERIC_GROTTO_ONE,
    GENERIC_GROTTO_SEVEN,
    GENERIC_GROTTO_SIX,
    GENERIC_GROTTO_THREE,
    GENERIC_GROTTO_TWO,
    GRAVE,
    GROTTO,
    NEAR_LAKE_INSIDE_FENCE_GROTTO,
    ONE_SCRUB,
    OPEN_GROTTO,
    REDEAD_GRAVE,
    REDEAD_GROTTO,
    SHIELD_GRAVE,
    SKULLTULA_GOSSIP_STONE_COW_GROTTO,
    SKULLTULA_GOSSIP_STONE_GROTTO,
    SKULLTULA_GROTTO,
    SONG_OF_STORMS_GROTTO,
    TEKTITE_GROTTO,
    THREE_SCRUBS_FOUR,
    THREE_SCRUBS_ONE,
    THREE_SCRUBS_THREE,
    THREE_SCRUBS_TWO,
    TREE_NEAR_KAKARIKO_GROTTO, TWO_SCRUBS_FIVE, TWO_SCRUBS_FOUR,
    TWO_SCRUBS_ONE, TWO_SCRUBS_THREE,
    TWO_SCRUBS_TWO, WOLFOS_GROTTO
} from "../Names/GrottoNames";
import {
    BOTTOM_OF_THE_WELL, DEKU_TREE,
    DODONGOS_CAVERN,
    FIRE_TEMPLE, FOREST_TEMPLE,
    GERUDO_TRAINING_GROUNDS, ICE_CAVERN, JABU_JABUS_BELLY,
    SHADOW_TEMPLE,
    SPIRIT_TEMPLE, WATER_TEMPLE
} from "../Names/DungeonNames";

export const OverworldAreas = {
    // []: {
    //     type: house,
    //     isExpanded: true,
    //     entrances: {
    //         []: {
    //             type: ,
    //             leadsToVanilla: {
    //                 area: ,
    //                 entrance:
    //             },
    //             leadsTo: null,
    //             comesFrom: []
    //         }
    //     }
    // },
    [CASTLE_TOWN_ENTRANCE]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [HYRULE_FIELD]: {
                type: OVERWORLD_ENTRANCE,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: CASTLE_TOWN_ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [MARKET]: {
                type: OVERWORLD_ENTRANCE,
                leadsToVanilla: {
                    area: MARKET,
                    entrance: CASTLE_TOWN_ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [GUARD_HUT_POE_SHOP]: {
                type: HOUSE_ENTRANCE,
                leadsToVanilla: {
                    area: GUARD_HUT_POE_SHOP,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [DEATH_MOUNTAIN_CRATER]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [DEATH_MOUNTAIN_TRAIL]: {
                type: OVERWORLD_ENTRANCE,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_TRAIL,
                    entrance: DEATH_MOUNTAIN_CRATER
                },
                leadsTo: null,
                comesFrom: []
            },
            [GORON_CITY]: {
                type: OVERWORLD_ENTRANCE,
                leadsToVanilla: {
                    area: GORON_CITY,
                    entrance: DEATH_MOUNTAIN_CRATER
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOULDER_NEAR_DEATH_MOUNTAIN_TRAIL]: {
                type: GROTTO_ENTRANCE,
                leadsToVanilla: {
                    area: GENERIC_GROTTO_ONE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOULDER_NEAR_GORON_CITY]: {
                type: GROTTO_ENTRANCE,
                leadsToVanilla: {
                    area: THREE_SCRUBS_ONE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [GREAT_FAIRYS_FOUNTAIN]: {
                type: HOUSE_ENTRANCE,
                leadsToVanilla: {
                    area: GREAT_FAIRYS_FOUNTAIN_ONE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [FIRE_TEMPLE]: {
                type: DUNGEON_ENTRANCE,
                leadsToVanilla: {
                    area: FIRE_TEMPLE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [DEATH_MOUNTAIN_TRAIL]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [KAKARIKO_VILLAGE]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: DEATH_MOUNTAIN_TRAIL
                },
                leadsTo: null,
                comesFrom: []
            },
            [DODONGOS_CAVERN]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: DODONGOS_CAVERN,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [GORON_CITY]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: GORON_CITY,
                    entrance: DEATH_MOUNTAIN_TRAIL
                },
                leadsTo: null,
                comesFrom: []
            },
            [SONG_OF_STORMS_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GENERIC_GROTTO_TWO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [COW_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: COW_GROTTO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [GREAT_FAIRYS_FOUNTAIN]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: GREAT_FAIRYS_FOUNTAIN_TWO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [DEATH_MOUNTAIN_CRATER]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_CRATER,
                    entrance: DEATH_MOUNTAIN_TRAIL
                },
                leadsTo: null,
                comesFrom: []
            },
            [KAEPORA_GAEBORA]: {
                type: KAEPORA_GAEBORA,
                isOneWay: true,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: IMPAS_HOUSE_ROOF
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [DESERT_COLOSSUS]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [BOULDER_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: TWO_SCRUBS_ONE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [GREAT_FAIRYS_FOUNTAIN]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: GREAT_FAIRYS_FOUNTAIN_THREE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [SPIRIT_TEMPLE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: SPIRIT_TEMPLE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [HAUNTED_WASTELAND]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: HAUNTED_WASTELAND,
                    entrance: DESERT_COLOSSUS
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [GERUDOS_FORTRESS]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [GERUDO_TRAINING_GROUNDS]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: GERUDO_TRAINING_GROUNDS,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [GERUDO_VALLEY]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: GERUDO_VALLEY,
                    entrance: GERUDOS_FORTRESS
                },
                leadsTo: null,
                comesFrom: []
            },
            [HAUNTED_WASTELAND]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: HAUNTED_WASTELAND,
                    entrance: GERUDOS_FORTRESS
                },
                leadsTo: null,
                comesFrom: []
            },
            [SONG_OF_STORMS_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: FAIRY_FOUNTAIN_ONE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [GERUDO_VALLEY]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [HYRULE_FIELD]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: GERUDO_VALLEY
                },
                leadsTo: null,
                comesFrom: []
            },
            [GERUDOS_FORTRESS]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: GERUDOS_FORTRESS,
                    entrance: GERUDO_VALLEY
                },
                leadsTo: null,
                comesFrom: []
            },
            [LAKE_HYLIA]: {
                type: OVERWORLD,
                isOneWay: true,
                hideUnlessDecoupled: true,
                leadsToVanilla: {
                    area: LAKE_HYLIA,
                    entrance: GERUDO_VALLEY
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOULDER_ON_LEDGE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: DIVING_RUPEE_GROTTO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [SONG_OF_STORMS_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: TWO_SCRUBS_TWO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [CARPENTER_TENT]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: CARPENTER_TENT,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [GORON_CITY]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [DEATH_MOUNTAIN_TRAIL]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_TRAIL,
                    entrance: GORON_CITY
                },
                leadsTo: null,
                comesFrom: []
            },
            [DEATH_MOUNTAIN_CRATER]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_CRATER,
                    entrance: GORON_CITY
                },
                leadsTo: null,
                comesFrom: []
            },
            [LOST_WOODS]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: LOST_WOODS,
                    entrance: GORON_CITY
                },
                leadsTo: null,
                comesFrom: []
            },
            [GORON_SHOP]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: GORON_SHOP,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [OPEN_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: THREE_SCRUBS_TWO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [GRAVEYARD]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [KAKARIKO_VILLAGE]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: GRAVEYARD
                },
                leadsTo: null,
                comesFrom: [],
            },
            [SHADOW_TEMPLE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: SHADOW_TEMPLE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [DAMPES_HUT]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: DAMPES_HUT,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [COMPOSERS_GRAVE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: COMPOSERS_GRAVE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [SHIELD_GRAVE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: SHIELD_GRAVE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [REDEAD_GRAVE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: REDEAD_GRAVE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [DAMPES_GRAVE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: DAMPES_GRAVE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [HAUNTED_WASTELAND]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [GERUDOS_FORTRESS]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: GERUDOS_FORTRESS,
                    entrance: HAUNTED_WASTELAND
                },
                leadsTo: null,
                comesFrom: []
            },
            [DESERT_COLOSSUS]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: DESERT_COLOSSUS,
                    entrance: HAUNTED_WASTELAND
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [CASTLE_GROUNDS]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [CHILD_GREAT_FAIRYS_FOUNTAIN]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: GREAT_FAIRYS_FOUNTAIN_FOUR,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [ADULT_GREAT_FAIRYS_FOUNTAIN]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: GREAT_FAIRYS_FOUNTAIN_FIVE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [MARKET]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: MARKET,
                    entrance: CASTLE_GROUNDS
                },
                leadsTo: null,
                comesFrom: []
            },
            [SONG_OF_STORMS_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: SKULLTULA_GOSSIP_STONE_GROTTO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [HYRULE_FIELD]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [LOST_WOODS_BRIDGE_FROM_HYRULE_FIELD]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: LOST_WOODS,
                    entrance: LOST_WOODS_BRIDGE_FROM_HYRULE_FIELD
                },
                leadsTo: null,
                comesFrom: []
            },
            [ZORAS_RIVER]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: ZORAS_RIVER,
                    entrance: HYRULE_FIELD
                },
                leadsTo: null,
                comesFrom: []
            },
            [KAKARIKO_VILLAGE]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: HYRULE_FIELD
                },
                leadsTo: null,
                comesFrom: []
            },
            [TREE_NEAR_KAKARIKO_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: SKULLTULA_GROTTO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [CASTLE_TOWN_ENTRANCE]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: CASTLE_TOWN_ENTRANCE,
                    entrance: HYRULE_FIELD
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOULDER_NEAR_CASTLE_TOWN]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GENERIC_GROTTO_THREE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [LON_LON_RANCH]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: LON_LON_RANCH,
                    entrance: HYRULE_FIELD
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOULDER_ACROSS_RIVER]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: FAIRY_FOUNTAIN_TWO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [TEKTITE_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: TEKTITE_GROTTO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOULDER_NEAR_GERUDO_VALLEY]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: SKULLTULA_GOSSIP_STONE_COW_GROTTO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [GERUDO_VALLEY]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: GERUDO_VALLEY,
                    entrance: HYRULE_FIELD
                },
                leadsTo: null,
                comesFrom: []
            },
            [LAKE_HYLIA]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: LAKE_HYLIA,
                    entrance: HYRULE_FIELD
                },
                leadsTo: null,
                comesFrom: []
            },
            [NEAR_LAKE_INSIDE_FENCE_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: ONE_SCRUB,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [OPEN_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GENERIC_GROTTO_FOUR,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOULDER_IN_TREES]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GENERIC_GROTTO_FIVE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [KAKARIKO_VILLAGE]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [HYRULE_FIELD]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: KAKARIKO_VILLAGE
                },
                leadsTo: null,
                comesFrom: []
            },
            [DEATH_MOUNTAIN_TRAIL]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_TRAIL,
                    entrance: KAKARIKO_VILLAGE
                },
                leadsTo: null,
                comesFrom: []
            },
            [GRAVEYARD]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: GRAVEYARD,
                    entrance: KAKARIKO_VILLAGE
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOTTOM_OF_THE_WELL]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: BOTTOM_OF_THE_WELL,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [SKULLTULA_HOUSE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: SKULLTULA_HOUSE,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [WINDMILL]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: WINDMILL,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [IMPAS_HOUSE_FRONT]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: IMPAS_HOUSE,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [IMPAS_HOUSE_COW]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: IMPAS_HOUSE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOTTOM_HOUSE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: HOUSE_WITH_TALON,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [ADULT_SHOOTING_GALLERY]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: ADULT_SHOOTING_GALLERY,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [BAZAAR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: BAZAAR_ONE,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [POTION_SHOP_BACK]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: POTION_SHOP_WITH_BACKDOOR,
                    entrance: BACK_ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [POTION_SHOP_FRONT]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: POTION_SHOP_WITH_BACKDOOR,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [GRANNYS_POTION_SHOP]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: GRANNYS_POTION_SHOP,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [OPEN_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GENERIC_GROTTO_SIX,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOMB_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: REDEAD_GROTTO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [KOKIRI_FOREST]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [LOST_WOODS_BRIDGE_FROM_KOKIRI_FOREST]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: LOST_WOODS,
                    entrance: LOST_WOODS_BRIDGE_FROM_KOKIRI_FOREST
                },
                leadsTo: null,
                comesFrom: []
            },
            [LOST_WOODS]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: LOST_WOODS,
                    entrance: KOKIRI_FOREST
                },
                leadsTo: null,
                comesFrom: []
            },
            [DEKU_TREE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: DEKU_TREE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [KNOW_IT_ALL_HOUSE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KNOW_IT_ALL_HOUSE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [MIDOS_HOUSE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: MIDOS_HOUSE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [LINKS_HOUSE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: LINKS_HOUSE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [SARIAS_HOUSE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: SARIAS_HOUSE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [TWINS_HOUSE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: TWINS_HOUSE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [KOKIRI_SHOP]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KOKIRI_SHOP,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [SONG_OF_STORMS_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GENERIC_GROTTO_SEVEN,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [LAKE_HYLIA]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [HYRULE_FIELD]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: LAKE_HYLIA
                },
                leadsTo: null,
                comesFrom: []
            },
            [ZORAS_DOMAIN]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: ZORAS_DOMAIN,
                    entrance: LAKE_HYLIA
                },
                leadsTo: null,
                comesFrom: []
            },
            [KAEPORA_GAEBORA]: {
                type: KAEPORA_GAEBORA,
                isOneWay: true,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: CASTLE_TOWN_ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [GRAVE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: THREE_SCRUBS_THREE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [LAKESIDE_LABORATORY]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: LAKESIDE_LABORATORY,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [FISHING]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: FISHING,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [WATER_TEMPLE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: WATER_TEMPLE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [LON_LON_RANCH]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [HYRULE_FIELD]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: LON_LON_RANCH
                },
                leadsTo: null,
                comesFrom: []
            },
            [TALONS_HOUSE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: TALONS_HOUSE,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [STABLE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: STABLE,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [LON_LON_TOWER]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: LON_LON_TOWER,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [OPEN_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: THREE_SCRUBS_FOUR,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [LOST_WOODS]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [KOKIRI_FOREST]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: KOKIRI_FOREST,
                    entrance: LOST_WOODS
                },
                leadsTo: null,
                comesFrom: []
            },
            [GORON_CITY]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: GORON_CITY,
                    entrance: LOST_WOODS
                },
                leadsTo: null,
                comesFrom: []
            },
            [SACRED_FOREST_MEADOW]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: SACRED_FOREST_MEADOW,
                    entrance: LOST_WOODS
                },
                leadsTo: null,
                comesFrom: []
            },
            [ZORAS_RIVER]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: ZORAS_RIVER,
                    entrance: LOST_WOODS
                },
                leadsTo: null,
                comesFrom: []
            },
            [FOREST_STAGE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: FOREST_STAGE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOULDER_NEAR_GORON_CITY]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GENERIC_GROTTO_EIGHT,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOULDER_NEAR_SACRED_FOREST_MEADOW]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: TWO_SCRUBS_THREE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            // bridge
            [KOKIRI_FOREST_FROM_BRIDGE]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: KOKIRI_FOREST,
                    entrance: KOKIRI_FOREST_FROM_BRIDGE
                },
                leadsTo: null,
                comesFrom: []
            },
            [HYRULE_FIELD_FROM_BRIDGE]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: HYRULE_FIELD_FROM_BRIDGE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [MARKET]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [CASTLE_TOWN_ENTRANCE]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: CASTLE_TOWN_ENTRANCE,
                    entrance: MARKET
                },
                leadsTo: null,
                comesFrom: []
            },
            [TEMPLE_OF_TIME_ENTRANCE]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: TEMPLE_OF_TIME_ENTRANCE,
                    entrance: MARKET
                },
                leadsTo: null,
                comesFrom: []
            },
            [CASTLE_GROUNDS]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: CASTLE_GROUNDS,
                    entrance: MARKET
                },
                leadsTo: null,
                comesFrom: []
            },
            [BAZAAR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: BAZAAR_TWO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [POTION_SHOP]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: POTION_SHOP,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [CHILD_SHOOTING_GALLERY]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: CHILD_SHOOTING_GALLERY,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOMBCHU_BOWLING]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: BOMBCHU_BOWLING,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOMBCHU_SHOP]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: BOMBCHU_SHOP,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [TREASURE_BOX_SHOP]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: TREASURE_BOX_SHOP,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [BACK_ALLEY_HOUSE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: HOUSE_ONE,
                    entrance: DOOR
                },
                leadsTo: null,
                comesFrom: []
            },
            [MASK_SHOP]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: MASK_SHOP,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [SACRED_FOREST_MEADOW]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [LOST_WOODS]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: LOST_WOODS,
                    entrance: SACRED_FOREST_MEADOW
                },
                leadsTo: null,
                comesFrom: []
            },
            [FOREST_TEMPLE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: FOREST_TEMPLE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOMB_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: WOLFOS_GROTTO,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [OPEN_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: FAIRY_FOUNTAIN_THREE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [SONG_OF_STORMS_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: TWO_SCRUBS_FOUR,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [TEMPLE_OF_TIME_ENTRANCE]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [MARKET]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: MARKET,
                    entrance: TEMPLE_OF_TIME_ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [TEMPLE_OF_TIME]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: TEMPLE_OF_TIME,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [ZORAS_DOMAIN]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [ZORAS_RIVER]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: ZORAS_RIVER,
                    entrance: ZORAS_DOMAIN
                },
                leadsTo: null,
                comesFrom: []
            },
            [ZORAS_FOUNTAIN]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: ZORAS_FOUNTAIN,
                    entrance: ZORAS_DOMAIN
                },
                leadsTo: null,
                comesFrom: []
            },
            [LAKE_HYLIA]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: LAKE_HYLIA,
                    entrance: ZORAS_DOMAIN
                },
                leadsTo: null,
                comesFrom: []
            },
            [SHOP]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: ZORA_SHOP,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [SONG_OF_STORMS_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: FAIRY_FOUNTAIN_FOUR,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [ZORAS_FOUNTAIN]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [ZORAS_DOMAIN]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: ZORAS_DOMAIN,
                    entrance: ZORAS_FOUNTAIN
                },
                leadsTo: null,
                comesFrom: []
            },
            [JABU_JABUS_BELLY]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: JABU_JABUS_BELLY,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [ICE_CAVERN]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: ICE_CAVERN,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [GREAT_FAIRYS_FOUNTAIN]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: GREAT_FAIRYS_FOUNTAIN_SIX,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [ZORAS_RIVER]: {
        type: OVERWORLD,
        isExpanded: true,
        entrances: {
            [HYRULE_FIELD]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: ZORAS_RIVER
                },
                leadsTo: null,
                comesFrom: []
            },
            [ZORAS_DOMAIN]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: ZORAS_DOMAIN,
                    entrance: ZORAS_RIVER
                },
                leadsTo: null,
                comesFrom: []
            },
            [LOST_WOODS]: {
                type: OVERWORLD,
                leadsToVanilla: {
                    area: LOST_WOODS,
                    entrance: ZORAS_RIVER
                },
                leadsTo: null,
                comesFrom: []
            },
            [SONG_OF_STORMS_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: TWO_SCRUBS_FIVE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [OPEN_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GENERIC_GROTTO_NINE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            },
            [BOULDER_GROTTO]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: FAIRY_FOUNTAIN_FIVE,
                    entrance: ENTRANCE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    }
};
