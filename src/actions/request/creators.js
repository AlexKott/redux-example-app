import * as t from './types';

export const fetchData = dataType => ({
  type: t.FETCH_DATA,
  payload: {
    dataType,
  },
});
