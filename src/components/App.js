import React from 'react';
import { connect } from 'react-redux';

import * as s from '@/selectors';

import Loader from './Loader';

import '@/styles/app.css';

const mapStateToProps = (state) => {
  const route = state.location.type;
  const RouteComponent = state.location.routesMap[route].component;
  return {
    RouteComponent,
    isLoading: s.getIsLoading(state),
  };
};

const App = ({ RouteComponent, isLoading }) => [
  <Loader key='loader' isLoading={isLoading} />
  ,
  <RouteComponent key='route-comp' />
  ,
];

export default connect(mapStateToProps)(App);
