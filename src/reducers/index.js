import userDataReducer from './userDataReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	userData: userDataReducer
});

export default rootReducer;
