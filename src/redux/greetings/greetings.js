import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

const initialState = [];

export const fetchGreetings = createAsyncThunk('greetings', async () => {
  const response = await Axios.get('http://127.0.0.1:3000/greetings');
  const greeting = response.data.message;
  return greeting;
});

const greetingsReducer = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchGreetings.fulfilled,
      (state, action) => action.payload,
    );
  },
});

export default greetingsReducer.reducer;
