import React, { Component } from 'react';
import Header from './header'
import Menu from './menu'
import Login from './login'
import SignUp from './signup'
import MainView from './mainview'
import Video from 'react-video'

const style = {
	container: {
    'display': 'flex',           
    'flexDirection': 'column',  
    'justifyContent': 'center', 
    'alignItems': 'center',     
    'height': '480px',
    'width': '640px'
	}
}

export default class App extends Component {
	render () {
		return(
			<div>
				<Menu />
				<Header />
				<MainView />
			</div>
		)
	}
}