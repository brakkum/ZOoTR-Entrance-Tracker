import { SongEntranceLabels } from "../Names/SongEntranceLabels";
import { OverworldNames } from "../Names/OverworldNames";
import { HouseNames } from "../Names/HouseNames";
import { SongNames } from "../Names/SongNames";
import { AreaTypes } from "../Types/AreaTypes";

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
    displayName: "Warp Songs",
    areas: {
        [SongNames.minuetOfForest]: {
            type: AreaTypes.warpSong,
            isExpanded: true,
            entrances: {
                [AreaTypes.warpSong]: {
                    type: AreaTypes.warpSong,
                    isOneWay: true,
                    leadsToVanilla: {
                        area: OverworldNames.sacredForestMeadow,
                        entrance: SongEntranceLabels.warpSongPedestal
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [SongNames.boleroOfFire]: {
            type: AreaTypes.warpSong,
            isExpanded: true,
            entrances: {
                [AreaTypes.warpSong]: {
                    type: AreaTypes.warpSong,
                    isOneWay: true,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainCrater,
                        entrance: SongEntranceLabels.warpSongPedestal
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [SongNames.serenadeOfWater]: {
            type: AreaTypes.warpSong,
            isExpanded: true,
            entrances: {
                [AreaTypes.warpSong]: {
                    type: AreaTypes.warpSong,
                    isOneWay: true,
                    leadsToVanilla: {
                        area: OverworldNames.lakeHylia,
                        entrance: SongEntranceLabels.warpSongPedestal
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [SongNames.requiemOfSpirit]: {
            type: AreaTypes.warpSong,
            isExpanded: true,
            entrances: {
                [AreaTypes.warpSong]: {
                    type: AreaTypes.warpSong,
                    isOneWay: true,
                    leadsToVanilla: {
                        area: OverworldNames.desertColossus,
                        entrance: SongEntranceLabels.warpSongPedestal
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [SongNames.nocturneOfShadow]: {
            type: AreaTypes.warpSong,
            isExpanded: true,
            entrances: {
                [AreaTypes.warpSong]: {
                    type: AreaTypes.warpSong,
                    isOneWay: true,
                    leadsToVanilla: {
                        area: OverworldNames.sacredForestMeadow,
                        entrance: SongEntranceLabels.warpSongPedestal
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [SongNames.preludeOfLight]: {
            type: AreaTypes.warpSong,
            isExpanded: true,
            entrances: {
                [AreaTypes.warpSong]: {
                    type: AreaTypes.warpSong,
                    isOneWay: true,
                    leadsToVanilla: {
                        area: HouseNames.templeOfTime,
                        entrance: SongEntranceLabels.warpSongPedestal
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        }
    }
};
