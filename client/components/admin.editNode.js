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
  }
}

export default class editNode extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      edit: false,
      cy: null,
      markdownDescription: "",
      currentVideos: [],
      currentArticles: [],
      currentNode: null,
      addVideo: false,
      addArticle: false,
      selectedConnections: []
    }
  }

  onChangeSlider = (e, value) => {
    this.state.currentNode.style({
      'width': 100 + value*500,
      'height': 100 + value*500,
    })
  }

  forceRender = () =>{
    this.setState({})
  }

  handleAddVideo = () => {
    this.setState({
      addVideo : true
    },
    () => {
      this.setState({
        addVideo: false
      })
    })
  }

  handleAddArticle = () => {
    this.setState({
      addArticle : true
    },
    () => {
      this.setState({
        addArticle: false
      })
    })
  }

  componentWillReceiveProps = (props) =>{

  

    if(props.status.edit && props.status.passToEditNode){
      this.setState({
        cy: props.status.cy,
        edit: true,
        addVideo: false,
        addArticle: false,
        currentNode: props.status.passToEditNode['0'],
        markdownDescription: props.status.passToEditNode['0']._private.data.description,
        currentVideos: props.status.passToEditNode['0']._private.data.videos
      })
      return
    }




    if(props.status.edit){
      
      this.setState({
        cy: props.status.cy,
        edit: true,
        addVideo: false,
        addArticle: false,
        currentNode: props.status.currentNode,
        markdownDescription: props.status.currentNode._private.data.description,
        currentVideos: props.status.currentNode._private.data.videos,
        currentArticles: props.status.currentNode._private.data.articles
      })
    }
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
      selectedConnections: []
    });
  };

  onSubmit = () =>{

    var addNodes = []

    for(var i = 0; i < this.state.selectedConnections.length; i++){
      var flag = true
      
      for(var j = 0; j < this.state.currentNode._private.edges.length; j++){
        console.log(this.state.currentNode._private.edges[j]._private.data.source + ' = ' + this.state.selectedConnections[i])
        console.log(this.state.currentNode._private.edges[j]._private.data.target + ' = ' + this.state.selectedConnections[i])
        if(this.state.currentNode._private.edges[j]._private.data.source === this.state.selectedConnections[i] ||
           this.state.currentNode._private.edges[j]._private.data.target === this.state.selectedConnections[i]){
            flag = false
        }
      }
      if(flag){
        console.log("pushing shit", this.state.selectedConnections[i])
        addNodes.push(this.state.selectedConnections[i])
      }
    }

    var cleanUp = []

    for(var i = 0; i < this.state.currentNode._private.edges.length; i++){
      console.log(i)
      var flag = false
      for(var j = 0; j < this.state.selectedConnections.length; j++){
        if(this.state.currentNode._private.edges[i]._private.data.source === this.state.selectedConnections[j] ||
           this.state.currentNode._private.edges[i]._private.data.target === this.state.selectedConnections[j]){
            flag = true
        }
      }
      if(!flag){

        
        
        cleanUp.push(this.state.currentNode._private.edges[i])
        
        

      } 
    }

    for(var i = 0; i < cleanUp.length; i++){
      this.state.cy.remove(cleanUp[i])
    }


    for(var i = 0; i < addNodes.length; i++){

      console.log(addNodes[i], "addnodes?")

      this.state.cy.add({
        group: 'edges',
        data: {
          id : this.state.currentNode._private.data.id + addNodes[i],
          source: this.state.currentNode._private.data.id,
          target: addNodes[i]
        }
      })
    }



    this.setState({
      edit: false,
      cy: null,
      markdownDescription: "",
      currentVideos: [],
      currentArticles: [],
      currentNode: null,
      addVideo: false,
      addArticle: false,
      selectedConnections: []
    });
  }


  selectedEdges = (value) => {
    this.state.selectedConnections = value
    console.log(value)
  }

  initTextBox = (currentNode) => {
    
    if(!currentNode){
      return ""
    }
    return currentNode._private.data.id
  }

  initConnections = (currentNode) =>{
    if(!currentNode){
      return null
    }
    return currentNode
  }

  render(){
    const cancel = [
      <FlatButton
          label="Submit Changes"
          primary={true}
          onTouchTap={this.onSubmit}
      />
    ];

    return (
      <div>
        
        <Dialog
          title="Edit Mode"
          modal={false}
          actions={cancel}
          open={this.state.edit}
          contentStyle ={style.dialogBody}>
          <AdminAddVideo status={this.state} />
          <AdminAddArticle status={this.state} />
          <div style = {style.dialogBody}>
            <Tabs style={style.contentDiv}>
              <Tab label="Style">
                <div style = {style.alignCenter}>
                  <h2 style={style.headline}>Styling</h2>
                  <p>Node size</p>
                  <Slider name="slider0" defaultValue={0} style={style.sliderStyle} onChange={this.onChangeSlider} />
                </div>
              </Tab>
              <Tab label="Content" >
                <div>
                  <p>Videos</p>
                  <Paper zDepth={2}> 
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
                        {this.state.currentVideos.map(function(value, index){
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
                  <p>Documentation</p>
                  <Paper zDepth={2}>
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
                        {this.state.currentArticles.map(function(value, index){
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
                               defaultValue = {this.initTextBox(this.state.currentNode)} 
                               hintText="Nodename" 
                               style={style.textStyle} 
                               onChange = {this.handleChangeText} underlineShow={false} />
                    <Divider />
                  </Paper>
                  <AddAdmin />
                  <AddConnections currentNode={this.initConnections(this.state.currentNode)} 
                                  edit = {this.state.edit}
                                  cy = {this.state.cy}
                                  selectedEdges = {this.selectedEdges}
                                  selectedConnections = {this.state.selectedConnections} />
                </div>
              </Tab>
              <Tab label="Markdown">
                <div>
                  <MarkdownEditor initialContent={this.state.markdownDescription} onContentChange ={this.contentChange} iconsSet="materialize-ui"/>
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