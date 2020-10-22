import React, { useRef, useLayoutEffect, useState } from 'react'
import Song from './Song'

export default function Songs ({ songs, ...props }) {
  const [currentSongsHeight, setCurrentSongsHeight] = useState(0)
  const songsRef = useRef(null)

  useLayoutEffect(() => {
    handleResize()
  })

  const handleResize = () => {
    if (songsRef.current.clientHeight !== currentSongsHeight) {
      setCurrentSongsHeight(songsRef.current.clientHeight)
      props.setSongsHeight(songsRef.current.clientHeight)
    }
  }

  return (
    <div ref={songsRef} className='songs-container has-background-dark'>
      {Object.keys(songs).map((song, i) => {
        return <Song
          key={i}
          song={songs[song]}
          toggleSongCollected={props.toggleSongCollected}
    />
      })}
    </div>
  )
}
