import ZOoTREntranceTracker from './ZOoTREntranceTracker';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import "bulma/css/bulma.css";
import React from 'react';
import "./global.css";

ReactDOM.render(
    <><div className="app-background" /><ZOoTREntranceTracker /></>,
    document.getElementById('root')
);

serviceWorker.unregister();
