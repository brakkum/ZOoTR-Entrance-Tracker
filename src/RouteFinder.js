import React from "react";

export default class RouteFinder extends React.Component {

    state = {
        start: null,
        end: null,
        locationsBeingSearched: []
    };

    setStart = start => {
        if (start === "") {
            return;
        }
        this.setState({start});
    };

    resetStart = () => {
        this.setState({start: null});
    };

    setEnd = end => {
        if (end === "") {
            return;
        }
        this.setState({end});
    };

    resetEnd = () => {
        this.setState({end: null});
    };

    // start is always the same, as we look for it from end
    searchAvailableLocationsForStart = (start, end, availableLocations, locationsBeingSearched = [], locationsFullySearched = []) => {
        console.log(start,end)
        let result = [];
        if (availableLocations[end] === undefined) {
            return result;
        }
        if (locationsFullySearched.includes(end)) {
            return result;
        }
        if (locationsBeingSearched.includes(end)) {
            return result;
        } else {
            locationsBeingSearched.push(end);
        }
        for (let i = 0; i < availableLocations[end].length; i ++ ) {
            let obj = availableLocations[end][i];
            if (obj.song !== undefined && obj.song !== null) {
                return [{song: obj.song}];
            }
        }
        for (let i = 0; i < availableLocations[end].length; i ++ ) {
            let obj = availableLocations[end][i];
            if (obj.area === start) {
                console.log("area equal to start ",obj.area);
                return [{area: obj.area, interior: obj.interior, entrance: obj.entrance, song: obj.song}];
            } else if (obj.area !== undefined && obj.area !== null) {
                let r = this.searchAvailableLocationsForStart(start, obj.area, availableLocations, locationsBeingSearched, locationsFullySearched);
                if (r.length > 0) {
                    result.push(...r, {area: obj.area, interior: obj.interior, entrance: obj.entrance, song: obj.song});
                }
            } else if (obj.entrance !== undefined && obj.entrance !== null && obj.interior === start) {
                console.log("interior equal to start ",obj.interior);
                return [{area: obj.area, interior: obj.interior, entrance: obj.entrance, song: obj.song}];
            } else if (obj.interior !== undefined && obj.interior !== null) {
                let r = this.searchAvailableLocationsForStart(start, obj.interior, availableLocations, locationsBeingSearched, locationsFullySearched);
                if (r.length > 0) {
                    result.push(...r, {area: obj.area, interior: obj.interior, entrance: obj.entrance, song: obj.song});
                }
            } else if (obj.entrance === start) {
                console.log("entrance equal to start ",obj.entrance);
                return [{area: obj.area, interior: obj.interior, entrance: obj.entrance, song: obj.song}];
            } else if (obj.entrance !== undefined && obj.entrance !== null) {
                let r = this.searchAvailableLocationsForStart(start, obj.entrance, availableLocations, locationsBeingSearched, locationsFullySearched);
                if (r.length > 0) {
                    result.push(...r, {area: obj.area, interior: obj.interior, entrance: obj.entrance, song: obj.song});
                }
            }
        }
        locationsBeingSearched.splice(locationsBeingSearched.indexOf(end), 1);
        locationsFullySearched.push(end);
        return result;
    };

    getRoute = () => {
        let end = this.state.end;
        let start = this.state.start;
        if (!end || !start) {
            return null;
        }
        let result = this.searchAvailableLocationsForStart(start, end, this.props.availableLocations);
        console.log(result)
        return result;
    };

    render() {
        let availableLocations = Object.keys(this.props.availableLocations);
        if (availableLocations.length < 2) {
            return <h4 className="is-size-4 has-text-centered">More open areas necessary</h4>;
        }
        let start = this.state.start;
        let end = this.state.end;
        let route = this.getRoute();
        return(
            <div className="route-finder">
                <div className="route-points-select">
                    <div className="route-select-start is-flex">
                        <h5 className="is-size-5">Start:</h5>
                        {start === null ?
                            <div className="select is-small">
                                <select value="Select Location" onChange={e => this.setStart(e.target.value)}>
                                    <option value="">Select Location</option>
                                    {availableLocations.sort().map((location, i) => {
                                        if (location === end) {
                                            return null;
                                        }
                                        return <option key={i} value={location}>
                                            {location}
                                        </option>
                                    })}
                                </select>
                            </div>
                            :
                            <h5 className="is-size-5 is-flex selected-location">
                                {start}
                                <span className="delete" onClick={this.resetStart}>x</span>
                            </h5>
                        }
                    </div>
                    <div className="route-select-end is-flex is-centered">
                        <h5 className="is-size-5">End:</h5>
                            {end === null ?
                                <div className="select is-small">
                                    <select value="Select Location" onChange={e => this.setEnd(e.target.value)}>
                                        <option value="">Select Location</option>
                                        {availableLocations.sort().map((location, i) => {
                                            if (location === start) {
                                                return null;
                                            }
                                            return <option key={i} value={location}>
                                                {location}
                                            </option>
                                        })}
                                    </select>
                                </div>
                                :
                                <h5 className="is-size-5 is-flex selected-location">
                                    {end}
                                    <span className="delete" onClick={this.resetEnd}>x</span>
                                </h5>
                            }
                    </div>
                </div>
                {route !== null ?
                    <div className="result">

                    </div>
                    :
                    ""
                }
            </div>
        )
    }
}
