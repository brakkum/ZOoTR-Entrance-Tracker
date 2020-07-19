import { SpawnEntranceLabels } from "../Names/SpawnEntranceLabels";
import { SpawnNames } from "../Names/SpawnNames";
import { HouseNames } from "../Names/HouseNames";
import { AreaTypes } from "../Types/AreaTypes";

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
    displayName: "Spawns Points",
    areas: {
        [SpawnNames.childLink]: {
            type: AreaTypes.spawn,
            isExpanded: true,
            entrances: {
                [SpawnNames.childLink]: {
                    type: AreaTypes.spawn,
                    isOneWay: true,
                    leadsToVanilla: {
                        area: HouseNames.linksHouse,
                        entrance: SpawnEntranceLabels.linksBed
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [SpawnNames.adultLink]: {
            type: AreaTypes.spawn,
            isExpanded: true,
            entrances: {
                [SpawnNames.adultLink]: {
                    type: AreaTypes.spawn,
                    isOneWay: true,
                    leadsToVanilla: {
                        area: HouseNames.templeOfTime,
                        entrance: SpawnEntranceLabels.warpSongPedestal
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        }
    }
};
