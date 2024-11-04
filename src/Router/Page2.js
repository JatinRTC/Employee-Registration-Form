import React, { useState } from 'react';
import {
    Box, TextField, Button, Typography, Container, FormControl,
    FormControlLabel, RadioGroup, Radio, MenuItem, Select, InputLabel, FormLabel
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { submitForm,resetForm,updateFormData } from '../Component/Slice';

const Page2 = () => {
    const dispatch = useDispatch();
    const { formData, status } = useSelector((state) => state.form);
    const [open, setOpen] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateFormData({ [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitForm(formData)).then((action) => {
            if (action.type === 'form/submitForm/fulfilled') {
                setOpen(true);
                dispatch(resetForm());
            }
        });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    return (
        <Container maxWidth="md">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    mt: 5,
                    p: 4,
                    backgroundColor: "#f6f6f6",
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h4" textAlign="center" mb={3}>
                    REGISTRATION HERE 
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
                <TextField label="First Name" variant="outlined" name="firstName" fullWidth required value={formData.firstName} onChange={handleChange}/>
                    <TextField label="Last Name" variant="outlined" name="lastName" fullWidth required value={formData.lastName} onChange={handleChange} />
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
                    <TextField label="Email" variant="outlined" name="email" type="email" fullWidth required value={formData.email} onChange={handleChange} />
                    <TextField label="Phone" variant="outlined" name="phone" type="number" fullWidth required value={formData.phone} onChange={handleChange} />
                </Box>
                
                <TextField
                    label="Address"
                    variant="outlined"
                    name="address"
                    multiline
                    rows={3}
                    fullWidth
                    required
                    value={formData.address}
                    onChange={handleChange}
                />
                
                <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row name="gender" value={formData.gender}  onChange={handleChange}>
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </Box>

                <FormControl fullWidth required>
                    <InputLabel>Role</InputLabel>
                    <Select name="role" label="Role" value={formData.role} onChange={handleChange}>
                        <MenuItem value=""><em>Select</em></MenuItem>
                        <MenuItem value="fullstack">Full Stack Developer</MenuItem>
                        <MenuItem value="mern">MERN Full Stack Developer</MenuItem>
                        <MenuItem value="frontend">Frontend Developer</MenuItem>
                        <MenuItem value="backend">Backend Developer</MenuItem>
                    </Select>
                </FormControl>
                
                <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
                    <FormControl fullWidth   required >
                        <InputLabel>Experience</InputLabel>
                        <Select name="experience" label="Experience" value={formData.experience} onChange={handleChange}>
                            <MenuItem value=""><em>Select</em></MenuItem>
                            <MenuItem value="fresher">Fresher</MenuItem>
                            <MenuItem value="6 month">6 Months</MenuItem>
                            <MenuItem value="1 year">1 Year</MenuItem>
                            <MenuItem value="3 year">3 Years</MenuItem>
                            <MenuItem value="more than 3 year">More Than 3 Years</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField label="Pin Code" variant="outlined" name="pincode" type="number" fullWidth required value={formData.pincode} onChange={handleChange} />
                </Box>

                <TextField
                    label="Description"
                    variant="outlined"
                    name="describe"
                    multiline
                    rows={3}
                    fullWidth
                    required
                    value={formData.describe}
                    onChange={handleChange}
                />
                
                <Button   type="submit" variant="contained" color="primary" size="large" fullWidth>
                    Submit
                </Button>
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
            </Box>
        </Container>
    );
};

export default Page2;

