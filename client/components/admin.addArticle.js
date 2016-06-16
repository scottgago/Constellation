import React, { Component } from 'react';
import {
  Step,
  Stepper,
  StepLabel
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Loading from './loading'

const opts = {
  height: 390,
  width: '100%',
};

const style = {
 
  dialogHugePlayer : {
    position: 'relative',
    height:'100%',
    minHeight: 400,
    maxHeight: '100%',
    width: '100%',
    maxWidth: 'none',
    overflow: 'scroll'
  },
  fill: {
    width: '100%',
    height: 50,
    maxHeight: 'none'
  },
  contentDiv : {
    width: '100%',
    height: '100%'
  },
  floatLeftTopButton: {
    float: 'left',
    minWidth: "75%",
  },
  floatRightTopButton: {
    float: 'right',
    minWidth: "25%",
  },
  textStyle: {
    marginLeft: 20
  },
  contentStyle: {
    minWidth: 640,
    height: '100%',
    minHeight: 400,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default class AddArticle extends Component {

  constructor(props) {
    super(props)
    this.state = {
      finished: false,
      stepIndex: 0,
      description : "",
      openPrompt: false,
      load: false,
      currentNode: null,
      articleURL: 'http://www.material-ui.com/#/components/dialog' ,
      currentArticle: 'http://www.material-ui.com/#/components/dialog',
      forceUpdate : props.status.confirmChange 
    }
  }

  componentWillReceiveProps = (value) =>{
    if(value.status.addArticle){
      this.setState({
        openPrompt: value.status.addArticle,
        currentNode: value.status.currentNode
      })
    }
  }

  contentChange = (e,value) => {
    this.setState({
      description: e
    })
  }

  // Listen for changes on the description change field, if so, update the description state

  handleSubmit = () => {
    this.setState({
      currentArticle : this.state.articleURL
    })
  }

  // On button press, submit the current textbox value article URL to the completed current article

  handleTextChange = (e,value) =>{
    this.setState({
      articleURL: value
    })
  }

  // Listen for changes on the articleURL text box and map them to the articleURL state

  handleNext = () => {

    var anchor = this
    var index = this.state.stepIndex + 1
    
    this.setState({
      stepIndex: this.state.stepIndex + 1,
      finished: (this.state.stepIndex > 1),
    });
    if(this.state.stepIndex === 1){
      this.setState({
        openPrompt: false,
        stepIndex: 0,
        load: true
      },
        ()=>{this.setState({
          load: false
        })}
      )

      this.state.currentNode._private.data.articles.push({
        article: anchor.state.articleURL,
      })
      this.state.forceUpdate()

    }
  };

  handleLoad = () =>{
    this.setState({
      load: false
    })
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div style ={style.contentDiv}>
            <div style= {style.floatLeftTopButton}>
              <TextField onChange = {this.handleTextChange} hintText="Confirm" style={style.textStyle} underlineShow={false} />
              <Divider />
            </div>
            <div style={style.floatRightTopButton}>
              <RaisedButton
                style={style.fill}
                label="Submit"
                primary={true}
                onTouchTap = {this.handleSubmit}
              />
            </div>
            <Paper zDepth={2}>
              <iframe style={style.dialogHugePlayer} src={this.state.currentArticle} height={'100%'} width={'100%'}/>
            </Paper>
          </div>
        )
      case 1:
        return (
          <div>
            <Paper zDepth={2}>
              <iframe style={style.dialogHugePlayer} src={this.state.currentArticle} height={'100%'} width={'100%'}/>
            </Paper>
          </div>)
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    return (
      <div>
        <Loading status={this.state.load} />
        <Dialog
            modal={false}
            open={this.state.openPrompt}
            contentStyle={style.modalStyle}
            onRequestClose={this.handleClose}>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Select an artcle</StepLabel>
            </Step>
            <Step>
              <StepLabel>Preview and submit</StepLabel>
            </Step>
          </Stepper>
          <div style={style.contentStyle}>
            {finished ? (
              <p>
                <a
                  href="#"
                  onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
                >
                  Click here
                </a> to reset the example.
              </p>
            ) : (
            <div>
              {this.getStepContent(stepIndex)}
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}} />
                <RaisedButton
                  label={stepIndex === 1 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext} />
              </div>
            </div>
            )}
          </div>
        </Dialog>
      </div>
    );
  }
}