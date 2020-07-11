import { useTrackerContext } from "../Hooks/useTrackerContext";
import TypeSection from "./TypeSection";
import React from "react";

export const TrackerBody = () => {

    const {
        // getSectionTypesToDisplay,
        // getPossibleEntrancesForAvailableTypes,
        getTrackerSectionsAndTypePossibilities
    } = useTrackerContext();

    const {
        trackerSections,
        possibleEntrances
    } = getTrackerSectionsAndTypePossibilities();
    // console.log("trackerSections", trackerSections);
    // console.log("possibleEntrances", possibleEntrances);
    return Object.entries(trackerSections).map(([sectionType, section], i) => {
        // console.log(sectionType, possibleEntrances[sectionType])
        return <React.Fragment key={`section-${i}`}>
            <h3 className="is-size-3 has-text-centered">{sectionType}</h3>
            <div key={i} className="areas-container is-flex-desktop is-flex-tablet is-multiline flex-wraps">
                <TypeSection
                    type={sectionType}
                    section={section}
                    options={possibleEntrances}
                />
            </div>
        </React.Fragment>
    });
};
