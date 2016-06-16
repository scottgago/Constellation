import React, { Component } from 'react';
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
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

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
  adminList: {
    marginTop: 15,
    float: 'left',
    width: '48%',
    left: 0,
    height: 450

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

export default class AddNode extends Component {
	constructor(props){
		super(props)
		this.state = {
			create: false,
			cy: null,
			edit: false,
      starWidth: 100,
      starHeight: 100,
			currentNode: null,
      availableConnections: [],
      selectedConnections : [],
			passToEditNode: null,
			newNodeName : "",
			markdownDescription: "",
			starType: "./assets/imgs/star (1).png"
		}
	}

	componentWillReceiveProps = (props) =>{

    if(this.state.currentNode){
      var nodes = [];
      var newnodes = this.state.cy.nodes()
      for(var i = 0; i < newnodes.length; i++){
        nodes.push(newnodes[i])
      }
      this.setState({
        availableConnections : nodes
      })
    }
   
		if(props.status.create){
			this.setState({
				cy: props.status.cy,
				create: true,
				currentNode: props.status.currentNode
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
    this.setState({
      newNodeName : value
    })
  }

  contentChange = (e,value) => {
    this.setState({
      markdownDescription: e
    })
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

  selectedEdges = (e) => {
    this.state.selectedConnections = []
    for(var i = 0; i < e.length; i++){
      this.state.selectedConnections.push(this.state.availableConnections[e[i] - 1]._private.data.id)
    }
  }

  onConfirm = (e, value) => {
    var anchor = this
    
      var newNodeName = this.state.newNodeName
      var currentNode = this.state.currentNode._private.data.id

      var newNode = this.state.cy.add([
        {
          group: 'nodes',
          data: {
            id : newNodeName,
            description: anchor.state.markdownDescription,
            videos: [],
            articles: [],
            styles: {
              width: anchor.state.starWidth,
              height: anchor.state.starHeight
            }
          },
        },
        {
          group: 'edges',
          data: {
            id: newNodeName+currentNode,
            source: currentNode,
            target: newNodeName
          }
        }
      ])['0'].style({
      	'backgroundImage' : this.state.starType,
        'width'           : this.state.starWidth,
        'height'          : this.state.starHeight
      }).addClass('gps_ring')


      this.state.selectedConnections.forEach((edge) => {
        console.log(edge)
        this.state.cy.add({
          group: 'edges',
          data: {
            id: edge+newNode,
            source: newNodeName,
            target: edge
          }
        })
      })

      /**

      	Creates a new cytoscape node with all of current entered information. Will lead into the edit node
      	component immediately after execution

      **/

      this.state.cy.layout()
      this.setState({
        create: false,
        currentNode : null,
        newNodeName: "",

        starWidth: 100,
        starHeight: 100,
        markdownDescription: "",
        starType: "./assets/imgs/star (1).png",
        edit: true,
        passToEditNode: newNode
			},
		  () => {this.setState({
				passToEditNode: null,
				edit: false,
				passToEditNode: null
			})})
    
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
                  <div style={style.adminList}>
                  <span>Admins</span>
                  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Priviledges</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>Scott</TableRowColumn>
        <TableRowColumn>Full</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Michael</TableRowColumn>
        <TableRowColumn>Full</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Rong</TableRowColumn>
        <TableRowColumn>Full</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Jon</TableRowColumn>
        <TableRowColumn>Full</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table ></div>
                  <div style={style.nodeList}>
                  <span>Node Connections</span>
                  <Table multiSelectable={true} onRowSelection={this.selectedEdges}>
    <TableHeader enableSelectAll={false}>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Connection Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {(()=>{
        if(this.state.currentNode){
          return (
            <TableRow selectable={false}>
              <TableRowColumn>{this.state.currentNode._private.data.id}</TableRowColumn>
              <TableRowColumn>{this.state.currentNode._private.data.id}</TableRowColumn>
              <TableRowColumn>Yes</TableRowColumn>
            </TableRow>
          )
        }
      })()}
      
      {this.state.availableConnections.map((value)=>{
        return (
          <TableRow>
            <TableRowColumn>{value._private.data.id}</TableRowColumn>
            <TableRowColumn>{value._private.data.id}</TableRowColumn>
            <TableRowColumn>No</TableRowColumn>
          </TableRow>
        )
      })}
    </TableBody>
  </Table></div>
                </div>
		          </Tab>
		          <Tab label="Description Markdown">
		            <div>
		              <MarkdownEditor style = {style.contentDiv} initialContent="Test" onContentChange ={this.contentChange} iconsSet="materialize-ui"/>
		            </div>
		          </Tab>
		          <Tab label="Styling">
		                        <div style={style.marginTop}>
    <RadioButtonGroup onChange={this.starChange}style = {style.floatLeft} name="shipSpeed" defaultSelected="star1">
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
	    </Dialog>
	    </div>
	    )
	}
}