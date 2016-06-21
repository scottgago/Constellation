import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton'


const style = {
	menubar : {
		'backgroundColor': '#7eabca',
	},
  containerStyle : {
    maxWidth: '100%'
  },
  menuItem:{
    position: 'relative',
    maxHeight: '33.33%',
    height: '33.33%',
    width: '100%',
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    background: 'url("http://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/purple-nebula.jpg")',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent:'center',
    alignContent:'center',
    flexDirection:'column'

  },
  menuItem2:{
    position: 'relative',
    maxHeight: '33.33%',
    height: '33.33%',
    width: '100%',

    color: 'white',
    background: 'url("https://wallpaperscraft.com/image/space_background_blue_dots_73340_3840x2400.jpg")',
    fontSize: 50,
    textAlign: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent:'center',
    alignContent:'center',
    flexDirection:'column'
  },
  menuItem3:{
    position: 'relative',
    maxHeight: '33.33%',
    height: '33.33%',
    width: '100%',

    color: 'white',
    background: 'url("https://dncache-mauganscorp.netdna-ssl.com/thumbseg/1135/1135826-bigthumbnail.jpg")',
    fontSize: 50,
    textAlign: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent:'center',
    alignContent:'center',
    flexDirection:'column'
  }
}
const menuItems = [
  { route: '/widgets', text: 'Widgets' },
  { route: 'survey', text: 'Survey' },
  { route: 'about', text: 'About' }
];

export default class Menu extends Component {

	constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

	render () {
		return (
      <div>
  			<AppBar
          title="Constellations"
          style = {style.menubar}
          iconElementLeft={<IconButton onTouchTap={this.handleToggle}><MoreVertIcon /></IconButton>}/>
          iconElementRight={<FlatButton label="Logout" />}
        <Drawer
          docked={false}
          open={this.state.open}
          zDepth= {5}
          width= {500}
          onRequestChange={(open) => this.setState({open})}>
          <div style={style.menuItem}>PROFILE</div>
          <div style={style.menuItem2}>MESSAGES</div>
          <div style={style.menuItem3}>STUFF</div>
       
        </Drawer>
      </div>
			)
	}
}