import React from 'react';
import { connect } from 'react-redux';

import * as s from '@/selectors';

const buttonStyles = {
  WebkitAppearance: 'none',
  backgroundColor: '#333',
  color: '#FCFDF3',
  border: 0,
  boxShadow: 'none',
  height: '30px',
  width: '80px',
  fontSize: '16px',
};

const mapStateToProps = state => ({
  isLoggedIn: s.getIsLoggedIn(state),
});


const UserControls = ({ isLoggedIn }) => (
  <div>
    {isLoggedIn
      ? <button type='button' style={buttonStyles}>Log Out</button>
      : <button type='button' style={buttonStyles}>Log In</button>
    }
  </div>
);

export default connect(mapStateToProps)(UserControls);
