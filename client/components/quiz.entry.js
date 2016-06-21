import React, { Component } from 'react';


export default class QuizEntry extends Component {
	constructor(props){
		super(props)
		this.state = {
			answer: props.answer,
			questions: props.questions,
			prompt: props.prompt
		}
	}
}