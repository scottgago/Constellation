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



export default class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      cy : null,
      currentNode: {},
      openPrompt: false,
      description: "",
      open: false,
      videoDesc: "",
      currentVideos: [],
      currentArticles: [],
    }
  }

  componentWillReceiveProps = (value) => {
    if(value.props.currentNode && value.props.view){
      if(value.props.currentNode._private.data.videos.length){
      	this.setState({
      		openPrompt: value.props.view,
      		cy: value.props.cy,
      		currentNode: value.props.currentNode,
      		description: value.props.currentNode._private.data.description,
      		currentVideos: value.props.currentNode._private.data.videos,
          currentArticles: value.props.currentNode._private.data.articles
      	})
      }
      if(!value.props.currentNode._private.data.videos.length){
        this.setState({
          openPrompt: value.props.view,
          cy: value.props.cy,
          currentNode: value.props.currentNode,
          description: value.props.currentNode._private.data.description,
          videoDesc: "",
          currentVideos: []
        })
      }
    }
  }

  handleClose = () => {
    this.setState({
      openPrompt: false,
      description: "",
      currentNode: null
  	});
  };

  handleOpen = () => {
    this.setState({
    	openPrompt: false,
    	open: true
    });
  };

  handleRequestClosePrompt = () => {
    this.setState({
      cy : null,
      currentNode: {},
      openPrompt: false,
      description: "",
      open: false,
      videoDesc: "",
      currentVideos: []
    });
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
          onTouchTap={this.handleRequestClosePrompt}
      />
    ];

    const contentStyle = {
    minWidth: 640,
    height: '100%',
    minHeight: 480,
    alignItems: 'center',
    justifyContent: 'center'
  }
    return(
  		<div>
  		  <Dialog
          modal={false}
          bodyStyle= {styles.dialogBody}
          contentStyle= {styles.dialog}
          open={this.state.openPrompt}
          onRequestClose={this.handleClose}>

          <div>
            <Paper style={styles.dialog} zDepth={2}>
              <RaisedButton onClick = {this.handleClose} backgroundColor ='#ff0000' style={styles.buttonDecline}>ABORT</RaisedButton>
          	  <RaisedButton onClick = {this.handleOpen} backgroundColor ='#3ed715' style={styles.buttonAccept}>LAUNCH</RaisedButton> 
            </Paper >
            <MarkdownParser style={styles.description} markdown={this.state.description}/>
          	<img style={styles.rocketImg} src = 'http://clipartix.com/wp-content/uploads/2016/05/Rocket-clip-art-free-clip-art-microsoft-clip-art-christmas-clip-2.png' />
          </div>
        </Dialog>
        <Dialog
          modal={true}
          contentStyle={styles.dialogHuge}
          open={this.state.open}
          actions={cancel}
          autoDetectWindowHeight = {false}>
        	<Tabs>
            <Tab label="Content" >
              <Tabs styles = {styles.dialogBody} tabItemContainerStyle={styles.topTab}>
              {this.state.currentVideos.map(function(value){
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
              {this.state.currentArticles.map((value)=>{
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