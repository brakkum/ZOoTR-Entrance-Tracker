import EntranceTypes from "./EntranceTypeEnum";
import CommonInteriors from "./CommonInteriors";

export default {
    "Death Mountain Trail": {
        "Dodongo's Cavern": {
            "type": EntranceTypes.Dungeon
        },
        "Goron City": {
            "type": EntranceTypes.Overworld
        },
        "Storms Grotto": {
            "type": EntranceTypes.Grotto
        }
    },
    "Kokiri Forest": {
        "Link's House": {
            "type": EntranceTypes.House
        },
        "Shop": {
            "type": EntranceTypes.House,
        },
        "Hyrule Field": {
            "type": EntranceTypes.Overworld
        },
        "Storms Grotto": {
            "type": EntranceTypes.Grotto
        }
    },
    "Kakariko Village": {
        "Skulltula House": {
            "type": EntranceTypes.House
        },
        "Windmill": {
            "type": EntranceTypes.House
        },
        "Hyrule Field": {
            "type": EntranceTypes.Overworld
        },
        "Open Grotto": {
            "type": EntranceTypes.Grotto,
            "display": CommonInteriors.Grotto
        },
        "Redead Grotto": {
            "type": EntranceTypes.Grotto
        }
    },
    "Hyrule Field": {
        "Kakariko Village": {
            "type": EntranceTypes.Overworld
        },
        "Kokiri Forest": {
            "type": EntranceTypes.Overworld
        }
    },
};
