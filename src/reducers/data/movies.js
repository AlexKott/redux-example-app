import * as t from '@/actions/types';

const initialState = [];

export default (state = initialState, action = {}) => {
  const { type, payload } = action;

  if (type === t.FETCHED_DATA && payload.dataType === 'movies') {
    return payload.responseData;
  }

  return state;
};

export const getAllMovies = state => state.data.movies;
