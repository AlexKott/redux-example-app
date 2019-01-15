import React from 'react';
import { connect } from 'react-redux';

import * as s from '@/selectors';

import ListItem from './ListItem';

import '@/styles/list.css';

const mapStateToProps = state => ({
  movies: s.getFilteredMovies(state),
});

const List = ({ movies = [] }) => (
  <ul className='list'>
    {movies.map(movie => (
      <ListItem movie={movie} key={movie.title} />
    ))}
  </ul>
);

export default connect(mapStateToProps)(List);
