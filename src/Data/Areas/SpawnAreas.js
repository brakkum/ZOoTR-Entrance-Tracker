import { SPAWN } from "../Types/EntranceTypes";
import {ADULT_LINK, CHILD_LINK, LINKS_BED, WARP_SONG_PEDESTAL} from "../Names/SpawnNames";
import {LINKS_HOUSE, TEMPLE_OF_TIME} from "../Names/HouseNames";

export const SpawnAreas = {
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
    [CHILD_LINK]: {
        type: SPAWN,
        isExpanded: true,
        entrances: {
            [CHILD_LINK]: {
                type: SPAWN,
                isOneWay: true,
                leadsToVanilla: {
                    area: LINKS_HOUSE,
                    entrance: LINKS_BED
                },
                leadsTo: null,
                comesFrom: []
            }
        }
    },
    [ADULT_LINK]: {
        type: SPAWN,
        isExpanded: true,
        entrances: {
            [ADULT_LINK]: {
                type: SPAWN,
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
