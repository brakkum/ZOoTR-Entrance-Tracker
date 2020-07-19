import { GrottoEntranceLabels } from "../Names/GrottoEntranceLabels";
import { OverworldNames } from "../Names/OverworldNames";
import { GrottoNames } from "../Names/GrottoNames";
import { HouseNames } from "../Names/HouseNames";
import { AreaTypes } from "../Types/AreaTypes";

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
    displayName: "Grottos",
    areas: {
        // death mountain crater
        [GrottoNames.genericGrottoOne]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainCrater,
                        entrance: GrottoEntranceLabels.boulderNearDeathMountainTrail
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.threeScrubsOne]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainCrater,
                        entrance: GrottoEntranceLabels.boulderNearGoronCity
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // death mountain trail
        [GrottoNames.genericGrottoTwo]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainTrail,
                        entrance: GrottoEntranceLabels.songOfStormsGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.cowGrotto]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainTrail,
                        entrance: GrottoEntranceLabels.cowGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // desert colossus
        [GrottoNames.twoScrubsOne]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.desertColossus,
                        entrance: GrottoEntranceLabels.boulderGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // gerudo fortress
        [GrottoNames.fairyFountainOne]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.gerudoFortress,
                        entrance: GrottoEntranceLabels.songOfStormsGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // gerudo valley
        [GrottoNames.divingRupeeGrotto]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.gerudoValley,
                        entrance: GrottoEntranceLabels.boulderOnLedge
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.twoScrubsTwo]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.gerudoValley,
                        entrance: GrottoEntranceLabels.songOfStormsGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // goron city
        [GrottoNames.threeScrubsTwo]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.goronCity,
                        entrance: GrottoEntranceLabels.openGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // graveyard
        [GrottoNames.composersGrave]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.graveyard,
                        entrance: GrottoEntranceLabels.composersGrave
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.shieldGrave]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.graveyard,
                        entrance: GrottoEntranceLabels.shieldGrave
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.redeadGrave]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.graveyard,
                        entrance: GrottoEntranceLabels.redeadGrave
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.dampesGrave]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.graveyard,
                        entrance: GrottoEntranceLabels.dampesGrave
                    },
                    leadsTo: null,
                    comesFrom: []
                },
                [HouseNames.windmill]: {
                    type: AreaTypes.house,
                    isImmutable: true,
                    leadsToVanilla: {
                        area: HouseNames.windmill,
                        entrance: HouseNames.windmill
                    },
                    leadsTo: {
                        area: HouseNames.windmill,
                        entrance: HouseNames.windmill
                    },
                }
            }
        },
        // castle grounds
        [GrottoNames.skulltulaGossipStoneGrotto]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.castleGrounds,
                        entrance: GrottoEntranceLabels.songOfStormsGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // hyrule field
        [GrottoNames.skulltulaGrotto]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: GrottoEntranceLabels.treeNearKakarikoGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.genericGrottoThree]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: GrottoEntranceLabels.boulderNearCastleTown
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.fairyFountainTwo]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: GrottoEntranceLabels.boulderAcrossRiver
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.tektiteGrotto]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: GrottoEntranceLabels.tektiteGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.skulltulaGossipStoneCowGrotto]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: GrottoEntranceLabels.boulderNearGerudoValley
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.oneScrub]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: GrottoEntranceLabels.nearLakeInsideFenceGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.genericGrottoFour]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: GrottoEntranceLabels.openGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.genericGrottoFive]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: GrottoEntranceLabels.boulderInTrees
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // kakariko village
        [GrottoNames.genericGrottoSix]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: GrottoEntranceLabels.openGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.redeadGrotto]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: GrottoEntranceLabels.bombGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // kokiri forest
        [GrottoNames.genericGrottoSeven]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.kokiriForest,
                        entrance: GrottoEntranceLabels.songOfStormsGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // lake hylia
        [GrottoNames.threeScrubsThree]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.lakeHylia,
                        entrance: GrottoEntranceLabels.grave
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // lon lon ranch
        [GrottoNames.threeScrubsFour]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.lonLonRanch,
                        entrance: GrottoEntranceLabels.openGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // lost woods
        [GrottoNames.forestStage]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.lostWoods,
                        entrance: GrottoEntranceLabels.forestStage
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.genericGrottoEight]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.lostWoods,
                        entrance: GrottoEntranceLabels.boulderNearGoronCity
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.twoScrubsThree]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.lostWoods,
                        entrance: GrottoEntranceLabels.boulderNearSacredForestMeadow
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // sacred forest meadow
        [GrottoNames.wolfosGrotto]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.sacredForestMeadow,
                        entrance: GrottoEntranceLabels.bombGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.fairyFountainThree]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.sacredForestMeadow,
                        entrance: GrottoEntranceLabels.openGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.twoScrubsFour]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.sacredForestMeadow,
                        entrance: GrottoEntranceLabels.songOfStormsGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // zoras domain
        [GrottoNames.fairyFountainFour]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.zorasDomain,
                        entrance: GrottoEntranceLabels.songOfStormsGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // zoras river
        [GrottoNames.twoScrubsFive]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.zorasRiver,
                        entrance: GrottoEntranceLabels.songOfStormsGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.genericGrottoNine]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.zorasRiver,
                        entrance: GrottoEntranceLabels.openGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [GrottoNames.fairyFountainFive]: {
            type: AreaTypes.grotto,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.entrance]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: OverworldNames.zorasRiver,
                        entrance: GrottoEntranceLabels.boulderGrotto
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        }
    }
};
