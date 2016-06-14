import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import LinearProgress from 'material-ui/LinearProgress';

const style = {
	marginTop: 10
}

export default class Loading extends Component {
	constructor(props){
		super(props)
		this.state = {
			open: true,
			completed1: 0,
			completed2: 0,
			completed3: 0,
			completed: 0
		}
	}
  
  componentDidMount = () => {
 		this.timer1 = setTimeout(() => this.progress1(5), 500);
    this.timer2 = setTimeout(() => this.progress2(10), 500);
    this.timer3 = setTimeout(() => this.progress3(15), 500);
  }

  componentWillReceiveProps = (nextProps) => {
		if(nextProps.status){
  		this.setState({
  			open: nextProps.status
  		})
	  	this.timer1 = setTimeout(() => this.progress1(5), 500);
	    this.timer2 = setTimeout(() => this.progress2(10), 500);
	    this.timer3 = setTimeout(() => this.progress3(15), 500);
		}
  }

  progress1(completed) {
    if (completed > 100) {
      var complete = this.state.completed + 1
   		this.setState({
      	completed1: 100,
      	completed: complete
      });
	    if(this.state.completed === 3){
	    	setTimeout(()=>
		    	this.setState({
		    		open:false,
		    		completed1: 0,
						completed2: 0,
						completed3: 0,
						completed: 0
		    	}), 300)
	    	clearTimeout(this.timer1)
	    	clearTimeout(this.timer2)
	    	clearTimeout(this.timer3)
	    }
    } else {
      this.setState({completed1 : completed});
      const diff = Math.random() * 13;
      this.timer1 = setTimeout(() => this.progress1(completed + diff), 150);
    }
	}
	progress2(completed) {
    if (completed > 100) {
			var complete = this.state.completed + 1
			this.setState({
      	completed2: 100,
      	completed: complete
      });
      if(this.state.completed === 3){
      	setTimeout(()=>
      	this.setState({
      		open:false,
      		completed1: 0,
					completed2: 0,
					completed3: 0,
					completed: 0
      	}), 300)
      	clearTimeout(this.timer1)
      	clearTimeout(this.timer2)
      	clearTimeout(this.timer3)
      }
    } else {
      this.setState({completed2 : completed});
      const diff = Math.random() * 20;
      this.timer2 = setTimeout(() => this.progress2(completed + diff), 300);
    }
	}
	progress3(completed) {
    if (completed > 100) {
      var complete = this.state.completed + 1
 			this.setState({
      	completed3 : 100,
      	completed: complete
      });
      if(this.state.completed === 3){
      	setTimeout(()=>
      	this.setState({
      		open:false,
      		completed1: 0,
					completed2: 0,
					completed3: 0,
					completed: 0
      	}), 300)
      	clearTimeout(this.timer1)
      	clearTimeout(this.timer2)
      	clearTimeout(this.timer3)
			}
    } else {
      this.setState({completed3 : completed});
      const diff = Math.random() * 7;
      this.timer3 = setTimeout(() => this.progress3(completed + diff), 100);
    }
	}

	render(){
		return (
			<div>
				<Dialog
	        title="Doing computer magic!"
	        modal={false}
	        open={this.state.open}>
	          <p>Running from reavers! =(</p>
	          <LinearProgress style = {style} mode="determinate" value={this.state.completed1} />
	          <p>Pinging the hero of Canton</p>
	          <LinearProgress style = {style} mode="determinate" value={this.state.completed2} />
	          <p>Thats no moon...</p>
	          <LinearProgress style = {style} mode="determinate" value={this.state.completed3} />
	       </Dialog>
       </div>)
	}
}