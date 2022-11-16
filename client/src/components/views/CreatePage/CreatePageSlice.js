import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  alllink: [],
  error: null,
  tes: []
};

export const addLink = createAsyncThunk('/link/generateLink/', async (credentials) => {
    // console.log(credentials);
    if (!credentials.from.trim()) {
      alert('Не заполнена ссылка')
      throw new Error('Не заполнена ссылка');
    };
    const res = await fetch('/link/generateLink/', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
          'Content-Type': 'application/json',
      },
    });
    if (res.status >= 400) {
      const { error } = await res.json();
      alert('Короткий адрес уже используется')
      throw error;
    } else {
      return res.json();
    };
})

const LinkSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {
  },
  extraReducers: (builder)=>{
      builder
      .addCase(addLink.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.alllink =action.payload;
      })
      .addCase(addLink.rejected, (state, action) => {
        state.error = action.error.message;
      })
  }
})


export default LinkSlice.reducer;


