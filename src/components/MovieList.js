import React from 'react';
import { connect } from 'react-redux';

import * as s from '@/selectors';

import MovieListItem from './MovieListItem';

const listStyles = {
  listStyleType: 'none',
  padding: 0,
  width: '400px',
  marginLeft: '20px',
};


const mapStateToProps = state => ({
  movies: s.getAllMovies(state),
});

const MovieList = ({ movies = [] }) => (
  <ul style={listStyles}>
    {movies.map(movie => (
      <MovieListItem movie={movie} key={movie.title} />
    ))}
  </ul>
);

export default connect(mapStateToProps)(MovieList);
