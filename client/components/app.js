import React, { Component } from 'react';
import Menu from './menu'
import MainView from './mainview'
import Admin from './admin.view'
import User from './user.view'
import Drawer from 'material-ui/Drawer';
import * as actions from '../actions/reducerActions';
import { connect } from 'react-redux';
import { POST_SIGN_IN_PATH, POST_SIGN_OUT_PATH } from '../auth/config';

// const styles = {
// 	launchContainerStylePanel2 : {
// 	    maxWidth: '100%',
// 	    display: 'block ',
// 	    position: 'absolute',
// 	    background: 'url(./assets/imgs/metalBackground.jpg)',
// 	    backgroundSize: 'cover',
// 	    transitionDuration: '.5s',
// 	    transitionDelay: '.4s',
// 	    zIndex: 1000000
//   },
// }


class App extends Component {
	static contextTypes = {
    	router: React.PropTypes.object.isRequired
	};

	constructor(props, context) {
  	super(props, context);
		this.signOut = ::this.signOut;
	}

	componentWillReceiveProps(nextProps) {
  	const { router } = this.context;
  	const { auth } = this.props;

  	if (auth.authenticated && !nextProps.auth.authenticated) {
    		router.replace(POST_SIGN_OUT_PATH);
  	}
  	else if (!auth.authenticated && nextProps.auth.authenticated) {
    		router.replace(POST_SIGN_IN_PATH);
  	}
  }
	signOut() {
		this.props.signOut();
		window.location.replace('/');
	}
	render () {
		const {auth, children} = this.props;
		return (
			<div className = 'initialBackground'>
				<ul className="header__links">
					{auth.authenticated ? <li><a className="header__link" onClick={this.signOut} href="#">Sign out</a></li> : null}
				</ul>
				<div>{children}</div>
			</div>
	);
	}
}
export default connect(state=>({
  auth:state.auth
}), dispatch => ({
  signOut: ()=>dispatch(signOut())
}))(App);
