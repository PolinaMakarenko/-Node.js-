import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
  error: null,
};

export const getUser = createAsyncThunk('/user/getUser', () =>
  fetch('/user/getUser').then((result) => result.json())
);

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },

  extraReducers: (builder)=>{
    builder
    .addCase(getUser.fulfilled, (state, action) => {
      // console.log(action.payload.key);
      state.user = action.payload.key;
    })
    .addCase(getUser.rejected, (state, action) => {
      state.error = action.error.message;
    })
  }
});


export const selectUser = (state) => state.user.user;


export default UserSlice.reducer;