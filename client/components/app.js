import React, { Component } from 'react';
import Menu from './menu'
import MainView from './mainview'


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

/**

Initialize the app here

**/

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