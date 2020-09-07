import { HOUSE } from "../Types/AreaTypes";
import {DOOR, ENTRANCE} from "../Names/EntranceNames";
import {
    ADULT_GREAT_FAIRYS_FOUNTAIN,
    ADULT_SHOOTING_GALLERY, BACK_ALLEY_HOUSE,
    BACK_ENTRANCE,
    BAZAAR,
    BAZAAR_ONE, BAZAAR_TWO, BOMBCHU_BOWLING, BOMBCHU_SHOP,
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
    KNOW_IT_ALL_HOUSE,
    KOKIRI_SHOP,
    LAKESIDE_LABORATORY,
    LINKS_HOUSE, LON_LON_TOWER, MASK_SHOP,
    MIDOS_HOUSE, POTION_SHOP,
    POTION_SHOP_BACK,
    POTION_SHOP_FRONT,
    POTION_SHOP_WITH_BACKDOOR,
    SARIAS_HOUSE,
    SKULLTULA_HOUSE, STABLE, TALONS_HOUSE, TEMPLE_OF_TIME, TREASURE_BOX_SHOP,
    TWINS_HOUSE,
    WINDMILL, ZORA_SHOP
} from "../Names/HouseNames";
import {
    CASTLE_GROUNDS,
    CASTLE_TOWN_ENTRANCE,
    DEATH_MOUNTAIN_CRATER,
    DEATH_MOUNTAIN_TRAIL,
    DESERT_COLOSSUS,
    GERUDO_VALLEY,
    GORON_CITY,
    GRAVEYARD,
    KAKARIKO_VILLAGE,
    KOKIRI_FOREST,
    LAKE_HYLIA,
    LON_LON_RANCH,
    MARKET, TEMPLE_OF_TIME_ENTRANCE, ZORAS_DOMAIN, ZORAS_FOUNTAIN
} from "../Names/OverworldNames";

export const HouseAreas = {
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
    // castle town entrance
    [GUARD_HUT_POE_SHOP]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: CASTLE_TOWN_ENTRANCE,
                    entrance: GUARD_HUT_POE_SHOP
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // death mountain crater
    [GREAT_FAIRYS_FOUNTAIN_ONE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_CRATER,
                    entrance: GREAT_FAIRYS_FOUNTAIN
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // death mountain trail
    [GREAT_FAIRYS_FOUNTAIN_TWO]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_TRAIL,
                    entrance: GREAT_FAIRYS_FOUNTAIN
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // desert colossus
    [GREAT_FAIRYS_FOUNTAIN_THREE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: DESERT_COLOSSUS,
                    entrance: GREAT_FAIRYS_FOUNTAIN
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // gerudo valley
    [CARPENTER_TENT]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: GERUDO_VALLEY,
                    entrance: CARPENTER_TENT
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // goron city
    [GORON_SHOP]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: GORON_CITY,
                    entrance: GORON_SHOP
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // graveyard
    [DAMPES_HUT]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: GRAVEYARD,
                    entrance: DAMPES_HUT
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // castle grounds
    [GREAT_FAIRYS_FOUNTAIN_FOUR]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: CASTLE_GROUNDS,
                    entrance: CHILD_GREAT_FAIRYS_FOUNTAIN
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [GREAT_FAIRYS_FOUNTAIN_FIVE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: CASTLE_GROUNDS,
                    entrance: ADULT_GREAT_FAIRYS_FOUNTAIN
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // kakariko village
    [SKULLTULA_HOUSE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: SKULLTULA_HOUSE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [WINDMILL]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: WINDMILL
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [IMPAS_HOUSE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: IMPAS_HOUSE_FRONT
                },
                leadsTo: null,
                comesFrom: []
            },
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: IMPAS_HOUSE_COW
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [HOUSE_WITH_TALON]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: BOTTOM_HOUSE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [ADULT_SHOOTING_GALLERY]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: ADULT_SHOOTING_GALLERY
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [BAZAAR_ONE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: BAZAAR
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [POTION_SHOP_WITH_BACKDOOR]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: POTION_SHOP_FRONT
                },
                leadsTo: null,
                comesFrom: []
            },
            [BACK_ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: POTION_SHOP_BACK
                },
                leadsTo: null,
                comesFrom: []
            },
        }
    },
    [GRANNYS_POTION_SHOP]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: GRANNYS_POTION_SHOP
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // kokiri forest
    [KNOW_IT_ALL_HOUSE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KOKIRI_FOREST,
                    entrance: KNOW_IT_ALL_HOUSE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [MIDOS_HOUSE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KOKIRI_FOREST,
                    entrance: MIDOS_HOUSE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [LINKS_HOUSE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KOKIRI_FOREST,
                    entrance: LINKS_HOUSE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [SARIAS_HOUSE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KOKIRI_FOREST,
                    entrance: SARIAS_HOUSE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [TWINS_HOUSE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KOKIRI_FOREST,
                    entrance: TWINS_HOUSE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [KOKIRI_SHOP]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: KOKIRI_FOREST,
                    entrance: KOKIRI_SHOP
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // lake hylia
    [LAKESIDE_LABORATORY]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: LAKE_HYLIA,
                    entrance: LAKESIDE_LABORATORY
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [FISHING]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: LAKE_HYLIA,
                    entrance: FISHING
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // lon lon ranch
    [TALONS_HOUSE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: LON_LON_RANCH,
                    entrance: TALONS_HOUSE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [STABLE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: LON_LON_RANCH,
                    entrance: STABLE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [LON_LON_TOWER]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: LON_LON_RANCH,
                    entrance: LON_LON_TOWER
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // market
    [BAZAAR_TWO]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: MARKET,
                    entrance: BAZAAR
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [POTION_SHOP]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: MARKET,
                    entrance: POTION_SHOP
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [CHILD_SHOOTING_GALLERY]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: MARKET,
                    entrance: CHILD_SHOOTING_GALLERY
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [BOMBCHU_BOWLING]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: MARKET,
                    entrance: BOMBCHU_BOWLING
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [BOMBCHU_SHOP]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: MARKET,
                    entrance: BOMBCHU_SHOP
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [TREASURE_BOX_SHOP]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: MARKET,
                    entrance: TREASURE_BOX_SHOP
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [HOUSE_ONE]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [DOOR]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: MARKET,
                    entrance: BACK_ALLEY_HOUSE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [MASK_SHOP]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: MARKET,
                    entrance: MASK_SHOP
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // temple of time entrance
    [TEMPLE_OF_TIME]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: TEMPLE_OF_TIME_ENTRANCE,
                    entrance: TEMPLE_OF_TIME
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // zoras domain
    [ZORA_SHOP]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: ZORAS_DOMAIN,
                    entrance: ZORA_SHOP
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    // zoras fountain
    [GREAT_FAIRYS_FOUNTAIN_SIX]: {
        type: HOUSE,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: HOUSE,
                leadsToVanilla: {
                    area: ZORAS_FOUNTAIN,
                    entrance: GREAT_FAIRYS_FOUNTAIN
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    }
};
