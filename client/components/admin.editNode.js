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
import AdminAddVideo from './admin.addVideo'
import AdminAddArticle from './admin.addArticle'

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
    opacity: .5
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
    }
  }

  onChangeSlider = (e, value) => {
    console.log("ohnoes")
    this.state.cy.$("#" + this.state.currentNode._private.data.id).style({
      'width': 100 + value*100,
      'height': 100 + value*100,
    })
  }

  handleAddVideo = () => {
    this.setState({
      addVideo : true,
      edit: false,
    },
    () => {
      this.setState({
        addVideo: false
      })
    })
  }

  handleAddArticle = () => {
    this.setState({
      addArticle : true,
      edit: false,
    },
    () => {
      this.setState({
        addArticle: false
      })
    })
  }

  componentWillReceiveProps = (props) =>{
    console.log(props, "in edit")
    if(props.status.edit){
      console.log("deeper in edit")
      this.setState({
        cy: props.status.cy,
        edit: true,
        addVideo: false,
        addArticle: false,
        currentNode: props.status.currentNode,
        markdownDescription: props.status.currentNode._private.data.description,
        currentVideos: props.status.currentNode._private.data.videos
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
    });
  };

  render(){
    const cancel = [
      <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleRequestClosePrompt}
      />
    ];

    return (
      <div>
        <AdminAddVideo status={this.state} />
        <AdminAddArticle status={this.state} />
        <Dialog
          title="Edit Mode"
          modal={false}
          actions={cancel}
          open={this.state.edit}
          contentStyle ={style.dialogBody}>
          <div style = {style.dialogBody}>
            <Tabs style={style.contentDiv}>
              <Tab label="Style">
                <div style = {style.alignCenter}>
                  <h2 style={style.headline}>Styling</h2>
                  <p>Node size</p>
                  <Slider name="slider0" defaultValue={0.5} onChange={this.onChangeSlider} />
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
                          <TableHeaderColumn>Description</TableHeaderColumn>
                          <TableHeaderColumn>Edit</TableHeaderColumn>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {this.state.currentVideos.map(function(value){
                          return (<TableRow>
                                    <TableRowColumn>1</TableRowColumn>
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
                          <TableHeaderColumn>URL</TableHeaderColumn>
                          <TableHeaderColumn>Edit</TableHeaderColumn>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {this.state.currentArticles.map(function(value){
                          return (<TableRow>
                                    <TableRowColumn>1</TableRowColumn>
                                    <TableRowColumn>John Smith</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                  </TableRow>)
                        })}
                      </TableBody>
                    </Table>
                  </Paper>
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