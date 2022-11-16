import { configureStore } from '@reduxjs/toolkit';
import LinkSlice from './components/views/CreatePage/CreatePageSlice.js';
import UserSlice from './components/views/Main/MainSlice.js';
import TableSlice from './components/views/Table/TableSlice.js';



export default configureStore({
    reducer: {
      links: LinkSlice,
      user: UserSlice,
      table: TableSlice
    },
  });