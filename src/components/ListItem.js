import React from 'react';

const ListItem = ({ movie = {}}) => (
  <li className={`list__item ${movie.isWatched ? 'watched' : ''}`}>
    {movie.title}
  </li>
);

export default ListItem;
