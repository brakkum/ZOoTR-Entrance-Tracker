import { HouseEntranceLabels } from "../Names/HouseEntranceLabels";
import { OverworldNames } from "../Names/OverworldNames";
import { HouseNames } from "../Names/HouseNames";
import { AreaTypes } from "../Types/AreaTypes";

export const HouseAreas = {
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
    // castle town entrance
    displayName: "Houses",
    areas: {
        [HouseNames.guardHutPoeShop]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.castleTownEntrance,
                        entrance: HouseEntranceLabels.guardHutPoeShop
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // death mountain crater
        [HouseNames.greatFairysFountainOne]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainCrater,
                        entrance: HouseEntranceLabels.greatFairysFountain
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // death mountain trail
        [HouseNames.greatFairysFountainTwo]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.deathMountainTrail,
                        entrance: HouseEntranceLabels.greatFairysFountain
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // desert colossus
        [HouseNames.greatFairysFountainThree]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.desertColossus,
                        entrance: HouseEntranceLabels.greatFairysFountain
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // gerudo valley
        [HouseNames.carpenterTent]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.gerudoValley,
                        entrance: HouseEntranceLabels.carpenterTent
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // goron city
        [HouseNames.goronShop]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.goronCity,
                        entrance: HouseEntranceLabels.goronShop
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // graveyard
        [HouseNames.dampesHut]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.graveyard,
                        entrance: HouseEntranceLabels.dampesHut
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // castle grounds
        [HouseNames.greatFairysFountainFour]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.castleGrounds,
                        entrance: HouseEntranceLabels.childGreatFairysFountain
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.greatFairysFountainFive]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.castleGrounds,
                        entrance: HouseEntranceLabels.adultGreatFairysFountain
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // kakariko village
        [HouseNames.skulltulaHouse]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: HouseEntranceLabels.skulltulaHouse
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.windmill]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: HouseEntranceLabels.windmill
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.impasHouse]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: HouseEntranceLabels.impasHouseFront
                    },
                    leadsTo: null,
                    comesFrom: []
                },
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: HouseEntranceLabels.impasHouseCow
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.houseWithTalon]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: HouseEntranceLabels.bottomHouse
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.adultShootingGallery]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: HouseEntranceLabels.adultShootingGallery
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.bazaarOne]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: HouseEntranceLabels.bazaar
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.potionShopWithBack]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: HouseEntranceLabels.potionShopFront
                    },
                    leadsTo: null,
                    comesFrom: []
                },
                [HouseEntranceLabels.backEntrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: HouseEntranceLabels.potionShopBack
                    },
                    leadsTo: null,
                    comesFrom: []
                },
            }
        },
        [HouseNames.grannysPotionShop]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: HouseEntranceLabels.grannysPotionShop
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // kokiri forest
        [HouseNames.knowItAllHouse]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kokiriForest,
                        entrance: HouseEntranceLabels.knowItAllHouse
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.midosHouse]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kokiriForest,
                        entrance: HouseEntranceLabels.midosHouse
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.linksHouse]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kokiriForest,
                        entrance: HouseEntranceLabels.linksHouse
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.sariasHouse]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kokiriForest,
                        entrance: HouseEntranceLabels.sariasHouse
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.twinsHouse]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kokiriForest,
                        entrance: HouseEntranceLabels.twinsHouse
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.kokiriShop]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kokiriForest,
                        entrance: HouseEntranceLabels.kokiriShop
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // lake hylia
        [HouseNames.lakesideLaboratory]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.lakeHylia,
                        entrance: HouseNames.lakesideLaboratory
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.fishing]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.lakeHylia,
                        entrance: HouseEntranceLabels.fishing
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // lon lon ranch
        [HouseNames.talonsHouse]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.lonLonRanch,
                        entrance: HouseEntranceLabels.talonsHouse
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.stable]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.lonLonRanch,
                        entrance: HouseEntranceLabels.stable
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.lonLonTower]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.lonLonRanch,
                        entrance: HouseEntranceLabels.lonLonTower
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // market
        [HouseNames.bazaarTwo]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.market,
                        entrance: HouseEntranceLabels.bazaar
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.potionShop]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.market,
                        entrance: HouseEntranceLabels.potionShop
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.childShootingGallery]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.market,
                        entrance: HouseEntranceLabels.childShootingGallery
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.bombchuBowling]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.market,
                        entrance: HouseEntranceLabels.bombchuBowling
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.bombchuShop]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.market,
                        entrance: HouseEntranceLabels.bombchuShop
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.treasureBoxShop]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.market,
                        entrance: HouseEntranceLabels.treasureBoxShop
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.houseOne]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.door]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.market,
                        entrance: HouseEntranceLabels.backAlleyHouse
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        [HouseNames.maskShop]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.market,
                        entrance: HouseEntranceLabels.maskShop
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // temple of time entrance
        [HouseNames.templeOfTime]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.templeOfTimeEntrance,
                        entrance: HouseEntranceLabels.templeOfTime
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // zoras domain
        [HouseNames.zoraShop]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.zorasDomain,
                        entrance: HouseEntranceLabels.zoraShop
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        },
        // zoras fountain
        [HouseNames.greatFairysFountainSix]: {
            type: AreaTypes.house,
            isExpanded: true,
            entrances: {
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.zorasFountain,
                        entrance: HouseEntranceLabels.greatFairysFountain
                    },
                    leadsTo: null,
                    comesFrom: []
                }
            }
        }
    }
};
