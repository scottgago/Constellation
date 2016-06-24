import { TOGGLE_ADMIN, ADMIN_OPEN_VIEW, ADMIN_CLOSE_VIEW, SELECT_NODE, REGISTER_CY, CLOSE_USER_VIEW, USER_OPEN_MODULE, FETCH_NODES, USER_CLOSE_MODULE } from '../actions/actionList'


const INITIAL_STATE = {
	currentNode: {},
	previousNode: {},
	cy: {},
	nodes: {},
	currentQuestions: [],
	currentArticles: [],
	currentVideos: [],
	moduleDescription: '',
	openUserView: false,
	openAdminView: false,
	openModuleView: false,
	adminMode: false
} 

export default function(state = INITIAL_STATE, action) {
	switch(action.type){
		case TOGGLE_ADMIN:
		  return {...state, adminMode: action.payload.adminMode}
		case FETCH_NODES:
		  return {...state, nodes: action.payload.nodes}
		case REGISTER_CY:
			return {...state, cy: action.payload.cy}
		case SELECT_NODE: 
			return {...state, currentQuestions: action.payload.currentQuestions, moduleDescription: action.payload.moduleDescription, currentArticles: action.payload.currentArticles, currentVideos: action.payload.currentVideos, currentNode : action.payload.currentNode, openUserView: action.payload.openUserView, previousNode : action.payload.previousNode}
		case CLOSE_USER_VIEW:
			return {...state, openUserView : action.payload.openUserView }
		case ADMIN_OPEN_VIEW:
			return {...state, openAdminView: action.payload.openAdminView}
		case USER_OPEN_MODULE:
			return {...state, openModuleView: action.payload.openModuleView, openUserView: action.payload.openUserView}
		case USER_CLOSE_MODULE:
			return {...state, openModuleView: action.payload.openModuleView}
		default:
			return state;
	}
}