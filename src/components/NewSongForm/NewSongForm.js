import React, { Component } from 'react';
import './NewSongForm.css';

class NewSongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: '',
      artistName: '',
      link: '',
      error: ''
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  checkState = () => {
    const requiredProperties = ['songName', 'artistName'];
    for (let property of requiredProperties) {
      if (!this.state[property]) {
        return false
      }
    }
    return true;
  }

  handleSubmit = event => {
    event.preventDefault();
    if (!this.checkState()) {
      this.setState({error: "Please fill out all fields"});
      return;
    }
    const {artistName, songName, link} = this.state;
    const newSong = {
      songName,
      link,
      artistName
    }
    this.props.addNewSong(newSong);
    this.setState({
      songName: '',
      artistName: '',
      link: '',
      error: ''
    })
  }

  render() {
    return (
      <form className="NewSongForm">
        {this.state.error && <p>{this.state.error}</p>}
        <label htmlFor="songName">Song Name</label>
        <input 
          id="songName"
          name="songName"
          value={this.state.songName}
          onChange={this.handleChange}
        />
        <label htmlFor="artistName">Artist Name</label>
        <input 
          id="artistName"
          name="artistName"
          value={this.state.artistName}
          onChange={this.handleChange}
        />
        <label htmlFor="link">Link</label>
        <input 
          id="link"
          name="link"
          value={this.state.link}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleSubmit}>Add Song</button>
      </form>
    );
  }
}

export default NewSongForm;
