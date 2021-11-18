import { combineReducers } from 'redux';
import toDoReducer from './toDoReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  todo: toDoReducer,
  theme: themeReducer,
});

export default rootReducer;
