import { ADMIN_OPEN_VIEW, ADMIN_CLOSE_VIEW, SELECT_NODE, REGISTER_CY, CLOSE_USER_VIEW, USER_OPEN_MODULE, USER_CLOSE_MODULE } from '../actions/actionList'


const INITIAL_STATE = {
	currentNode: {},
	previousNode: {},
	cy: {},
	currentArticles: [],
	currentVideos: [],
	moduleDescription: '',
	openUserView: false,
	openAdminView: false,
	openModuleView: false
} 

export default function(state = INITIAL_STATE, action) {

	switch(action.type){
		case REGISTER_CY:
			return {...state, cy: action.payload.cy}
		case SELECT_NODE: 
			return {...state, moduleDescription: action.payload.moduleDescription, currentArticles: action.payload.currentArticles, currentVideos: action.payload.currentVideos, currentNode : action.payload.currentNode, openUserView: action.payload.openUserView, previousNode : action.payload.previousNode}
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