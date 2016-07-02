import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import React, { Component } from 'react';

import Paper from 'material-ui/Paper';

import { connect } from 'react-redux';

import * as actions from '../actions/reducerActions';

const style = {
	nodeList: {
    marginTop: 15,
    float: 'right',
    width: '48%',
    height: 450,
    right: 0,
    overflow: "scroll",
    fontFamily: "Chalks",
    color: 'white',
    marginRight: 15
  },
	buttonFonts: {
    fontFamily: "Chalks",
    color: '#89e894',
    background: "none"
  },
}

class AddConnections extends Component {

	constructor(props){
		super(props)

		this.state = {
			edit_currentEdges: [],
			currentSelected: [],
			availableConnections: [],
			selectedEdges: []
		}
	}

	selectorFunction = (value) => {


		var newList = []
		for(var i = 0; i < value.length; i++){
			newList.push(this.state.availableConnections[value[i]])
		}
		this.props.registerEdge({selectedEdges: newList})
	}

	// Updates the list of edges as they're clicked on

	render(){

		console.log("RENDERING ADDCONNECTION")

		const checkAdd_root = () => {

			if(this.props.create){

				this.props.registerEdge({selectedEdges: [this.props.currentNode._private.data.id] })
				//TODO: Check this

				return (
					<TableRow style={style.buttonFonts} selected = {true} selectable={false}>
						<TableRowColumn>{this.props.currentNode._private.data.id}</TableRowColumn>
						<TableRowColumn>{this.props.currentNode._private.data.id}</TableRowColumn>
						<TableRowColumn>Yes</TableRowColumn>
					</TableRow>
				)

			}
		}

		//Makes sure that the edge is created with the node that the new node is created off of
		//Ensures that all nodes have at least this first connections

		const checkAdd_all = () => {

			if(this.props.create){
				var allNodes = []
				var newnodes = this.props.cy.nodes()

	      for(var i = 0; i < newnodes.length; i++){
	      	if(newnodes[i]._private.data.id !== this.props.currentNode._private.data.id){
	        	allNodes.push(newnodes[i]._private.data.id)
	        	this.state.availableConnections.push(newnodes[i]._private.data.id)
	      	}
	      }

	      return allNodes.map((value)=>{
	      	return (
		      	<TableRow style={style.buttonFonts} key={value}>
							<TableRowColumn>{value} </TableRowColumn>
							<TableRowColumn>{value}</TableRowColumn>
							<TableRowColumn>No</TableRowColumn>
						</TableRow>
					)
	      })
    	}
		}

		//Supplies the rest of the nodes beyond the root node

		const checkEdit_root = () => {
			if(this.props.edit){

				var currentEdges = []
				this.state.availableConnections = []
				this.state.edit_currentEdges = []
					for(var i = 0; i < this.props.currentNode._private.edges.length; i++){
						if(this.props.currentNode._private.edges[i]._private.data.source === this.props.currentNode._private.data.id){
							currentEdges.push(this.props.currentNode._private.edges[i]._private.data.target)
							this.state.availableConnections.push(this.props.currentNode._private.edges[i]._private.data.target)
							continue
						}
						currentEdges.push(this.props.currentNode._private.edges[i]._private.data.source)
						this.state.availableConnections.push(this.props.currentNode._private.edges[i]._private.data.source)
					}


				this.state.edit_currentEdges = currentEdges

				return currentEdges.map((value)=>{
					return (
					<TableRow key={value} selected = {true} selectable={true}>
						<TableRowColumn>{value}</TableRowColumn>
						<TableRowColumn>{value}</TableRowColumn>
						<TableRowColumn>Yes</TableRowColumn>
					</TableRow>
					)
				})
		}
	}

	// Maps out the current node connections in the edit version of this module

		const checkEdit_all = () => {

			if(this.props.edit){

			var allNodes = []
			var newNodes = this.props.cy.nodes();
			var holderObject = {}

			for(var i = 0; i < newNodes.length; i++){
				allNodes.push(newNodes[i]._private.data.id)
			}

			for(var i = 0; i < this.state.edit_currentEdges.length; i++){
				holderObject[this.state.edit_currentEdges[i]] = 1
			}


			return allNodes.map((value)=>{
				if(!holderObject[value] && value !== this.props.currentNode._private.data.id){
							this.state.availableConnections.push(value)
					return (
						<TableRow key = {value} selected = {false} selectable={true}>
							<TableRowColumn>{value}</TableRowColumn>
							<TableRowColumn>{value}</TableRowColumn>
							<TableRowColumn>No</TableRowColumn>
						</TableRow>
					)
				}
			})
			}
		}

  // Maps out all the remaining connections available

		return (

			<div style={style.nodeList}>
				<span>Node Connections</span>
				<Table style={style.buttonFonts} multiSelectable={true} onRowSelection={this.selectorFunction}>
					<TableHeader enableSelectAll={false}>
						<TableRow>
							<TableHeaderColumn>ID</TableHeaderColumn>
							<TableHeaderColumn>Name</TableHeaderColumn>
							<TableHeaderColumn>Connection Status</TableHeaderColumn>
						</TableRow>
					</TableHeader>

					<TableBody deselectOnClickaway={false}>
					{checkAdd_root()}
					{checkAdd_all()}
					{checkEdit_root()}
					{checkEdit_all()}
					</TableBody>
				</Table>
			</div>
		)
	}
}

function mapStateToProps(state){
  console.debug("MAPPING PROPS TO STATE IN ADDCONNECTIONS")
  return {  create: state.adminAdd.create, edit: state.adminEdit.edit, cy: state.selectNode.cy, currentNode : state.selectNode.currentNode }
}

export default connect(mapStateToProps,actions)(AddConnections)
