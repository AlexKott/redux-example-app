import * as t from '@/actions/types';

const initialState = false;

export default (state = initialState, action = {}) => {
  const { type } = action;

  if (type === t.LOGIN_USER) {
    return true;
  } else if (type === t.LOGOUT_USER) {
    return false;
  }

  return state;
};

export const getUser = state => state.session.user;
