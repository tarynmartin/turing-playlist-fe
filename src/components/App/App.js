import React, { Component } from 'react';
import './App.css';
import Songs from '../Songs/Songs'
import NewSongForm from '../NewSongForm/NewSongForm'
import { getAllSongs, postNewSong } from '../helpers/apiCalls'
import SongController from '../SongController/SongController';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: [],
      addNew: false
    }
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs() {

    getAllSongs()
      .then(songs => this.setState({songQueue: songs}))
      .catch(error => console.log('couldn\'t get songs'))
  }

  addNewSong = (newSong) => {
    postNewSong(newSong)
      .then(response => this.getSongs())
      .catch(error => console.log('we couldn\'t add the song'))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
          <Songs
            songs={this.state.songQueue}
          />
          <SongController />
          <NewSongForm
            addNewSong={this.addNewSong}
          />
          </main>
        </div>
      </div>
    )
  }
}

export default App;
