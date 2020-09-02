import React from 'react';
import ReactDom from 'react-dom';
import SongCard from './SongCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SongCard', () => {
  it('should display all song information', () => {
    render(<SongCard song='Hello' artist='The Beatles' songLink='youtube.com' key='10'/>)

    const song = screen.getByText('Hello');
    const artist = screen.getByText('The Beatles');
    const link = screen.getByText('Check out Hello')

    expect(song).toBeInTheDocument();
    expect(artist).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  })
})
