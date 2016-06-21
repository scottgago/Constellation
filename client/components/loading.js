import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import LinearProgress from 'material-ui/LinearProgress';

const style = {
	marginTop: 10
}

 /**

  	Sets the parameters to the loading component. Not much complication to the component here.
  	Basically, it sets timers that increment the completed(1,2,3,*) states and cancels the actions,
  	as soon as all 3 equal 100. Once they due, it closes the loading page
		
  **/

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

  //set initial timers

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

  //components receive the signal from parent components. As soon as they hear it, it starts the timers and opens
  //up the display module


  /**

		All the functions are the same, (progress1, progress2, progress3) but operate on different states. We should find a way to modularize this code
		by handing in the current progress of each state element like so progress(completed, this.state.completed1), etc.

	**/

  progress1 = (completed) => {

    if (completed > 100) {
      var complete = this.state.completed + 1
   		this.setState({
      	completed1: 100,
      	completed: complete
      });

   		// if timer is greater than 100, set the state of the completed1 to 100, and increment the completed counter
   		// when the counter gets to 3 (after all counters complete), close the component's display and reset each
   		// of the counters

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

    	// if the completed1 state isn't current at 100 or over, randomly add some more increments to the counter and
    	// recursively call the progress1 function


      this.setState({completed1 : completed});
      const diff = Math.random() * 13;
      this.timer1 = setTimeout(() => this.progress1(completed + diff), 150);
    }
	}
	progress2 = (completed) => {
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
	progress3 = (completed) => {
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