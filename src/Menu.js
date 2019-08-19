import React, { useState, useEffect } from "react";
import VanillaHyrule from "./DataObjects/VanillaHyrule";

export default function Menu({showRouteFinder, overworldOnly, ...props}) {

    const [message, setMessage] = useState("");

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

    const setAppState = state => {
        localStorage.setItem("zootr-entrance-tracker", JSON.stringify(state));
        window.location.reload();
    };

    const setVanillaHyrule = () => {
        if (!window.confirm("Area you sure? This will remove all current settings.")) {
            return;
        }
        setAppState(VanillaHyrule);
    };

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
                            {showRouteFinder ? "Hide" : "Show"} Route Finder
                        </div>
                        <div
                            className="nav-bottom-item"
                            onClick={props.toggleOverworldOnly}
                        >
                            {overworldOnly ? "Show All Entrances" : "Hide Non-Overworld Entrances"}
                        </div>
                    </div>
                    <div className="nav-bottom-right">
                        <div className="nav-bottom-item has-text-primary has-text-weight-bold">
                            {message}
                        </div>
                        <a href="#vanilla" className="nav-bottom-item has-text-light" onClick={setVanillaHyrule}>
                            Vanilla Hyrule
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
