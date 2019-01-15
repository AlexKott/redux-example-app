import * as t from './types';

export const loginUser = () => ({
  type: t.LOGIN_USER,
});

export const logoutUser = () => ({
  type: t.LOGOUT_USER,
});
