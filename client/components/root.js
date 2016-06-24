import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// config
//import { SIGN_IN_PATH, TASKS_PATH } from '../auth/config';

// components
import App from './app';
import SignIn from './signin';
import RealApp from './realapp';


export default function Root({history, onEnter, store}) {
  return (
    <Provider store = {store} >
  		<MuiThemeProvider muiTheme={getMuiTheme()}>
  		 	<Router history={history}>
  				<Route path ='/' component={App} onEnter={onEnter} >
  					<Route path='/sign-in' component={SignIn}> </Route>
  					<Route path = '/realapp' component = {RealApp} > </Route>
  				</Route>
  			</Router>
  		</MuiThemeProvider>
  	</Provider>
  );
}

// Root.propTypes = {
//   history: PropTypes.object.isRequired,
//   onEnter: PropTypes.func.isRequired,
//   store: PropTypes.object.isRequired
// };
