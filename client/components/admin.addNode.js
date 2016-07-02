import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/reducerActions';


import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import EditNode from './admin.editNode'

import Snackbar from 'material-ui/Snackbar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import AddAdmin from './admin.addAdmins'
import AddConnections from './admin.addConnections'

import Slider from 'material-ui/Slider';
var MarkdownEditor = require('react-markdown-editor').MarkdownEditor;

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
    pointerEvents: 'auto',
    submitQuestion: false
  }
}

const style = {
	contentDiv : {
  	width: '100%',
  	height: '100%'
	},

  sliderStyle:{
    maxWidth: '75%',
    width: '90%',
    bottom: 0,
    position: 'absolute'

  },
  dialogBody: {
    minWidth: 1000,
    maxWidth: 'none',
    minHeight: 600
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
  },
  floatLeft:{
    float: 'left',
    maxWidth: '15%',
    width: '15%',
    height: 400
  },
	imageContent : {
		display: 'block',
    margin: 'auto',
    width: '40%',
    height: "40%"	
  },
  centerDiv: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
	blackBox:{
		maxWidth: '85%',
		width: '75%',
		height: '100%',
		height: 700,
    overflow: 'none',
    margin: "0 auto"
	},
	marginTop :{
  	marginTop: 25,
  	marginLeft: 25,
  	width: '100%'
  },
  radioButtonTop:{
  	marginTop: 30,
  	marginBottom: 75,
    maxWidth: '10%'
  },
  radioButton: {
    marginBottom: 75,
    maxWidth: '10%'
  },
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
  backButton: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: 5,
    fontFamily: "Chalks",
    color: 'white'
  },
  nodeList: {
    marginTop: 15,
    float: 'right',
    width: '48%',
    height: 450,
    right: 0,
    overflow: "scroll"
  },

  buttonFonts: {

    fontFamily: "Chalks",
    color: 'white'
  }
}

class AddNode extends Component {
	constructor(props){
		super(props)

    var bind = this
    var selectedEdges = []

    if(this.props.currentNode.data){
      selectedEdges = [this.props.currentNode.data.id]
    }

		this.state = {
			create: false,
			cy: null,
			edit: false,
      starWidth: 100,
      starHeight: 100,
			currentNode: null,
      error: false,
			passToEditNode: null,
      selectedConnections: [],
      selectedEdges: selectedEdges,
			newNodeName : "",
			markdownDescription: "",
			starType: "./assets/imgs/chalk.png"
		}
	}

  onChangeSlider = (e, value) => {

    this.setState({
      starWidth : (style.imageContent.width = 100 + value*500),
      starHeight: (style.imageContent.height = 100 + value*500)
    })

    style.imageContent.width = 100 + value*500
    style.imageContent.height = 100 + value*500
    style.imageContent.left = 500 - (value*500)/2
    style.imageContent.top = 160 - (value*500)/2

  }

  // Sets the star type/width/height for the new node

	handleRequestClosePrompt = () => {
    document.getElementById("cy").style.display = 'block'
    this.props.closeCreate()
    this.props.cy.zoomingEnabled(true)
    this.props.cy.panningEnabled(true)
  };

	handleChangeText = (e, value) => {
    this.state.newNodeName = value
  }

  contentChange = (e,value) => {
    this.state.markdownDescription = e
  }

  checkStyle = () =>{
    if(!this.props.create){
      return style.containerStyle
    } else {
      return newStyles.containerStyle
    }
  }

  onConfirm = (e, value) => {
    console.log(this.props.selectedEdges)

    if(value === ""){
      this.setState({
        error: true
      },
      setTimeout(()=>{
        this.setState({
          error: false
        })
      }, 1000)
      )
    }

    this.props.createNode({cy: this.props.cy,
                           currentNode: this.props.currentNode,
                           id: this.state.newNodeName,
                           description: this.state.markdownDescription,
                           width: this.state.starWidth,
                           height: this.state.starHeight,
                           connections: this.props.selectedEdges,
                           type: this.state.starType
                         }, this.props.userID)

      /**

      	Creates a new cytoscape node with all of current entered information. Will lead into the edit node
      	component immediately after execution

      **/

      this.props.cy.layout()
      this.setState({
        create: false,
        newNodeName: "",
        starWidth: 100,
        starHeight: 100,
        markdownDescription: "",
        starType: "./assets/imgs/star (1).png",
        edit: false,
			})

      this.handleRequestClosePrompt()

  }

	render(){
    console.log("RENDERING ADDNODE")
		return(
			<div style={this.checkStyle()}>
	        <div style = {style.dialogBody}>
		        <Tabs style={style.contentDiv}>
		          <Tab label="Content" >
		            <div>
		              <p>Node name</p>
		              <Paper zDepth={2}>
		                <TextField hintText="Nodename" style={style.textStyle} onChange = {this.handleChangeText} underlineShow={false} />
		                <Divider />
		              </Paper>
                  <AddAdmin />
                  <AddConnections />
                </div>
		          </Tab>
		          <Tab label="Description Markdown">
		            <div>
		              <MarkdownEditor style = {style.contentDiv} initialContent="Test" onContentChange ={this.contentChange} iconsSet="materialize-ui"/>
		            </div>
		          </Tab>
		          <Tab label="Styling">
                <div style={style.blackBox}> 
                  <div style={style.centerDiv}>

                    <img style={style.imageContent} src={this.state.starType}/>
                  </div>
                  <Slider name="slider0" defaultValue={0} style={style.sliderStyle} onChange={this.onChangeSlider} />
                </div>
		          </Tab>
		        </Tabs>
	        </div>
          <Snackbar
          open={this.state.error}
          message={"Node name was blank or invalid. Please enter a new node name"}
          autoHideDuration={4000} />
          <div style={style.backButton} >
              <FlatButton style={style.buttonFonts} onTouchTap={this.handleRequestClosePrompt} label="Exit without saving"/>
              <FlatButton style={{ color: '#89e894', fontFamily: "Chalks"}} onTouchTap={this.onConfirm} label="Save and exit"/>
          </div>
	     </div>
	    )
	}
}

function mapStateToProps(state){
  console.debug("MAPPING STATE TO PROPS IN ADDNODE")
  return { userID: state.auth.id, selectedEdges: state.adminAdd.selectedEdges, create: state.adminAdd.create, currentNode : state.selectNode.currentNode, cy: state.selectNode.cy }
}

export default connect(mapStateToProps, actions)(AddNode)
