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
var MarkdownEditor = require('react-markdown-editor').MarkdownEditor;

const style = {
	contentDiv : {
  	width: '100%',
  	height: '100%'
	},
	imageContent : {
		height: '100%',
		display: 'block',
    margin: '0 auto'
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
		backgroundImage: 'url(http://wallpapercave.com/wp/pEeUsp1.jpg)'
	}
}

const styles = {
  block: {
    maxWidth: 100,
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
};

export default class AddNode extends Component {
	constructor(props){
		super(props)
		this.state = {
			create: false,
			cy: null,
			currentNode: null,
			newNodeName : "",
			markdownDescription: "",
			starType: "/components/star (1).png"
		}
	}

	componentWillReceiveProps = (props) =>{
		console.log(props)
		if(props.status.create){
			this.setState({
				cy: props.status.cy,
				create: true,
				currentNode: props.status.currentNode
			})
		}
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
  			starType: '/components/star (1).png'
  		})
  	}
  	if(value === "star2"){
  		this.setState({
  			starType: '/components/star.png'
  		})
  	}
  	if(value === "star3"){
  		this.setState({
  			starType: '/components/8902697.png'
  		})
  	}
  	console.log('this,state', this.state.starType)
  }

  onConfirm = (e, value) => {
    var anchor = this
    var value = value.toLowerCase()
    if(value === 'confirm'){
      var newNodeName = this.state.newNodeName
      var currentNode = this.state.currentNode._private.data.id

      this.state.cy.add([
        { // node a
          group: 'nodes',
          data: {
            id : newNodeName,
            description: anchor.state.markdownDescription,
            videos: [],
            articles: []
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
      ]).style({
      	'backgroundImage' : this.state.starType
      })

      console.log('this state', this.state)
      this.state.cy.layout()
      this.setState({
        create: false,
        currentNode : null,
        newNodeName: "",
        markdownDescription: "",
        starType: "",

      })
    }
  }

	render(){
		const cancel = [
		  <FlatButton
		      label="Cancel"
		      primary={true}
		      onTouchTap={this.handleRequestClosePrompt}
		  />
		];
		return(
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
		                <div style={styles.marginTop}>
    <RadioButtonGroup onChange={this.starChange}style = {style.floatLeft} name="shipSpeed" defaultSelected="star1">
      <RadioButton
        value="star1"
        label="star1"
        style={styles.radioButtonTop}
      />
      <RadioButton
        value="star2"
        label="star2"
        style={styles.radioButton}
      />
      <RadioButton
        value="star3"
        label="star3"
        style={styles.radioButton}
      />
      <RadioButton
        value="star4"
        label="star4"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  <div style={style.blackBox}> <img style={style.imageContent} src={this.state.starType}/></div>
  </div>
  
		              
		             </div>
		          </Tab>
		          <Tab label="Markdown">
		            <div>
		              <MarkdownEditor style = {style.contentDiv} initialContent="Test" onContentChange ={this.contentChange} iconsSet="materialize-ui"/>
		            </div>
		          </Tab>
		          <Tab label="Confirm">
		            <div>
		              <h2 style={style.headline}>Confirmation</h2>
		              <p>Please confirm your edit by typing 'confirm' in the textbox below </p>
		              <Paper zDepth={2}>
		                <TextField hintText="Confirm" onChange={this.onConfirm} style={style.textStyle} underlineShow={false} />
		                <Divider />
		              </Paper>
		            </div>
		          </Tab>
		        </Tabs>
	        </div>
	    </Dialog>)
	}
}