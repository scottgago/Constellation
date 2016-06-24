import { ADMIN_EDIT_EDGES, ADMIN_SUBMIT_EDIT, ADMIN_OPEN_ADDARTICLE, ADMIN_CLOSE_ADDARTICLE, ADMIN_OPEN_EDIT, ADMIN_CLOSE_EDIT, ADMIN_OPEN_ADDVIDEO, ADMIN_CLOSE_ADDVIDEO } from '../actions/actionList';

const INITIAL_STATE = {
  newNodeName: '',
  width: 100,
  length: 100,
  starType: "./assets/imgs/star (1).png",
  selectedConnections: [],
  selectedEdges: [],
  markdownDescription: '',
  articleDescription: '',
  edit: false,
  addVideo: false,
  addArticle: false

}

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case ADMIN_OPEN_EDIT:
			return {...state, edit: true}
		case ADMIN_EDIT_EDGES:
			return state
		case ADMIN_SUBMIT_EDIT: 
			return {...state}
		case ADMIN_CLOSE_EDIT:
			return {...state, edit: false}
		case ADMIN_OPEN_ADDVIDEO:
			return {...state, addVideo: true}
		case ADMIN_CLOSE_ADDVIDEO:
			return {...state, addVideo: false}
		case ADMIN_OPEN_ADDARTICLE:
			return {...state, addArticle: true}
		case ADMIN_CLOSE_ADDARTICLE:
			return {...state, addArticle: false}
		default:
			return state;
	}
}