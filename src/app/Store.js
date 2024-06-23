// import { configureStore } from "@reduxjs/toolkit";
// import  ScoreReducer  from "../features/Slice";

// export const Store = configureStore({
//     reducer :ScoreReducer
    
// })
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
