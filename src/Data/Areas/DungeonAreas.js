import {
    ADULT_SIDE_HAND,
    BOTTOM_OF_THE_WELL, CHILD_SIDE_HAND,
    DEKU_TREE,
    DODONGOS_CAVERN,
    FIRE_TEMPLE,
    FOREST_TEMPLE, GERUDO_TRAINING_GROUNDS,
    ICE_CAVERN,
    JABU_JABUS_BELLY, SHADOW_TEMPLE, SPIRIT_TEMPLE, WATER_TEMPLE
} from "../Names/DungeonNames";
import {DUNGEON} from "../Types/AreaTypes";
import {ENTRANCE} from "../Names/EntranceNames";
import {
    DEATH_MOUNTAIN_CRATER,
    DEATH_MOUNTAIN_TRAIL, DESERT_COLOSSUS, GERUDOS_FORTRESS, GRAVEYARD, KAKARIKO_VILLAGE,
    KOKIRI_FOREST, LAKE_HYLIA,
    SACRED_FOREST_MEADOW,
    ZORAS_FOUNTAIN
} from "../Names/OverworldNames";

export const DungeonAreas = {
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
    [DEKU_TREE]: {
        type: DUNGEON,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: KOKIRI_FOREST,
                    entrance: DEKU_TREE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [DODONGOS_CAVERN]: {
        type: DUNGEON,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_TRAIL,
                    entrance: DODONGOS_CAVERN
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [JABU_JABUS_BELLY]: {
        type: DUNGEON,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: ZORAS_FOUNTAIN,
                    entrance: JABU_JABUS_BELLY
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [FOREST_TEMPLE]: {
        type: DUNGEON,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: SACRED_FOREST_MEADOW,
                    entrance: FOREST_TEMPLE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [FIRE_TEMPLE]: {
        type: DUNGEON,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_CRATER,
                    entrance: FIRE_TEMPLE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [ICE_CAVERN]: {
        type: DUNGEON,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: ZORAS_FOUNTAIN,
                    entrance: ICE_CAVERN
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [WATER_TEMPLE]: {
        type: DUNGEON,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: LAKE_HYLIA,
                    entrance: WATER_TEMPLE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [BOTTOM_OF_THE_WELL]: {
        type: DUNGEON,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: KAKARIKO_VILLAGE,
                    entrance: BOTTOM_OF_THE_WELL
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [SHADOW_TEMPLE]: {
        type: DUNGEON,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: GRAVEYARD,
                    entrance: SHADOW_TEMPLE
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [GERUDO_TRAINING_GROUNDS]: {
        type: DUNGEON,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: GERUDOS_FORTRESS,
                    entrance: GERUDO_TRAINING_GROUNDS
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [SPIRIT_TEMPLE]: {
        type: DUNGEON,
        isExpanded: true,
        entrances: {
            [ENTRANCE]: {
                type: DUNGEON,
                leadsToVanilla: {
                    area: DESERT_COLOSSUS,
                    entrance: SPIRIT_TEMPLE
                },
                leadsTo: null,
                comesFrom: []
            },
            [CHILD_SIDE_HAND]: {
                type: DUNGEON,
                isImmutable: true,
                leadsToVanilla: {
                    area: DESERT_COLOSSUS,
                    entrance: CHILD_SIDE_HAND
                },
                leadsTo: {
                    area: DESERT_COLOSSUS,
                    entrance: CHILD_SIDE_HAND
                },
                comesFrom: []
            },
            [ADULT_SIDE_HAND]: {
                type: DUNGEON,
                isImmutable: true,
                leadsToVanilla: {
                    area: DESERT_COLOSSUS,
                    entrance: ADULT_SIDE_HAND
                },
                leadsTo: {
                    area: DESERT_COLOSSUS,
                    entrance: ADULT_SIDE_HAND
                },
                comesFrom: []
            }
        }
    }
};
