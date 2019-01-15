import * as actions from '@/actions';
import * as selectors from '@/selectors';

import Home from './components/Home';

export default {
  INDEX: {
    path: '/',
    component: Home,
  },
};

export const routerOptions = {
  onBeforeChange(dispatch, getState) {
    if (selectors.getIsLoggedIn(getState())) {
      dispatch(actions.fetchData('movies'));
    }
  },
};
