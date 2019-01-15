import * as actions from '@/actions';
import * as t from '@/actions/types';

export default store => next => action => {
  const { type } = action;

  if (type === t.LOGIN_USER) {
    store.dispatch(actions.fetchData('movies'));
  }

  if (type === t.LOGOUT_USER) {
    store.dispatch(actions.clearData('movies'));
  }

  next(action);
}
