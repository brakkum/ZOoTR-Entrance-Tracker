import {GROTTO, HOUSE} from "../Types/AreaTypes";
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
import {ENTRANCE} from "../Names/EntranceNames";
import {
    CASTLE_GROUNDS,
    DEATH_MOUNTAIN_CRATER,
    DEATH_MOUNTAIN_TRAIL,
    DESERT_COLOSSUS,
    GERUDO_VALLEY,
    GERUDOS_FORTRESS,
    GORON_CITY,
    GRAVEYARD,
    HYRULE_FIELD,
    KAKARIKO_VILLAGE,
    KOKIRI_FOREST,
    LAKE_HYLIA,
    LON_LON_RANCH,
    LOST_WOODS, SACRED_FOREST_MEADOW, ZORAS_DOMAIN, ZORAS_RIVER
} from "../Names/OverworldNames";
import {WINDMILL} from "../Names/HouseNames";

export const GrottoAreas = {
    // []: {
    //     type: ,
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
    // death mountain crater
    [GENERIC_GROTTO_ONE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_CRATER,
                    entrance: BOULDER_NEAR_DEATH_MOUNTAIN_TRAIL
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [THREE_SCRUBS_ONE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_CRATER,
                    entrance: BOULDER_NEAR_GORON_CITY
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // death mountain trail
    [GENERIC_GROTTO_TWO]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_TRAIL,
                    entrance: SONG_OF_STORMS_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [COW_GROTTO]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_TRAIL,
                    entrance: COW_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // desert colossus
    [TWO_SCRUBS_ONE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: DESERT_COLOSSUS,
                    entrance: BOULDER_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // gerudo fortress
    [FAIRY_FOUNTAIN_ONE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GERUDOS_FORTRESS,
                    entrance: SONG_OF_STORMS_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // gerudo valley
    [DIVING_RUPEE_GROTTO]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GERUDO_VALLEY,
                    entrance: BOULDER_ON_LEDGE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [TWO_SCRUBS_TWO]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GERUDO_VALLEY,
                    entrance: SONG_OF_STORMS_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // goron city
    [THREE_SCRUBS_TWO]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GORON_CITY,
                    entrance: OPEN_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // graveyard
    [COMPOSERS_GRAVE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GRAVEYARD,
                    entrance: COMPOSERS_GRAVE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [SHIELD_GRAVE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GRAVEYARD,
                    entrance: SHIELD_GRAVE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [REDEAD_GRAVE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GRAVEYARD,
                    entrance: REDEAD_GRAVE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [DAMPES_GRAVE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: GRAVEYARD,
                    entrance: DAMPES_GRAVE
                },
                leadsTo: null,
                comesFrom: []
            },
            [WINDMILL]: {
                type: HOUSE,
                isImmutable: true,
                leadsToVanilla: {
                    area: WINDMILL,
                    entrance: WINDMILL
                },
                leadsTo: {
                    area: WINDMILL,
                    entrance: WINDMILL
                },
            }
        }
    },
    // castle grounds
    [SKULLTULA_GOSSIP_STONE_GROTTO]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: CASTLE_GROUNDS,
                    entrance: SONG_OF_STORMS_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // hyrule field
    [SKULLTULA_GROTTO]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: TREE_NEAR_KAKARIKO_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [GENERIC_GROTTO_THREE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: BOULDER_NEAR_CASTLE_TOWN
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [FAIRY_FOUNTAIN_TWO]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: BOULDER_ACROSS_RIVER
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [TEKTITE_GROTTO]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: TEKTITE_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [SKULLTULA_GOSSIP_STONE_COW_GROTTO]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: BOULDER_NEAR_GERUDO_VALLEY
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [ONE_SCRUB]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: NEAR_LAKE_INSIDE_FENCE_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [GENERIC_GROTTO_FOUR]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: OPEN_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [GENERIC_GROTTO_FIVE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: HYRULE_FIELD,
                    entrance: BOULDER_IN_TREES
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // kakariko village
    [GENERIC_GROTTO_SIX]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: OPEN_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [REDEAD_GROTTO]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: BOMB_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // kokiri forest
    [GENERIC_GROTTO_SEVEN]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: KOKIRI_FOREST,
                    entrance: SONG_OF_STORMS_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // lake hylia
    [THREE_SCRUBS_THREE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: LAKE_HYLIA,
                    entrance: GRAVE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // lon lon ranch
    [THREE_SCRUBS_FOUR]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: LON_LON_RANCH,
                    entrance: OPEN_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // lost woods
    [FOREST_STAGE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: LOST_WOODS,
                    entrance: FOREST_STAGE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [GENERIC_GROTTO_EIGHT]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: LOST_WOODS,
                    entrance: BOULDER_NEAR_GORON_CITY
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [TWO_SCRUBS_THREE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: LOST_WOODS,
                    entrance: BOULDER_NEAR_SACRED_FOREST_MEADOW
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // sacred forest meadow
    [WOLFOS_GROTTO]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: SACRED_FOREST_MEADOW,
                    entrance: BOMB_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [FAIRY_FOUNTAIN_THREE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: SACRED_FOREST_MEADOW,
                    entrance: OPEN_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [TWO_SCRUBS_FOUR]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: SACRED_FOREST_MEADOW,
                    entrance: SONG_OF_STORMS_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // zoras domain
    [FAIRY_FOUNTAIN_FOUR]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: ZORAS_DOMAIN,
                    entrance: SONG_OF_STORMS_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // zoras river
    [TWO_SCRUBS_FIVE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: ZORAS_RIVER,
                    entrance: SONG_OF_STORMS_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [GENERIC_GROTTO_NINE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: ZORAS_RIVER,
                    entrance: OPEN_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [FAIRY_FOUNTAIN_FIVE]: {
        type: GROTTO,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: GROTTO,
                leadsToVanilla: {
                    area: ZORAS_RIVER,
                    entrance: BOULDER_GROTTO
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    }
};
