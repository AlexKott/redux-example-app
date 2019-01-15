import * as t from './types';

export const setSearchFilter = filter => ({
  type: t.SET_SEARCH_FILTER,
  payload: {
    filter,
  },
});

export const setLoading = isLoading => ({
  type: t.SET_LOADING,
  payload: {
    diff: isLoading ? 1 : -1,
  },
});
