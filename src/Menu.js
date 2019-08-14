import React, { useState, useEffect } from "react";

export default function Menu({routeFinderVisible, overworldOnly, ...props}) {

    const [message, setMessage] = useState("");

    const saveState = () => {
        props.saveState();
        setMessage("Tracker Saved");
    };

    const resetState = () => {
        if (!window.confirm("Are you sure you want to reset?")) {
            return;
        }
        props.resetState();
        setMessage("Tracker Reset");
    };

    useEffect(
        () => {
            if (message !== "") {
                setTimeout(() => {
                    setMessage("");
                }, 3000);
            }
        }
    );

    return(
        <div className="navbar is-fixed-top is-dark">
            <div style={{width: "100%", maxWidth: "1000px", margin: "auto"}}>
                <nav>
                    <h1 className="is-size-4 navbar-item has-text-white has-text-weight-bold">
                        ZOoTR Entrance Tracker
                    </h1>
                </nav>
                <div className="has-background-dark nav-bottom">
                    <div className="nav-bottom-left">
                        <div
                            className="nav-bottom-item"
                            onClick={props.toggleRouteFinder}
                        >
                            {routeFinderVisible ? "Hide" : "Show"} Route Finder
                        </div>
                        <div
                            className="nav-bottom-item"
                            onClick={props.toggleOverworldOnly}
                        >
                            {overworldOnly ? "Show All Entrances" : "Hide Non-Overworld Entrances"}
                        </div>
                    </div>
                    <div className="nav-bottom-right">
                        <div className="nav-bottom-item has-text-white has-text-weight-bold">
                            {message}
                        </div>
                        <a href="#save" className="nav-bottom-item has-text-primary" onClick={saveState}>
                            Save
                        </a>
                        <a href="#reset" className="nav-bottom-item has-text-light" onClick={resetState}>
                            Reset
                        </a>
                        <a
                            href="https://github.com/brakkum/ZOoTR-Entrance-Tracker"
                            className="nav-bottom-item has-text-grey-light"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
