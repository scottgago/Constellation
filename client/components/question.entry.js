import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import FlatButton from 'material-ui/FlatButton'

const styles = {
	avatar: {
    marginRight: 30
  }
}


export default class QuestionEntry extends Component {
	constructor(props){
		super(props)
		this.state = {
			question : props.question
		}
	}

	render () {
		return (
		<Card>
      <CardHeader
        title="Closures"
        subtitle= {this.state.question.question}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText  expandable={true}>
      	{this.state.question.answers.map((value)=>{
      		return (
      			<div>
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
      </CardText>
      <CardActions expandable={true}>
        <FlatButton label="Cancel" />
        <FlatButton label="Submit" />
      </CardActions>
    </Card>
    )
	}


}