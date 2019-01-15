import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMarkWatched: () => dispatch(actions.markWatched(ownProps.movie.id)),
});

const ListItem = ({ movie = {}, onMarkWatched }) => (
  <li
    className={`list__item ${movie.isWatched ? 'watched' : ''}`}
    onClick={onMarkWatched}
  >
    {movie.title}
  </li>
);

export default connect(null, mapDispatchToProps)(ListItem);
