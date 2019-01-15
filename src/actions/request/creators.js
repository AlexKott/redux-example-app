import * as t from './types';

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
