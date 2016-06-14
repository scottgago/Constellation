import { ADMIN_CREATENODE, ADMIN_DELETENODE } from '../actions/actionList';

export default function(state, action) {
	switch(action.type){
		case ADMIN_CREATENODE:
			return {...state, error: '', authenticated: true };

		case ADMIN_DELETENODE:
			return {...state, authenticated: false };

		default:
			return state;
	}
}