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
    //             leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
                },
                [HouseEntranceLabels.entrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: HouseEntranceLabels.impasHouseCow
                    },
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
                },
                [HouseEntranceLabels.backEntrance]: {
                    type: AreaTypes.house,
                    leadsToVanilla: {
                        area: OverworldNames.kakarikoVillage,
                        entrance: HouseEntranceLabels.potionShopBack
                    },
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
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
                    leadsTo: null
                }
            }
        }
    }
};
