import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '@/selectors';

import Background from './Background';
import Controls from './Controls';
import Filter from './Filter';
import List from './List';

import '@/styles/home.css';

const mapStateToProps = state => ({
  isLoggedIn: selectors.getIsLoggedIn(state),
});

const Home = ({ isLoggedIn = false }) => [
  <h1 key='home-title' className='title'>My VHS List</h1>
  ,
  <Background key='vhs-background' />
  ,
  <div key='content-wrapper' className='content-wrapper'>
    {isLoggedIn && <Filter />}
    {isLoggedIn && <List />}
    <Controls />
  </div>
  ,
];

export default connect(mapStateToProps)(Home);
