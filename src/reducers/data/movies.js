import * as t from '@/actions/types';

const initialState = {};

export default (state = initialState, action = {}) => {
  const { type, payload } = action;

  if (type === t.FETCH_DATA && payload.dataType === 'movies') {
    return payload.responseData;
  }

  if (type === t.MARK_WATCHED) {
    const movie = state[payload.movieId];
    return {
      ...state,
      [payload.movieId]: {
        ...movie,
        isWatched: true,
      },
    };
  }

  return state;
};

export const getAllMovies = state => Object.values(state.data.movies);
