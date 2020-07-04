import { useTrackerContext } from "../Hooks/useTrackerContext";
import React, { useState, useLayoutEffect } from "react";
import Menu from "./Menu";
import TypeSection from "./TypeSection";
import {TrackerBody} from "./TrackerBody";


export default function ZOoTREntranceTracker({ ReactGA }) {

    const [menuHeight, setMenuHeight] = useState(0);
    const [windowChanges, setWindowChanges] = useState(false);

    // trigger re-render when window size changes
    // cause menu and songs to reassess sizing
    useLayoutEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener("resize", handleResize) };
    });

    const handleResize = () => {
        setWindowChanges(!windowChanges);
    };

    const trackGaEvent = (category, action) => {
        ReactGA.event({
            category,
            action
        });
    };

    return (
        <div className="zootr-entrance-tracker">

            <Menu
                setMenuHeight={setMenuHeight}
                trackGaEvent={trackGaEvent}
            />

            <div className="top-padding" style={{ height: menuHeight + 20 }} />

            <TrackerBody />

            {/*/!* TODO: change this to be toggle-able router? songs will be with other items *!/*/}
            {/*<div className="bottom-padding" style={{ height: songsHeight }} />*/}
            {/*/!* display songs that can be collected and may open new areas *!/*/}
            {/*{Object.keys(interiorEntrances).length > 1 && <Songs*/}
            {/*    toggleSongCollected={toggleSongCollected}*/}
            {/*    setSongsHeight={setSongsHeight}*/}
            {/*    songs={songs}*/}
            {/*/>}*/}
        </div>
    );
};
