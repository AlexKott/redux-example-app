import { createSelector } from 'reselect';

import {
  getAllMovies,
  getSearchFilter,
} from './index';

export const getFilteredMovies = createSelector(
  [
    getAllMovies,
    getSearchFilter,
  ],
  (movies, filter) => movies.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
);
