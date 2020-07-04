import { useTrackerContext } from "../Hooks/useTrackerContext";
import styled from "styled-components";
import React, { useEffect, useRef } from "react";

const SettingsDiv = styled.div`
    position: relative;
    background: red;
    .options-container {
        position: absolute;
        padding: 20px;
        width: 100%;
    }
    .options {
        display: flex;
        flex-wrap: wrap;
        .field {
            min-width: 50%;
            label {
              margin: 10px;
            }
        }
    }
`;

const ButtonsDiv = styled.div`
    padding: 10px;
`;

export const Settings = ({ setShowSettings }) => {
    const {
        config,
        updateConfigOption
    } = useTrackerContext();
    const settingsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = event => {
            if (settingsRef.current && !settingsRef.current.contains(event.target)) {
                setShowSettings(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [settingsRef, setShowSettings]);

    return <SettingsDiv ref={settingsRef}>
        <div className="options-container has-background-dark">
            {/*<h6 className="is-size-6">Be careful, changing these can overwrite entrances</h6>*/}
            <div className="options">
                {Object.entries(config).map(([key, option], i) => {
                    return <div className="field" key={i}>
                        <input
                            type="checkbox"
                            id={key + "-checkbox"}
                            checked={option.value}
                            name={key + "-checkbox"}
                            className="switch is-rounded"
                            onChange={() => updateConfigOption(key)}
                        />
                        <label
                            htmlFor={key + "-checkbox"}
                        >
                            {option.label}
                        </label>
                    </div>
                })}
            </div>
            <ButtonsDiv className="buttons is-centered">
                <button className="button is-danger">Reset Tracker</button>
            </ButtonsDiv>
        </div>
    </SettingsDiv>
};
