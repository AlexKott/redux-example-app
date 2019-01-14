import React from 'react';

const getListItemStyles = isWatched => ({
  padding: '6px',
  margin: '3px 0',
  backgroundColor: isWatched ? '#80e579' : '#ef9781',
  color: '#333',
});

const MovieListItem = ({ movie = {}}) => (
  <li style={getListItemStyles(movie.isWatched)}>
    {movie.title}
  </li>
);

export default MovieListItem;
