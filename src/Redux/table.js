import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchTableData = createAsyncThunk('tableData/fetchTableData', async () => {
  const response = await axios.get('http://localhost:3001/entries'); 
  return response.data;
});

export const updateData = createAsyncThunk('tableData/updateData', async ({ id, updatedData }) => {
  const response = await axios.put(`http://localhost:3001/entries/${id}`, updatedData);
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
      .addCase(fetchTableData.pending, (state,action) => {
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

      //UPDATE BUTTON

      .addCase(updateData.fulfilled, (state, action) => {
        state.data = state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(updateData.rejected, (state, action) => {
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
