import * as actions from '../actions/reducerActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';

const styles = {
	question: {
    	width: '100%',
    	height: 300, 
    	overflow: 'scroll',
		background: "none",
  		fontFamily: "Chalks",
  		color: 'white'
  	},
  	textStyle : {
		fontFamily: "Chalks",
  		color: 'white'
  	},
	dialogBody: {
		minHeight: 600,
		overflow: 'scroll',
		background: 'url(./assets/imgs/metalBackground.jpg)',
		backgroundSize: 'cover',
		borderRadius: 3,
		zIndex: 100002
	},
	zIndex: {
		zIndex: 100002
	},
	backButton: {
    	position: 'fixed',
    	bottom: 0,
    	right: 0,
    	margin: 5
  	},
	subject: {
    	width: '100%',
		background: "none",
  		fontFamily: "Chalks",
  		color: 'white'
  	},
	dialog: {
  		alignItems: 'center',
  		justifyContent: 'center',
  		overflow: 'scroll', 
    	width: '40%',
    	maxWidth: 'none',
  	}
}

class AskQuestion extends Component {

	constructor(props){
		super(props)
		this.state = {
			subject: "",
			question: ""
		}
	}

	handleTextChangeSubject = (e,value) => {
		console.log(value)
		this.state.subject = value
	}

	handleTextChangeQuestion = (e,value) =>{ 
		this.state.question = value
	}

	handleSubmit = () => {
		this.props.currentNode._private.data.questions.push({
			subject: this.state.subject,
			question: this.state.question,
			answers: []
		})
		this.props.submitQuestion(this.props.currentNode)
		this.props.closeQuestion()
	}
	handleClose = () => {
		this.props.closeQuestion()
	}




	render(){

		const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />
    ];

    console.log("RENDERING SUBMITQUESTIONPROMPT")

		return (
			<Dialog
				modal={true}
				style={styles.zIndex}
				bodyStyle= {styles.dialogBody}
				contentStyle= {styles.dialog}
				open={this.props.questionPrompt}
				actionsContainerStyle = {{background: 'none'}}
				width={400}
				onRequestClose={this.handleClose}> 
				    <TextField 
				      hintText="Subject"
				      hintStyle= {styles.textStyle}
				      onChange = {this.handleTextChangeSubject}
				      style = {styles.subject}
					  inputStyle = {styles.textStyle}

				    />

				  	<TextField 
				      hintText="Question"
				      hintStyle= {styles.textStyle}
				      multiLine={true}
				      onChange = {this.handleTextChangeQuestion}
				      style = {styles.question}
					  textareaStyle = {styles.textStyle}
					/>
					<div style={styles.backButton}>
					  	<FlatButton
        					label="Cancel"
        					primary={true}
        					onTouchTap={this.handleClose}
        					labelStyle={styles.textStyle}
      					/>
      					<FlatButton
        					label="Submit"
        					primary={true}
        					onTouchTap={this.handleSubmit}
        					labelStyle={{ color: '#89e894', fontFamily: "Chalks"}}
      					/>
      				</div>
			</Dialog>
		)
	}
}

function mapStateToProps(state){

  console.debug("MAPPING PROPS TO STATE IN SUBMITQUESTION")
  return {currentNode: state.selectNode.currentNode, 
          questionPrompt: state.userActions.questionPrompt}
}

export default connect(mapStateToProps, actions)(AskQuestion)

