import * as t from '@/actions/types';

const initialState = 'Gre';

export default (state = initialState, action = {}) => {
  const { type, payload } = action;

  if (type === t.SET_SEARCH_FILTER) {
    return payload.filter;
  }

  return state;
};

export const getSearchFilter = state => state.filter.search;
