import React from "react";
import useHover from "./Hooks/useHover";

export default function Song({song, ...props}) {

    const [hoverRef, isHovered] = useHover();

    const addOrResetSong = () => {
        if (song.collected) {
            props.removeSong(song.name);
        } else {
            props.acquireSong(song.name);
        }
    };

    return(
        <div className="warp-song">
            <div
                style={{
                    color: (song.collected ? song.color : "white"),
                    opacity: (isHovered ? "1" : song.collected ? ".8" : ".5"),
                    textAlign: "center"
                }}
                ref={hoverRef}
                onClick={addOrResetSong}
            >
                <h6 className="is-size-6">{song.name}</h6>
            </div>
        </div>
    )
}
