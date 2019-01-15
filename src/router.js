import * as actions from '@/actions';

import Home from './components/Home';

export default {
  INDEX: {
    path: '/',
    component: Home,
  },
};

export const routerOptions = {
  onBeforeChange(dispatch) {
    dispatch(actions.fetchData('movies'));
  },
};
