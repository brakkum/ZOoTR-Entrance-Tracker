import ZOoTREntranceTracker from './ZOoTREntranceTracker';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import "bulma/css/bulma.css";
import React from 'react';
import "./global.css";

ReactDOM.render(<ZOoTREntranceTracker />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
