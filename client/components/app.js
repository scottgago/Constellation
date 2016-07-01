import React, { Component } from 'react';
import Menu from './menu'
import MainView from './mainview'
import Admin from './admin.view'
import User from './user.view'
import Drawer from 'material-ui/Drawer';
import * as actions from '../actions/reducerActions';
import { connect } from 'react-redux';
import { POST_SIGN_IN_PATH, POST_SIGN_OUT_PATH } from '../auth/config';

const styles = {
	launchContainerStylePanel2 : {
	    maxWidth: '100%',
	    display: 'block ',
	    position: 'absolute',
	    background: 'url(./assets/imgs/metalBackground.jpg)',
	    backgroundSize: 'cover',
	    transitionDuration: '.5s',
	    transitionDelay: '.4s',
	    zIndex: 1000000
  },
   centerDiv: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
}


class App extends Component {
	static contextTypes = {
    	router: React.PropTypes.object.isRequired
  	};

  	constructor(props, context) {
    	super(props, context);
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



	render () {
		const {auth, children} = this.props;
		return(
			<div>
			{
				// <div>
			
    //     			<main className="main">{children}</main>
    //   			</div>
}
				<Drawer
              		docked={false}
              		zDepth={5}
              		containerStyle={styles.launchContainerStylePanel2}
              		openSecondary={true}
              		width={1800}
              		open={this.props.closeBlastDoors}>
            	</Drawer>
				<Menu />
				<MainView />
				<Admin  />
      			<User  />
			</div>
		)
	}
}

function mapStateToProps(state){
  console.debug("MAPPING STATE TO PROPS IN APP")
  return { auth:state.auth, closeBlastDoors : state.selectNode.closeBlastDoors }
}

export default connect(mapStateToProps, actions)(App)

