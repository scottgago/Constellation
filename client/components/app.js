import React, { Component } from 'react';
import Menu from './menu'
import MainView from './mainview'
import Admin from './admin.view'
import User from './user.view'
import Drawer from 'material-ui/Drawer';
import * as actions from '../actions/reducerActions';
import { connect } from 'react-redux';

const styles = {
	launchContainerStylePanel2 : {
	    maxWidth: '50%',
	    display: 'block ',
	    position: 'absolute',
	    background: 'url(http://wallpaper.zone/img/210731.jpg)',
	    backgroundSize: 'cover',
	    transitionDuration: '.5s',
	    transitionDelay: '.3s',
	    zIndex: 1000000
  },
}


class App extends Component {
	render () {
		return(
			<div>

				<Drawer
              docked={false}
              zDepth={5}
              containerStyle={styles.launchContainerStylePanel2}
              openSecondary={true}
              width={1800}
              open={this.props.closeBlastDoors}>
            </Drawer>
            <Drawer
              docked={false}
              zDepth={5}
              containerStyle={styles.launchContainerStylePanel2}
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
  return { closeBlastDoors : state.selectNode.closeBlastDoors }
}

export default connect(mapStateToProps, actions)(App)