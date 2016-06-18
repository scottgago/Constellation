import { SELECT_NODE, REGISTER_CY, CLOSE_USER_VIEW, USER_OPEN_MODULE, USER_CLOSE_MODULE } from '../actions/actionList'


const INITIAL_STATE = {
	currentNode: {},
	previousNode: {},
	cy: {}
} 

export default function(state = INITIAL_STATE, action) {
	
	switch(action.type){
		case REGISTER_CY:
			return {...state, cy: action.payload.cy}
		case SELECT_NODE: 
			return {...state, currentNode : action.payload.currentNode, openUserView: action.payload.openUserView, previousNode : action.payload.previousNode}
		case CLOSE_USER_VIEW:
			return {...state, openUserView : action.payload.openUserView }
		case USER_OPEN_MODULE:
			return {...state, openModuleView: action.payload.openModuleView}
		default:
			return state;
	}
}