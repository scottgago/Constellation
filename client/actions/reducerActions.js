import { ADMIN_CREATENODE, ADMIN_DELETENODE, ADMIN_ADDCONNECTIONS, USER_OPEN_MODULE, USER_CLOSE_MODULE,
		 ADMIN_ADDVIDEO, ADMIN_ADDARTICLE, ADMIN_ADDDESCRIPTION, SELECT_NODE, REGISTER_CY, CLOSE_USER_VIEW } from './actionList'

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

export function selectNode({currentNode, previousNode, openUserView}){
	return { type: SELECT_NODE, payload :  {currentNode: currentNode, previousNode: previousNode, openUserView : openUserView} }
}

export function registerCY({cy}){
	return { type: REGISTER_CY, payload : {cy: cy} }
}

export function closeUserView(){
	return {type: CLOSE_USER_VIEW, payload: { openUserView: false } }
}

export function openModule(){
	return {type: USER_OPEN_MODULE, payload : { openModuleView: true } }
}

export function closeModule(){
	return {type: USER_CLOSE_MODULE, payload : { openModuleView: false } }
}
