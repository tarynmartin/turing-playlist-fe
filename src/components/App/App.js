import React, { Component } from 'react';
import './App.css';
import Songs from '../Songs/Songs'
import { getAllSongs } from '../helpers/apiCalls'
import SongController from '../SongController/SongController';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: []
    }
  }

  componentDidMount() {
    getAllSongs()
      .then(songs => this.setState({songQueue: songs}))
      .catch(error => console.log('couldn\'t get songs'))
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
          </main>
        </div>
      </div>
    )
  }
}

export default App;
