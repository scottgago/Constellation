import React, { Component } from 'react';
import {
  Step,
  Stepper,
  StepLabel
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import MarkdownParser from './markdown';
import YouTube from 'react-youtube';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper'


var MarkdownEditor = require('react-markdown-editor').MarkdownEditor;

const opts = {
      height: 390,
      width: '100%',
    };

const styles = {
    dialog: {
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'scroll'
    },
    dialogBody: {
      minWidth: 600,
      minHeight: "100%",
      overflow: 'scroll'
    },
    fill: {
      width: '100%',
      height: 50,
      maxHeight: 'none'
    },
    dialogHuge : {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: 'auto',
      height: '100%',
      width: '100%',
      maxWidth: 'none'
    },
    dialogHugePlayer : {
      position: 'relative',
      height:'100%',
      minHeight: 4000,
      maxHeight: '100%',
      width: '100%',
      maxWidth: 'none',
      overflow: 'auto'
    },
    rocketImg: {
      opacity: .2,
      maxHeight: '100%',
      position: 'fixed',
      maxWidth: '100%'

    },
    floatLeft: {
      float: 'left',
      maxWidth: "50%",
      maxHeight: 400,
      marginTop: 10,
      marginBottom: 30,
    },
    floatRight: {
      float: 'right',
      maxWidth: "50%",
      marginTop: 10,
      maxHeight: 400,
      overflow: 'scroll',
      marginBottom: 30,

    },
    floatLeftTopButton: {
      float: 'left',
      minWidth: "75%",
    },
    floatRightTopButton: {
      float: 'right',
      minWidth: "25%",

    },


    buttonDecline: {
      width: '50%',
      color: 'white',
  },
  divWidth : {
    width: '100%',
    height: '100%'
  },
    buttonAccept: {
      width: '50%',
      color: 'white',
    },
    description: {
      background: 'transparent'
    },
    modalStyle: {
      width: "80%",
      maxWidth: 'none'
    }
  }

const style = {
  loginRow: {
    flexDirection: 'row'
  },
  contentDiv : {
    width: '100%',
    height: '100%'

  },
  dialogBody: {
    minWidth: 900,
    minHeight: 600
  },
  textField : {
    color: 'white'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    opacity: 1,

  },
  textMargins: {
    marginTop: 10,
    width: '75%',
    float: 'left'
  },
  buttonMargins: {
    marginTop: 10,
    width: '25%',
    float: 'right'
  },
  textStyle: {
    marginLeft: 20
  },
  alignCenter : {
    alignItems: 'center'
  }
}

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
export default class AddVideo extends Component {

  constructor(props){
    super(props)
    this.state = {
      finished: false,
      stepIndex: 0,
      description : "",
      openPrompt: false,
      currentNode: null,
      videoURL: "",
      currentVideo: "2g811Eo7K8U"
    };
  }

  componentWillReceiveProps = (value) => {
    if(value.status.addVideo){
      this.setState({
        openPrompt: true,
        currentNode: value.status.currentNode
      })
    }
  }

  contentChange = (e,value) => {
    this.setState({
      description: e
    })
  }

  handleSubmit = () => {
    console.log(this.state)
    this.setState({
      currentVideo : this.state.videoURL
    })
  }

  handleTextChange = (e,value) =>{
    this.setState({
      videoURL: value
    })
  }

  handleNext = () => {

    var anchor = this

    var index = this.state.stepIndex + 1
    
    this.setState({
      stepIndex: this.state.stepIndex + 1,
      finished: (this.state.stepIndex > 2),
    });
    if(this.state.stepIndex === 2){
      this.setState({
        openPrompt: false,
        stepIndex: 0,
        
      })

      this.state.currentNode._private.data.videos.push({
        video: anchor.state.videoURL,
        markdown: anchor.state.description
      })
    }
  };

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
                      <div style= {styles.floatLeftTopButton}>
                      <TextField onChange = {this.handleTextChange} hintText="Confirm" style={style.textStyle} underlineShow={false} />
                      <Divider />
                      </div>
                      <div style={styles.floatRightTopButton}>
                      <RaisedButton
                      style={styles.fill}
                  label="Submit"
                  primary={true}
                  onTouchTap = {this.handleSubmit}
                />
                </div>
                   
          <Paper zDepth={2}>
                    <YouTube
                      videoId={this.state.currentVideo}
                      opts={opts}
                    />
                    
                </Paper>
                </div>)
      case 1:
        return <MarkdownEditor style = {style.contentDiv} initialContent={this.state.description} onContentChange ={this.contentChange} iconsSet="materialize-ui"/>
      case 2:
        return  (<div>
                <div style={styles.floatLeft}>
                <Paper zDepth={2}>
                <YouTube
              videoId={this.state.currentVideo}
              opts={opts}
          />
          </Paper>
          </div>
          <div style={styles.floatRight}>
          <Paper zDepth={2}>
                  <MarkdownParser markdown={this.state.description}/>
                </Paper>
                </div>
              </div>)
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;



    const contentStyle = {
    minWidth: 640,
    height: '100%',
    minHeight: 400,
    alignItems: 'center',
    justifyContent: 'center'
  }
    

    return (
      <div>
      <Dialog
          modal={false}
          open={this.state.openPrompt}
          style={style.modalStyle}
          onRequestClose={this.handleClose}>

            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>Select a video</StepLabel>
              </Step>
              <Step>
                <StepLabel>Add markdown</StepLabel>
              </Step>
              <Step>
                <StepLabel>Preview and submit</StepLabel>
              </Step>
            </Stepper>
          <div style={contentStyle}>
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
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
        </Dialog>
      </div>
    );
  }
}
