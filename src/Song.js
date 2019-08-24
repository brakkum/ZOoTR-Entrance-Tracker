import React from "react";
import useHover from "./Hooks/useHover";

export default function Song({ song, toggleSongCollected }) {

    const [hoverRef, isHovered] = useHover();

    return (
        <div className="warp-song">
            <div
                style={{
                    color: (song.collected ? song.color : "white"),
                    opacity: (isHovered ? "1" : song.collected ? ".8" : ".5"),
                    textAlign: "center"
                }}
                ref={hoverRef}
                onClick={() => toggleSongCollected(song.name)}
            >
                <h6 className="is-size-7 has-text-weight-semibold">{song.name}</h6>
            </div>
        </div>
    )
}
