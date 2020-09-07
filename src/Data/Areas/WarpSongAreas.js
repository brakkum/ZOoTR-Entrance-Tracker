import { WARP_SONG } from "../Types/EntranceTypes";
import {
    BOLERO_OF_FIRE,
    MINUET_OF_FOREST,
    NOCTURNE_OF_SHADOW, PRELUDE_OF_LIGHT,
    REQUIEM_OF_SPIRIT,
    SERENADE_OF_WATER
} from "../Names/SongNames";
import {DEATH_MOUNTAIN_CRATER, DESERT_COLOSSUS, LAKE_HYLIA, SACRED_FOREST_MEADOW} from "../Names/OverworldNames";
import {WARP_SONG_PEDESTAL} from "../Names/SpawnNames";
import {TEMPLE_OF_TIME} from "../Names/HouseNames";

export const WarpSongAreas = {
    // []: {
    //     type: ,
    //     isExpanded: true,
    //     entrances: {
    //         []: {
    //             type: ,
    //             isOneWay: true,
    //             leadsToVanilla: {
    //                 area: ,
    //                 entrance:
    //             },
    //             leadsTo: null,
    //             comesFrom: []
    //         }
    //     }
    // },
    [MINUET_OF_FOREST]: {
        type: WARP_SONG,
        isExpanded: true,
        entrances: {
            [WARP_SONG]: {
                type: WARP_SONG,
                isOneWay: true,
                leadsToVanilla: {
                    area: SACRED_FOREST_MEADOW,
                    entrance: WARP_SONG_PEDESTAL
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [BOLERO_OF_FIRE]: {
        type: WARP_SONG,
        isExpanded: true,
        entrances: {
            [WARP_SONG]: {
                type: WARP_SONG,
                isOneWay: true,
                leadsToVanilla: {
                    area: DEATH_MOUNTAIN_CRATER,
                    entrance: WARP_SONG_PEDESTAL
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [SERENADE_OF_WATER]: {
        type: WARP_SONG,
        isExpanded: true,
        entrances: {
            [WARP_SONG]: {
                type: WARP_SONG,
                isOneWay: true,
                leadsToVanilla: {
                    area: LAKE_HYLIA,
                    entrance: WARP_SONG_PEDESTAL
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [REQUIEM_OF_SPIRIT]: {
        type: WARP_SONG,
        isExpanded: true,
        entrances: {
            [WARP_SONG]: {
                type: WARP_SONG,
                isOneWay: true,
                leadsToVanilla: {
                    area: DESERT_COLOSSUS,
                    entrance: WARP_SONG_PEDESTAL
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [NOCTURNE_OF_SHADOW]: {
        type: WARP_SONG,
        isExpanded: true,
        entrances: {
            [WARP_SONG]: {
                type: WARP_SONG,
                isOneWay: true,
                leadsToVanilla: {
                    area: SACRED_FOREST_MEADOW,
                    entrance: WARP_SONG_PEDESTAL
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [PRELUDE_OF_LIGHT]: {
        type: WARP_SONG,
        isExpanded: true,
        entrances: {
            [WARP_SONG]: {
                type: WARP_SONG,
                isOneWay: true,
                leadsToVanilla: {
                    area: TEMPLE_OF_TIME,
                    entrance: WARP_SONG_PEDESTAL
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    }
};
