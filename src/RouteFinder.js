import React from "react";

export default class RouteFinder extends React.Component {

    state = {
        from: null,
        to: null
    };

    setFrom = from => {
        if (from === "") {
            return;
        }
        this.setState({from});
    };

    resetFrom = () => {
        this.setState({from: null});
    };

    setTo = to => {
        if (to === "") {
            return;
        }
        this.setState({to});
    };

    resetTo = () => {
        this.setState({to: null});
    };

    render() {
        let availableLocations = this.props.availableLocations;
        let from = this.state.from;
        let to = this.state.to;
        if (Object.keys(availableLocations).length < 2) {
            return <h4 className="is-size-4 has-text-centered">More open areas necessary</h4>;
        }
        return(
            <div className=" route-finder">
                <div className="route-points-select">
                    <div className="route-select-from is-flex">
                        <h5 className="is-size-5">From:</h5>
                        {from === null ?
                            <div className="select is-small">
                                <select value="Select Location" onChange={e => this.setFrom(e.target.value)}>
                                    <option value="">Select Location</option>
                                    {Object.keys(availableLocations).sort().map((location, i) => {
                                        if (location === to) {
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
                                {from}
                                <span className="delete" onClick={this.resetFrom}>x</span>
                            </h5>
                        }
                    </div>
                    <div className="route-select-to is-flex is-centered">
                        <h5 className="is-size-5">To:</h5>
                            {to === null ?
                                <div className="select is-small">
                                    <select value="Select Location" onChange={e => this.setTo(e.target.value)}>
                                        <option value="">Select Location</option>
                                        {Object.keys(availableLocations).sort().map((location, i) => {
                                            if (location === from) {
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
                                    {to}
                                    <span className="delete" onClick={this.resetTo}>x</span>
                                </h5>
                            }
                    </div>
                </div>
            </div>
        )
    }
}
