import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import {grey900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from  'react-redux'
import reduxThunk from 'redux-thunk';
injectTapEventPlugin();

import App from './components/app'
import Login from './components/login'
import RootReducer from './reducers/rootReducer'

const store = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
	<Provider store = {store(RootReducer)} >
		<MuiThemeProvider muiTheme={getMuiTheme()}>
		 	<Router history={browserHistory}>
				<Route path ='/' component={App} />
			</Router>
		</MuiThemeProvider>
	</Provider>
, document.getElementById('app'))



