import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ location }) => {
  const route = location.type;
  const RouteComponent = location.routesMap[route].component;
  return { RouteComponent };
};

const App = ({ RouteComponent }) => <RouteComponent />;

export default connect(mapStateToProps)(App);
