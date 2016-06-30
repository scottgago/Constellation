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
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import QuizEntry from './quiz.entry';
import QuestionEntry from './question.entry'
import AskQuestion from './user.submitQuestion' 

import Avatar from 'material-ui/Avatar';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import {Card, CardActions, CardMedia, CardHeader, CardText} from 'material-ui/Card';

import { connect } from 'react-redux';
import * as actions from '../actions/reducerActions';

var MarkdownEditor = require('react-markdown-editor').MarkdownEditor;
import TextField from 'material-ui/TextField';

const newStyles = {
  containerStyle: {
      maxWidth: '100%',
      display: 'block',
      position: 'fixed',
      background: 'url(./assets/imgs/metalBackground.jpg)',
      top: 0,
      bottom: 0,
      right: 0,
      left:0, 
      backgroundSize: 'cover',
      zIndex: 100,
      pointerEvents: 'auto',
    }
  }

const styles = {
  containerStyle : {
    maxWidth: '100%',
    display: 'none',
    position: 'fixed',
    background: 'url(./assets/imgs/metalBackground.jpg)',
    top: 0,
    bottom: 0,
    right: 0,
    left:0, 
    backgroundSize: 'cover',
    zIndex: 100,
    pointerEvents: 'auto'

  },
  launchContainerStyle : {
    maxWidth: '100%',
    display: 'block ',
    position: 'absolute',
    background: 'url(./assets/imgs/metalBackground.jpg)',
    zIndex: 100,
    transitionDuration: '.75s',
    backgroundSize: 'cover',

  },
  backButton: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: 5,
    fontFamily: "Chalks",
    color: 'white'
  },
  buttonFonts: {
    fontFamily: "Chalks",
    color: 'white'
  },
  innerDiv : {
    top: 0,
    bottom: 0,
    right: 0,
    left:0, 
    backgroundColor: 'black',
    position: 'relative',
    display: 'block',
  },
  dialog: {
  	alignItems: 'center',
  	justifyContent: 'center',
  	overflow: 'scroll', 
    width: '80%',
    maxWidth: 'none',
  },

  buttonDiv:{
    minWidth: '100%',
    marginBottom: 5
  },
	dialogBody: {
		minHeight: 600,
		overflow: 'scroll',
    background: 'url(./assets/imgs/metalBackground.jpg)',
    backgroundSize: 'cover',
    borderRadius: 3
	},
  tabsColor: {
    backgroundColor: "#25383C",
    fontFamily: "Chalks",
    color: 'white'
  },

  tabsColor2: {
    backgroundColor: "#737CA1",
    fontFamily: "Chalks",
    color: 'white'
  },
  dialogBackground: {
    borderRadius: 500,
    overflow: "scroll"
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
    minHeight: 660
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
		maxWidth: "49%",
		marginTop: 10,
    marginLeft: 10
	},
	floatRight: {
		float: 'right',
		maxWidth: "49%",
    width: '49%',
    marginTop: 10,
    maxHeight: 620,
		overflow: 'scroll',
    display: 'block',
    marginRight: 10,
    padding: 10

	},
  topTab : {
    height: 35,
    textAlign: 'top'
  },
  markdownMargins : {
    margin: 3
  },
	buttonDecline: {
		minWidth: '50%',
		color: 'white',
    margin: 'auto 0'

	},
	buttonAccept: {
		minWidth: '50%',
		color: 'white',

    margin: 'auto 0'
	},
  subject: {
    width: '100%',
    height: '100%'
  },
	description: {
    padding: 10,
    marginTop: 10,
	},
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    opacity: 1,
  },
  textStyle: {
    marginLeft: 20,
    marginRight: 20,
    maxWidth: '95%',
    width: '95%'
  },
  launchDiv : {
    maxWidth: '60%',
    margin: '0 auto',
    textColor: "white"
  }, 
  descPadding: {
    height: 600,
    width: 600,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: "auto"
  },
  inkBarStyle: {
    backgroundColor: "#F88017"
  },
  radioButton: {
    marginBottom: 16,
  },
  topIframeMargin: {
    marginTop: 10
  },
  overlayOpacity: {
    opacity: 1,
    display: "none"
  },
  panelDivs:{
    position: 'relative',
    maxHeight: '33.33%',
    height: '33.33%',
    width: '100%',
  },
  question: {
    marginTop: 25,
    width: '100%',
    height: 300, 
    overflow: 'scroll'
  },
  avatar: {
    marginRight: 30
  },
  zIndex: {
    zIndex: 100000
  }
}



class User extends Component {

  constructor(props){
    super(props)
    this.state = {
        open: false,
        navigateNext: false,
        gates: false
    }
  }

  handleCloseModule = () => {

    document.getElementById("cy").style.display = 'block'
    this.props.cy.zoomingEnabled(true)
    this.props.cy.panningEnabled(true)
    this.props.closeModule()
  };

  handleOpenQuestion = () => {
    this.props.openQuestion()
  }

  handleOpenModule = () => {
    document.getElementById("cy").style.display = 'none'
    this.props.cy.zoomingEnabled(false)
    this.props.cy.panningEnabled(false)
    this.props.openModule()
    this.props.openBlastDoor()

    
    
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleToggleNext = (event) => {
    console.log(event.currentTarget)
    this.setState({
      anchorEl : event.currentTarget,
      open: true
    })
  }

  handleClosePrompt = () => {
    this.props.closeUserView()
  };

  handleOpenDrawer = (open, reason) =>{
  }

  checkStyle = () =>{
    if(!this.props.openModuleView){
      return styles.containerStyle
    } else {
      return newStyles.containerStyle
    }
  }

  checkStyleLaunch = () =>{
    if(!this.props.openUserView){
      return styles.containerStyle
    } else {
      return newStyles.containerStyle
    }
  }

  handleMenuSelect = (event, menuItem) => {
    var bind = this
    var ele = this.props.cy.filter('node[id = "' + menuItem.key + '"]')
    console.log(ele[0]._private.data.id, "lol")
    this.props.selectNode({ currentQuestions: ele[0]._private.data.questions, moduleDescription: ele[0]._private.data.description, currentArticles: ele[0]._private.data.articles, currentVideos: ele[0]._private.data.videos, currentNode: ele[0], previousNode: bind.props.currentNode})
    this.handleRequestClose()
  }

  

  render(){

    const opts = {
      height: 390,
      width: '100%',
    };

    const contentStyle = {
      minWidth: 640,
      height: '100%',
      minHeight: 480,
      alignItems: 'center',
      justifyContent: 'center'
    }
    const checkInit = () => {
      const bind = this
      if(this.props.currentNode._private){
        return this.props.currentNode._private.edges.map(function(value){
          if(value._private.data.source === bind.props.currentNode._private.data.id){
            return <MenuItem key={value._private.data.target} primaryText={value._private.data.target} />
          }
          if(value._private.data.target === bind.props.currentNode._private.data.id){
            return <MenuItem key={value._private.data.source} primaryText={value._private.data.source} />
          }
        })
      }
    }

    console.log("RENDERING USERVIEW")
    return(

      

  		<div>

        <Drawer
          docked={false}
          width={1600}
          containerStyle={styles.launchContainerStyle}
          open={this.props.openUserView}
        >
        
        <div style={this.checkStyleLaunch()}>
          <RaisedButton onClick = {this.handleClosePrompt} backgroundColor ='#ff0000' style={styles.buttonDecline}>ABORT</RaisedButton>
          <MarkdownParser style={styles.description} markdown={this.props.moduleDescription}/>
          <RaisedButton onClick = {this.handleOpenModule} backgroundColor ='#3ed715' style={styles.buttonAccept}>LAUNCH</RaisedButton>
        </div>
      
        </Drawer>


        <div style={this.checkStyle()}>
          <Tabs style = {styles.buttonFonts} tabItemContainerStyle={styles.tabsColor} inkBarStyle={styles.inkBarStyle}>
            <Tab style = {styles.buttonFonts} label="Content" >
              <Tabs tabItemContainerStyle={styles.tabsColor2} inkBarStyle={styles.inkBarStyle}>
                {this.props.currentVideos.map(function(value){
                  return (<Tab key={value.name} label={value.name}>
                    <div style={styles.contentDiv}>
                      <div style={styles.floatLeft}>
                      
                      <YouTube
                       videoId={value.video}
                       opts={opts} />
                      
                      </div>
                    <div style={styles.floatRight}>
                        <MarkdownParser className = "markdownParser"  markdown={value.markdown}/>
                    </div>
                  </div>
                </Tab>)
              })}
              </Tabs>
            </Tab>
            <Tab label="Documentation" style = {styles.buttonFonts} >
              <Tabs tabItemContainerStyle={styles.tabsColor2} inkBarStyle={styles.inkBarStyle}>
              {this.props.currentArticles.map((value)=>{
                return ( <Tab key= {value.name} label = {value.name}>
                  <div style={styles.topIframeMargin}>
                    <iframe style={styles.dialogHugePlayer} src={value.article} height={'50%'} width={'100%'}/>
                    
                  </div>
                  </Tab>)

              })}
              </Tabs>
            </Tab>
            <Tab label="Questions" style = {styles.buttonFonts} >
              <AskQuestion />
              <div>
              {this.props.currentQuestions.map((value, index)=>{
                
                return <QuestionEntry key={index} question={value}/>
                
              })}
              </div>
            </Tab>
          </Tabs>
          <Popover
                style={styles.zIndex}
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{"horizontal":"left", "vertical":"top"}}
                targetOrigin={{"horizontal":"middle","vertical":"bottom"}}
                onRequestClose={this.handleRequestClose}
              >
                <Menu onItemTouchTap = {this.handleMenuSelect} >
                  {checkInit()}
                </Menu>
              </Popover>
          <div style={styles.backButton} >
            <FlatButton style={styles.buttonFonts} onTouchTap={this.handleCloseModule} label="Back to graph view"/>
            <FlatButton style={styles.buttonFonts} onTouchTap={this.handleOpenQuestion} label="Ask A Question"/>
            <FlatButton style={styles.buttonFonts} onTouchTap = {this.handleToggleNext} label="Next Modules"/>
          </div>

          </div>
      </div>
  	)
  }
}

function mapStateToProps(state){
  console.debug("MAPPING STATE TO PROPS IN USERVIEW")
  return ({
          cy: state.selectNode.cy,
          openModuleView: state.selectNode.openModuleView, 
          moduleDescription: state.selectNode.moduleDescription, 
          currentArticles: state.selectNode.currentArticles, 
          currentVideos: state.selectNode.currentVideos, 
          currentQuestions: state.selectNode.currentQuestions,
          previousNode: state.selectNode.previousNode, 
          currentNode: state.selectNode.currentNode, 
          openUserView: state.selectNode.openUserView, 
        })
}

export default connect(mapStateToProps, actions)(User)