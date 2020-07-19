import { DungeonEntranceLabels } from "../Names/DungeonEntranceLabels";
import { OverworldNames } from "../Names/OverworldNames";
import { DungeonNames } from "../Names/DungeonNames";
import { AreaTypes } from "../Types/AreaTypes";

export const DungeonAreas = {
    // []: {
    //     type: AreaTypes.house,
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
    displayName: "Dungeons",
    areas: {
        [DungeonNames.dekuTree]: {
            type: AreaTypes.dungeon,
            isExpanded: true,
            entrances: {
                [DungeonEntranceLabels.entrance]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: OverworldNames.kokiriForest,
                        entrance: DungeonNames.dekuTree
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [DungeonNames.dodongosCavern]: {
            type: AreaTypes.dungeon,
            isExpanded: true,
            entrances: {
                [DungeonEntranceLabels.entrance]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainTrail,
                        entrance: DungeonNames.dodongosCavern
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [DungeonNames.jabuJabusBelly]: {
            type: AreaTypes.dungeon,
            isExpanded: true,
            entrances: {
                [DungeonEntranceLabels.entrance]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: OverworldNames.zorasFountain,
                        entrance: DungeonNames.jabuJabusBelly
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [DungeonNames.forestTemple]: {
            type: AreaTypes.dungeon,
            isExpanded: true,
            entrances: {
                [DungeonEntranceLabels.entrance]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: OverworldNames.sacredForestMeadow,
                        entrance: DungeonNames.forestTemple
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [DungeonNames.fireTemple]: {
            type: AreaTypes.dungeon,
            isExpanded: true,
            entrances: {
                [DungeonEntranceLabels.entrance]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainCrater,
                        entrance: DungeonNames.fireTemple
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [DungeonNames.iceCavern]: {
            type: AreaTypes.dungeon,
            isExpanded: true,
            entrances: {
                [DungeonEntranceLabels.entrance]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: OverworldNames.zorasFountain,
                        entrance: DungeonNames.iceCavern
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [DungeonNames.waterTemple]: {
            type: AreaTypes.dungeon,
            isExpanded: true,
            entrances: {
                [DungeonEntranceLabels.entrance]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: OverworldNames.lakeHylia,
                        entrance: DungeonNames.waterTemple
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [DungeonNames.bottomOfTheWell]: {
            type: AreaTypes.dungeon,
            isExpanded: true,
            entrances: {
                [DungeonEntranceLabels.entrance]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: DungeonNames.bottomOfTheWell
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [DungeonNames.shadowTemple]: {
            type: AreaTypes.dungeon,
            isExpanded: true,
            entrances: {
                [DungeonEntranceLabels.entrance]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: OverworldNames.graveyard,
                        entrance: DungeonNames.shadowTemple
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [DungeonNames.gerudoTrainingGrounds]: {
            type: AreaTypes.dungeon,
            isExpanded: true,
            entrances: {
                [DungeonEntranceLabels.entrance]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: OverworldNames.gerudoFortress,
                        entrance: DungeonNames.gerudoTrainingGrounds
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [DungeonNames.spiritTemple]: {
            type: AreaTypes.dungeon,
            isExpanded: true,
            entrances: {
                [DungeonEntranceLabels.entrance]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: OverworldNames.desertColossus,
                        entrance: DungeonNames.spiritTemple
                    },
                    leadsTo: null,
                    comesFrom: []
                },
                [DungeonEntranceLabels.childSideHand]: {
                    type: AreaTypes.dungeon,
                    isImmutable: true,
                    leadsToVanilla: {
                        area: OverworldNames.desertColossus,
                        entrance: DungeonEntranceLabels.childSideHand
                    },
                    leadsTo: {
                        area: OverworldNames.desertColossus,
                        entrance: DungeonEntranceLabels.childSideHand
                    },
                    comesFrom: []
                },
                [DungeonEntranceLabels.adultSideHand]: {
                    type: AreaTypes.dungeon,
                    isImmutable: true,
                    leadsToVanilla: {
                        area: OverworldNames.desertColossus,
                        entrance: DungeonEntranceLabels.adultSideHand
                    },
                    leadsTo: {
                        area: OverworldNames.desertColossus,
                        entrance: DungeonEntranceLabels.adultSideHand
                    },
                    comesFrom: []
                }
            }
        }
    }
};
