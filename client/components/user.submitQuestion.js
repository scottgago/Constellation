import * as actions from '../actions/reducerActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AskQuestion extends Component {

	constructor(props){
		super(props)
		this.state = {
			subject: "",
			question: ""
		}
	}

	handleTextChange = (e,value) =>{
		this.state.text = value
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
        disabled={true}
        onTouchTap={this.handleSubmit}
      />
    ];

		return (
			<Dialog
				modal={false}
				bodyStyle= {styles.dialogBody}
				contentStyle= {styles.dialog}
				open={false}
				width={800}
				actions={actions}
				onRequestClose={this.handleClose}> 
					<Paper 
				    zDepth={4} 
				    style={styles.subject}>
				    <TextField 
				      hintText="Subject"
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
				      style = {styles.textStyle}

				      />
				  </Paper>
			</Dialog>
		)
	}
}

function mapStateToProps(state){

  console.debug("MAPPING PROPS TO STATE IN SUBMITQUESTION")
  return {currentNode: state.selectNode.currentNode, addQuestionOpen: state.userActions.addQuestion}
}

export default connect(mapStateToProps, actions)(AskQuestion)

