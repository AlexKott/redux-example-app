import React from 'react';

import MovieFilter from './MovieFilter';
import MovieList from './MovieList';
import PageHeader from './PageHeader';

const Home = () => [
  <PageHeader key='page-header' />
  ,
  <MovieFilter key='movie-filter' />
  ,
  <MovieList key='movie-list' />
  ,
];

export default Home;
