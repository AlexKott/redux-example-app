import React from 'react';
import { connect } from 'react-redux';

import * as s from '@/selectors';

const containerStyles = {
  marginLeft: '20px',
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
};

const inputStyles = {
  display: 'block',
  height: '32px',
  fontSize: '16px',
  fontFamily: 'inherit',
  color: '#333',
  margin: '3px 0',
  padding: '3px',
};

const mapStateToProps = state => ({
  filter: s.getSearchFilter(state),
});

const MovieFilter = ({ filter = '' }) => (
  <div style={containerStyles}>
    <label htmlFor='filter'>Filter movies:</label>
    <input
      id='filter'
      style={inputStyles}
      value={filter}
      onChange={() => null}
    />
  </div>
);

export default connect(mapStateToProps)(MovieFilter);
