import React from 'react';
import './SongCard.css';

const SongCard = (props) => {
  return (
    <div className='songcard'>
      <h1 className='song-name'>{props.song}</h1>
      <h2 className='artist'>{props.artist}</h2>
      <a className='song-link'
      href={props.songLink}>Check out {props.song}</a>
    </div>
  )
}

export default SongCard;
