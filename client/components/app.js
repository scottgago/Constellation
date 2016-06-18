import React, { Component } from 'react';
import Menu from './menu'
import MainView from './mainview'





export default class App extends Component {
	render () {
		return(
			<div>
				<Menu />
				<MainView />
			</div>
		)
	}
}