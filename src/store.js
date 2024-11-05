import { configureStore } from '@reduxjs/toolkit';
import formReducer from './Component/Slice.js';
import tableDataReducer from './TableAPI/table.js'

const store = configureStore({
  reducer: {
    form: formReducer,
    tableData: tableDataReducer,
  },
});

export default store;