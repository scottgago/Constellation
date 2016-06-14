

import React from 'react';
import ReactDOM from 'react-dom';
import {grey900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/app'



ReactDOM.render(
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<App />
	</MuiThemeProvider>
, document.getElementById('app'))



