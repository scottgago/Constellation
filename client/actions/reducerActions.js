import { ADMIN_CREATENODE, ADMIN_DELETENODE, ADMIN_ADDCONNECTIONS, 
		 ADMIN_ADDVIDEO, ADMIN_ADDARTICLE, ADMIN_ADDDESCRIPTION, SELECT_NODE, REGISTER_CY } from './actionList'

export function createNode({cy, currentNode, id, name, description, styles, admins, width, height, type, connections}) {
	
	return function(dispatch) {
			dispatch({ type: ADMIN_CREATENODE, payload: {
				cy: cy,
				currentNode : currentNode,
				id : id,
				name : name,
				description: description,
				styles : styles,
				admins: admins,
				width: width,
				height: height,
				type: type, 
				connections: connections
			}})
	}
}

export function selectNode({currentNode, previousNode, view}){
	return { type: SELECT_NODE, payload :  {currentNode: currentNode, previousNode: previousNode, view : view} }
}

export function registerCY({cy}){
	return { type: REGISTER_CY, payload : {cy: cy} }
}

