import ZOoTREntranceTracker from './Components/ZOoTREntranceTracker';
import { ConfigContextProvider } from "./Context/ConfigContext";
import { AreaContextProvider } from "./Context/AreaContext";
import * as serviceWorker from './serviceWorker';
import "font-awesome/css/font-awesome.min.css";
import styled from "styled-components";
import ReactDOM from 'react-dom';
// import ReactGA from "react-ga";
import "bulma/css/bulma.css";
import React from 'react';
import "./global.css";

// ReactGA.initialize("UA-144567954-1");
// ReactGA.pageview("/");

const AppBackdrop = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url("/triforce.png");
    background-repeat: no-repeat;
    background-size: 30%;
    background-position: center;
    background-attachment: fixed;
    background-blend-mode: soft-light;
    background-color: #eeebe1;
    /* IE 10 and 11 */
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        opacity: 0.05;
    }
    /* Edge */
    @supports not (mix-blend-mode: soft-light) {
        opacity: 0.05;
    }
`;

ReactDOM.render(
    <React.Fragment>
        <AppBackdrop />
        <ConfigContextProvider>
            <AreaContextProvider>
                <ZOoTREntranceTracker />
            </AreaContextProvider>
        </ConfigContextProvider>
    </React.Fragment>,
    document.getElementById('root')
);

serviceWorker.unregister();
