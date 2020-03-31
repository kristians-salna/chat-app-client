import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import serverReducer from './serverReducer';

export default combineReducers({
    errorReducer,
    serverReducer
})