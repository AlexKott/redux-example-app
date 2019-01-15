import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '@/selectors';

import Filter from './Filter';
import List from './List';
import Header from './Header';

const mapStateToProps = state => ({
  isLoggedIn: selectors.getIsLoggedIn(state),
});

const Home = ({ isLoggedIn = false }) => {
  if (isLoggedIn) {
    return [
      <Header key='page-header' />
      ,
      <Filter key='movie-filter' />
      ,
      <List key='movie-list' />
      ,
    ];
  }

  return <Header key='page-header' />;
};

export default connect(mapStateToProps)(Home);
