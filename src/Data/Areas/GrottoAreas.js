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
    //             leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.castleGrounds,
                        entrance: GrottoEntranceLabels.songOfStormsGrotto
                    },
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
                }
            }
        }
    }
};
