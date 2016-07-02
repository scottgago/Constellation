import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
//import * as actions from '../actions/reducerActions';
import {toggleAdmin} from '../actions/reducerActions';
import {signOut} from '../auth/actions';
import Toggle from 'material-ui/Toggle';


const style = {
	menubar : {
		'backgroundColor': '#05090c',
    zIndex : 20
	},
  containerStyle : {
    maxWidth: '100%'
  },
  rightIcon:{
    display: 'flex',
    justifyContent:'center',
    alignContent:'center',
    flexDirection:'column',
    color: 'white'

  },
  menuItem:{
    position: 'relative',
    maxHeight: '33.33%',
    height: '33.33%',
    width: '100%',
    fontSize: 50,
    color: 'black',
    textAlign: 'center',
    // background: 'url("http://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/purple-nebula.jpg")',
    // backgroundSize: 'cover',
    // display: 'flex',
    // justifyContent:'center',
    // alignContent:'center',
    // flexDirection:'column'

  }
  // menuItem2:{
  //   position: 'relative',
  //   maxHeight: '33.33%',
  //   height: '33.33%',
  //   width: '100%',

  //   color: 'white',
  //   background: 'url("https://wallpaperscraft.com/image/space_background_blue_dots_73340_3840x2400.jpg")',
  //   fontSize: 50,
  //   textAlign: 'center',
  //   backgroundSize: 'cover',
  //   display: 'flex',
  //   justifyContent:'center',
  //   alignContent:'center',
  //   flexDirection:'column'
  // },
  // menuItem3:{
  //   position: 'relative',
  //   maxHeight: '33.33%',
  //   height: '33.33%',
  //   width: '100%',

  //   color: 'white',
  //   background: 'url("https://dncache-mauganscorp.netdna-ssl.com/thumbseg/1135/1135826-bigthumbnail.jpg")',
  //   fontSize: 50,
  //   textAlign: 'center',
  //   backgroundSize: 'cover',
  //   display: 'flex',
  //   justifyContent:'center',
  //   alignContent:'center',
  //   flexDirection:'column'
  // },
  // toggleStyle: {
  //   color: 'white'
  // }
}
const menuItems = [
  { route: '/widgets', text: 'Widgets' },
  { route: 'survey', text: 'Survey' },
  { route: 'about', text: 'About' }
];

class Menu extends Component {

	constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleAdminToggle = (e,value) => {
    this.props.toggleAdmin({adminMode: value})
  }

	render () {
    console.log("RENDERING MENU")
		return (
      <div>
  			<AppBar
          title="Constellations"
          style = {style.menubar}
          iconStyleRight ={ style.rightIcon}
          iconElementLeft={<IconButton onTouchTap={this.handleToggle}><MoreVertIcon /></IconButton>}
          iconElementRight={<Toggle
            label="Admin"
            onToggle={this.handleAdminToggle}
            labelStyle ={style.toggleStyle}
          />}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          zDepth= {5}
          width= {500}
          onRequestChange={(open) => this.setState({open})}>
          <div onClick = { this.props.signOut } style={style.menuItem}>Sign Out</div>


        </Drawer>
      </div>
			)
	}
}

function mapStateToProps(state){
  console.log(state, "state")
  console.debug("MAPPING STATE TO PROPS IN MENU")
  return {}
}
function mapDispatchToProps(dispatch) {
  return {
    signOut: ()=>dispatch(signOut()),
    toggleAdmin: (x)=>dispatch(toggleAdmin(x))
  }
}


export default connect(mapStateToProps, mapDispatchToProps )(Menu)
