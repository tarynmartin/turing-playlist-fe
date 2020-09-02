import React from 'react';
import App from './App';
import NewSongForm from '../NewSongForm/NewSongForm'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
jest.mock('../helpers/apiCalls.js');
import { getAllSongs, postNewSong } from '../helpers/apiCalls'

test('true should be true', () => {
  expect(true).toEqual(true);
});

describe('App', () => {
  it('should be able to add a new song', async () => {
    const mockSubmitNewSong = jest.fn();
    const newSong = {
      songName: 'Hello',
      songArtist: 'The Beatles',
      songLink: 'youtube.com'
    }

    getAllSongs.mockResolvedValueOnce([
      {
        songName: 'blah',
        artistName: 'blah',
        link: 'blah'
      },
      {
        songName: 'hah',
        artistName: 'hah',
        link: 'hah'
      }
    ])

    postNewSong.mockResolvedValueOnce({
      songName: 'Hello',
      artistName: 'The Beatles',
      link: 'youtube.com'
    })

    render(<App />);

    fireEvent.change(screen.getByPlaceholderText('Song Title'), {target: {value: 'Hello'}})
    fireEvent.change(screen.getByPlaceholderText('Song Artist'), {target: {value: 'The Beatles'}})
    fireEvent.change(screen.getByPlaceholderText('Link to Song'), {target: {value: 'youtube.com'}})
    fireEvent.click(screen.getByText('Submit'))

    const songOne = screen.getByText('blah');
    const songTwo = screen.getByText('hah');
    const songThree = screen.getByText('Hello');

    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(songOne).toBeInTheDocument();
    expect(songTwo).toBeInTheDocument();
    expect(songThree).toBeInTheDocument();
  })
  it('should update songs when a new song is added', () => {
    // to add a new song, user clicks on submit button on form and calls addNewSong method in App
    // once it gets there, it posts new song to the Playlist
    // on returning from post successfully, it calls getSongs(), which sets state with all of the playlist to display
    //set up
    //execution
    //assertion
  })
})
