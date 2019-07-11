import OverworldAreas from "./OverworldAreas";
import EntranceTypes from "./EntranceTypes";
import Houses from "./Houses";

const Songs = {
    "Minuet of Forest": {
        "name": "Minuet of Forest",
        "color": "#6db863",
        "area": OverworldAreas.SacredForestMeadow,
        "areaType": EntranceTypes.Overworld,
        "collected": false
    },
    "Bolero of Fire": {
        "name": "Bolero of Fire",
        "color": "#eb5d49",
        "area": OverworldAreas.DeathMountainCrater,
        "areaType": EntranceTypes.Overworld,
        "collected": false
    },
    "Serenade of Water": {
        "name": "Serenade of Water",
        "color": "#7a8cd6",
        "area": OverworldAreas.LakeHylia,
        "areaType": EntranceTypes.Overworld,
        "collected": false
    },
    "Requiem of Spirit": {
        "name": "Requiem of Spirit",
        "color": "#eec68b",
        "area": OverworldAreas.DesertColossus,
        "areaType": EntranceTypes.Overworld,
        "collected": false
    },
    "Nocturne of Shadow": {
        "name": "Nocturne of Shadow",
        "color": "#a371a9",
        "area": OverworldAreas.Graveyard,
        "areaType": EntranceTypes.Overworld,
        "collected": false
    },
    "Prelude of Light": {
        "name": "Prelude of Light",
        "color": "#fff89d",
        "area": Houses.TempleOfTime,
        "areaType": EntranceTypes.House,
        "collected": false
    }
};

export default Songs;
