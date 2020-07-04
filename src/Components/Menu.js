import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Settings } from "./Settings";

export default function Menu({ showRouteFinder, overworldOnly, trackGaEvent, ...props }) {

    const menuRef = useRef(null);
    const [message, setMessage] = useState("");
    const [showSettings, setShowSettings] = useState(false);
    const [currentMenuHeight, setCurrentMenuHeight] = useState(0);

    useEffect(() => {
        if (message !== "") {
            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    });

    useLayoutEffect(() => {
        handleResize();
    });

    const handleResize = () => {
        if (menuRef.current.clientHeight !== currentMenuHeight) {
            setCurrentMenuHeight(menuRef.current.clientHeight);
            props.setMenuHeight(menuRef.current.clientHeight);
        }
    };

    return (
        <div ref={menuRef} className="navbar is-fixed-top is-dark">
            <div style={{ width: "100%", maxWidth: "1000px", margin: "auto" }}>
                <nav>
                    <h1 className="is-size-4 navbar-item has-text-white has-text-weight-bold">
                        ZOoTR Entrance Tracker
                    </h1>
                </nav>
                {message === "" ?
                    <div className="has-background-dark nav-bottom">
                        <div className="nav-bottom-left">
                            <a
                                href="https://github.com/brakkum/ZOoTR-Entrance-Tracker"
                                className="nav-bottom-item has-text-grey-light"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackGaEvent("menu", "click github link")}
                            >
                                GitHub
                            </a>
                            <a
                                href="#settings"
                                className={"nav-bottom-item " + (showSettings ? "has-text-success" : "has-text-white")}
                                onClick={() => setShowSettings(!showSettings)}
                            >
                                Settings
                            </a>
                        </div>
                    </div>
                    :
                    <div className="nav-bottom-right nav-right">
                        <div className="nav-bottom-item nav-bottom-message is-size-6 has-text-primary has-text-weight-bold">
                            {message}
                        </div>
                    </div>
                }
                {showSettings && <Settings setShowSettings={setShowSettings} />}
            </div>
        </div>
    )
}
