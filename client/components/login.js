import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export default class Login extends Component {

	constructor(props){
		super(props)
		this.state = {

		}
	}
	submit = (e) => {
		console.log(e)
	}
				
	render () {
					return (

      <div className="Login-Form">
				<form Method="Post">
					<input Type="Text" Name="Username" Placeholder="Username"/>
					<input Type="Password" Name="Password" Placeholder="Password"/>
					<button Type="Submit" className="Button">Login</button>
					<p className="Recovery-Text">Forget your <a Href="#" className="Recovery-Link">Account/Password?</a></p>
				</form>
			</div>

    )
				}
}


