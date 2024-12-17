import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cabs: [],              
  apiResponse: null,    
  confirmedBooking: null,
};

const cabSlice = createSlice({
  name: 'cab',
  initialState,
  reducers: {
    setCabs: (state, action) => {
      state.cabs = action.payload; 
    },
    setApiResponse: (state, action) => {
      state.apiResponse = action.payload; 
    },
    setConfirmedBooking: (state, action) => {
      state.confirmedBooking = action.payload; 
    },
  },
});

export const { setCabs, setApiResponse, setConfirmedBooking } = cabSlice.actions;
export default cabSlice.reducer;
