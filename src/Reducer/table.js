import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchTableData = createAsyncThunk('tableData/fetchTableData', async () => {
  const response = await axios.get('http://localhost:3001/entries'); 
  return response.data;
});

export const deleteData = createAsyncThunk('tableData/deleteData', async (id) => {
  await axios.delete(`http://localhost:3001/entries/${id}`);
  return id;
});


const tableDataSlice = createSlice({
  name: 'tableData',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTableData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTableData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTableData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      // DELETE BUTTON
      .addCase(deleteData.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.error = action.error.message;
      })

      
  },
});

export default tableDataSlice.reducer;
