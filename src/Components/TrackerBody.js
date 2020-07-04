import { useTrackerContext } from "../Hooks/useTrackerContext";
import TypeSection from "./TypeSection";
import React from "react";

export const TrackerBody = () => {

    const {
        areas,
        typeShouldBeDisplayed
    } = useTrackerContext();

    let availableTypes = {};

    {Object.entries(areas).map(([areaName, section], i) => {
        if (!typeShouldBeDisplayed(section)) return null;
        if (availableTypes[section.type] === undefined) availableTypes[section.type] = {};

        Object.entries(section.entrances).map(([entranceName, entrance], j) => {
            if (typeShouldBeDisplayed(entrance)) availableTypes[section.type][entranceName] = entrance;
        });
        return <React.Fragment key={i}>
            <h3 className="is-size-3 has-text-centered">{section.displayName}</h3>
            <div key={i} className="areas-container is-flex-desktop is-flex-tablet is-multiline flex-wraps">
                <TypeSection
                    type={section.type}
                    section={section}
                />
            </div>
        </React.Fragment>
    })}
    console.log(availableTypes)

    return 42;
};
