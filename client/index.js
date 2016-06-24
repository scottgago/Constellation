import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import {grey900} from 'material-ui/styles/colors';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import reduxThunk from 'redux-thunk';
import Root from './components/root';
import SignIn from './components/signin';
import App from './components/app'
import Login from './components/login'
import RootReducer from './reducers/rootReducer'
import { authRouteResolver } from './auth/route-resolver';
import { syncHistoryWithStore } from 'react-router-redux';

let middleware = applyMiddleware(reduxThunk);

const store = createStore(RootReducer, {}, middleware);
console.log(store.getState());
const syncedHistory = syncHistoryWithStore(browserHistory, store);
const onEnter = authRouteResolver(store.getState);

ReactDOM.render(
	<Root
    history={syncedHistory}
    onEnter={onEnter}
    store={store}
  />
, document.getElementById('app'))
