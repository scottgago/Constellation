import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import AdminAddVideo from './admin.addVideo';
import AdminAddArticle from './admin.addArticle';
import AddAdmin from './admin.addAdmins';
import AddConnections from './admin.addConnections'
import { connect } from 'react-redux';
import * as actions from '../actions/reducerActions';

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
    margin: "0 auto",
  },
  tabsColor: {
    backgroundColor: "#25383C"
  },
  backButton: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: 5
  },
  dialogBody: {
    minWidth: 1000,
    maxWidth: 'none',
    minHeight: 600,
  },
  textField : {
    color: 'white'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    opacity: 1,

  },
  actionsContainer : {
    backgroundColor: "#d297d8"
  },
  editBackground: {
    background: 'url(./assets/imgs/lol.jpg)',
    backgroundSize: 'cover'
  },
  editBackgroundBody: {
    background: 'url(./assets/imgs/editbackground.png)',
    backgroundSize: 'cover'
  },
  submitButton: {
    width: '100%',
    height: 40
  },
  sliderStyle:{
    maxWidth: '75%',
    width: '90%',
    bottom: 0,
    position: 'absolute'

  },
  alignCenter : {
    alignItems: 'center',
    overflow: 'scroll'
  },
  actionButtons: {
    color: '#6f2d6f'
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
  textboxMargins : {
    margin: "auto 4"
  },
  textStyles : {
    fontFamily: "Chalks",
    color: 'white',
    marginLeft: 20
  },
  pTextStyles : {
    fontFamily: "Chalks",
    color: 'white',
    marginLeft: 20,
    marginTop: 10
  },
  inkBarStyle: {
    backgroundColor: "#F88017"
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
  markDownDiv:{
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20
  }

}

class EditNode extends Component {

  constructor(props){
    super(props)

    this.state = {
      edit: false,
      cy: null,
      markdownDescription: "",
      currentVideos: [],
      starWidth: 100,
      starHeight: 100,
      currentArticles: [],
      currentNode: null,
      addVideo: false,
      addArticle: false,
      starType: "./assets/imgs/chalk.png"
    }
  }

  onChangeSlider = (e, value) => {
    this.props.currentNode.style({
      'width': 100 + value*500,
      'height': 100 + value*500,
    })
  }

  handleAddVideo = () => {
    this.props.openAddVideo()
  }

  handleAddArticle = () => {
    this.props.openAddArticle()
  }

  checkStyle = () =>{
    if(!this.props.edit){
      return style.containerStyle
    } else {
      return newStyles.containerStyle
    }
  }

  handleRequestClosePrompt = () => {
    this.setState({
      edit: false,
      cy: null,
      markdownDescription: "",
      currentVideos: [],
      starWidth: 100,
      starHeight: 100,
      currentArticles: [],
      currentNode: null,
      addVideo: false,
      addArticle: false,
      starType: "./assets/imgs/chalk.png"
    });
  };

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

  checkInit = () => {
    console.log(this.props.currentNode, "sup?")
    if(this.props.currentNode._private){
      return this.props.currentNode._private.data.id
    }
    return ""
  }

  onSubmit = () =>{


    var addNodes = []

    for(var i = 0; i < this.props.selectedEdges.length; i++){
      var flag = true
      
      for(var j = 0; j < this.props.currentNode._private.edges.length; j++){
        if(this.props.currentNode._private.edges[j]._private.data.source === this.props.selectedEdges[i] ||
           this.props.currentNode._private.edges[j]._private.data.target === this.props.selectedEdges[i]){
            flag = false
        }
      }
      if(flag){
        addNodes.push(this.props.selectedEdges[i])
      }
    }

    // Add the new Nodes in the edit

    var cleanUp = []

    for(var i = 0; i < this.props.currentNode._private.edges.length; i++){
      var flag = false
      for(var j = 0; j < this.props.selectedEdges.length; j++){
        if(this.props.currentNode._private.edges[i]._private.data.source === this.props.selectedEdges[j] ||
           this.props.currentNode._private.edges[i]._private.data.target === this.props.selectedEdges[j]){
            flag = true
        }
      }
      if(!flag){
        cleanUp.push(this.props.currentNode._private.edges[i])
      } 
    }

    for(var i = 0; i < cleanUp.length; i++){
      this.props.cy.remove(cleanUp[i])
    }

    // Clean up the nodes that are being removed


    
    for(var i = 0; i < addNodes.length; i++){

      var newEdge = {
        
        group: 'edges',
        data: {
          id : this.props.currentNode._private.data.id + addNodes[i],
          source: this.props.currentNode._private.data.id,
          target: addNodes[i]
          }
        }

      this.props.cy.add(newEdge)
      this.props.editEdges({selectedEdge: newEdge})
      document.getElementById("cy").style.display = 'block'
      this.props.cy.zoomingEnabled(true)
      this.props.cy.panningEnabled(true)

      // Add the edges in the cytoscape instance and post changes to the firebase DB

      }






      this.props.closeEdit()
  }

  handleCancel = () => {
    this.props.closeEdit()
    document.getElementById("cy").style.display = 'block'
    this.props.cy.zoomingEnabled(true)
    this.props.cy.panningEnabled(true)
  }

  render(){
    console.log("RENDERING EDITNODE")
    const cancel = [
      <FlatButton
          label="Cancel"
          onTouchTap={this.handleCancel}
      />,
      <FlatButton
          label="Submit Changes"
          primary={true}
          onTouchTap={this.onSubmit}
          style = {style.actionButtons}

      />

    ];

    return (
      <div style={this.checkStyle()}>
          <AdminAddVideo />
          <AdminAddArticle />
        
          <div style = {style.dialogBody}>
            <Tabs inkBarStyle={style.inkBarStyle} style={style.contentDiv} tabItemContainerStyle={style.tabsColor}>
              <Tab label="Style">
                <div style={style.blackBox}> 
                  <div style={style.centerDiv}>

                    <img style={style.imageContent} src={this.state.starType}/>
                  </div>
                  <Slider name="slider0" defaultValue={0} style={style.sliderStyle} onChange={this.onChangeSlider} />
                </div>
              </Tab>
              <Tab label="Content" >
                <div>
                  <p style={style.pTextStyles} >Videos</p>
                    <RaisedButton onTouchTap = {this.handleAddVideo} style={style.contentDiv}>Add a video</RaisedButton>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHeaderColumn>ID</TableHeaderColumn>
                          <TableHeaderColumn>Name</TableHeaderColumn>
                          <TableHeaderColumn>Youtube ID</TableHeaderColumn>
                          <TableHeaderColumn>Description</TableHeaderColumn>
                          <TableHeaderColumn>Edit</TableHeaderColumn>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {this.props.currentVideos.map(function(value, index){
                          return (<TableRow key={value.name}>
                                    <TableRowColumn>{index + 1}</TableRowColumn>
                                    <TableRowColumn>{value.name}</TableRowColumn>
                                    <TableRowColumn>{value.video}</TableRowColumn>
                                    <TableRowColumn>{value.description}</TableRowColumn>
                                    <TableRowColumn><RaisedButton>Edit</RaisedButton></TableRowColumn>
                                  </TableRow>)
                        })}
                      </TableBody>
                    </Table>
                  <p style={style.pTextStyles} >Documentation</p>
                    <RaisedButton onTouchTap = {this.handleAddArticle} style={style.contentDiv} >Add an article</RaisedButton>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHeaderColumn>ID</TableHeaderColumn>
                          <TableHeaderColumn>Name</TableHeaderColumn>
                          <TableHeaderColumn>URL</TableHeaderColumn>
                          <TableHeaderColumn>Description</TableHeaderColumn>
                          <TableHeaderColumn>Edit</TableHeaderColumn>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {this.props.currentArticles.map(function(value, index){
                          return (<TableRow key={value.name}>
                                    <TableRowColumn>{index + 1}</TableRowColumn>
                                    <TableRowColumn>John Smith</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                    <TableRowColumn><RaisedButton>Edit</RaisedButton></TableRowColumn>
                                  </TableRow>)
                        })}
                      </TableBody>
                    </Table>
                </div>
              </Tab>
              <Tab label="Connections/Admins">
                <div>
                    <div style={style.textboxMargins} >
                      <TextField disabled ={true}
                                 value = {this.checkInit()} 
                                 hintText = "Nodename" 
                                 inputStyle = {style.textStyles} 
                                 onChange = {this.handleChangeText} underlineShow={false} />
                    </div>
                    <AddAdmin />
                    <AddConnections />
                  
                  
                
                </div>
              </Tab>
              <Tab label="Markdown">
                <div style = {style.markDownDiv} >
                  <MarkdownEditor initialContent={this.props.markdownDescription} onContentChange ={this.contentChange} iconsSet="materialize-ui"/>
                  <RaisedButton style = {style.submitButton} > Submit markdown changes </RaisedButton>
                </div>
              </Tab>
            </Tabs>
          </div>
          <div style={style.backButton} > 
                     
              <FlatButton style={style.buttonFonts} onTouchTap={this.handleCancel} label="Exit without saving"/>
              <FlatButton style={style.buttonFonts} onTouchTap={this.onSubmit} label="Save and exit"/>
            
          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.debug("MAPPING STATE TO PROPS IN EDITNODE")
  return { markdownDescription: state.adminEdit.markdownDescription, selectedEdges: state.adminAdd.selectedEdges, edit: state.adminEdit.edit, currentVideos: state.selectNode.currentVideos, currentArticles: state.selectNode.currentArticles, currentNode : state.selectNode.currentNode, cy: state.selectNode.cy }
}

export default connect(mapStateToProps, actions)(EditNode)