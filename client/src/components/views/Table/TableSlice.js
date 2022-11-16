import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  table: [],
  currentPage: 1,
  perPage: 4,
  totalCount: 0,
  error: null,
};

export const loadTable = createAsyncThunk('/link/getallLinks/' ,() => 
fetch('/link/getallLinks/').then((result) => result.json()));

const TableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
  extraReducers: (builder)=>{
      builder
    .addCase(loadTable.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.table = action.payload;
      state.totalCount = action.payload.length;
    })
    .addCase(loadTable.rejected, (state, action) => {
      state.error = action.error.message;
    })
  }
})

export const {setCurrentPage} = TableSlice.actions;

export const selectTable = (state) => state.table.table;
export const selectCurrentPage = (state) => state.table.currentPage;
export const selectPerPage = (state) => state.table.perPage;
export const selectTotalCounte = (state) => state.table.totalCount;


export default TableSlice.reducer;


