import { configureStore } from '@reduxjs/toolkit';
import formReducer from './Slice.js';
import tableDataReducer from './table.js'

const store = configureStore({
  reducer: {
    form: formReducer,
    tableData: tableDataReducer,
  },
});

export default store;