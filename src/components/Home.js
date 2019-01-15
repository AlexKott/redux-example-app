import React from 'react';

import Filter from './Filter';
import List from './List';
import Header from './Header';

const Home = () => [
  <Header key='page-header' />
  ,
  <Filter key='movie-filter' />
  ,
  <List key='movie-list' />
  ,
];

export default Home;
