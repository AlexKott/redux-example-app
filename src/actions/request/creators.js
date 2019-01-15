import * as t from './types';

export const clearData = dataType => ({
  type: t.CLEAR_DATA,
  payload: {
    dataType,
  },
});

export const fetchData = dataType => ({
  type: t.FETCH_DATA,
  payload: {
    dataType,
  },
});

export const markWatched = movieId => ({
  type: t.MARK_WATCHED,
  payload: {
    movieId,
  },
});
