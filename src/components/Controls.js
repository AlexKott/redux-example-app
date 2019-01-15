import React from 'react';
import { connect } from 'react-redux';

import * as s from '@/selectors';

import '@/styles/controls.css';

const mapStateToProps = state => ({
  isLoggedIn: s.getIsLoggedIn(state),
});


const Controls = ({ isLoggedIn }) => (
  <div>
    {isLoggedIn
      ? <button type='button' className='button'>Log Out</button>
      : <button type='button' className='button'>Log In</button>
    }
  </div>
);

export default connect(mapStateToProps)(Controls);
