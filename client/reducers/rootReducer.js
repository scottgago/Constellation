import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import addNodeReducer from './admin.createNodes'
import selectNodeReducer from './selectNode.reducer'
import editNodeReducer from './admin.editNodes'
import userActionReducer from './user.action.reducer'
import authReducer from '../auth/reducer';
import {routerReducer} from 'react-router-redux';

const RootReducer = combineReducers({
	auth: authReducer,
	routing: routerReducer,
	form,
	adminAdd: addNodeReducer,
	selectNode: selectNodeReducer,
	adminEdit: editNodeReducer,
	userActions: userActionReducer
})

export default RootReducer
