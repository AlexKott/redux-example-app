import * as actions from '@/actions';
import * as t from '@/actions/types';

export default store => next => action => {
  const { type } = action;

  if (type === t.FETCH_DATA) {
    store.dispatch(actions.setLoading(true));
  }

  next(action);
}
