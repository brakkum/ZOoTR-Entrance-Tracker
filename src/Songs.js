import React, { useRef, useLayoutEffect } from "react";
import Song from "./Song";

export default function Songs({songs, ...props}) {

    const songsRef = useRef(null);

    useLayoutEffect(() => {
        handleResize();
    });

    const handleResize = () => {
        props.setSongsHeight(songsRef.current.clientHeight);
    };

    return (
        <div ref={songsRef} className="songs-container has-background-dark">
            {Object.keys(songs).map((song, i) => {
                return <Song
                    key={i}
                    song={songs[song]}
                    toggleSongCollected={props.toggleSongCollected}
                />
            })}
        </div>
    );
}
