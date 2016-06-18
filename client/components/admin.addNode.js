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

const style = {
	contentDiv : {
  	width: '100%',
  	height: '100%'
	},

  sliderStyle:{
    maxWidth: '75%',
    position: 'absolute',
    width: '90%',
    top: 400
  },
	imageContent : {
		height: 100,
    width: 100,
    left: 500,
    margin: "auto",
		position: 'absolute',
    top: 160
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
	blackBox:{
		maxWidth: '85%',
		width: '75%',
		height: '100%',
		height: 400,
		float: 'left',
		backgroundImage: 'url(./assets/imgs/pEeUsp1.jpg)',
    overflow: 'none'
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
  nodeList: {
    marginTop: 15,
    float: 'right',
    width: '48%',
    height: 450,
    right: 0,
    overflow: "scroll"
  }
}

class AddNode extends Component {
	constructor(props){
		super(props)

    console.log(this.props, "lol")
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
      selectedEdges: this.selectedEdges,
			newNodeName : "",
			markdownDescription: "",
			starType: "./assets/imgs/star (1).png"
		}

    console.log(this.props.dispatch)
	}

	componentWillReceiveProps = (props) =>{

   
		if(props.status.create){
			this.setState({
				cy: props.status.cy,
				create: true,
				currentNode: props.status.currentNode,
        selectedConnections: [props.status.currentNode._private.data.id]
			})
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

	handleRequestClosePrompt = () => {
    this.setState({
      currentNode : null,
      newNodeName: "",
      create: false,
      markdownDescription: ""
    });
  };

	handleChangeText = (e, value) => {
    this.state.newNodeName = value
    console.log(this.props)
    
  }

  contentChange = (e,value) => {
    this.state.markdownDescription = e
  }

  starChange = (e,value) => {
  	console.log(value)
  	if(value === "star1"){
  		this.setState({
  			starType: './assets/imgs/star (1).png'
  		})
  	}
  	if(value === "star2"){
  		this.setState({
  			starType: './assets/imgs/star.png'
  		})
  	}
  	if(value === "star3"){
  		this.setState({
  			starType: './assets/imgs/8902697.png'
  		})
  	}
  }

  selectedEdges = (value) => {
    this.state.selectedConnections = value
  }

  selectedNodes = (nodes) => {
    this.state.selectedConnections = nodes
  }

  onConfirm = (e, value) => {

    console.log(this.props.createNode)

    if(this.state.newNodeName.length){

      

    var anchor = this
    
      var newNodeName = this.state.newNodeName
      var currentNode = this.state.currentNode._private.data.id

      var newNode = this.state.cy.add([
        {
          group: 'nodes',
          data: {
            id : newNodeName,
            admins: ['scott'],
            description: anchor.state.markdownDescription,
            videos: [],
            articles: [],
            styles: {
              width: anchor.state.starWidth,
              height: anchor.state.starHeight
            }
          },
        }
      ])['0'].style({
      	'backgroundImage' : this.state.starType,
        'width'           : this.state.starWidth,
        'height'          : this.state.starHeight
      }).addClass('gps_ring')

      console.log(this.state.selectedConnections)

      this.state.selectedConnections.forEach((edge) => {
        this.state.cy.add({
          group: 'edges',
          data: {
            id: edge+newNodeName,
            source: newNodeName,
            target: edge
          }
        })
      })

      /**

      	Creates a new cytoscape node with all of current entered information. Will lead into the edit node
      	component immediately after execution

      **/

      this.props.

      this.state.cy.layout()
      this.setState({
        create: false,
        currentNode : null,
        newNodeName: "",
        selectedConnections: [], 
        starWidth: 100,
        starHeight: 100,
        markdownDescription: "",
        starType: "./assets/imgs/star (1).png",
        edit: false,
        passToEditNode: newNode
			},
		  () => {this.setState({
				passToEditNode: null,
				edit: false,
				passToEditNode: null
			})})
      return
    }
    this.setState({
      error : true
    }, ()=>{this.state.error = false})
    
  }

	render(){
		const cancel = [
		  <FlatButton
		      label="Cancel"
		      primary={true}
		      onTouchTap={this.handleRequestClosePrompt}
		  />,
      <FlatButton
          label="Create Node"
          primary={true}
          onTouchTap={this.onConfirm}
      />
		];
		return(
			<div>
			<EditNode status={this.state} />
			<Dialog
	      title="Create Mode"
	      modal={false}
	      actions={cancel}
				contentStyle ={style.dialogBody}
	      open={this.state.create}>
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
                  <AddConnections 
                    currentNode={this.state.currentNode} 
                    create = {this.state.create}
                    cy = {this.state.cy}
                    selectedEdges = {this.selectedEdges}/>
                </div>
		          </Tab>
		          <Tab label="Description Markdown">
		            <div>
		              <MarkdownEditor style = {style.contentDiv} initialContent="Test" onContentChange ={this.contentChange} iconsSet="materialize-ui"/>
		            </div>
		          </Tab>
		          <Tab label="Styling">
		                        <div style={style.marginTop}>
    <RadioButtonGroup onChange={this.starChange} style = {style.floatLeft} name="shipSpeed" defaultSelected="star1">
      <RadioButton
        value="star1"
        label="star1"
        style={style.radioButtonTop}
      />
      <RadioButton
        value="star2"
        label="star2"
        style={style.radioButton}
      />
      <RadioButton
        value="star3"
        label="star3"
        style={style.radioButton}
      />
      <RadioButton
        value="star4"
        label="star4"
        style={style.radioButton}
      />
    </RadioButtonGroup>
  </div>
  <div style={style.blackBox}> <img style={style.imageContent} src={this.state.starType}/>
  <Slider name="slider0" defaultValue={0} style={style.sliderStyle} onChange={this.onChangeSlider} />
  </div>
		          </Tab>
		        </Tabs>
	        </div>
          <Snackbar
          open={this.state.error}
          message={"Node name was blank or invalid. Please enter a new node name"}
          autoHideDuration={4000}
        />
	    </Dialog>
	    </div>
	    )
	}
}

function mapStateToProps(state){
  console.log(state, "eeeeh")
  return { currentNode : state.adminAdd.currentNode, cy: state.adminAdd.cy }
}

export default connect(mapStateToProps, actions)(AddNode)