import OverworldAreas from "./OverworldAreas";
import EntranceTypes from "./EntranceTypes";
import Houses from "./Houses";

const Songs = {
    "Minuet of Forest": {
        "name": "Minuet of Forest",
        "color": "#6db863",
        "location": OverworldAreas.SacredForestMeadow,
        "locationType": EntranceTypes.Overworld,
        "object": {
            "area": null,
            "entrance": "Minuet of Forest"
        },
        "collected": false
    },
    "Bolero of Fire": {
        "name": "Bolero of Fire",
        "color": "#eb5d49",
        "location": OverworldAreas.DeathMountainCrater,
        "locationType": EntranceTypes.Overworld,
        "object": {
            "area": null,
            "entrance": "Bolero of Fire"
        },
        "collected": false
    },
    "Serenade of Water": {
        "name": "Serenade of Water",
        "color": "#7a8cd6",
        "location": OverworldAreas.LakeHylia,
        "locationType": EntranceTypes.Overworld,
        "object": {
            "area": null,
            "entrance": "Serenade of Water"
        },
        "collected": false
    },
    "Requiem of Spirit": {
        "name": "Requiem of Spirit",
        "color": "#eec68b",
        "location": OverworldAreas.DesertColossus,
        "locationType": EntranceTypes.Overworld,
        "object": {
            "area": null,
            "entrance": "Requiem of Spirit"
        },
        "collected": false
    },
    "Nocturne of Shadow": {
        "name": "Nocturne of Shadow",
        "color": "#a371a9",
        "location": OverworldAreas.Graveyard,
        "locationType": EntranceTypes.Overworld,
        "object": {
            "area": null,
            "entrance": "Nocturne of Shadow"
        },
        "collected": false
    },
    "Prelude of Light": {
        "name": "Prelude of Light",
        "color": "#fff877",
        "location": Houses.TempleOfTime,
        "locationType": EntranceTypes.House,
        "object": {
            "area": null,
            "entrance": "Prelude of Light"
        },
        "collected": false
    }
};

export default Songs;
