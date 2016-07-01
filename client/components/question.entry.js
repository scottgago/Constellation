import * as actions from '../actions/reducerActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardMedia, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

const styles = {
	avatar: {
    marginRight: 25
  },
  containerStyle : {
  	background: "none",
  	fontFamily: "Chalks",
  	color: 'white'
  }
}


class QuestionEntry extends Component {
	constructor(props){
		super(props)
		this.state = {
			question : props.question,
			submitAnswer : '',
			lock: false
		}
	}

	handleTextChange = (e,value) =>{
		console.log(value)
		this.state.submitAnswer = value
	}

	handleAnswerSubmit = () =>{
		this.state.question.answers.push(this.state.submitAnswer)
		this.setState({
			lock: true
		})
		this.props.submitAnswer(this.props.currentNode)
	}

	render () {
		return (
		<Card style = {styles.containerStyle} >
      <CardHeader
        title={this.state.question.subject}
        subtitle= {this.state.question.question}
        actAsExpander={true}
        showExpandableButton={true}
        titleColor = "white"
        subtitleColor = "white"
      />
      <CardText  
      	expandable={true}
      	color = "white">
      	{this.state.question.answers.map((value, index)=>{
      		return (
      			<div key={index}>
      				<Avatar
          			size={30}
          			style={styles.avatar}
        			/>    
        			<span>{value}</span>
        			<br></br>
        			<br></br>
        		</div>
      		)
      	})}
      <TextField 
      	style = {styles.containerStyle}
      	textareaStyle = {styles.containerStyle}
      	hintText="Submit an answer"
      	onChange = {this.handleTextChange}
				disabled = {this.state.lock}
				fullWidth = {true}
				multiLine = {true}
      />
      </CardText>
      <CardActions expandable={true}>
        <FlatButton label="Cancel" />
        <FlatButton label="Submit" 
        	disabled = {this.state.lock}
        	onTouchTap={this.handleAnswerSubmit}
        />
      </CardActions>
    </Card>
    )
	}
}

function mapStateToProps(state){

  console.debug("MAPPING PROPS TO STATE IN QUESTIONENTRY")
  return {currentNode: state.selectNode.currentNode}
}

export default connect(mapStateToProps, actions)(QuestionEntry)