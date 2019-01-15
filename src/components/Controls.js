import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions';
import * as s from '@/selectors';

import '@/styles/controls.css';

const mapStateToProps = state => ({
  isLoggedIn: s.getIsLoggedIn(state),
});

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(actions.loginUser()),
  onLogout: () => dispatch(actions.logoutUser()),
});

const Controls = ({
  isLoggedIn,
  onLogin,
  onLogout,
}) => (
  <div>
    {isLoggedIn
      ? <button
        type='button'
        className='button'
        onClick={onLogout}
      >Log Out</button>

      : <button
        type='button'
        className='button'
        onClick={onLogin}
      >Log In</button>
    }
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
