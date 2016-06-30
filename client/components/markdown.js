import React, { Component } from 'react';
var marked = require('marked')

var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

var style = {
  markdown: {
  	fontFamily: "Chalks",
  	color: 'white'
  }
}

export default class MarkdownParser extends Component {

	constructor(props) {
		super(props)
		this.state = {
			unparsed : props.markdown
		}
	}

	componentWillReceiveProps = (value) => {
		this.setState({
			unparsed : value.markdown
		})
	}

	rawMarkup = () => {
		var markdown = marked(this.state.unparsed);
		return { __html: markdown }
	}

	render() {

		return <div style={style.markdown} dangerouslySetInnerHTML={this.rawMarkup()} />;

	}
}