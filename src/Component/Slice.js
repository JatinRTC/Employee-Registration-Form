import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const submitForm = createAsyncThunk(
    'form/submitForm',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3001/entries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error('Form submission failed');
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
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
        status: 'idle', // can be 'idle' | 'loading' | 'succeeded' | 'failed'
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
