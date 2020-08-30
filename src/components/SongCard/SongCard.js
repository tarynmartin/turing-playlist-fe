import React from 'react';
import './SongCard.css';

const SongCard = ({ songName, artistName, link, id}) => {
  
  return (
    <article className="SongCard">
      <h1>{songName}</h1>
      <h2>by {artistName}</h2>
      <a>{link}</a>
    </article>
  )

}

export default SongCard;
