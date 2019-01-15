import * as t from '@/actions/types';

const initialState = {};

export default (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case t.FETCH_DATA: {
      if (payload.dataType === 'movies') {
        return payload.responseData;
      }
      return state;
    }

    case t.CLEAR_DATA: {
      if (payload.dataType === 'movies') {
        return initialState;
      }
      return state;
    }

    case t.MARK_WATCHED: {
      const movie = state[payload.movieId];
      return {
        ...state,
        [payload.movieId]: {
          ...movie,
          isWatched: true,
        },
      };
    }

    default:
      return state;
  }
};

export const getAllMovies = state => Object.values(state.data.movies);
