import React from 'react';
import ReactDom from 'react-dom';
import NewSongForm from './NewSongForm';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NewSongForm', () => {
  it('should show all inputs', () => {
    render(<NewSongForm addNewSong={jest.fn()}/>)

    const songInput = screen.getByPlaceholderText('Song Title');
    const artistInput = screen.getByPlaceholderText('Song Artist');
    const linkInput = screen.getByPlaceholderText('Link to Song');

    expect(songInput).toBeInTheDocument();
    expect(artistInput).toBeInTheDocument();
    expect(linkInput).toBeInTheDocument();
  })
  it('should change state when there are inputs', () => {
    render(<NewSongForm addNewSong={jest.fn()}/>)

    fireEvent.change(screen.getByPlaceholderText('Song Title'), {target: {value: 'hello'}})
    fireEvent.change(screen.getByPlaceholderText('Song Artist'), {target: {value: 'The Beatles'}})
    fireEvent.change(screen.getByPlaceholderText('Link to Song'), {target: {value: 'www.youtube.com'}})

    expect(screen.getByPlaceholderText('Song Title').value).toEqual('hello');
    expect(screen.getByPlaceholderText('Song Artist').value).toEqual('The Beatles');
    expect(screen.getByPlaceholderText('Link to Song').value).toEqual('www.youtube.com');
  })
})
