import React, { Component } from 'react';
import './NewSongForm.css';

class NewSongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: '',
      songArtist: '',
      songLink: '',
    }
  }

  addInfo = (event) => {
    const inputKey = event.target.name;
    const inputValue = event.target.value;
    this.setState({[inputKey]: inputValue});
  }

  submitNewSong = (event) => {
    event.preventDefault();
    const newSong = {
      songName: this.state.songName,
      artistName: this.state.songArtist,
      link: this.state.songLink
    }

    console.log(newSong);
    this.props.addNewSong(newSong);
    this.clearInputs();
  }

  clearInputs() {
    this.setState({songName: '', songArtist: '', songLink: ''})
  }

  render() {
    return (
      <div>
        <h1>Add A Song!</h1>
        <input
          name='songName'
          placeholder='Song Title'
          value={this.state.songName}
          onChange={this.addInfo}
        />
        <input
          name='songArtist'
          placeholder='Song Artist'
          value={this.state.songArtist}
          onChange={this.addInfo}
        />
        <input
          name='songLink'
          placeholder='Link to Song'
          value={this.state.songLink}
          onChange={this.addInfo}
        />
        <button onClick={this.submitNewSong}>Submit</button>
      </div>
    )
  }
}

export default NewSongForm;
