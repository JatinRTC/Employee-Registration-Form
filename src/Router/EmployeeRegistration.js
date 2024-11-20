import React, { useState } from 'react';
import { TextField, Container, FormControlLabel, RadioGroup, Radio, MenuItem, Select, InputLabel, FormLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import TextLabel from '../Component/textFiled.js';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { submitForm, resetForm, updateFormData } from '../Redux/Slice.js';
import { StyledBox, StyledBoxField, SubmitButton, RadioButtonContainer, StyledTypography } from '../Style/style.js';

const Page2 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { formData } = useSelector((state) => state.form);
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateFormData({ [name]: value }));
    };

    const validationForm = () => {
        const errors = {};

        if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
            alert(" First Name should only contain letter.");
            errors.firstName = "First Name should only contain letter";
        }

        if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
            alert(" Last Name should only contain letter.");
            errors.lastName = "Last Name should only contain letter";
        }

        if ( !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(formData.email)) {
            alert(" Invalid Email Format");
            errors.email = "invalid email format";
        }
        if (!/^\d{10}$/.test(formData.phone)) {
            alert(" Please enter Phone number   must  be a 10-digit number.");
            errors.phone = "Pincode must be a 10-digit number";
        }

        if (!/^\d{6}$/.test(formData.pincode)) {
            alert(" Please enter PIN CODE must  be a 6-digit number.");
            errors.pincode = "Pincode must be a 6-digit number";
        }
        return errors;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validationForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        dispatch(submitForm(formData)).then((action) => {
            if (action.type === 'form/submitForm/fulfilled') {
                setOpen(true);
                dispatch(resetForm());
            }
        });
        setTimeout(() => {
            navigate('/employeesData');
        }, 3000);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth="md">
            <StyledBox
                component="form"
                onSubmit={handleSubmit}
            >
                <StyledTypography variant='h3' align='center' gutterBottom >
                    REGISTRATION HERE
                </StyledTypography>
                <StyledBoxField >
                    <TextLabel type="text" label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required error={!!errors.firstName} helperText={errors.firstName} />
                    <TextLabel type="text" label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required error={!!errors.lastName} helperText={errors.lastName} />
                </StyledBoxField>

                <StyledBoxField >
                    <TextLabel label="Email" name="email" type="email" fullWidth required value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} />
                    <TextLabel label="Phone" name="phone" type="number" fullWidth required value={formData.phone} onChange={handleChange} error={!!errors.phone} helperText={errors.phone} />
                </StyledBoxField>

                <StyledBoxField >
                    <TextLabel
                        label="Address"
                        name="address"
                        type="text"
                        multiline
                        rows={3}
                        required
                        value={formData.address}
                        onChange={handleChange}
                    />
                </StyledBoxField>

                <StyledBoxField >
                    <RadioButtonContainer component="fieldset" fullWidth required>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            <FormControlLabel value="Other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </RadioButtonContainer>
                </StyledBoxField>

                <RadioButtonContainer fullWidth required>
                    <InputLabel>Role</InputLabel>
                    <Select name="role" label="Role" value={formData.role} onChange={handleChange}>
                        <MenuItem value=""><em>Select</em></MenuItem>
                        <MenuItem value="FullStack">Full Stack Developer</MenuItem>
                        <MenuItem value="MernFullStack">MERN Full Stack Developer</MenuItem>
                        <MenuItem value="Frontend">Frontend Developer</MenuItem>
                        <MenuItem value="Backend">Backend Developer</MenuItem>
                    </Select>
                </RadioButtonContainer>

                <StyledBoxField >
                    <RadioButtonContainer fullWidth required >
                        <InputLabel>Experience</InputLabel>
                        <Select name="experience" label="Experience" value={formData.experience} onChange={handleChange}>
                            <MenuItem value=""><em>Select</em></MenuItem>
                            <MenuItem value="Fresher">Fresher</MenuItem>
                            <MenuItem value="6 month">6 Months</MenuItem>
                            <MenuItem value="1 year">1 Year</MenuItem>
                            <MenuItem value="3 year">3 Years</MenuItem>
                            <MenuItem value="more than 3 year">More Than 3 Years</MenuItem>
                        </Select>
                    </RadioButtonContainer>
                    <TextLabel label="Pin Code" variant="outlined" name="pincode" type="number" value={formData.pincode} onChange={handleChange} required error={!!errors.pincode} helperText={errors.pincode} />
                </StyledBoxField>

                <TextField
                    label="Description"
                    name="describe"
                    type="text"
                    multiline
                    rows={3}
                    required
                    value={formData.describe}
                    onChange={handleChange}
                />

                <SubmitButton type="submit" variant="contained" color="primary" size="large" >
                    Submit
                </SubmitButton>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Submitted Your Form
                    </Alert>
                </Snackbar>
            </StyledBox>
        </Container>
    );
};

export default Page2;

