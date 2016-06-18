import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import addNodeReducer from './admin.createNodes'
import selectNodeReducer from './selectNode.reducer'

const RootReducer = combineReducers({
	form,
	adminAdd: addNodeReducer,
	selectNode: selectNodeReducer
})

export default RootReducer