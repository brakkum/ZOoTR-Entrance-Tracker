import React from "react";

export default class Song extends React.Component {

    state = {
        hovered: false
    };

    mouseOver = () => {
        this.setState({hovered: true});
    };

    mouseOut = () => {
        this.setState({hovered: false});
    };

    addOrResetSong = () => {
        let song = this.props.song;
        if (song.collected) {
            this.props.removeSong(song.name);
        } else {
            this.props.acquireSong(song.name);
        }
    };

    render() {
        let song = this.props.song;
        return(
            <div className="warp-song">
                <div
                    style={{
                        color: (song.collected ? song.color : "white"),
                        opacity: ((song.collected || this.state.hovered) ? "1" : ".5"),
                        textAlign: "center"
                    }}
                    onMouseOver={this.mouseOver}
                    onMouseOut={this.mouseOut}
                    onClick={this.addOrResetSong}
                >
                    <h6 className="is-size-6">{song.name}</h6>
                </div>
            </div>
        )
    }
}
