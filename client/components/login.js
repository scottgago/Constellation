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

      <div id = "container">
        <div id="logo">
          <h1 id="loginHeader"><i> Constellations</i></h1>
        </div>
        <section className="stark-login">
          <form onSubmit={this.submit}>
            <div id="fade-box">
              <input type="text" name="username" id="username" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <button>Log In</button>
            </div>
          </form>
          <div className="hexagons">
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <br />
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <br />
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <br />
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <br />
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
            <span>⬢</span>
          </div>
        </section>
        <div id="circle1">
          <div id="inner-cirlce1">
            <h2> </h2>
          </div>
        </div>
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>

    )
				}
}


