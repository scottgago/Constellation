import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';


const style = {
	menubar : {
		'backgroundColor': 'gray',
		'opacity': .9,
    'z-index': -1
	},
  containerStyle : {
    maxWidth: '100%'
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
        <Drawer
          docked={false}
          open={this.state.open}
          zDepth= {5}
          onRequestChange={(open) => this.setState({open})}>
            <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 3</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 4</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 5</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 6</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 7</MenuItem>

        </Drawer>
      </div>
			)
	}
}