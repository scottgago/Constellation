import React, { Component } from 'react';
import Menu from './menu'
import MainView from './mainview'
import Admin from './admin.view'
import User from './user.view'


export default class App extends Component {
	render () {
		return(
			<div>
				<Menu />
				<MainView />
				<Admin  />
      			<User  />
			</div>
		)
	}
}