import { USER_SUBMITQUESTION, USER_OPEN_SUBMITQUESTION, USER_CLOSE_SUBMITQUESTION} from '../actions/actionList';

const INITIAL_STATE = {
	questionPrompt: false
}

export default function(state = INITIAL_STATE, action) {
	
	switch(action.type){
		case USER_SUBMITQUESTION:
			return {...state, questionPrompt: false}
		case USER_OPEN_SUBMITQUESTION:
			return {...state, questionPrompt: true}
		case USER_CLOSE_SUBMITQUESTION:
			return {...state, questionPrompt: false}

		default:
			return state;
	}
}
