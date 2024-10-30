import { configureStore } from '@reduxjs/toolkit';
import formReducer from './Component/Slice.js';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;