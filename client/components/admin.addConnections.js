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
    overflow: "scroll"
  }
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

	render(){

		console.log("RENDERING ADDCONNECTION")

		const checkAdd_root = () => {

			if(this.props.create){

				this.state.availableConnections = [this.props.currentNode._private.data.id]

				return (
					<TableRow selected = {true} selectable={false}>
						<TableRowColumn>{this.props.currentNode._private.data.id}</TableRowColumn>
						<TableRowColumn>{this.props.currentNode._private.data.id}</TableRowColumn>
						<TableRowColumn>Yes</TableRowColumn>
					</TableRow>
				)

			}
		}

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
		      	<TableRow>
							<TableRowColumn>{value} </TableRowColumn>
							<TableRowColumn>{value}</TableRowColumn>
							<TableRowColumn>No</TableRowColumn>
						</TableRow>
					)
	      })
    	}
		}

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
					<TableRow selected = {true} selectable={true}>
						<TableRowColumn>{value}</TableRowColumn>
						<TableRowColumn>{value}</TableRowColumn>
						<TableRowColumn>Yes</TableRowColumn>
					</TableRow>
					)
				})
		}
	}

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
						<TableRow selected = {false} selectable={true}>
							<TableRowColumn>{value}</TableRowColumn>
							<TableRowColumn>{value}</TableRowColumn>
							<TableRowColumn>No</TableRowColumn>
						</TableRow>
					)
				}
			})
			}
		}

		return (
			
			<div style={style.nodeList}>
				<span>Node Connections</span>
				<Table multiSelectable={true} onRowSelection={this.selectorFunction}>
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
  return { create: state.adminAdd.create, edit: state.adminEdit.edit, cy: state.selectNode.cy, currentNode : state.selectNode.currentNode }
}

export default connect(mapStateToProps,actions)(AddConnections)
