import React from 'react';
import SongCard from '../SongCard/SongCard';

const Playlist = ( {songQueue} ) => {

  const songCards = songQueue.map( song => (
    <SongCard
      {...song}
    />
  ))
  
  return (
    <section>
      <h3>Your Playlist:</h3>
      {songCards}
    </section>
  )
}

export default Playlist;
