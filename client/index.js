

import React from 'react';
import ReactDOM from 'react-dom';
import {grey900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/admin.reducer';
import reduxThunk from 'redux-thunk';
injectTapEventPlugin();

import App from './components/app'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
	<Provider store = {createStoreWithMiddleware(reducers)}>
	  <MuiThemeProvider muiTheme={getMuiTheme()}>
		  <App />
	  </MuiThemeProvider>
	</Provider>
, document.getElementById('app'))



