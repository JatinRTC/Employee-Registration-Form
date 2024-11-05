import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitForm = createAsyncThunk(
    'form/submitForm',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3001/entries', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            return response.data;  
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);
const formSlice = createSlice({
    name: 'form',
    initialState: {
        formData: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            gender: '',
            role: '',
            experience: '',
            pincode: '',
            describe: ''
        },
        status: 'idle',
        error: null,
    },
    reducers: {
        updateFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload };
        },
        resetForm: (state) => {
            state.formData = {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                gender: '',
                role: '',
                experience: '',
                pincode: '',
                describe: ''
            };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitForm.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitForm.fulfilled, (state) => {
                state.status = 'succeeded';
                state.formData = {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: '',
                    gender: '',
                    role: '',
                    experience: '',
                    pincode: '',
                    describe: ''
                };
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export const { updateFormData, resetForm } = formSlice.actions;

export default formSlice.reducer;
