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
    if (Object.keys(trackerSections).length === 0) return <h1 className="is-size-1" style={{textAlign: "center"}}>👀</h1>;
    return <div className="area-sections">
        {Object.entries(trackerSections).map(([sectionType, section], i) => {
            return <div key={`section-${i}`} className="area-section">
                <div>
                    <h4 className="is-size-4 has-text-centered">{sectionType}</h4>
                    <div key={i} className="areas-container is-flex-desktop is-flex-tablet is-multiline flex-wraps">
                        <TypeSection
                            type={sectionType}
                            section={section}
                            options={possibleEntrances}
                        />
                    </div>
                </div>
            </div>
        })}
    </div>
};
