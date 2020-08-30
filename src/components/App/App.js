import React, { Component } from 'react';
import './App.css';
import NewSongForm from '../NewSongForm/NewSongForm';
import Playlist from '../Playlist/Playlist';
import SongController from '../SongController/SongController';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:8080/api/v1/playlist')
      .then(response => response.json())
      .then(playlist => this.setState({songQueue: playlist}))
      .catch(error => console.error(error)); 
  }

  // Add a method to add new songs
  addNewSong = ( newSong ) => {
    this.setState({songQueue: [...this.state.songQueue, newSong]});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <NewSongForm addNewSong={this.addNewSong}/>
            <Playlist songQueue={this.state.songQueue}/>
            <SongController />
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
