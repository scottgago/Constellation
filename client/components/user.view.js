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
      zIndex: 100000,
      pointerEvents: 'auto'
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
    zIndex: 100000,

      pointerEvents: 'auto'

  },
  launchContainerStyle : {
    maxWidth: '100%',
    display: 'block ',
    position: 'absolute',
    background: 'url(./assets/imgs/metalBackground.jpg)',
    transitionDuration: '1.5s',
    backgroundSize: 'cover',

  },
   launchContainerStylePanel2 : {
    maxWidth: '50%',
    display: 'block ',
    position: 'absolute',
    background: 'url(http://wallpaper.zone/img/210731.jpg)',
    backgroundSize: 'cover',
    transitionDuration: '1.5s'
  },
  launchContainerStylePanel3 : {
    maxWidth: '100%',
    display: 'block ',
    position: 'absolute',
    background: 'url(http://wallpaper.zone/img/210731.jpg)',
    backgroundSize: 'cover',
    transitionDelay: '.75s',
    transitionDuration: '.25s'
  },
  launchContainerStylePanel4 : {
    maxWidth: '100%',
    display: 'block ',
    position: 'absolute',
    background: 'url(http://wallpaper.zone/img/210731.jpg)',
    backgroundSize: 'cover',
    transitionDelay: '1s',
    transitionDuration: '.25s'
  },
  launchContainerStylePanel5 : {
    maxWidth: '50%',
    display: 'block ',
    position: 'absolute',
    background: 'url(http://wallpaper.zone/img/210731.jpg)',
    backgroundSize: 'cover',
    transitionDuration: '1.5s',
    transitionDelay: '1.5s',
    zIndex: 10001
  },
  backButton: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: 5
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
    backgroundColor: "#25383C"
  },
  tabsColor2: {
    backgroundColor: "#737CA1"
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

  handleOpenModule = () => {
    document.getElementById("cy").style.display = 'none'
    this.props.cy.zoomingEnabled(false)
    this.props.cy.panningEnabled(false)
    setTimeout(()=>{
      this.props.openModule()
    },0)
    this.setState({
      gates: true
    })
    setTimeout(()=>{
      this.setState({
        gates: false
      })
    }, 750)
  };

  handleToggleNext = (event) => {
    this.setState({
      anchorEl : event.currentTarget,
      lol: true
    })
  }

  handleClosePrompt = () => {
    this.props.closeUserView()
  };

  handleOpenDrawer = (open, reason) =>{
    console.log(open)
    console.log("eh?")
  }

  checkStyle = () =>{
    if(!this.props.openModuleView){
      console.log(this.props.openModuleView)
      return styles.containerStyle
    } else {

      console.log(this.props.openModuleView)
      return newStyles.containerStyle
    }
  }

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

     const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

      const contentStyle = {
      minWidth: 640,
      height: '100%',
      minHeight: 480,
      alignItems: 'center',
      justifyContent: 'center'
    }

    

    





    console.log("RENDERING USERVIEW")

    console.log(this.props)


    return(
  		<div>
      <Drawer
            docked={false}
            containerStyle={styles.launchContainerStyle}
            onRequestChange={(open) => {(()=>{console.log("fuck")})()}}
            width={1680}
            open={this.props.openUserView}>

            <Drawer
              docked={false}

              zDepth={5}
              containerStyle={styles.launchContainerStylePanel2}
              overlayStyle={styles.overlayOpacity}
              onRequestChange={(open) => {(()=>{console.log("fuck")})()}}
              width={100}
              open={this.props.openUserView}>
            </Drawer>
            <Drawer
              docked={false}

              zDepth={5}
              containerStyle={styles.launchContainerStylePanel2}
              overlayStyle={styles.overlayOpacity}

              openSecondary={true}
              onRequestChange={(open) => {(()=>{console.log("fuck")})()}}
              width={100}
              open={this.props.openUserView}>
            </Drawer>
            <Drawer
              docked={false}

              zDepth={5}
              containerStyle={styles.launchContainerStylePanel3}
              overlayStyle={styles.overlayOpacity}

              openSecondary={true}
              onRequestChange={(open) => {(()=>{console.log("fuck")})()}}
              width={200}
              open={this.props.openUserView}>
            </Drawer>
            <Drawer
              docked={false}

              zDepth={5}
              containerStyle={styles.launchContainerStylePanel3}
              overlayStyle={styles.overlayOpacity}
              onRequestChange={(open) => {(()=>{console.log("fuck")})()}}
              width={200}
              open={this.props.openUserView}>
            </Drawer>
              

              <Drawer
              docked={false}

              zDepth={5}
              containerStyle={styles.launchContainerStylePanel4}
              overlayStyle={styles.overlayOpacity}
              onRequestChange={(open) => {(()=>{console.log("fuck")})()}}
              width={300}
              open={this.props.openUserView}>

              

              <div style={styles.panelDivs}></div>
              <div style={styles.panelDivs}>
              <RaisedButton onClick = {this.handleClosePrompt} backgroundColor ='#ff0000' style={styles.buttonDecline}>ABORT</RaisedButton>
              </div>
              <div style={styles.panelDivs}></div>
              </Drawer>
              {
              //   <Paper style= {styles.descPadding} zDepth = {5}>
              //   <MarkdownParser style={styles.description} markdown={this.props.moduleDescription}/>
              // </Paper>
            }
              <Drawer
              docked={false}
              zDepth={5}
              containerStyle={styles.launchContainerStylePanel4}
              overlayStyle={styles.overlayOpacity}
              openSecondary={true}
              onRequestChange={(open) => {(()=>{console.log("fuck")})()}}
              width={300}
              open={this.props.openUserView}>
              <div style={styles.panelDivs}></div>
              <div style={styles.panelDivs}>
              <RaisedButton onClick = {this.handleOpenModule} backgroundColor ='#3ed715' style={styles.buttonAccept}>LAUNCH</RaisedButton>
              </div>
              <div style={styles.panelDivs}></div> 
              </Drawer>

               <Drawer
              docked={false}
              zDepth={5}
              containerStyle={styles.launchContainerStylePanel2}
              openSecondary={true}
              onRequestChange={(open) => {(()=>{console.log("fuck")})()}}
              width={1800}
              open={this.state.gates}>
            </Drawer>
            <Drawer
              docked={false}
              zDepth={5}
              containerStyle={styles.launchContainerStylePanel2}
              onRequestChange={(open) => {(()=>{console.log("fuck")})()}}
              width={1800}
              open={this.state.gates}>
            </Drawer>
        
      </Drawer>





      {
  		 



    }


          <div style={this.checkStyle()}>
          

          <Drawer
              docked={false}
              zDepth={5}
              containerStyle={styles.launchContainerStylePanel2}
              openSecondary={true}
              onRequestChange={(open) => {(()=>{console.log("fuck")})()}}
              width={1800}
              open={this.state.gates}>
            </Drawer>
            <Drawer
              docked={false}
              zDepth={5}
              containerStyle={styles.launchContainerStylePanel2}
              onRequestChange={(open) => {(()=>{console.log("fuck")})()}}
              width={1800}
              open={this.state.gates}>
            </Drawer>
        
            





            
        	 <Tabs tabItemContainerStyle={styles.tabsColor} inkBarStyle={styles.inkBarStyle}>

            <Tab label="Content" >

              <Tabs tabItemContainerStyle={styles.tabsColor2} inkBarStyle={styles.inkBarStyle}>
              {this.props.currentVideos.map(function(value){
                return (<Tab label={value.name}>
                <div style={styles.contentDiv}>
                 <div style={styles.floatLeft}>
                    <YouTube
                     videoId={value.video}
                     opts={opts} />
                  </div>
                  <div>
                    <Paper style={styles.floatRight} zDepth = {4} >
                      <MarkdownParser style={styles.markdownMargins} markdown={value.markdown}/>
                    </Paper>
                  </div>
                  </div>
                </Tab>)
              })}
               
              </Tabs>
            </Tab>
            <Tab label="Documentation">
              <Tabs tabItemContainerStyle={styles.tabsColor2} inkBarStyle={styles.inkBarStyle}>
              {this.props.currentArticles.map((value)=>{
                return ( <Tab label = {value.name}>
                  <div style={styles.topIframeMargin}>
                    <iframe style={styles.dialogHugePlayer} src={value.article} height={'50%'} width={'100%'}/>
                  </div>
                  </Tab>)

              })}
              </Tabs>
            </Tab>
            <Tab label="Questions">
              <div>
               <Dialog
                modal={false}
                bodyStyle= {styles.dialogBody}
                contentStyle= {styles.dialog}
                open={false}
                width={800}
                actions={actions}
                onRequestClose={this.handleClose}> 

                  <Paper 
                    zDepth={4} 
                    style={styles.subject}>
                    <TextField 
                      hintText="Subject"
                      style = {styles.textStyle}
                      />
                  </Paper>
                  <Paper zDepth={2} />
                  <Paper
                    zDepth={2}
                    style={styles.question}
                  >
                  <TextField 
                      hintText="Question"
                      multiLine={true}
                      style = {styles.textStyle}

                      />
                  </Paper>

              </Dialog>

              {this.props.currentQuestions.map((value)=>{
                
                return <QuestionEntry question={value }/>
                
              })}
              </div>
            </Tab>
            <Tab label="Quizzes">
            <Card  >
              <CardHeader
                title="Closures"
                subtitle="A quiz on closures"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardMedia  expandable={true}>

              <QuizEntry />
              </CardMedia>
              <CardActions expandable={true}>
                <FlatButton label="Cancel" />
                <FlatButton label="Submit" />
              </CardActions>
            </Card>
            </Tab>
          </Tabs>

      <div style={styles.backButton} > 
      <Paper zDepth = {4}>           
        <FlatButton  onTouchTap={this.handleCloseModule} label="Back to Galactic View"/>
      
        <FlatButton  onTouchTap = {this.handleToggleNext} label="Next Nodes"/>
      </Paper>
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
          currentQuestions: [{
            subject: "Closures",
            question: "How does a closure keep private variables hidden?",
            answers: ["Because they do, lol", "no"]
          },
          {
            subject: "Closures",
            question: "How hidden do variables I keep, lol?",
            answers: ["Because they don't, loleleleel", "no"]
          }

          ],
          previousNode: state.selectNode.previousNode, 
          currentNode: state.selectNode.currentNode, 
          openUserView: state.selectNode.openUserView })
}

export default connect(mapStateToProps, actions)(User)