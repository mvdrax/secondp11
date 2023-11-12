
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../actions/actions";
import { combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers ({
    user: userSlice
  });
  


const store = configureStore({
    reducer: {
       reducer,
      },
    });

  export default store;

