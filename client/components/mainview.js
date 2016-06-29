import React, { Component } from 'react';
import Admin from './admin.view'
import User from './user.view'
import Loading from './loading'
import { connect } from 'react-redux';
import * as actions from '../actions/reducerActions';

var jquery = require('jquery');
var cxtmenu = require('cytoscape-cxtmenu');
var panzoom = require('cytoscape-panzoom');
var edgehandles = require('cytoscape-edgehandles');


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

  // findPath = () => {
  //   var aStar = this.state.cy.elements().aStar({ root: "#JavaScript2", goal: "#JavaScript10" });
  //   var map = aStar.path.select()
  //   for (var i = 0; i < map.length; i++){
  //     if(map[i]._private.group === 'edges'){
  //       map[i].style({
  //         'line-color' : '#0289d5',
  //         'overlay-color' : '#0289d5',
  //         'overlay-opacity' : .9,
  //         'width' : 10,
  //         'overlay-padding': 3
  //       })
  //     }
  //   }
  // }

  //TODO: Implement this later

  componentDidMount() {

    panzoom( cytoscape, jquery )
    cxtmenu( cytoscape, jquery );
    edgehandles( cytoscape, jquery )

    var panZoomDefaults = {
  zoomFactor: 0.05, // zoom factor per zoom tick
  zoomDelay: 45, // how many ms between zoom ticks
  minZoom: 0.1, // min zoom level
  maxZoom: 10, // max zoom level
  fitPadding: 50, // padding when fitting
  panSpeed: 10, // how many ms in between pan ticks
  panDistance: 10, // max pan distance per tick
  panDragAreaSize: 75, // the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
  panMinPercentSpeed: 0.25, // the slowest speed we can pan by (as a percent of panSpeed)
  panInactiveArea: 8, // radius of inactive area in pan drag box
  panIndicatorMinOpacity: 0.5, // min opacity of pan indicator (the draggable nib); scales from this to 1.0
  zoomOnly: false, // a minimal version of the ui only with zooming (useful on systems with bad mousewheel resolution)
  fitSelector: undefined, // selector of elements to fit
  animateOnFit: function(){ // whether to animate on fit
    return false;
  },
  fitAnimationDuration: 1000, // duration of animation on fit

  // icon class names
  sliderHandleIcon: 'fa fa-minus',
  zoomInIcon: 'fa fa-plus',
  zoomOutIcon: 'fa fa-minus',
  resetIcon: 'fa fa-expand'
};
    
    var edgesDefaults = {
      preview: true, // whether to show added edges preview before releasing selection
  stackOrder: 4, // Controls stack order of edgehandles canvas element by setting it's z-index
  handleSize: 10, // the size of the edge handle put on nodes
  handleColor: '#ff0000', // the colour of the handle and the line drawn from it
  handleLineType: 'ghost', // can be 'ghost' for real edge, 'straight' for a straight line, or 'draw' for a draw-as-you-go line
  handleLineWidth: 1, // width of handle line in pixels
  handleNodes: 'node', // selector/filter function for whether edges can be made from a given node
  hoverDelay: 150, // time spend over a target node before it is considered a target selection
  cxt: false, // whether cxt events trigger edgehandles (useful on touch)
  enabled: true, // whether to start the extension in the enabled state
  toggleOffOnLeave: false, // whether an edge is cancelled by leaving a node (true), or whether you need to go over again to cancel (false; allows multiple edges in one pass)
  edgeType: function( sourceNode, targetNode ) {
    // can return 'flat' for flat edges between nodes or 'node' for intermediate node between them
    // returning null/undefined means an edge can't be added between the two nodes
    return 'flat';
  },
  loopAllowed: function( node ) {
    // for the specified node, return whether edges from itself to itself are allowed
    return false;
  },
  nodeLoopOffset: -50, // offset for edgeType: 'node' loops
  nodeParams: function( sourceNode, targetNode ) {
    // for edges between the specified source and target
    // return element object to be passed to cy.add() for intermediary node
    return {};
  },
  edgeParams: function( sourceNode, targetNode, i ) {
    // for edges between the specified source and target
    // return element object to be passed to cy.add() for edge
    // NB: i indicates edge index in case of edgeType: 'node'
    return {};
  },
  start: function( sourceNode ) {
    // fired when edgehandles interaction starts (drag on handle)
  },
  complete: function( sourceNode, targetNodes, addedEntities ) {
    // fired when edgehandles is done and entities are added
  },
  stop: function( sourceNode ) {
    // fired when edgehandles interaction is stopped (either complete with added edges or incomplete)
  }
};
    
    var bind = this
    
    var defaults = {
  menuRadius: 100, // the radius of the circular menu in pixels
  selector: 'node', // elements matching this Cytoscape.js selector will trigger cxtmenus
  commands: [ // an array of commands to list in the menu or a function that returns the array
    
    { // example command
      fillColor: 'rgba(200, 200, 200, 1)', // optional: custom background color for item
      content: 'Edit Node', // html/text content to be displayed in the menu
      select: function(ele){ 
        console.log("fuck you")

        // a function to execute when the command is selected
        var holder = bind.props.currentNode
        if(bind.props.adminMode){

          bind.props.selectNode({ 
            currentQuestions: ele._private.data.questions, 
            moduleDescription: ele._private.data.description, 
            currentArticles: ele._private.data.articles, 
            currentVideos: ele._private.data.videos, 
            currentNode: ele, 
            previousNode: holder, 
            // openUserView: true 
          })

          bind.props.openEdit()
        }
      }
    },
     { // example command
      fillColor: 'rgba(54,54,54, 1)', // optional: custom background color for item
      content: 'Objectives', // html/text content to be displayed in the menu
      select: function(ele){ 

        var holder = bind.props.currentNode
       

          bind.props.selectNode({ 
            currentQuestions: ele._private.data.questions, 
            moduleDescription: ele._private.data.description, 
            currentArticles: ele._private.data.articles, 
            currentVideos: ele._private.data.videos, 
            currentNode: ele, 
            previousNode: holder, 
            openUserView: true 
          })
      }
    },
    { // example command
      fillColor: 'rgba(200, 200, 200, 1)', // optional: custom background color for item
      content: 'Add Node', // html/text content to be displayed in the menu
      select: function(ele){ 

        var holder = bind.props.currentNode
        if(bind.props.adminMode){

          bind.props.selectNode({ 
            currentQuestions: ele._private.data.questions, 
            moduleDescription: ele._private.data.description, 
            currentArticles: ele._private.data.articles, 
            currentVideos: ele._private.data.videos, 
            currentNode: ele, 
            previousNode: holder, 
            // openUserView: true 
          })

          bind.props.openCreate()
        }
      }
    },
    { // example command
      fillColor: 'rgba(54,54,54, 1)', // optional: custom background color for item
      content: 'Launch Node', // html/text content to be displayed in the menu
      select: function(ele){ // a function to execute when the command is selected
        var holder = bind.props.currentNode
        bind.props.selectNode({ 
            currentQuestions: ele._private.data.questions, 
            moduleDescription: ele._private.data.description, 
            currentArticles: ele._private.data.articles, 
            currentVideos: ele._private.data.videos, 
            currentNode: ele, 
            previousNode: holder, 
            // openUserView: true 
          })
        bind.props.openModule()
        console.log("WTF?")

      }
    }


  ], // function( ele ){ return [ /*...*/ ] }, // example function for commands
  fillColor: 'rgba(54,54,54, 1)', // the background colour of the menu
  activeFillColor: 'rgba(37,56,60, .6)', // the colour used to indicate the selected command
  activePadding: 29, // additional size in pixels for the active command
  indicatorSize: 17, // the size in pixels of the pointer to the active command
  separatorWidth: 7, // the empty spacing in pixels between successive commands
  spotlightPadding: 2, // extra spacing in pixels between the element and the spotlight
  minSpotlightRadius: 44, // the minimum radius in pixels of the spotlight
  maxSpotlightRadius: 16, // the maximum radius in pixels of the spotlight
  openMenuEvents: 'cxttapstart taphold', // cytoscape events that will open the menu (space separated)
  itemColor: 'white', // the colour of text in the command's content
  itemTextShadowColor: 'black', // the text shadow colour of the command's content
  zIndex: 19999 // the z-index of the ui div
};



    var defaultOptions = {

      name : "cose-bilkent",
      ready: function () {
        bind.props.openBlastDoor()
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
      idealEdgeLength: 75,
      // Divisor to compute edge forces
      edgeElasticity: 0.45,
      // Nesting factor (multiplier) to compute ideal edge length for nested edges
      nestingFactor: 0.1,
      // Gravity force (constant)
      gravity: 0.25,
      // Maximum number of iterations to perform
      numIter: 4000,
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

        minZoom: .68,
        maxZoom: 7,

  touchTapThreshold: 1,
        zoom: 1,
        pan: { x: 0, y: 0 },

        elements: value,
          style: [{
            selector: 'node',
            style: {
          'background-opacity': 0,
          'label': 'data(id)',
          'text-valign': 'top',
          'overlay-opacity': 0,
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
      })
      .on('tapstart', function(event){



        if(event.cyTarget._private.ready || event.cyTarget._private.group === 'edges'){
          return
        }

    

        var j = cy.elements('node[firebaseID = ' + '"' + event.cyTarget._private.data.firebaseID + '"]')
        cy.animate({
          fit: {
          eles: j,
          padding: 50
        }
        }, {
          duration: 25
        });

      //   // Builds the onTap event. When the node is clicked, apply styling changes to the node edges
      //   // and the node itself. Then, change state so that the current node is the clicked node.

      //     var evtTarget = event.cyTarget;
      //     var holder = bind.props.currentNode
    
      //     

      //     evtTarget.style({
      //       'font-size': 80
      //     })

      //     if(bind.props.previousNode._private){
      //       bind.props.previousNode._private.edges.forEach((value)=>{
      //         value.style({
      //         'line-color' : '#ccc',
      //         'overlay-color' : '#ccc',
      //         'overlay-opacity' : 0,
      //         'width' : 1,
      //         'overlay-padding': 1
      //         })
      //       })
      //     }

      //     evtTarget._private.edges.forEach((value)=>{
      //       value.style({
      //         'line-color' : [102,255,0],
      //         'overlay-color' : [102,255,0],
      //         'overlay-opacity' : .5,
      //         'width' : 4,
      //         'overlay-padding': 2
      //       })
      //     })

      //     bind.props.selectNode({ currentQuestions: evtTarget._private.data.questions, moduleDescription: evtTarget._private.data.description, currentArticles: evtTarget._private.data.articles, currentVideos: evtTarget._private.data.videos, currentNode: evtTarget, previousNode: holder, openUserView: true })
    
      //     if(bind.props.adminMode){
      //       bind.props.openAdmin()
      //     }
     
      //     bind.setState({
      //       currentNode  : evtTarget,
      //       previousNode : holder,
      //       view         : true,
      //       cy           : cy
      //     },
      //     ()=>{
      //       if(bind.props.previousNode._private){
      //         bind.props.previousNode._private.edges.forEach((value)=>{
      //           bind.props.previousNode.style({
      //             'font-size' : 30,
      //             'color': "#66ff00"
      //           })
      //           if((value._private.data.source !== bind.props.currentNode._private.data.id) && (value._private.data.target !== bind.props.currentNode._private.data.id ))
      //           value.style({
      //             'line-color' : '#ccc',
      //             'overlay-color' : '#ccc',
      //             'overlay-opacity' : 0,
      //             'width' : 1
      //           })
      //         })
      //       }
      //     }
      //   )
      });
      var nodes = cy.nodes()
      var cxtmenuApi = cy.cxtmenu( defaults )
      // cy.edgehandles( edgesDefaults )
      // cy.panzoom(panZoomDefaults)

      for(var i = 0; i < nodes.length; i++){
        nodes[i].style({
          'width' : nodes[i]._private.data.style.width,
          'height' : nodes[i]._private.data.style.height,
          'background-image' : 'url(./assets/imgs/chalk.png)',
          "font-family": "Chalks",

          'font-size': nodes[i]._private.data.style.height * .12,
          'text-valign': 'center', 
        })
      }
      cy.layout(defaultOptions)
      this.props.registerCY({cy : cy})
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


