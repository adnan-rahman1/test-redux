import userReducer from './userReducer';
import { combineReducers } from 'redux';


const Reducers = combineReducers({
    userReducer,
});

export default Reducers;