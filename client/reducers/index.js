import { combineReducers } from 'redux';
import AdminReducer from './admin.reducer';

const rootReducer = combineReducers({
  posts: AdminReducer
});

export default rootReducer;