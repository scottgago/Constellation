import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import React, { Component } from 'react';

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


export default class AddConnections extends Component {

	constructor(props){
		super(props)

		this.state = {
			currentNode : props.currentNode,
			cy: props.cy,
			edit: props.edit,
			create: props.create,
			edit_currentEdges: [],
			currentSelected: [],
			availableConnections: [],
			selectedEdges: props.selectedEdges,
			connectionChanges : props.connectionChanges
		}
	}

	componentWillReceiveProps(nextProps) {

		console.log("receiving props")

		if(nextProps.connectionChanges){

			return this.setState({
	    	currentNode: nextProps.currentNode,
				cy: nextProps.cy,
				edit: nextProps.edit,
				create: nextProps.create,
				edit_currentEdges: [],
				currentSelected: [],
				selectedEdges: nextProps.selectedEdges,
				connectionChanges : nextProps.connectionChanges
	    })
		}

		this.setState({
	    	currentNode: nextProps.currentNode,
				cy: nextProps.cy,
				edit: nextProps.edit,
				create: nextProps.create,
				edit_currentEdges: [],
				currentSelected: [],
				selectedEdges: nextProps.selectedEdges,
		})




	
	}

	selectorFunction = (value) => {

		if(this.state.connectionChanges){
			this.state.connectionChanges()
		}

		var newList = []
		for(var i = 0; i < value.length; i++){
			newList.push(this.state.availableConnections[value[i]])
		}
		this.state.selectedEdges(newList)
	}

	render(){

		const checkAdd_root = () => {

			if(!this.state.edit){

				this.state.availableConnections = [this.state.currentNode._private.data.id]

				return (
					<TableRow selected = {true} selectable={false}>
						<TableRowColumn>{this.state.currentNode._private.data.id}</TableRowColumn>
						<TableRowColumn>{this.state.currentNode._private.data.id}</TableRowColumn>
						<TableRowColumn>Yes</TableRowColumn>
					</TableRow>
				)

			}
		}

		const checkAdd_all = () => {


			
			if(!this.state.edit && this.state.cy){
				var allNodes = []
				var newnodes = this.state.cy.nodes()
	      
	      for(var i = 0; i < newnodes.length; i++){
	      	if(newnodes[i]._private.data.id !== this.state.currentNode._private.data.id){
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
			if(this.state.edit && this.state.cy){
				
				var currentEdges = []
				this.state.availableConnections = []
				this.state.edit_currentEdges = []
					for(var i = 0; i < this.state.currentNode._private.edges.length; i++){
						if(this.state.currentNode._private.edges[i]._private.data.source === this.state.currentNode._private.data.id){
							currentEdges.push(this.state.currentNode._private.edges[i]._private.data.target)
							this.state.availableConnections.push(this.state.currentNode._private.edges[i]._private.data.target)
							continue
						}
						currentEdges.push(this.state.currentNode._private.edges[i]._private.data.source)
						this.state.availableConnections.push(this.state.currentNode._private.edges[i]._private.data.source)
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
			
			if(this.state.edit && this.state.cy){

			var allNodes = []
			var newNodes = this.state.cy.nodes();
			var holderObject = {}

			console.log(this.state.edit_currentEdges, "lol?")
			

			for(var i = 0; i < newNodes.length; i++){
				allNodes.push(newNodes[i]._private.data.id)
			}

			for(var i = 0; i < this.state.edit_currentEdges.length; i++){
				holderObject[this.state.edit_currentEdges[i]] = 1
			}


			return allNodes.map((value)=>{
				if(!holderObject[value] && value !== this.state.currentNode._private.data.id){
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
