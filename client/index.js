import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import {grey900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
<<<<<<< HEAD
import { Provider } from  'react-redux'
=======
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/admin.reducer';
>>>>>>> 9b3eb57321cee2055fccb113e7e138327dc8057a
import reduxThunk from 'redux-thunk';
injectTapEventPlugin();

import App from './components/app'
import Login from './components/login'
import RootReducer from './reducers/rootReducer'

<<<<<<< HEAD
const store = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
	<Provider store = {store(RootReducer)} >
		<MuiThemeProvider muiTheme={getMuiTheme()}>
		 	<Router history={browserHistory}>
				<Route path ='/' component={App} />
			</Router>
		</MuiThemeProvider>
=======
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
	<Provider store = {createStoreWithMiddleware(reducers)}>
	  <MuiThemeProvider muiTheme={getMuiTheme()}>
		  <App />
	  </MuiThemeProvider>
>>>>>>> 9b3eb57321cee2055fccb113e7e138327dc8057a
	</Provider>
, document.getElementById('app'))



