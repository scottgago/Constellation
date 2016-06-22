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

const style = {
  contentDiv : {
    width: '100%',
    height: '100%'
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
  tabsColor: {
    backgroundColor: "#6f2d6f"
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
    maxWidth: '90%',
    margin: "0 auto"
  },
  textStyle: {
    marginLeft: 20
  },
  alignCenter : {
    alignItems: 'center',
    overflow: 'scroll'
  },
  actionButtons: {
    color: '#6f2d6f'
  }
}

class EditNode extends Component {

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

  handleRequestClosePrompt = () => {
    this.setState({
      edit: false,
      cy: null,
      markdownDescription: "",
      currentVideos: [],
      currentArticles: [],
      currentNode: null,
      addVideo: false,
      addArticle: false,
    });
  };

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


    for(var i = 0; i < addNodes.length; i++){

      this.props.cy.add({
        group: 'edges',
        data: {
          id : this.props.currentNode._private.data.id + addNodes[i],
          source: this.props.currentNode._private.data.id,
          target: addNodes[i]
          }
        })
      this.props.addConnection()

      }

      this.props.submitEdit(this.props.currentNode)
      this.props.closeEdit()
  }

  handleCancel = () => {
    this.props.closeEdit()
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
      <div>
        
        <Dialog
          modal={false}
          actions={cancel}
          open={this.props.edit}
          bodyStyle={style.editBackgroundBody}
          actionsContainerStyle={style.actionsContainer}
          style={style.editBackground}
          contentStyle ={style.dialogBody}>
          <AdminAddVideo />
          <AdminAddArticle />
          <div style = {style.dialogBody}>
            <Tabs style={style.contentDiv} tabItemContainerStyle={style.tabsColor}>
              <Tab label="Style">
              <Paper zDepth={2}>
                <div style = {style.alignCenter}>
                  <h2 style={style.headline}>Styling</h2>
                  <p>Node size</p>
                  <Slider name="slider0" defaultValue={0} style={style.sliderStyle} onChange={this.onChangeSlider} />
                </div>
              </Paper>
              </Tab>
              <Tab label="Content" >
                <div>
                  <p>Videos</p>
                  <Paper zDepth={5}> 
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
                          return (<TableRow>
                                    <TableRowColumn>{index + 1}</TableRowColumn>
                                    <TableRowColumn>Name</TableRowColumn>
                                    <TableRowColumn>{value.video}</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                    <TableRowColumn><RaisedButton>Edit</RaisedButton></TableRowColumn>
                                  </TableRow>)
                        })}
                      </TableBody>
                    </Table>
                  </Paper>
                  <Paper zDepth={2}>
                  <p>Documentation</p>
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
                          return (<TableRow>
                                    <TableRowColumn>{index + 1}</TableRowColumn>
                                    <TableRowColumn>John Smith</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                    <TableRowColumn><RaisedButton>Edit</RaisedButton></TableRowColumn>
                                  </TableRow>)
                        })}
                      </TableBody>
                    </Table>
                  </Paper>
                </div>
              </Tab>
              <Tab label="Connections/Admins">
                <div>
                  <p>Node name</p>
                  <Paper zDepth={2}>
                    <TextField disabled ={true} 
                               hintText="Nodename" 
                               style={style.textStyle} 
                               onChange = {this.handleChangeText} underlineShow={false} />
                    <Divider />
                  </Paper>
                    <AddAdmin />
                    <AddConnections />
                  
                  
                
                </div>
              </Tab>
              <Tab label="Markdown">
                <div>
                  <MarkdownEditor initialContent={this.props.markdownDescription} onContentChange ={this.contentChange} iconsSet="materialize-ui"/>
                  <RaisedButton style = {style.submitButton} > Submit markdown changes </RaisedButton>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.debug("MAPPING STATE TO PROPS IN EDITNODE")
  return { markdownDescription: state.adminEdit.markdownDescription, selectedEdges: state.adminAdd.selectedEdges, edit: state.adminEdit.edit, currentVideos: state.selectNode.currentVideos, currentArticles: state.selectNode.currentArticles, currentNode : state.selectNode.currentNode, cy: state.selectNode.cy }
}

export default connect(mapStateToProps, actions)(EditNode)