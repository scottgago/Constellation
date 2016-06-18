import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';
import MarkdownParser from './markdown';
import Drawer from 'material-ui/Drawer';
import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';
import YouTube from 'react-youtube';

import { connect } from 'react-redux';
import * as actions from '../actions/reducerActions';

var MarkdownEditor = require('react-markdown-editor').MarkdownEditor;
import TextField from 'material-ui/TextField';

const styles = {
  dialog: {
  	alignItems: 'center',
  	justifyContent: 'center',
  	overflow: 'scroll',
  },
	dialogBody: {
		minWidth: 600,
		minHeight: 600,
		overflow: 'scroll'
	},
	dialogHuge : {
		position: 'fixed',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		overflow: 'auto',
		minHeight: 600,
		width: '100%',
		maxWidth: 'none'
	},
  dialogHugePlayer: {
    minHeight: 580
  },
	rocketImg: {
		opacity: .2,
		maxHeight: '100%',
		position: 'fixed',
		maxWidth: '100%'
  },
	floatLeft: {
		float: 'left',
    width: '49%',
		maxWidth: "50%",
		marginTop: 10
	},
	floatRight: {
		float: 'right',
		maxWidth: "50%",
    width: '49%',
    marginTop: 10,
    height: 575,
		overflow: 'scroll'

	},
  topTab : {
    height: 35,
    textAlign: 'top'
  },
  markdownMargins : {
    margin: 3
  },
	buttonDecline: {
		width: '50%',
		color: 'white',
	},
	buttonAccept: {
		width: '50%',
		color: 'white',
	},
	description: {
		background: 'transparent'
	},
  loginRow: {
  flexDirection: 'row'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    opacity: 1,
  },
  textStyle: {
    marginLeft: 20
  }
}



class User extends Component {

  handleCloseModule = () => {
    this.props.closeModule()
  };

  handleOpenModule = () => {
    this.props.openModule()
  };

  handleClosePrompt = () => {
    this.props.closeUserView()
  };

  render(){

    const opts = {
      height: 390,
      width: '100%',
    };

    const cancel = [
      <FlatButton
          label="Back to galactic view"
          primary={true}
          onTouchTap={this.props.closeModule}
      />
    ];

      const contentStyle = {
      minWidth: 640,
      height: '100%',
      minHeight: 480,
      alignItems: 'center',
      justifyContent: 'center'
    }

    console.log(this.props.moduleDescription)


    return(
  		<div>
  		  <Dialog
          modal={false}
          bodyStyle= {styles.dialogBody}
          contentStyle= {styles.dialog}
          open={this.props.openUserView}
          onRequestClose={this.handleClose}>

          <div>
            <Paper style={styles.dialog} zDepth={2}>
              <RaisedButton onClick = {this.handleClosePrompt} backgroundColor ='#ff0000' style={styles.buttonDecline}>ABORT</RaisedButton>
          	  <RaisedButton onClick = {this.handleOpenModule} backgroundColor ='#3ed715' style={styles.buttonAccept}>LAUNCH</RaisedButton> 
            </Paper >
            <MarkdownParser style={styles.description} markdown={this.props.moduleDescription}/>
          	<img style={styles.rocketImg} src = 'http://clipartix.com/wp-content/uploads/2016/05/Rocket-clip-art-free-clip-art-microsoft-clip-art-christmas-clip-2.png' />
          </div>
        </Dialog>
        <Dialog
          modal={true}
          contentStyle={styles.dialogHuge}
          open={this.props.openModuleView}
          actions={cancel}
          autoDetectWindowHeight = {false}>
        	<Tabs>
            <Tab label="Content" >
              <Tabs styles = {styles.dialogBody} tabItemContainerStyle={styles.topTab}>
              {this.props.currentVideos.map(function(value){
                return (<Tab label={value.name}>
                 <div style={styles.floatLeft}>
                  <Paper zDepth={2}>
                    <YouTube
                     videoId={value.video}
                     opts={opts} />
                    </Paper>
                  </div>
                  <div>
                    <Paper style={styles.floatRight} zDepth={2}>
                      <MarkdownParser style={styles.markdownMargins} markdown={value.markdown}/>
                    </Paper>
                  </div>
                </Tab>)
              })}
               
              </Tabs>
            </Tab>
            <Tab label="Documentation">
              <Tabs tabItemContainerStyle={styles.topTab}>
              {this.props.currentArticles.map((value)=>{
                return ( <Tab label = {value.name}>
                  <div style={styles.dialogHugePlayer}>
                    <iframe style={styles.dialogHugePlayer} src={value.url} height={'50%'} width={'100%'}/>
                  </div>
                  </Tab>)

              })}
              </Tabs>
            </Tab>
            <Tab label="Questions">
              <div>
                <h2 style={styles.headline}>Questions</h2>
                <p>Please confirm your edit by typing 'confirm' in the textbox below </p>
                <Paper zDepth={2}>
                </Paper>
              </div>
            </Tab>
          </Tabs>
        </Dialog>
      </div>
  	)
  }
}

function mapStateToProps(state){
  console.log(state, "mapping state to props in user.view.js")
  return ({openModuleView: state.selectNode.openModuleView, 
          moduleDescription: state.selectNode.moduleDescription, 
          currentArticles: state.selectNode.currentArticles, 
          currentVideos: state.selectNode.currentVideos, 
          previousNode: state.selectNode.previousNode, 
          currentNode: state.selectNode.currentNode, 
          openUserView: state.selectNode.openUserView })
}

export default connect(mapStateToProps, actions)(User)