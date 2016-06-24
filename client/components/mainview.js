import React, { Component } from 'react';
import Admin from './admin.view'
import User from './user.view'
import Loading from './loading'
import { connect } from 'react-redux';
import * as actions from '../actions/reducerActions';



const style = {
	
}

class MainView extends Component {

  constructor(props){
		super(props)
		this.state = {
			cy : null,
			view : false,
			currentNode: null,
      previousNode: null
		}
  }

  findPath = () => {
    var aStar = this.state.cy.elements().aStar({ root: "#JavaScript2", goal: "#JavaScript10" });
    var map = aStar.path.select()
    for (var i = 0; i < map.length; i++){
      if(map[i]._private.group === 'edges'){
        map[i].style({
          'line-color' : '#0289d5',
          'overlay-color' : '#0289d5',
          'overlay-opacity' : .9,
          'width' : 10,
          'overlay-padding': 3
        })
      }
    }
  }

  componentDidMount() {

    var defaultOptions = {
  // Called on `layoutready`

  name : "cose-bilkent",
  ready: function () {
  },
  // Called on `layoutstop`
  stop: function () {
  },
  // Whether to fit the network view after when done
  fit: true,
  // Padding on fit
  padding: 10,
  // Whether to enable incremental mode
  randomize: true,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: 4500,
  // Ideal edge (non nested) length
  idealEdgeLength: 50,
  // Divisor to compute edge forces
  edgeElasticity: 0.45,
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 0.1,
  // Gravity force (constant)
  gravity: 0.25,
  // Maximum number of iterations to perform
  numIter: 3000,
  // For enabling tiling
  tile: true,
  // Type of layout animation. The option set is {'during', 'end', false}
  animate: 'end',
  // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingVertical: 10,
  // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingHorizontal: 10,
  // Gravity range (constant) for compounds
  gravityRangeCompound: 1.5,
  // Gravity force (constant) for compounds
  gravityCompound: 1.0,
  // Gravity range (constant)
  gravityRange: 3.8
};

  	var bind = this

    var initCy = (value) => {

      var cy = cytoscape({
        container: document.getElementById('cy'),
        autoungrabify: true,

        elements: value,
          style: [{
            selector: 'node',
            style: {
          'background-opacity': 0,
          'label': 'data(id)',
          'text-valign': 'top',
          'font-size': 15,
          'color': 'white',
          'z-index': '-100',
          'width' : 100,
          'height' : 100,
          'background-fit' : 'contain',
          'background-image' : './assets/imgs/star (1).png'
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 1,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'haystack',
          'overlay-color': '#ccc',
          'overlay-padding': 1,
          'overlay-opacity': 0
        }
      }],
    layout: {
      name: 'cose-bilkent'
      
    },
  }).on('tap', function(event){


    var evtTarget = event.cyTarget;
    var holder = bind.props.currentNode
    
    if(evtTarget._private.ready || evtTarget._private.group === 'edges'){
      return
    }

    evtTarget.style({
      'font-size': 80
    })

    if(bind.props.previousNode._private){
      bind.props.previousNode._private.edges.forEach((value)=>{
        value.style({
        'line-color' : '#ccc',
        'overlay-color' : '#ccc',
        'overlay-opacity' : 0,
        'width' : 1,
        'overlay-padding': 1
        })
      })
    }


    evtTarget._private.edges.forEach((value)=>{
      value.style({
        'line-color' : [102,255,0],
        'overlay-color' : [102,255,0],
        'overlay-opacity' : .5,
        'width' : 4,
        'overlay-padding': 2
      })
    })

    bind.props.selectNode({ currentQuestions: evtTarget._private.data.questions, moduleDescription: evtTarget._private.data.description, currentArticles: evtTarget._private.data.articles, currentVideos: evtTarget._private.data.videos, currentNode: evtTarget, previousNode: holder, openUserView: true })
    
    if(bind.props.adminMode){
      bind.props.openAdmin()
    }
     

  

    bind.setState({
      currentNode : evtTarget,
      previousNode : holder,
      view       : true,

      cy : cy
    },
    ()=>{
      if(bind.props.previousNode._private){
      bind.props.previousNode._private.edges.forEach((value)=>{
        bind.props.previousNode.style({
          'font-size' : 30,
          'color': "#66ff00"
        })
        if( (value._private.data.source !== bind.props.currentNode._private.data.id) && (value._private.data.target !== bind.props.currentNode._private.data.id ))
        value.style({
          'line-color' : '#ccc',
          'overlay-color' : '#ccc',
          'overlay-opacity' : 0,
          'width' : 1
          })
        })
      // bind.findPath()
      }
    }
    )
    });

    var nodes = cy.nodes()

    for(var i = 0; i < nodes.length; i++){
      nodes[i].style({
        'width' : nodes[i]._private.data.style.width,
        'height' : nodes[i]._private.data.style.height,
        'background-image' : nodes[i]._private.data.style.starType, 
      })
    }
    cy.layout(defaultOptions)
    this.props.registerCY({cy : cy})
    this.props.openBlastDoor()
    }
  	
    this.props.fetchNodes(initCy)
    

  }

  
  render () {
    console.log("RENDERING MAINVIEW")
    return <div id="cy">
    </div>
  }
}

function mapStateToProps(state){
  console.debug("MAPPING STATE TO PROPS IN MAINVIEW")
  return {adminMode: state.selectNode.adminMode, nodes: state.selectNode.nodes, currentNode: state.selectNode.currentNode, previousNode: state.selectNode.previousNode, cy: state.selectNode.cy}
}

export default connect(mapStateToProps, actions)(MainView)


