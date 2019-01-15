import React from 'react';
import { connect } from 'react-redux';

import * as s from '@/selectors';

import '@/styles/filter.css';

const mapStateToProps = state => ({
  filter: s.getSearchFilter(state),
});

const Filter = ({ filter = '' }) => (
  <div className='filter__container'>
    <label htmlFor='filter'>Filter movies:</label>
    <input
      className='filter'
      id='filter'
      value={filter}
      onChange={() => null}
    />
  </div>
);

export default connect(mapStateToProps)(Filter);
