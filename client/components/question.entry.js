import React, { Component } from 'react';

styles : {
	avatar: {
    marginRight: 30
  }
}

export default class Question extends Component {
	constructor(props){
		super(props)
		this.state = {
			question : props.question
		}
	}

	render () {
		<Card>
      <CardHeader
        title="Closures"
        subtitle="A quiz on closures"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText  expandable={true}>
        {this.state.question.question}
        <br></br>
        <br></br>

        <Avatar
          size={30}
          style={styles.avatar}
        />    
        <span>LOL U SUCK But did you try this one thing?</span>
        <br></br>
        <br></br>

      </CardText>
      <CardActions expandable={true}>
        <FlatButton label="Cancel" />
        <FlatButton label="Submit" />
      </CardActions>
    </Card>
	}


}