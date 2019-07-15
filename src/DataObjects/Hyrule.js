import OverworldAreas from "./OverworldAreas";
import EntranceTypes from "./EntranceTypes";
import Entrances from "./Entrances";
import Dungeons from "./Dungeons";
import Grottos from "./Grottos";
import Houses from "./Houses";

export default {
    [OverworldAreas.CastleTownEntrance]: {
        "colors": [
            "#dddddd",
            "#cdcdcd"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.Market]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Houses.GuardHutPoeCollector]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.DeathMountainCrater]: {
        "colors": [
            "#633c13",
            "#90201e"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.DeathMountainTrail]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.GoronCity]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos.BoulderNearDeathMountainTrail]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos.BoulderNearGoronCity]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.ThreeScrubs,
                "clear": false,
                "interior": null
            },
            [Houses.GreatFairyFountain]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Dungeons.FireTemple]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.DeathMountainTrail]: {
        "colors": [
            "#a07136",
            "#916249"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.KakarikoVillage]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Dungeons.DodongosCavern]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [OverworldAreas.GoronCity]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos.CowGrotto]: {
                "type": EntranceTypes.Grotto,
                "clear": false,
                "interior": null
            },
            [Houses.GreatFairyFountain]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [OverworldAreas.DeathMountainCrater]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Entrances.KaeporaGaebora]: {
                "type": EntranceTypes.KaeporaGaebora,
                "leadsTo": null
            }
        }
    },
    [OverworldAreas.DesertColossus]: {
        "colors": [
            "#b79f60",
            "#c1ad96"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [Grottos.Boulder]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.TwoScrubs,
                "clear": false,
                "interior": null
            },
            [Houses.GreatFairyFountain]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Dungeons.SpiritTemple]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [OverworldAreas.HauntedWasteland]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            }
        }
    },
    [OverworldAreas.GerudosFortress]: {
        "colors": [
            "#947d5a",
            "#cbb186"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [Dungeons.GerudoTrainingGrounds]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [OverworldAreas.GerudoValley]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.HauntedWasteland]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.FairyFountain,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.GerudoValley]: {
        "colors": [
            "#946333",
            "#cbc3ae"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.GerudosFortress]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos.BoulderOnLedge]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.DivingRupeeGrotto,
                "clear": false,
                "interior": null
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.TwoScrubs,
                "clear": false,
                "interior": null
            },
            [Houses.BossesHut]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.GoronCity]: {
        "colors": [
            "#c09557",
            "#c07b50"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.DeathMountainTrail]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.DeathMountainCrater]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.LostWoods]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Houses.Shop]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Grottos.OpenGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.ThreeScrubs,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.Graveyard]: {
        "colors": [
            "#6f8367",
            "#836b68",
            "#968299"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.KakarikoVillage]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null,
            },
            [Dungeons.ShadowTemple]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [Houses.DampesHut]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Grottos.RoyalGrave]: {
                "type": EntranceTypes.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos.ShieldGrave]: {
                "type": EntranceTypes.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos.RedeadGrave]: {
                "type": EntranceTypes.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos.DampesGrave]: {
                "type": EntranceTypes.Grotto,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.HauntedWasteland]: {
        "colors": [
            "#d0b682",
            "#6e6d82"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.GerudosFortress]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.DesertColossus]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            }
        }
    },
    [OverworldAreas.HyruleGanonsCastle]: {
        "colors": [
            "#a7a4e1",
            "#e9ecee",
            "#964145"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [Houses.ChildGreatFairy]: {
                "type": EntranceTypes.House,
                "display": Houses.GreatFairyFountain,
                "clear": false,
                "interior": null
            },
            [Houses.AdultGreatFairy]: {
                "type": EntranceTypes.House,
                "display": Houses.GreatFairyFountain,
                "clear": false,
                "interior": null
            },
            [OverworldAreas.Market]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.SkulltulaGrotto,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.HyruleField]: {
        "colors": [
            "#7cab61",
            "#c9bc80"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.LostWoodsBridge]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.ZorasRiver]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.KakarikoVillage]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos.TreeNearKakarikoBombGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.SkulltulaGrotto,
                "clear": false,
                "interior": null
            },
            [OverworldAreas.CastleTownEntrance]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos.BoulderNearCastleTown]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [OverworldAreas.LonLonRanch]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos.BoulderAcrossRiver]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.FairyFountain,
                "clear": false,
                "interior": null
            },
            [Grottos.TreeNearLonLonBombGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.DivingGrotto,
                "clear": false,
                "interior": null
            },
            [Grottos.BoulderNearGerudoValley]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.SkulltulaGrotto,
                "clear": false,
                "interior": null
            },
            [OverworldAreas.GerudoValley]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.LakeHylia]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos.NearLakeHyliaBombGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.OneScrub,
                "clear": false,
                "interior": null
            },
            [Grottos.OpenGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos.BoulderInTrees]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.KakarikoVillage]: {
        "colors": [
            "#a5aa9c",
            "#aa9191"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.DeathMountainTrail]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.Graveyard]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Dungeons.BottomOfTheWell]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [Houses.SkulltulaHouse]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.Windmill]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.ImpasHouseFront]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses.ImpasHouseCow]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.BottomHouse]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses.ShootingGallery]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.Bazaar]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop,
                "clear": false,
                "interior": null
            },
            [Houses.GrannysPotionShop]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Grottos.OpenGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos.BombGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.RedeadGrotto,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.KokiriForest]: {
        "colors": [
            "#82b047",
            "#644e42"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.LostWoodsBridge]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.LostWoods]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Dungeons.DekuTree]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [Houses.KnowItAllHouse]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses.MidosHouse]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses.LinksHouse]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.SariasHouse]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses.TwinsHouse]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses.Shop]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.LakeHylia]: {
        "colors": [
            "#888bb0",
            "#8cabb0"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.ZorasDomain]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Entrances.KaeporaGaebora]: {
                "type": EntranceTypes.KaeporaGaebora,
                "leadsTo": null
            },
            [Grottos.Grave]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.ThreeScrubs,
                "clear": false,
                "interior": null
            },
            [Houses.LakeHyliaLab]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.Fishing]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Dungeons.WaterTemple]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.LonLonRanch]: {
        "colors": [
            "#c5aa79",
            "#d0bfb2",
            "#8fc771"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Houses.TalonsHouse]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.Stable]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.LonLonTower]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Grottos.OpenGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.ThreeScrubs,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.LostWoods]: {
        "colors": [
            "#51852b",
            "#a4af32"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.KokiriForest]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.GoronCity]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.SacredForestMeadow]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.ZorasRiver]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos.ForestStage]: {
                "type": EntranceTypes.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos.BoulderNearGoronCity]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos.BoulderNearSacredForestMeadow]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.TwoScrubs,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.LostWoodsBridge]: {
        "colors": [
            "#51852b",
            "#796b4f",
            "#a4af32"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.KokiriForest]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            }
        }
    },
    [OverworldAreas.Market]: {
        "colors": [
            "#9b9e93",
            "#736c79",
            "#af9084"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.CastleTownEntrance]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.TempleOfTimeEntrance]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.HyruleGanonsCastle]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Houses.Bazaar]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop,
                "clear": false,
                "interior": null
            },
            [Houses.PotionShop]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop,
                "clear": false,
                "interior": null
            },
            [Houses.ShootingGallery]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.BombchuBowling]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.BombchuShop]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop,
                "clear": false,
                "interior": null
            },
            [Houses.TreasureChestGame]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            },
            [Houses.BackAlleyHouse]: {
                "type": EntranceTypes.House,
                "display": Houses.House,
                "clear": false,
                "interior": null
            },
            [Houses.MaskShop]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.SacredForestMeadow]: {
        "colors": [
            "#72c041",
            "#9caf7c"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.LostWoods]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Dungeons.ForestTemple]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [Grottos.BombGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.WolfosGrotto,
                "clear": false,
                "interior": null
            },
            [Grottos.OpenGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.FairyFountain,
                "clear": false,
                "interior": null
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.TwoScrubs,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.TempleOfTimeEntrance]: {
        "colors": [
            "#74856e",
            "#83766a"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.Market]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Houses.TempleOfTime]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.ZorasDomain]: {
        "colors": [
            "#658285",
            "#cfccec"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.ZorasRiver]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.ZorasFountain]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.LakeHylia]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Houses.Shop]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop,
                "clear": false,
                "interior": null
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.FairyFountain,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.ZorasFountain]: {
        "colors": [
            "#949cc6",
            "#8e8872"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.ZorasDomain]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Dungeons.JabuJabu]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [Dungeons.IceCavern]: {
                "type": EntranceTypes.Dungeon,
                "clear": false,
                "interior": null
            },
            [Houses.GreatFairyFountain]: {
                "type": EntranceTypes.House,
                "clear": false,
                "interior": null
            }
        }
    },
    [OverworldAreas.ZorasRiver]: {
        "colors": [
            "#9996c6",
            "#5c8e56"
        ],
        "isAccessible": false,
        "hasKaeporaLakeHyliaLanding": false,
        "hasKaeporaDeathMountainTrailLanding": false,
        "entrances": {
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.ZorasDomain]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [OverworldAreas.LostWoods]: {
                "type": EntranceTypes.Overworld,
                "leadsTo": null
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.TwoScrubs,
                "clear": false,
                "interior": null
            },
            [Grottos.OpenGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto,
                "clear": false,
                "interior": null
            },
            [Grottos.Boulder]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.FairyFountain,
                "clear": false,
                "interior": null
            }
        }
    },
};
