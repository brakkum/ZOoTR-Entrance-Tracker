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
    //             leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
                }
            }
        }
    }
};
