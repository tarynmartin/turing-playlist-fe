import React from 'react';
import SongCard from '../SongCard/SongCard'
import './Songs.css'

const Songs = (props) => {
  return(
    <div className='songs-container'>
      <h1>Songs</h1>
      <div className='songs'>
        {props.songs.map((song, index) => {
          return (
            <SongCard
              song={song.songName}
              artist={song.artistName}
              songLink={song.link}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Songs;
