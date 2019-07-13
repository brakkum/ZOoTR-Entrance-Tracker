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
        "entrances": {
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.Market]: {
                "type": EntranceTypes.Overworld
            },
            [Houses.GuardHutPoeCollector]: {
                "type": EntranceTypes.House
            }
        }
    },
    [OverworldAreas.DeathMountainCrater]: {
        "colors": [
            "#633c13",
            "#90201e"
        ],
        "entrances": {
            [OverworldAreas.DeathMountainTrail]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.GoronCity]: {
                "type": EntranceTypes.Overworld
            },
            [Grottos.BoulderNearDeathMountainTrail]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto
            },
            [Grottos.BoulderNearGoronCity]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.ThreeScrubs
            },
            [Houses.GreatFairyFountain]: {
                "type": EntranceTypes.House
            },
            [Dungeons.FireTemple]: {
                "type": EntranceTypes.Dungeon
            }
        }
    },
    [OverworldAreas.DeathMountainTrail]: {
        "colors": [
            "#a07136",
            "#916249"
        ],
        "entrances": {
            [OverworldAreas.KakarikoVillage]: {
                "type": EntranceTypes.Overworld
            },
            [Dungeons.DodongosCavern]: {
                "type": EntranceTypes.Dungeon
            },
            [OverworldAreas.GoronCity]: {
                "type": EntranceTypes.Overworld
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto
            },
            [Grottos.CowGrotto]: {
                "type": EntranceTypes.Grotto
            },
            [Houses.GreatFairyFountain]: {
                "type": EntranceTypes.House
            },
            [OverworldAreas.DeathMountainCrater]: {
                "type": EntranceTypes.Overworld
            },
            [Entrances.KaeporaGaebora]: {
                "type": EntranceTypes.KaeporaGaebora
            }
        }
    },
    [OverworldAreas.DesertColossus]: {
        "colors": [
            "#b79f60",
            "#c1ad96"
        ],
        "entrances": {
            [Grottos.Boulder]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.TwoScrubs
            },
            [Houses.GreatFairyFountain]: {
                "type": EntranceTypes.House
            },
            [Dungeons.SpiritTemple]: {
                "type": EntranceTypes.Dungeon
            },
            [OverworldAreas.HauntedWasteland]: {
                "type": EntranceTypes.Overworld
            }
        }
    },
    [OverworldAreas.GerudosFortress]: {
        "colors": [
            "#947d5a",
            "#cbb186"
        ],
        "entrances": {
            [Dungeons.GerudoTrainingGrounds]: {
                "type": EntranceTypes.Dungeon
            },
            [OverworldAreas.GerudoValley]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.HauntedWasteland]: {
                "type": EntranceTypes.Overworld
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.FairyFountain
            }
        }
    },
    [OverworldAreas.GerudoValley]: {
        "colors": [
            "#946333",
            "#cbc3ae"
        ],
        "entrances": {
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.GerudosFortress]: {
                "type": EntranceTypes.Overworld
            },
            [Grottos.BoulderOnLedge]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.DivingRupeeGrotto
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.TwoScrubs
            },
            [Houses.BossesHut]: {
                "type": EntranceTypes.House
            }
        }
    },
    [OverworldAreas.GoronCity]: {
        "colors": [
            "#c09557",
            "#c07b50"
        ],
        "entrances": {
            [OverworldAreas.DeathMountainTrail]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.DeathMountainCrater]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.LostWoods]: {
                "type": EntranceTypes.Overworld
            },
            [Houses.Shop]: {
                "type": EntranceTypes.House
            },
            [Grottos.OpenGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.ThreeScrubs
            }
        }
    },
    [OverworldAreas.Graveyard]: {
        "colors": [
            "#6f8367",
            "#836b68",
            "#968299"
        ],
        "entrances": {
            [OverworldAreas.KakarikoVillage]: {
                "type": EntranceTypes.Overworld,
            },
            [Dungeons.ShadowTemple]: {
                "type": EntranceTypes.Dungeon
            },
            [Houses.DampesHut]: {
                "type": EntranceTypes.House,
                "display": Houses.House
            },
            [Grottos.RoyalGrave]: {
                "type": EntranceTypes.Grotto
            },
            [Grottos.ShieldGrave]: {
                "type": EntranceTypes.Grotto
            },
            [Grottos.RedeadGrave]: {
                "type": EntranceTypes.Grotto
            },
            [Grottos.DampesGrave]: {
                "type": EntranceTypes.Grotto
            }
        }
    },
    [OverworldAreas.HauntedWasteland]: {
        "colors": [
            "#d0b682",
            "#d0b993"
        ],
        "entrances": {
            [OverworldAreas.GerudosFortress]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.DesertColossus]: {
                "type": EntranceTypes.Overworld
            }
        }
    },
    [OverworldAreas.HyruleGanonsCastle]: {
        "colors": [
            "#a7a4e1",
            "#e9ecee",
            "#964145"
        ],
        "entrances": {
            [Houses.ChildGreatFairy]: {
                "type": EntranceTypes.House,
                "display": Houses.GreatFairyFountain
            },
            [Houses.AdultGreatFairy]: {
                "type": EntranceTypes.House,
                "display": Houses.GreatFairyFountain
            },
            [OverworldAreas.Market]: {
                "type": EntranceTypes.Overworld
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.SkulltulaGrotto
            }
        }
    },
    [OverworldAreas.HyruleField]: {
        "colors": [
            "#7cab61",
            "#c9bc80"
        ],
        "entrances": {
            [OverworldAreas.LostWoodsBridge]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.ZorasRiver]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.KakarikoVillage]: {
                "type": EntranceTypes.Overworld
            },
            [Grottos.TreeNearKakarikoBombGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.SkulltulaGrotto
            },
            [OverworldAreas.CastleTownEntrance]: {
                "type": EntranceTypes.Overworld
            },
            [Grottos.BoulderNearCastleTown]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto
            },
            [OverworldAreas.LonLonRanch]: {
                "type": EntranceTypes.Overworld
            },
            [Grottos.BoulderAcrossRiver]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.FairyFountain
            },
            [Grottos.TreeNearLonLonBombGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.DivingGrotto
            },
            [Grottos.BoulderNearGerudoValley]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.SkulltulaGrotto
            },
            [OverworldAreas.GerudoValley]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.LakeHylia]: {
                "type": EntranceTypes.Overworld
            },
            [Grottos.NearLakeHyliaBombGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.OneScrub
            },
            [Grottos.OpenGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto
            },
            [Grottos.BoulderInTrees]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto
            }
        }
    },
    [OverworldAreas.KakarikoVillage]: {
        "colors": [
            "#a5aa9c",
            "#aa9191"
        ],
        "entrances": {
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.DeathMountainTrail]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.Graveyard]: {
                "type": EntranceTypes.Overworld
            },
            [Dungeons.BottomOfTheWell]: {
                "type": EntranceTypes.Dungeon
            },
            [Houses.SkulltulaHouse]: {
                "type": EntranceTypes.House
            },
            [Houses.Windmill]: {
                "type": EntranceTypes.House
            },
            [Houses.ImpasHouseFront]: {
                "type": EntranceTypes.House,
                "display": Houses.House
            },
            [Houses.ImpasHouseCow]: {
                "type": EntranceTypes.House
            },
            [Houses.BottomHouse]: {
                "type": EntranceTypes.House,
                "display": Houses.House
            },
            [Houses.ShootingGallery]: {
                "type": EntranceTypes.House
            },
            [Houses.Bazaar]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop
            },
            [Houses.GrannysPotionShop]: {
                "type": EntranceTypes.House
            },
            [Grottos.OpenGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto
            },
            [Grottos.BombGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.RedeadGrotto
            }
        }
    },
    [OverworldAreas.KokiriForest]: {
        "colors": [
            "#82b047",
            "#644e42"
        ],
        "entrances": {
            [OverworldAreas.LostWoodsBridge]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.LostWoods]: {
                "type": EntranceTypes.Overworld
            },
            [Dungeons.DekuTree]: {
                "type": EntranceTypes.Dungeon
            },
            [Houses.KnowItAllHouse]: {
                "type": EntranceTypes.House,
                "display": Houses.House
            },
            [Houses.MidosHouse]: {
                "type": EntranceTypes.House,
                "display": Houses.House
            },
            [Houses.LinksHouse]: {
                "type": EntranceTypes.House
            },
            [Houses.SariasHouse]: {
                "type": EntranceTypes.House,
                "display": Houses.House
            },
            [Houses.TwinsHouse]: {
                "type": EntranceTypes.House,
                "display": Houses.House
            },
            [Houses.Shop]: {
                "type": EntranceTypes.House,
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto
            }
        }
    },
    [OverworldAreas.LakeHylia]: {
        "colors": [
            "#888bb0",
            "#8cabb0"
        ],
        "entrances": {
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.ZorasDomain]: {
                "type": EntranceTypes.Overworld
            },
            [Entrances.KaeporaGaebora]: {
                "type": EntranceTypes.KaeporaGaebora
            },
            [Grottos.Grave]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.ThreeScrubs
            },
            [Houses.LakeHyliaLab]: {
                "type": EntranceTypes.House
            },
            [Houses.Fishing]: {
                "type": EntranceTypes.House
            },
            [Dungeons.WaterTemple]: {
                "type": EntranceTypes.Dungeon
            }
        }
    },
    [OverworldAreas.LonLonRanch]: {
        "colors": [
            "#c5aa79",
            "#d0bfb2",
            "#8fc771"
        ],
        "entrances": {
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld
            },
            [Houses.TalonsHouse]: {
                "type": EntranceTypes.House
            },
            [Houses.Stable]: {
                "type": EntranceTypes.House
            },
            [Houses.LonLonTower]: {
                "type": EntranceTypes.House
            },
            [Grottos.OpenGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.ThreeScrubs
            }
        }
    },
    [OverworldAreas.LostWoods]: {
        "colors": [
            "#51852b",
            "#a4af32"
        ],
        "entrances": {
            [OverworldAreas.KokiriForest]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.GoronCity]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.SacredForestMeadow]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.ZorasRiver]: {
                "type": EntranceTypes.Overworld
            },
            [Grottos.ForestStage]: {
                "type": EntranceTypes.Grotto
            },
            [Grottos.BoulderNearGoronCity]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto
            },
            [Grottos.BoulderNearSacredForestMeadow]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.TwoScrubs
            }
        }
    },
    [OverworldAreas.LostWoodsBridge]: {
        "colors": [
            "#51852b",
            "#796b4f",
            "#a4af32"
        ],
        "entrances": {
            [OverworldAreas.KokiriForest]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld
            }
        }
    },
    [OverworldAreas.Market]: {
        "colors": [
            "#9b9e93",
            "#736c79",
            "#af9084"
        ],
        "entrances": {
            [OverworldAreas.CastleTownEntrance]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.TempleOfTimeEntrance]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.HyruleGanonsCastle]: {
                "type": EntranceTypes.Overworld
            },
            [Houses.Bazaar]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop
            },
            [Houses.PotionShop]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop
            },
            [Houses.ShootingGallery]: {
                "type": EntranceTypes.House
            },
            [Houses.BombchuBowling]: {
                "type": EntranceTypes.House
            },
            [Houses.BombchuShop]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop
            },
            [Houses.TreasureChestGame]: {
                "type": EntranceTypes.House
            },
            [Houses.BackAlleyHouse]: {
                "type": EntranceTypes.House,
                "display": Houses.House
            },
            [Houses.MaskShop]: {
                "type": EntranceTypes.House
            }
        }
    },
    [OverworldAreas.SacredForestMeadow]: {
        "colors": [
            "#72c041",
            "#9caf7c"
        ],
        "entrances": {
            [OverworldAreas.LostWoods]: {
                "type": EntranceTypes.Overworld
            },
            [Dungeons.ForestTemple]: {
                "type": EntranceTypes.Dungeon
            },
            [Grottos.BombGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.WolfosGrotto
            },
            [Grottos.OpenGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.FairyFountain
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.TwoScrubs
            }
        }
    },
    [OverworldAreas.TempleOfTimeEntrance]: {
        "colors": [
            "#74856e",
            "#83766a"
        ],
        "entrances": {
            [OverworldAreas.Market]: {
                "type": EntranceTypes.Overworld
            },
            [Houses.TempleOfTime]: {
                "type": EntranceTypes.House
            }
        }
    },
    [OverworldAreas.ZorasDomain]: {
        "colors": [
            "#658285",
            "#cfccec"
        ],
        "entrances": {
            [OverworldAreas.ZorasRiver]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.ZorasFountain]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.LakeHylia]: {
                "type": EntranceTypes.Overworld
            },
            [Houses.Shop]: {
                "type": EntranceTypes.House,
                "display": Houses.Shop
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.FairyFountain
            }
        }
    },
    [OverworldAreas.ZorasFountain]: {
        "colors": [
            "#949cc6",
            "#8e8872"
        ],
        "entrances": {
            [OverworldAreas.ZorasDomain]: {
                "type": EntranceTypes.Overworld
            },
            [Dungeons.JabuJabu]: {
                "type": EntranceTypes.Dungeon
            },
            [Dungeons.IceCavern]: {
                "type": EntranceTypes.Dungeon
            },
            [Houses.GreatFairyFountain]: {
                "type": EntranceTypes.House
            }
        }
    },
    [OverworldAreas.ZorasRiver]: {
        "colors": [
            "#9996c6",
            "#5c8e56"
        ],
        "entrances": {
            [OverworldAreas.HyruleField]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.ZorasDomain]: {
                "type": EntranceTypes.Overworld
            },
            [OverworldAreas.LostWoods]: {
                "type": EntranceTypes.Overworld
            },
            [Grottos.StormsGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.TwoScrubs
            },
            [Grottos.OpenGrotto]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.Grotto
            },
            [Grottos.Boulder]: {
                "type": EntranceTypes.Grotto,
                "display": Grottos.FairyFountain
            }
        }
    },
};
