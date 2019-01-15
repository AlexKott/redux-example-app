import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions';
import * as s from '@/selectors';

import '@/styles/filter.css';

const mapStateToProps = state => ({
  filter: s.getSearchFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(actions.setSearchFilter(e.target.value)),
});

const Filter = ({ filter = '', onChangeFilter }) => (
  <div className='filter__container'>
    <label htmlFor='filter'>Filter movies:</label>
    <input
      className='filter'
      id='filter'
      value={filter}
      onChange={onChangeFilter}
    />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
