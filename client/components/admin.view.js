import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
var MarkdownEditor = require('react-markdown-editor').MarkdownEditor;
import MarkdownParser from './markdown'
import AddNode from './admin.addNode'
import EditNode from './admin.editNode'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const style = {
  contentDiv : {
    width: '100%',
    height: '100%'
  },
  dialogBody: {
    minWidth: 1000,
    maxWidth: 'none',
    minHeight: 600
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
  textStyle: {
    marginLeft: 20
  },
  alignCenter : {
    alignItems: 'center',
    overflow: 'scroll'
  }
}

export default class Admin extends Component {
  constructor(props){
    super(props)
    this.state = {
      cy : null,
      currentNode: null,
      newNodeName: "",
      openPrompt: false,
      edit: false,
      create: false,
    }
  }

  handleRequestOpenCreate = () => {
    this.setState({
      openPrompt: false,
      create: true,
      markdownDescription: ""

    },
    () => {
      this.setState({
        create: false
      })
    });
  };

  handleRequestClosePrompt = () => {
    this.setState({
      openPrompt: false,
      currentNode : null,
      newNodeName: false,
      edit: false,
      create: false,
      markdownDescription: ""
    });
  };

  handleRequestOpenEdit = () => {
    this.setState({
      openPrompt: false,
      edit: true,
    },
    () => {
      this.setState({
        edit: false
      })
    });
  };

  onChangeSlider = (e, value) => {
    this.state.cy.$("#" + this.state.currentNode._private.data.id).style({
      'width': 100 * value,
      'height': 100 * value,
      'border-width': 30 * value
    })
  }

  componentWillReceiveProps = (value) =>{
    if(value.props.currentNode){
    this.setState({
      openPrompt: value.props.view,
      cy: value.props.cy,
      addVideo: false,
      addArticle: false,
      launchPageText: "# Curator mode\nBe in awe of the power you hold! Seriously, people are looking to you to feed their intellects.\n*Note: no pressure*\n # Create\n ## Style\n Name your node and make it pretty here! Once your node is created, it will be automatically connected to the node you created it from. If you'd like to add any additional features and content to your new node, you can select it from the main view and edit it from there.\n## Description\nProvide a brief description of your node here. Try not to go too much in depth about the content. Instead, outline objectives and common concepts covered in the node. This is your chance to get the explorers interested in learning about the concepts you worked hard to curate!\n## Confirm\n Preview your node and any TODOS, then type confirm in the command box to launch your node. \n# Edit\n## Style\n Change the styling of your node here\n## Content\nHere you can add, remove, and edit any resources currently on the node. \n## Markdown\nModify any of the markdown content on this node\n## Confirm\nConfirm your changes here!",
      currentNode: value.props.currentNode,
      markdownDescription: value.props.currentNode._private.data.description,
      currentVideos: value.props.currentNode._private.data.videos

    })
  }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render () {

     const actions = [
      <FlatButton
        label="Edit"
        primary={true}
        onTouchTap={this.handleRequestOpenEdit}
      />,
      <FlatButton
        label="Create"
        primary={true}
        onTouchTap={this.handleRequestOpenCreate}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleRequestClosePrompt}
      />,
    ];
    const cancel = [
    <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleRequestClosePrompt}
      />
    ];

    return(
      <div>
        <AddNode status={this.state} />
        <EditNode status={this.state} />
        <Dialog
            actions={actions}
            modal={false}
            contentStyle={style.alignCenter}
            bodyStyle={style.alignCenter}
            open={this.state.openPrompt}
            onRequestClose={this.handleClose}>
            <MarkdownParser markdown={this.state.launchPageText}/>
        </Dialog>
      </div>
    )
  }
  
}

