import { OverworldEntranceLabels } from "../Names/OverworldEntranceLabels";
import { DungeonEntranceLabels } from "../Names/DungeonEntranceLabels";
import { GrottoEntranceLabels } from "../Names/GrottoEntranceLabels";
import { HouseEntranceLabels } from "../Names/HouseEntranceLabels";
import { OverworldNames } from "../Names/OverworldNames";
import { KaeporaNames } from "../Names/KaeporaNames";
import { DungeonNames } from "../Names/DungeonNames";
import { GrottoNames } from "../Names/GrottoNames";
import { AreaTypes } from "../Types/AreaTypes";
import { HouseNames } from "../Names/HouseNames";

export const OverworldAreas = {
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
    //             leadsTo: null
    //         }
    //     }
    // },
    displayName: "Overworld",
    areas: {
        [OverworldNames.castleTownEntrance]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.hyruleField]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: OverworldNames.castleTownEntrance
                    },
                    leadsTo: null
                },
                [OverworldNames.market]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.market,
                        entrance: OverworldNames.castleTownEntrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.guardHutPoeShop]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.guardHutPoeShop,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.deathMountainCrater]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.deathMountainTrail]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainTrail,
                        entrance: OverworldNames.deathMountainCrater
                    },
                    leadsTo: null
                },
                [OverworldNames.goronCity]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.goronCity,
                        entrance: OverworldNames.deathMountainCrater
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.boulderNearDeathMountainTrail]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.genericGrottoOne,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.boulderNearGoronCity]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.threeScrubsOne,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.greatFairysFountain]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.greatFairysFountainOne,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [DungeonNames.fireTemple]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: DungeonNames.fireTemple,
                        entrance: DungeonEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.deathMountainTrail]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.kakarikoVillage]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: OverworldNames.deathMountainTrail
                    },
                    leadsTo: null
                },
                [DungeonNames.dodongosCavern]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: DungeonNames.dodongosCavern,
                        entrance: DungeonEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [OverworldNames.goronCity]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.goronCity,
                        entrance: OverworldNames.deathMountainTrail
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.songOfStormsGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.genericGrottoTwo,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.cowGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.cowGrotto,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.greatFairysFountain]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.greatFairysFountainTwo,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [OverworldNames.deathMountainCrater]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainCrater,
                        entrance: OverworldNames.deathMountainTrail
                    },
                    leadsTo: null
                },
                [KaeporaNames.kaeporaGaebora]: {
                    type: AreaTypes.kaeporaGaebora,
                    isOneWay: true,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: HouseEntranceLabels.impasHouseRoof
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.desertColossus]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [GrottoEntranceLabels.boulderGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.twoScrubsOne,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.greatFairysFountain]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.greatFairysFountainThree,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [DungeonNames.spiritTemple]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: DungeonNames.spiritTemple,
                        entrance: DungeonEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [OverworldNames.hauntedWasteland]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.hauntedWasteland,
                        entrance: OverworldNames.desertColossus
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.gerudoFortress]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [DungeonNames.gerudoTrainingGrounds]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: DungeonNames.gerudoTrainingGrounds,
                        entrance: DungeonEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [OverworldNames.gerudoValley]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.gerudoValley,
                        entrance: OverworldNames.gerudoFortress
                    },
                    leadsTo: null
                },
                [OverworldNames.hauntedWasteland]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.hauntedWasteland,
                        entrance: OverworldNames.gerudoFortress
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.songOfStormsGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.fairyFountainOne,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.gerudoValley]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.hyruleField]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: OverworldNames.gerudoValley
                    },
                    leadsTo: null
                },
                [OverworldNames.gerudoFortress]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.gerudoFortress,
                        entrance: OverworldNames.gerudoValley
                    },
                    leadsTo: null
                },
                [OverworldNames.lakeHylia]: {
                    type: AreaTypes.overworld,
                    isOneWay: true,
                    hideUnlessDecoupled: true,
                    leadsToVanilla: {
                        area: OverworldNames.lakeHylia,
                        entrance: OverworldNames.gerudoValley
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.boulderOnLedge]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.divingRupeeGrotto,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.songOfStormsGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.twoScrubsTwo,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.carpenterTent]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.carpenterTent,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.goronCity]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.deathMountainTrail]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainTrail,
                        entrance: OverworldNames.goronCity
                    },
                    leadsTo: null
                },
                [OverworldNames.deathMountainCrater]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainCrater,
                        entrance: OverworldNames.goronCity
                    },
                    leadsTo: null
                },
                [OverworldNames.lostWoods]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.lostWoods,
                        entrance: OverworldNames.goronCity
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.goronShop]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.goronShop,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.openGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.threeScrubsTwo,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.graveyard]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.kakarikoVillage]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: OverworldNames.graveyard
                    },
                    leadsTo: null,
                },
                [DungeonNames.shadowTemple]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: DungeonNames.shadowTemple,
                        entrance: DungeonEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.dampesHut]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.dampesHut,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.composersGrave]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.composersGrave,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.shieldGrave]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.shieldGrave,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.redeadGrave]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.redeadGrave,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.dampesGrave]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.dampesGrave,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.hauntedWasteland]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.gerudoFortress]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.gerudoFortress,
                        entrance: OverworldNames.hauntedWasteland
                    },
                    leadsTo: null
                },
                [OverworldNames.desertColossus]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.desertColossus,
                        entrance: OverworldNames.hauntedWasteland
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.castleGrounds]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.childGreatFairysFountain]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.greatFairysFountainFour,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.adultGreatFairysFountain]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.greatFairysFountainFive,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [OverworldNames.market]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.market,
                        entrance: OverworldNames.castleGrounds
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.songOfStormsGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.skulltulaGossipStoneGrotto,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.hyruleField]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldEntranceLabels.lostWoodsBridgeFromHyrule]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.lostWoods,
                        entrance: OverworldEntranceLabels.lostWoodsBridgeFromHyrule
                    },
                    leadsTo: null
                },
                [OverworldNames.zorasRiver]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.zorasRiver,
                        entrance: OverworldNames.hyruleField
                    },
                    leadsTo: null
                },
                [OverworldNames.kakarikoVillage]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: OverworldNames.hyruleField
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.treeNearKakarikoGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.skulltulaGrotto,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [OverworldNames.castleTownEntrance]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.castleTownEntrance,
                        entrance: OverworldNames.hyruleField
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.boulderNearCastleTown]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.genericGrottoThree,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [OverworldNames.lonLonRanch]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.lonLonRanch,
                        entrance: OverworldNames.hyruleField
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.boulderAcrossRiver]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.fairyFountainTwo,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.tektiteGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.tektiteGrotto,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.boulderNearGerudoValley]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.skulltulaGossipStoneCowGrotto,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [OverworldNames.gerudoValley]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.gerudoValley,
                        entrance: OverworldNames.hyruleField
                    },
                    leadsTo: null
                },
                [OverworldNames.lakeHylia]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.lakeHylia,
                        entrance: OverworldNames.hyruleField
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.nearLakeInsideFenceGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.oneScrub,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.openGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.genericGrottoFour,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.boulderInTrees]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.genericGrottoFive,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.kakarikoVillage]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.hyruleField]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: OverworldNames.kakarikoVillage
                    },
                    leadsTo: null
                },
                [OverworldNames.deathMountainTrail]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainTrail,
                        entrance: OverworldNames.kakarikoVillage
                    },
                    leadsTo: null
                },
                [OverworldNames.graveyard]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.graveyard,
                        entrance: OverworldNames.kakarikoVillage
                    },
                    leadsTo: null
                },
                [DungeonNames.bottomOfTheWell]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: DungeonNames.bottomOfTheWell,
                        entrance: DungeonEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.skulltulaHouse]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.skulltulaHouse,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.windmill]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.windmill,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.impasHouseFront]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.impasHouse,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.impasHouseCow]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.impasHouse,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.bottomHouse]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.houseWithTalon,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.adultShootingGallery]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.adultShootingGallery,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.bazaar]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.bazaarOne,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.potionShopBack]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.potionShopWithBack,
                        entrance: HouseEntranceLabels.backEntrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.potionShopFront]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.potionShopWithBack,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.grannysPotionShop]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.grannysPotionShop,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.openGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.genericGrottoSix,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.bombGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.redeadGrotto,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.kokiriForest]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldEntranceLabels.lostWoodsBridgeFromKokiri]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.lostWoods,
                        entrance: OverworldEntranceLabels.lostWoodsBridgeFromKokiri
                    },
                    leadsTo: null
                },
                [OverworldNames.lostWoods]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.lostWoods,
                        entrance: OverworldNames.kokiriForest
                    },
                    leadsTo: null
                },
                [DungeonNames.dekuTree]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: DungeonNames.dekuTree,
                        entrance: DungeonEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.knowItAllHouse]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.knowItAllHouse,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.midosHouse]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.midosHouse,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.linksHouse]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.linksHouse,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.sariasHouse]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.sariasHouse,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.twinsHouse]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.twinsHouse,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.kokiriShop]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.kokiriShop,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.songOfStormsGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.genericGrottoSeven,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.lakeHylia]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.hyruleField]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: OverworldNames.lakeHylia
                    },
                    leadsTo: null
                },
                [OverworldNames.zorasDomain]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.zorasDomain,
                        entrance: OverworldNames.lakeHylia
                    },
                    leadsTo: null
                },
                [KaeporaNames.kaeporaGaebora]: {
                    type: AreaTypes.kaeporaGaebora,
                    isOneWay: true,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: OverworldNames.castleTownEntrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.grave]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.threeScrubsThree,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.lakesideLaboratory]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.lakesideLaboratory,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.fishing]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.fishing,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [DungeonNames.waterTemple]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: DungeonNames.waterTemple,
                        entrance: DungeonEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.lonLonRanch]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.hyruleField]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: OverworldNames.lonLonRanch
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.talonsHouse]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.talonsHouse,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.stable]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.stable,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.lonLonTower]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.lonLonTower,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.openGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.threeScrubsFour,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.lostWoods]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.kokiriForest]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.kokiriForest,
                        entrance: OverworldNames.lostWoods
                    },
                    leadsTo: null
                },
                [OverworldNames.goronCity]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.goronCity,
                        entrance: OverworldNames.lostWoods
                    },
                    leadsTo: null
                },
                [OverworldNames.sacredForestMeadow]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.sacredForestMeadow,
                        entrance: OverworldNames.lostWoods
                    },
                    leadsTo: null
                },
                [OverworldNames.zorasRiver]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.zorasRiver,
                        entrance: OverworldNames.lostWoods
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.forestStage]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.forestStage,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.boulderNearGoronCity]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.genericGrottoEight,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.boulderNearSacredForestMeadow]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.twoScrubsThree,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                // bridge
                [OverworldEntranceLabels.kokiriForestFromBridge]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.kokiriForest,
                        entrance: OverworldEntranceLabels.kokiriForestFromBridge
                    },
                    leadsTo: null
                },
                [OverworldEntranceLabels.hyruleFieldFromBridge]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: OverworldEntranceLabels.hyruleFieldFromBridge
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.market]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.castleTownEntrance]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.castleTownEntrance,
                        entrance: OverworldNames.market
                    },
                    leadsTo: null
                },
                [OverworldNames.templeOfTimeEntrance]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.templeOfTimeEntrance,
                        entrance: OverworldNames.market
                    },
                    leadsTo: null
                },
                [OverworldNames.castleGrounds]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.castleGrounds,
                        entrance: OverworldNames.market
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.bazaar]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.bazaarTwo,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.potionShop]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.potionShop,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.childShootingGallery]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.childShootingGallery,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.bombchuBowling]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.bombchuBowling,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.bombchuShop]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.bombchuShop,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.treasureBoxShop]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.treasureBoxShop,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.backAlleyHouse]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.houseOne,
                        entrance: HouseEntranceLabels.door
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.maskShop]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.maskShop,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.sacredForestMeadow]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.lostWoods]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.lostWoods,
                        entrance: OverworldNames.sacredForestMeadow
                    },
                    leadsTo: null
                },
                [DungeonNames.forestTemple]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: DungeonNames.forestTemple,
                        entrance: DungeonEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.bombGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.wolfosGrotto,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.openGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.fairyFountainThree,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.songOfStormsGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.twoScrubsFour,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.templeOfTimeEntrance]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.market]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.market,
                        entrance: OverworldNames.templeOfTimeEntrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.templeOfTime]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.templeOfTime,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.zorasDomain]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.zorasRiver]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.zorasRiver,
                        entrance: OverworldNames.zorasDomain
                    },
                    leadsTo: null
                },
                [OverworldNames.zorasFountain]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.zorasFountain,
                        entrance: OverworldNames.zorasDomain
                    },
                    leadsTo: null
                },
                [OverworldNames.lakeHylia]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.lakeHylia,
                        entrance: OverworldNames.zorasDomain
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.shop]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.zoraShop,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.songOfStormsGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.fairyFountainFour,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.zorasFountain]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.zorasDomain]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.zorasDomain,
                        entrance: OverworldNames.zorasFountain
                    },
                    leadsTo: null
                },
                [DungeonNames.jabuJabusBelly]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: DungeonNames.jabuJabusBelly,
                        entrance: DungeonEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [DungeonNames.iceCavern]: {
                    type: AreaTypes.dungeon,
                    leadsToVanilla: {
                        area: DungeonNames.iceCavern,
                        entrance: DungeonEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [HouseEntranceLabels.greatFairysFountain]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: HouseNames.greatFairysFountainSix,
                        entrance: HouseEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        },
        [OverworldNames.zorasRiver]: {
            type: AreaTypes.overworld,
            isExpanded: true,
            entrances: {
                [OverworldNames.hyruleField]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.hyruleField,
                        entrance: OverworldNames.zorasRiver
                    },
                    leadsTo: null
                },
                [OverworldNames.zorasDomain]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.zorasDomain,
                        entrance: OverworldNames.zorasRiver
                    },
                    leadsTo: null
                },
                [OverworldNames.lostWoods]: {
                    type: AreaTypes.overworld,
                    leadsToVanilla: {
                        area: OverworldNames.lostWoods,
                        entrance: OverworldNames.zorasRiver
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.songOfStormsGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.twoScrubsFive,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.openGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.genericGrottoNine,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                },
                [GrottoEntranceLabels.boulderGrotto]: {
                    type: AreaTypes.grotto,
                    leadsToVanilla: {
                        area: GrottoNames.fairyFountainFive,
                        entrance: GrottoEntranceLabels.entrance
                    },
                    leadsTo: null
                }
            }
        }
    }
};
