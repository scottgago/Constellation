import * as actions from '../actions/reducerActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';

const styles = {
	question: {
    marginTop: 25,
    width: '100%',
    height: 300, 
    overflow: 'scroll'
  },

	dialogBody: {
		minHeight: 600,
		overflow: 'scroll',
    background: 'url(./assets/imgs/metalBackground.jpg)',
    backgroundSize: 'cover',
    borderRadius: 3,
    zIndex: 100002
	},
	zIndex:{
		zIndex: 100002
	},

	subject: {
    width: '100%',
    height: '100%'
  },

  dialog: {
  	alignItems: 'center',
  	justifyContent: 'center',
  	overflow: 'scroll', 
    width: '80%',
    maxWidth: 'none',
  },
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
				width={800}
				actions={actions}
				onRequestClose={this.handleClose}> 
					<Paper 
				    zDepth={4} 
				    style={styles.subject}>
				    <TextField 
				      hintText="Subject"
				      onChange = {this.handleTextChangeSubject}
				      style = {styles.textStyle}

				      />
				  </Paper>
				  <Paper zDepth={2} />
				  <Paper
				    zDepth={2}
				    style={styles.question}>
				  	<TextField 
				      hintText="Question"
				      multiLine={true}
				      onChange = {this.handleTextChangeQuestion}
				      style = {styles.textStyle}

				      />
				  </Paper>
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

