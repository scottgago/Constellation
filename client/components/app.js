import React, { Component } from 'react';
import Menu from './menu'
import MainView from './mainview'


console.log("eh")


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