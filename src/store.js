import { configureStore } from '@reduxjs/toolkit';
import formReducer from './Reducer/Slice.js';
import tableDataReducer from './Reducer/table.js'

const store = configureStore({
  reducer: {
    form: formReducer,
    tableData: tableDataReducer,
  },
});

export default store;