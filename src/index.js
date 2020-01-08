import ZOoTREntranceTracker from './ZOoTREntranceTracker';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import ReactGA from "react-ga";
import "bulma/css/bulma.css";
import React from 'react';
import "./global.css";

ReactGA.initialize("UA-144567954-1");
ReactGA.pageview("/");

ReactDOM.render(
    <><div className="app-background" /><ZOoTREntranceTracker ReactGA={ReactGA} /></>,
    document.getElementById('root')
);

serviceWorker.unregister();
