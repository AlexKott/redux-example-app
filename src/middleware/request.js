import requestAdapter from '@/adapters/request';
import * as actions from '@/actions';
import * as t from '@/actions/types';

export default store => next => async action => {
  const { type, payload } = action;

  if (type === t.FETCH_DATA) {
    payload.responseData = await requestAdapter.fetch(payload.dataType);

    store.dispatch(actions.setLoading(false));
  }

  next(action);
};
