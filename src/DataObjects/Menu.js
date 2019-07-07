import React from "react";

export default class Menu extends React.Component {

    render() {
        return(
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <div className="navbar-item has-text-light" onClick={this.props.saveState}>
                        Save
                    </div>
                    <div className="navbar-item has-text-light" onClick={this.props.resetState}>
                        Reset
                    </div>
                </div>
            </nav>
        )
    }
}
