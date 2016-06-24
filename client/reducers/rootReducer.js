import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import addNodeReducer from './admin.createNodes'
import selectNodeReducer from './selectNode.reducer'
import editNodeReducer from './admin.editNodes'
import userActionReducer from './user.action.reducer'

const RootReducer = combineReducers({
	form,
	adminAdd: addNodeReducer,
	selectNode: selectNodeReducer,
	adminEdit: editNodeReducer,
	userActions: userActionReducer
})

export default RootReducer