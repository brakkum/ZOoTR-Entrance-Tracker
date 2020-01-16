
const VanillaOverworld = {
    "availableOverworldEntrances": {
        "Castle Town Entrance": [],
        "Death Mountain Crater": [],
        "Death Mountain Trail": [],
        "Desert Colossus": [],
        "Gerudo's Fortress": [],
        "Gerudo Valley": [],
        "Goron City": [],
        "Graveyard": [],
        "Haunted Wasteland": [],
        "Hyrule/Ganon's Castle": [],
        "Hyrule Field": [],
        "Kakariko Village": [],
        "Kokiri Forest": [],
        "Lake Hylia": [],
        "Lon Lon Ranch": [],
        "Lost Woods": [],
        "Lost Woods Bridge": [],
        "Market": [],
        "Sacred Forest Meadow": [],
        "Temple of Time Entrance": [],
        "Zora's Domain": [],
        "Zora's Fountain": [],
        "Zora's River": []
    },
    "availableGrottoEntrances": {
        "Castle Town Entrance": [],
        "Death Mountain Crater": ["Boulder Near Death Mountain Trail", "Boulder Near Goron City"],
        "Death Mountain Trail": ["Cow Grotto", "Song of Storms Grotto"],
        "Desert Colossus": ["Boulder Grotto"],
        "Gerudo's Fortress": ["Song of Storms Grotto"],
        "Gerudo Valley": ["Boulder on Ledge", "Song of Storms Grotto"],
        "Goron City": ["Open Grotto"],
        "Graveyard": ["Dampe's Grave", "Redead Grave", "Royal Family's Tomb", "Shield Grave"],
        "Haunted Wasteland": [],
        "Hyrule/Ganon's Castle": ["Song of Storms Grotto"],
        "Hyrule Field": ["Boulder Across River", "Boulder Near Castle Town", "Boulder Near Gerudo Valley", "Boulder in Trees", "Lone Tree In West Field", "Near Lake Hylia Bomb Grotto", "Open Grotto", "Tree Near Kakariko Grotto"],
        "Kakariko Village": ["Bomb Grotto", "Open Grotto"],
        "Kokiri Forest": ["Song of Storms Grotto"],
        "Lake Hylia": ["Grave"],
        "Lon Lon Ranch": ["Open Grotto"],
        "Lost Woods": ["Boulder Near Goron City", "Boulder Near Sacred Forest Meadow", "Forest Stage"],
        "Lost Woods Bridge": [],
        "Market": [],
        "Sacred Forest Meadow": ["Bomb Grotto", "Open Grotto", "Song of Storms Grotto"],
        "Temple of Time Entrance": [],
        "Zora's Domain": ["Song of Storms Grotto"],
        "Zora's Fountain": [],
        "Zora's River": ["Boulder Grotto", "Open Grotto", "Song of Storms Grotto"]
    },
    "availableHouseEntrances": {
        "Castle Town Entrance": ["Guard Hut/Poe Collector"],
        "Death Mountain Crater": ["Great Fairy's Fountain"],
        "Death Mountain Trail": ["Great Fairy's Fountain"],
        "Desert Colossus": ["Great Fairy's Fountain"],
        "Gerudo Valley": ["Carpenter Tent"],
        "Goron City": ["Shop"],
        "Graveyard": ["Dampe's Hut"],
        "Hyrule/Ganon's Castle": ["Adult Great Fairy's Fountain", "Child Great Fairy's Fountain"],
        "Kakariko Village": ["Bazaar", "Bottom House", "Granny's Potion Shop", "Impa's House Cow", "Impa's House Front", "Potion Shop Back", "Potion Shop Front", "Shooting Gallery", "Skulltula House", "Windmill"],
        "Kokiri Forest": ["Know-It-All House", "Mido's House", "Saria's House", "Shop", "Twins House", "Link's House"],
        "Lake Hylia": ["Fishing", "Lakeside Laboratory"],
        "Lon Lon Ranch": ["Lon Lon Tower", "Stable", "Talon's House"],
        "Market": ["Back Alley House", "Bazaar", "Bombchu Bowling", "Bombchu Shop", "Mask Shop", "Potion Shop", "Shooting Gallery", "Treasure Box Shop"],
        "Temple of Time Entrance": ["Temple of Time"],
        "Zora's Domain": ["Shop"],
        "Zora's Fountain": ["Great Fairy's Fountain"]
    },
    "allOverworldEntrances": {
        "Castle Town Entrance": ["Hyrule Field", "Market"],
        "Death Mountain Crater": ["Death Mountain Trail", "Goron City"],
        "Death Mountain Trail": ["Kakariko Village", "Goron City", "Death Mountain Crater"],
        "Desert Colossus": ["Haunted Wasteland"],
        "Gerudo's Fortress": ["Gerudo Valley", "Haunted Wasteland"],
        "Gerudo Valley": ["Hyrule Field", "Gerudo's Fortress"],
        "Goron City": ["Death Mountain Trail", "Death Mountain Crater", "Lost Woods"],
        "Graveyard": ["Kakariko Village"],
        "Haunted Wasteland": ["Gerudo's Fortress", "Desert Colossus"],
        "Hyrule/Ganon's Castle": ["Market"],
        "Hyrule Field": ["Lost Woods Bridge", "Zora's River", "Kakariko Village", "Castle Town Entrance", "Lon Lon Ranch", "Gerudo Valley", "Lake Hylia"],
        "Kakariko Village": ["Hyrule Field", "Death Mountain Trail", "Graveyard"],
        "Kokiri Forest": ["Lost Woods Bridge", "Lost Woods"],
        "Lake Hylia": ["Hyrule Field", "Zora's Domain"],
        "Lon Lon Ranch": ["Hyrule Field"],
        "Lost Woods": ["Kokiri Forest", "Goron City", "Sacred Forest Meadow", "Zora's River"],
        "Lost Woods Bridge": ["Kokiri Forest", "Hyrule Field"],
        "Market": ["Castle Town Entrance", "Temple of Time Entrance", "Hyrule/Ganon's Castle"],
        "Sacred Forest Meadow": ["Lost Woods"],
        "Temple of Time Entrance": ["Market"],
        "Zora's Domain": ["Zora's River", "Zora's Fountain", "Lake Hylia"],
        "Zora's Fountain": ["Zora's Domain"],
        "Zora's River": ["Hyrule Field", "Zora's Domain", "Lost Woods"]
    },
    "availableDungeons": ["Bottom of the Well", "Deku Tree", "Dodongo's Cavern", "Fire Temple", "Forest Temple", "Gerudo Training Grounds", "Ice Cavern", "Shadow Temple", "Spirit Temple", "Water Temple", "Jabu Jabu's Belly"],
    "interiorEntrances": {
        "Kokiri Forest": [{"area": "Lost Woods", "entrance": "Kokiri Forest"}, {
            "area": "Lost Woods Bridge",
            "entrance": "Kokiri Forest"
        }],
        "Lost Woods": [{"area": "Kokiri Forest", "entrance": "Lost Woods"}, {
            "area": "Zora's River",
            "entrance": "Lost Woods"
        }, {"area": "Sacred Forest Meadow", "entrance": "Lost Woods"}, {
            "area": "Goron City",
            "entrance": "Lost Woods"
        }],
        "Lost Woods Bridge": [{"area": "Lost Woods", "entrance": "Lost Woods Bridge"}, {
            "area": "Kokiri Forest",
            "entrance": "Lost Woods Bridge"
        }, {"area": "Hyrule Field", "entrance": "Lost Woods Bridge"}],
        "Hyrule Field": [{"area": "Lost Woods Bridge", "entrance": "Hyrule Field"}, {
            "area": "Gerudo Valley",
            "entrance": "Hyrule Field"
        }, {"area": "Castle Town Entrance", "entrance": "Hyrule Field"}, {
            "area": "Kakariko Village",
            "entrance": "Hyrule Field"
        }, {"area": "Lake Hylia", "entrance": "Hyrule Field"}, {
            "area": "Lake Hylia",
            "entrance": "Kaepora Gaebora"
        }, {"area": "Zora's River", "entrance": "Hyrule Field"}, {"area": "Lon Lon Ranch", "entrance": "Hyrule Field"}],
        "Gerudo Valley": [{"area": "Hyrule Field", "entrance": "Gerudo Valley"}, {
            "area": "Gerudo's Fortress",
            "entrance": "Gerudo Valley"
        }],
        "Lake Hylia": [{"area": "Gerudo Valley", "entrance": "Lake Hylia"}, {
            "area": "Hyrule Field",
            "entrance": "Lake Hylia"
        }, {"area": "Zora's Domain", "entrance": "Lake Hylia"}],
        "Gerudo's Fortress": [{"area": "Gerudo Valley", "entrance": "Gerudo's Fortress"}, {
            "area": "Haunted Wasteland",
            "entrance": "Gerudo's Fortress"
        }],
        "Haunted Wasteland": [{
            "area": "Gerudo's Fortress",
            "entrance": "Haunted Wasteland"
        }, {"area": "Desert Colossus", "entrance": "Haunted Wasteland"}],
        "Desert Colossus": [{"area": "Haunted Wasteland", "entrance": "Desert Colossus"}, {
            "area": null,
            "entrance": "Spirit Temple"
        }],
        "Castle Town Entrance": [{"area": "Hyrule Field", "entrance": "Castle Town Entrance"}, {
            "area": "Market",
            "entrance": "Castle Town Entrance"
        }],
        "Market": [{"area": "Castle Town Entrance", "entrance": "Market"}, {
            "area": "Hyrule/Ganon's Castle",
            "entrance": "Market"
        }, {"area": "Temple of Time Entrance", "entrance": "Market"}],
        "Kakariko Village": [{"area": "Hyrule Field", "entrance": "Kakariko Village"}, {
            "area": "Death Mountain Trail",
            "entrance": "Kakariko Village"
        }, {"area": "Graveyard", "entrance": "Kakariko Village"}, {
            "area": "Death Mountain Trail",
            "entrance": "Kaepora Gaebora"
        }],
        "Death Mountain Trail": [{
            "area": "Kakariko Village",
            "entrance": "Death Mountain Trail"
        }, {"area": "Goron City", "entrance": "Death Mountain Trail"}, {
            "area": "Death Mountain Crater",
            "entrance": "Death Mountain Trail"
        }],
        "Graveyard": [{"area": "Kakariko Village", "entrance": "Graveyard"}],
        "Zora's Domain": [{"area": "Lake Hylia", "entrance": "Zora's Domain"}, {
            "area": "Zora's River",
            "entrance": "Zora's Domain"
        }, {"area": "Zora's Fountain", "entrance": "Zora's Domain"}],
        "Zora's River": [{"area": "Lost Woods", "entrance": "Zora's River"}, {
            "area": "Hyrule Field",
            "entrance": "Zora's River"
        }, {"area": "Zora's Domain", "entrance": "Zora's River"}],
        "Sacred Forest Meadow": [{"area": "Lost Woods", "entrance": "Sacred Forest Meadow"}],
        "Zora's Fountain": [{"area": "Zora's Domain", "entrance": "Zora's Fountain"}],
        "Hyrule/Ganon's Castle": [{"area": "Market", "entrance": "Hyrule/Ganon's Castle"}],
        "Temple of Time Entrance": [{"area": "Market", "entrance": "Temple of Time Entrance"}],
        "Lon Lon Ranch": [{"area": "Hyrule Field", "entrance": "Lon Lon Ranch"}],
        "Goron City": [{"area": "Death Mountain Trail", "entrance": "Goron City"}, {
            "area": "Death Mountain Crater",
            "entrance": "Goron City"
        }, {"area": "Lost Woods", "entrance": "Goron City"}],
        "Death Mountain Crater": [{
            "area": "Goron City",
            "entrance": "Death Mountain Crater"
        }, {"area": "Death Mountain Trail", "entrance": "Death Mountain Crater"}]
    },
    "availableGrottos": ["Grotto", "3 Scrubs", "2 Scrubs", "Cow Grotto", "Grotto", "Fairy Fountain", "Diving Rupee Grotto", "2 Scrubs", "3 Scrubs", "Dampe's Grave", "Redead Grave", "Royal Family's Tomb", "Shield Grave", "Fairy Fountain", "Grotto", "Skulltula Grotto", "Grotto", "Diving Grotto", "1 Scrub", "Grotto", "Skulltula Grotto", "Skulltula Grotto", "Redead Grotto", "Grotto", "Grotto", "3 Scrubs", "Grotto", "2 Scrubs", "Forest Stage", "3 Scrubs", "Wolfos Grotto", "Fairy Fountain", "2 Scrubs", "Fairy Fountain", "Fairy Fountain", "Grotto", "2 Scrubs"],
    "routeFinderStart": null,
    "availableHouses": ["Guard Hut/Poe Collector", "Great Fairy's Fountain", "Great Fairy's Fountain", "Carpenter Tent", "Shop", "House", "Great Fairy's Fountain", "Great Fairy's Fountain", "Shop", "House", "Granny's Potion Shop", "Impa's House Cow", "House", "Potion Shop Back", "Potion Shop Front", "Shooting Gallery", "Skulltula House", "Windmill", "House", "House", "House", "Shop", "House", "Lakeside Laboratory", "Fishing", "Lon Lon Tower", "Stable", "Talon's House", "House", "Shop", "Bombchu Bowling", "Shop", "Mask Shop", "Shop", "Shooting Gallery", "Treasure Box Shop", "Temple of Time", "Shop", "Great Fairy's Fountain", "Great Fairy's Fountain", "Link's House"],
    "showRouteFinder": false,
    "routeFinderEnd": null,
    "overworldOnly": false,
    "startAsChild": true,
    "hyrule": {
        "Castle Town Entrance": {
            "colors": ["#dddddd", "#bbbacd", "#cdcdcd"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Hyrule Field": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Hyrule Field", "entrance": "Castle Town Entrance"}
                },
                "Market": {"type": "Overworld", "leadsTo": {"area": "Market", "entrance": "Castle Town Entrance"}},
                "Guard Hut/Poe Collector": {"type": "House", "clear": false, "interior": null}
            }
        },
        "Death Mountain Crater": {
            "colors": ["#7c451c", "#901f11"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Death Mountain Trail": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Death Mountain Trail", "entrance": "Death Mountain Crater"}
                },
                "Goron City": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Goron City", "entrance": "Death Mountain Crater"}
                },
                "Boulder Near Death Mountain Trail": {
                    "type": "Grotto",
                    "display": "Grotto",
                    "clear": false,
                    "interior": null
                },
                "Boulder Near Goron City": {"type": "Grotto", "display": "3 Scrubs", "clear": false, "interior": null},
                "Great Fairy's Fountain": {"type": "House", "clear": false, "interior": null},
                "Fire Temple": {"type": "Dungeon", "clear": false, "interior": null}
            }
        },
        "Death Mountain Trail": {
            "colors": ["#a0793c", "#93584a"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Kakariko Village": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Kakariko Village", "entrance": "Death Mountain Trail"}
                },
                "Dodongo's Cavern": {"type": "Dungeon", "clear": false, "interior": null},
                "Goron City": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Goron City", "entrance": "Death Mountain Trail"}
                },
                "Song of Storms Grotto": {"type": "Grotto", "display": "Grotto", "clear": false, "interior": null},
                "Cow Grotto": {"type": "Grotto", "clear": false, "interior": null},
                "Great Fairy's Fountain": {"type": "House", "clear": false, "interior": null},
                "Death Mountain Crater": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Death Mountain Crater", "entrance": "Death Mountain Trail"}
                },
                "Kaepora Gaebora": {
                    "type": "Kaepora Gaebora",
                    "leadsTo": {"area": "Kakariko Village", "entrance": "Graveyard"}
                }
            }
        },
        "Desert Colossus": {
            "colors": ["#b79f60", "#c6b34e", "#c1ad96"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Boulder Grotto": {"type": "Grotto", "display": "2 Scrubs", "clear": false, "interior": null},
                "Great Fairy's Fountain": {"type": "House", "clear": false, "interior": null},
                "Spirit Temple": {"type": "Dungeon", "clear": false, "interior": null},
                "Haunted Wasteland": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Haunted Wasteland", "entrance": "Desert Colossus"}
                }
            }
        },
        "Gerudo's Fortress": {
            "colors": ["#947d5a", "#cbb186"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Gerudo Training Grounds": {"type": "Dungeon", "clear": false, "interior": null},
                "Gerudo Valley": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Gerudo Valley", "entrance": "Gerudo's Fortress"}
                },
                "Haunted Wasteland": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Haunted Wasteland", "entrance": "Gerudo's Fortress"}
                },
                "Song of Storms Grotto": {
                    "type": "Grotto",
                    "display": "Fairy Fountain",
                    "clear": false,
                    "interior": null
                }
            }
        },
        "Gerudo Valley": {
            "colors": ["#946333", "#cbc3ae"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "attachedArea": {"name": "Lake Hylia"},
            "entrances": {
                "Hyrule Field": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Hyrule Field", "entrance": "Gerudo Valley"}
                },
                "Gerudo's Fortress": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Gerudo's Fortress", "entrance": "Gerudo Valley"}
                },
                "Boulder on Ledge": {
                    "type": "Grotto",
                    "display": "Diving Rupee Grotto",
                    "clear": false,
                    "interior": null
                },
                "Song of Storms Grotto": {"type": "Grotto", "display": "2 Scrubs", "clear": false, "interior": null},
                "Carpenter Tent": {"type": "House", "clear": true, "interior": null}
            }
        },
        "Goron City": {
            "colors": ["#c09557", "#c07b50"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Death Mountain Trail": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Death Mountain Trail", "entrance": "Goron City"}
                },
                "Death Mountain Crater": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Death Mountain Crater", "entrance": "Goron City"}
                },
                "Lost Woods": {"type": "Overworld", "leadsTo": {"area": "Lost Woods", "entrance": "Goron City"}},
                "Shop": {"type": "House", "clear": true, "interior": null},
                "Open Grotto": {"type": "Grotto", "display": "3 Scrubs", "clear": false, "interior": null}
            }
        },
        "Graveyard": {
            "colors": ["#6f8367", "#836b68", "#968299"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Kakariko Village": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Kakariko Village", "entrance": "Graveyard"}
                },
                "Shadow Temple": {"type": "Dungeon", "clear": false, "interior": null},
                "Dampe's Hut": {"type": "House", "display": "House", "clear": false, "interior": null},
                "Royal Family's Tomb": {"type": "Grotto", "clear": false, "interior": null},
                "Shield Grave": {"type": "Grotto", "clear": false, "interior": null},
                "Redead Grave": {"type": "Grotto", "clear": false, "interior": null},
                "Dampe's Grave": {"type": "Grotto", "clear": false, "interior": null}
            }
        },
        "Haunted Wasteland": {
            "colors": ["#d0b682", "#6e6d82"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Gerudo's Fortress": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Gerudo's Fortress", "entrance": "Haunted Wasteland"}
                },
                "Desert Colossus": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Desert Colossus", "entrance": "Haunted Wasteland"}
                }
            }
        },
        "Hyrule/Ganon's Castle": {
            "colors": ["#a7a4e1", "#e9ecee", "#964145"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Child Great Fairy's Fountain": {
                    "type": "House",
                    "display": "Great Fairy's Fountain",
                    "clear": false,
                    "interior": null
                },
                "Adult Great Fairy's Fountain": {
                    "type": "House",
                    "display": "Great Fairy's Fountain",
                    "clear": false,
                    "interior": null
                },
                "Market": {"type": "Overworld", "leadsTo": {"area": "Market", "entrance": "Hyrule/Ganon's Castle"}},
                "Song of Storms Grotto": {
                    "type": "Grotto",
                    "display": "Skulltula Grotto",
                    "clear": false,
                    "interior": null
                }
            }
        },
        "Hyrule Field": {
            "colors": ["#7cab61", "#c9bc80", "#c9bd61"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": true,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Lost Woods Bridge": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Lost Woods Bridge", "entrance": "Hyrule Field"}
                },
                "Zora's River": {"type": "Overworld", "leadsTo": {"area": "Zora's River", "entrance": "Hyrule Field"}},
                "Kakariko Village": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Kakariko Village", "entrance": "Hyrule Field"}
                },
                "Tree Near Kakariko Grotto": {
                    "type": "Grotto",
                    "display": "Skulltula Grotto",
                    "clear": false,
                    "interior": null
                },
                "Castle Town Entrance": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Castle Town Entrance", "entrance": "Hyrule Field"}
                },
                "Boulder Near Castle Town": {"type": "Grotto", "display": "Grotto", "clear": false, "interior": null},
                "Lon Lon Ranch": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Lon Lon Ranch", "entrance": "Hyrule Field"}
                },
                "Boulder Across River": {
                    "type": "Grotto",
                    "display": "Fairy Fountain",
                    "clear": false,
                    "interior": null
                },
                "Lone Tree In West Field": {
                    "type": "Grotto",
                    "display": "Diving Grotto",
                    "clear": false,
                    "interior": null
                },
                "Boulder Near Gerudo Valley": {
                    "type": "Grotto",
                    "display": "Skulltula Grotto",
                    "clear": false,
                    "interior": null
                },
                "Gerudo Valley": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Gerudo Valley", "entrance": "Hyrule Field"}
                },
                "Lake Hylia": {"type": "Overworld", "leadsTo": {"area": "Lake Hylia", "entrance": "Hyrule Field"}},
                "Near Lake Hylia Bomb Grotto": {
                    "type": "Grotto",
                    "display": "1 Scrub",
                    "clear": false,
                    "interior": null
                },
                "Open Grotto": {"type": "Grotto", "display": "Grotto", "clear": false, "interior": null},
                "Boulder in Trees": {"type": "Grotto", "display": "Grotto", "clear": false, "interior": null}
            }
        },
        "Kakariko Village": {
            "colors": ["#91aa94", "#a5aa9c", "#aa9191"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": true,
            "entrances": {
                "Hyrule Field": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Hyrule Field", "entrance": "Kakariko Village"}
                },
                "Death Mountain Trail": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Death Mountain Trail", "entrance": "Kakariko Village"}
                },
                "Graveyard": {"type": "Overworld", "leadsTo": {"area": "Graveyard", "entrance": "Kakariko Village"}},
                "Bottom of the Well": {"type": "Dungeon", "clear": false, "interior": null},
                "Skulltula House": {"type": "House", "clear": false, "interior": null},
                "Windmill": {"type": "House", "clear": false, "interior": null},
                "Impa's House Front": {"type": "House", "display": "House", "clear": false, "interior": null},
                "Impa's House Cow": {"type": "House", "clear": false, "interior": null},
                "Bottom House": {"type": "House", "display": "House", "clear": false, "interior": null},
                "Shooting Gallery": {"type": "House", "clear": false, "interior": null},
                "Bazaar": {"type": "House", "display": "Shop", "clear": false, "interior": null},
                "Potion Shop Back": {"type": "House", "clear": false, "interior": null},
                "Potion Shop Front": {"type": "House", "clear": false, "interior": null},
                "Granny's Potion Shop": {"type": "House", "clear": false, "interior": null},
                "Open Grotto": {"type": "Grotto", "display": "Grotto", "clear": false, "interior": null},
                "Bomb Grotto": {"type": "Grotto", "display": "Redead Grotto", "clear": false, "interior": null}
            }
        },
        "Kokiri Forest": {
            "colors": ["#82b047", "#98b08b", "#866f65"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Lost Woods Bridge": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Lost Woods Bridge", "entrance": "Kokiri Forest"}
                },
                "Lost Woods": {"type": "Overworld", "leadsTo": {"area": "Lost Woods", "entrance": "Kokiri Forest"}},
                "Deku Tree": {"type": "Dungeon", "clear": false, "interior": null},
                "Know-It-All House": {"type": "House", "display": "House", "clear": false, "interior": null},
                "Mido's House": {"type": "House", "display": "House", "clear": false, "interior": null},
                "Link's House": {"type": "House", "clear": false, "interior": null},
                "Saria's House": {"type": "House", "display": "House", "clear": false, "interior": null},
                "Twins House": {"type": "House", "display": "House", "clear": false, "interior": null},
                "Shop": {"type": "House", "clear": false, "interior": null},
                "Song of Storms Grotto": {"type": "Grotto", "display": "Grotto", "clear": false, "interior": null}
            }
        },
        "Lake Hylia": {
            "colors": ["#888bb0", "#8cabb0"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Hyrule Field": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Hyrule Field", "entrance": "Lake Hylia"}
                },
                "Zora's Domain": {"type": "Overworld", "leadsTo": {"area": "Zora's Domain", "entrance": "Lake Hylia"}},
                "Kaepora Gaebora": {
                    "type": "Kaepora Gaebora",
                    "leadsTo": {"area": "Hyrule Field", "entrance": "Castle Town Entrance"}
                },
                "Grave": {"type": "Grotto", "display": "3 Scrubs", "clear": false, "interior": null},
                "Lakeside Laboratory": {"type": "House", "clear": false, "interior": null},
                "Fishing": {"type": "House", "clear": false, "interior": null},
                "Water Temple": {"type": "Dungeon", "clear": false, "interior": null}
            }
        },
        "Lon Lon Ranch": {
            "colors": ["#c5aa79", "#d0bfb2", "#8fc771"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Hyrule Field": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Hyrule Field", "entrance": "Lon Lon Ranch"}
                },
                "Talon's House": {"type": "House", "clear": false, "interior": null},
                "Stable": {"type": "House", "clear": false, "interior": null},
                "Lon Lon Tower": {"type": "House", "clear": false, "interior": null},
                "Open Grotto": {"type": "Grotto", "display": "3 Scrubs", "clear": false, "interior": null}
            }
        },
        "Lost Woods": {
            "colors": ["#51852b", "#a4af32"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Kokiri Forest": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Kokiri Forest", "entrance": "Lost Woods"}
                },
                "Goron City": {"type": "Overworld", "leadsTo": {"area": "Goron City", "entrance": "Lost Woods"}},
                "Sacred Forest Meadow": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Sacred Forest Meadow", "entrance": "Lost Woods"}
                },
                "Zora's River": {"type": "Overworld", "leadsTo": {"area": "Zora's River", "entrance": "Lost Woods"}},
                "Forest Stage": {"type": "Grotto", "clear": false, "interior": null},
                "Boulder Near Goron City": {"type": "Grotto", "display": "Grotto", "clear": false, "interior": null},
                "Boulder Near Sacred Forest Meadow": {
                    "type": "Grotto",
                    "display": "2 Scrubs",
                    "clear": false,
                    "interior": null
                }
            }
        },
        "Lost Woods Bridge": {
            "colors": ["#51852b", "#796b4f", "#a4af32"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Kokiri Forest": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Kokiri Forest", "entrance": "Lost Woods Bridge"}
                },
                "Hyrule Field": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Hyrule Field", "entrance": "Lost Woods Bridge"}
                }
            }
        },
        "Market": {
            "colors": ["#9b9e93", "#736c79", "#af9084"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Castle Town Entrance": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Castle Town Entrance", "entrance": "Market"}
                },
                "Temple of Time Entrance": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Temple of Time Entrance", "entrance": "Market"}
                },
                "Hyrule/Ganon's Castle": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Hyrule/Ganon's Castle", "entrance": "Market"}
                },
                "Bazaar": {"type": "House", "display": "Shop", "clear": false, "interior": null},
                "Potion Shop": {"type": "House", "display": "Shop", "clear": false, "interior": null},
                "Shooting Gallery": {"type": "House", "clear": false, "interior": null},
                "Bombchu Bowling": {"type": "House", "clear": false, "interior": null},
                "Bombchu Shop": {"type": "House", "display": "Shop", "clear": false, "interior": null},
                "Treasure Box Shop": {"type": "House", "clear": false, "interior": null},
                "Back Alley House": {"type": "House", "display": "House", "clear": false, "interior": null},
                "Mask Shop": {"type": "House", "clear": false, "interior": null}
            }
        },
        "Sacred Forest Meadow": {
            "colors": ["#557356", "#72c041", "#9caf7c"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Lost Woods": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Lost Woods", "entrance": "Sacred Forest Meadow"}
                },
                "Forest Temple": {"type": "Dungeon", "clear": false, "interior": null},
                "Bomb Grotto": {"type": "Grotto", "display": "Wolfos Grotto", "clear": false, "interior": null},
                "Open Grotto": {"type": "Grotto", "display": "Fairy Fountain", "clear": true, "interior": null},
                "Song of Storms Grotto": {"type": "Grotto", "display": "2 Scrubs", "clear": true, "interior": null}
            }
        },
        "Temple of Time Entrance": {
            "colors": ["#74856e", "#83766a", "#d6d5ba"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Market": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Market", "entrance": "Temple of Time Entrance"}
                }, "Temple of Time": {"type": "House", "clear": false, "interior": null}
            }
        },
        "Zora's Domain": {
            "colors": ["#658285", "#b9b7ec", "#7b6753"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Zora's River": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Zora's River", "entrance": "Zora's Domain"}
                },
                "Zora's Fountain": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Zora's Fountain", "entrance": "Zora's Domain"}
                },
                "Lake Hylia": {"type": "Overworld", "leadsTo": {"area": "Lake Hylia", "entrance": "Zora's Domain"}},
                "Shop": {"type": "House", "display": "Shop", "clear": false, "interior": null},
                "Song of Storms Grotto": {
                    "type": "Grotto",
                    "display": "Fairy Fountain",
                    "clear": false,
                    "interior": null
                }
            }
        },
        "Zora's Fountain": {
            "colors": ["#96b0c6", "#8e8872"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Zora's Domain": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Zora's Domain", "entrance": "Zora's Fountain"}
                },
                "Jabu Jabu's Belly": {"type": "Dungeon", "clear": false, "interior": null},
                "Ice Cavern": {"type": "Dungeon", "clear": true, "interior": null},
                "Great Fairy's Fountain": {"type": "House", "clear": false, "interior": null}
            }
        },
        "Zora's River": {
            "colors": ["#9996c6", "#75b46d"],
            "isAccessible": true,
            "isExpanded": true,
            "hasKaeporaLakeHyliaLanding": false,
            "hasKaeporaDeathMountainTrailLanding": false,
            "entrances": {
                "Hyrule Field": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Hyrule Field", "entrance": "Zora's River"}
                },
                "Zora's Domain": {
                    "type": "Overworld",
                    "leadsTo": {"area": "Zora's Domain", "entrance": "Zora's River"}
                },
                "Lost Woods": {"type": "Overworld", "leadsTo": {"area": "Lost Woods", "entrance": "Zora's River"}},
                "Song of Storms Grotto": {"type": "Grotto", "display": "2 Scrubs", "clear": false, "interior": null},
                "Open Grotto": {"type": "Grotto", "display": "Grotto", "clear": false, "interior": null},
                "Boulder Grotto": {"type": "Grotto", "display": "Fairy Fountain", "clear": false, "interior": null}
            }
        }
    },
    "songs": {
        "Minuet of Forest": {
            "name": "Minuet of Forest",
            "color": "#6db863",
            "location": "Sacred Forest Meadow",
            "locationType": "Overworld",
            "object": {"song": "Minuet of Forest"},
            "collected": false
        },
        "Bolero of Fire": {
            "name": "Bolero of Fire",
            "color": "#eb5d49",
            "location": "Death Mountain Crater",
            "locationType": "Overworld",
            "object": {"song": "Bolero of Fire"},
            "collected": false
        },
        "Serenade of Water": {
            "name": "Serenade of Water",
            "color": "#7a8cd6",
            "location": "Lake Hylia",
            "locationType": "Overworld",
            "object": {"song": "Serenade of Water"},
            "collected": false
        },
        "Requiem of Spirit": {
            "name": "Requiem of Spirit",
            "color": "#eec68b",
            "location": "Desert Colossus",
            "locationType": "Overworld",
            "object": {"song": "Requiem of Spirit"},
            "collected": false
        },
        "Nocturne of Shadow": {
            "name": "Nocturne of Shadow",
            "color": "#a371a9",
            "location": "Graveyard",
            "locationType": "Overworld",
            "object": {"song": "Nocturne of Shadow"},
            "collected": false
        },
        "Prelude of Light": {
            "name": "Prelude of Light",
            "color": "#fff877",
            "location": "Temple of Time",
            "locationType": "House",
            "object": {"song": "Prelude of Light"},
            "collected": false
        }
    }
};

export default VanillaOverworld;
