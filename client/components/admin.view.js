import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import * as actions from '../actions/reducerActions';

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

  handleRequestOpenCreate = () => {
    this.props.openCreate()
    this.props.closeAdmin()
  };

  handleRequestClosePrompt = () => {
    this.props.closeAdmin()
  };

  handleRequestOpenEdit = () => {
    this.props.openEdit()
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.props.closeAdmin()
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
            open={this.props.openAdminView}
            onRequestClose={this.handleClose}>
            
        </Dialog>
      </div>
    )
  }
  
}

function mapStateToProps(state){
  console.log(state, "creating")
  return { openAdminView: state.selectNode.openAdminView, create: state.adminAdd.create, currentNode : state.selectNode.currentNode, cy: state.selectNode.cy }
}

export default connect(mapStateToProps, actions)(Admin)

//<MarkdownParser markdown={this.state.launchPageText}/>}

