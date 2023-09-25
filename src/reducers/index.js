import { combineReducers } from 'redux';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  userReducer,
  // Add other reducers if needed
});

export default rootReducer;
