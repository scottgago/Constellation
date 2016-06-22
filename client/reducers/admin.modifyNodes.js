import { ADMIN_ADDCONNECTIONS, ADMIN_ADDVIDEO, ADMIN_ADDARTICLE, ADMIN_ADDDESCRIPTION} from '../actions/actionList';



export default function(state, action) {
	
	switch(action.type){
		case ADMIN_ADDCONNECTIONS 
			return {...state, error: '', authenticated: true}
		case ADMIN_ADDDESCRIPTION
			return {...state, error: '', authenticated: true}
		case ADMIN_ADDVIDEO:
			return state;
		case ADMIN_ADDARTICLE:
			return {...state, error: '', authenticated: true };

		default:
			return state;
	}
}