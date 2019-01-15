import * as t from '@/actions/types';

const initialState = [{
  title: 'Green Book',
  isWatched: true,
}, {
  title: 'Spider Man 24',
  isWatched: false,
}, {
  title: 'Oblivion',
  isWatched: true,
}];

export default (state = initialState, action = {}) => {
  const { type, payload } = action;

  if (type === t.FETCH_DATA && payload.dataType === 'movies') {
    return payload.responseData;
  }

  return state;
};

export const getAllMovies = state => state.data.movies;
