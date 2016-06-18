import { ADMIN_CREATENODE, ADMIN_DELETENODE, FETCH_NODES } from '../actions/actionList';

export default function(state = {}, action) {
	switch(action.type){
		case ADMIN_CREATENODE:
			return {...state, error: '', authenticated: true };

		case ADMIN_DELETENODE:
			return {...state, authenticated: false };

		case FETCH_NODES:
		  //console.log(action.payload);
		  return action.payload;

		default:
			return state;
	}
}