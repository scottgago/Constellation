import { SELECT_NODE, REGISTER_CY } from '../actions/actionList'


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
			return {...state, currentNode : action.payload.currentNode, view: action.payload.view, previousNode : action.payload.previousNode}
		default:
			return state;
	}
}