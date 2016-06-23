import React, { Component } from 'react';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginBottom: 16,
  }
};


export default class QuizEntry extends Component {
	constructor(props){
		super(props)
		this.state = {
			answer: props.answer,
			questions: props.questions,
			prompt: props.prompt
		}
	}

	render(){
		return (
			<div>
			 <h1>This is Title</h1>
			  <h3>This is the question</h3>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
          <RadioButton
            value="light"
            label="Simple"
            style={styles.radioButton}
          />
          <RadioButton
            value="ludicrous"
            label="Custom icon"
            style={styles.radioButton}
          />
          <RadioButton
            value="ludicrous"
            label="Custom icon"
            style={styles.radioButton}
          />
          <RadioButton
            value="not_light"
            label="Selected by default"
            style={styles.radioButton}
          />
          <RadioButton
            value="ludicrous"
            label="Custom icon"
            style={styles.radioButton}
          />
        </RadioButtonGroup>
      </div>
			)
	}
}