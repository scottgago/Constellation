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

    const contentStyle = {
    minWidth: 640,
    height: '100%',
    minHeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll'
  }

const styles = {
  dialogHugePlayer : {
      position: 'relative',
      height:'100%',
      minHeight: 4000,
      maxHeight: '100%',
      width: '100%',
      maxWidth: 'none',
      overflow: 'scroll'
    },
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
      overflow: 'scroll',
      height: '100%',
      width: '100%',
      maxWidth: 'none',
      overflow: 'scroll'
    },
    dialogHugePlayer : {
      position: 'relative',
      height:'100%',
      minHeight: 400,
      maxHeight: '100%',
      width: '100%',
      maxWidth: 'none',
      overflow: 'scroll'
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
      maxWidth: 'none',
      overflow:'scroll'
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

export default class AddArticle extends Component {

  state = {
    finished: false,
    stepIndex: 0,
    description : "",
    openPrompt: false,
    load: false,
    currentNode: null,
    articleURL: 'http://www.material-ui.com/#/components/dialog' ,
    currentArticle: 'http://www.material-ui.com/#/components/dialog' 
  };

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

  handleSubmit = () => {
    console.log(this.state)
    this.setState({
      currentArticle : this.state.articleURL
    })
  }

  handleTextChange = (e,value) =>{
    this.setState({
      articleURL: value
    })
  }

  handleNext = () => {

    var anchor = this
    console.log(this.state)

    var index = this.state.stepIndex + 1
    
    this.setState({
      stepIndex: this.state.stepIndex + 1,
      finished: (this.state.stepIndex > 1),
    });
    console.log(this.state)
    if(this.state.stepIndex === 1){
      this.setState({
        openPrompt: false,
        stepIndex: 0,
        load: true
      }, ()=>{this.setState({
        load: false
      })})

      console.log("in handle next")
      this.state.currentNode._private.data.articles.push({
        article: anchor.state.articleURL,
      })
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
                    
                    <iframe style={styles.dialogHugePlayer} src={this.state.currentArticle} height={'100%'} width={'100%'}/>
                </Paper>
                </div>)
      case 1:
        return  (<div>
                   
          <Paper zDepth={2}>
                    
                    <iframe style={styles.dialogHugePlayer} src={this.state.currentArticle} height={'100%'} width={'100%'}/>
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
                  label={stepIndex === 1 ? 'Finish' : 'Next'}
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