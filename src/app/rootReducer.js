// app/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import scoreReducer from '../features/Slice';

const rootReducer = combineReducers({
  score: scoreReducer,
  // Add other reducers here
});

export default rootReducer;
