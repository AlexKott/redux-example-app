import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';

import { connectRoutes } from 'redux-first-router';

import routes from './router';
import * as reducers from './reducers';
import * as middlewareModules from './middleware';

const customMiddleware = Object.values(middlewareModules);

// Configuration for redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

// Setup redux-first-router
const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
} = connectRoutes(routes);

// Generate store from reducers and enhancers
const combinedReducers = combineReducers({
  location: routerReducer,
  ...reducers,
});
const middleware = applyMiddleware(routerMiddleware, ...customMiddleware);
const enhancers = composeEnhancers(routerEnhancer, middleware);
const store = createStore(combinedReducers, enhancers);

export default store;
