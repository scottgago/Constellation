import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import {grey900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from  'react-redux'
injectTapEventPlugin();

import App from './components/app'
import Login from './components/login'
import RootReducer from './reducers/rootReducer'



const store = createStore(RootReducer, {}, 
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

ReactDOM.render(
	<Provider store = {store} >
		<MuiThemeProvider muiTheme={getMuiTheme()}>
		 	<Router history={browserHistory}>
				<Route path ='/' component={App} />
				<Route path='/mainview' component={Login} />
			</Router>
		</MuiThemeProvider>
	</Provider>
, document.getElementById('app'))



