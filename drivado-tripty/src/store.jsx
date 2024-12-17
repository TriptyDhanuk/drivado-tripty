
import { configureStore } from '@reduxjs/toolkit';
import cabReducer from './Reducer/cabSlice';

const store = configureStore({
  reducer: {
    cab: cabReducer,  
  },
});

export default store;
