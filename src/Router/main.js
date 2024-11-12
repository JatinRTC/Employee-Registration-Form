import React, { useState } from 'react';
import {
    Box, TextField, Button, Typography, Container, FormControl,
    FormControlLabel, RadioGroup, Radio, MenuItem, Select, InputLabel, FormLabel
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import TextLabel from '../Component/textFiled.js';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { submitForm,resetForm,updateFormData } from '../Reducer/Slice.js';

const Page2 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { formData} = useSelector((state) => state.form);
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState({});
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateFormData({ [name]: value }));
    };

    const validationForm =() => {
        const errors = {};

        if(!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
            alert(" First Name should only contain letter.");
            errors.firstName= "First Name should only contain letter";
        }

        if(!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
            alert(" Last Name should only contain letter.");
            errors.lastName = "Last Name should only contain letter";
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
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
        return errors

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
        setTimeout(()=>{
            navigate('/employeesData');
        },3000);
    };

    const handleClose = (reason) => {
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
                <Typography variant="h3" component="h4" align='center' gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: ' #2196f3',
                        marginBottom: '20px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                >
                    REGISTRATION HERE 
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
                    <TextLabel type="text" label="First Name" name="firstName" value={formData.firstName}onChange={handleChange} required error={!!errors.firstName} helperText= {errors.firstName} />
                    <TextLabel type="text" label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required error = {!!errors.lastName} helperText= {errors.lastName}  />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
                    <TextLabel label="Email"  name="email" type="email" fullWidth required value={formData.email} onChange={handleChange}  error={!!errors.email} helperText= {errors.email}/>
                    <TextLabel label="Phone"  name="phone" type="number" fullWidth required value={formData.phone} onChange={handleChange} error={!!errors.phone} helperText= {errors.phone}/>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: "space-between"}}>
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
                </Box>
            
                
                <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row name="gender" value={formData.gender}  onChange={handleChange}>
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            <FormControlLabel value="Other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </Box>

                <FormControl fullWidth required>
                    <InputLabel>Role</InputLabel>
                    <Select name="role" label="Role" value={formData.role} onChange={handleChange}>
                        <MenuItem value=""><em>Select</em></MenuItem>
                        <MenuItem value="FullStack">Full Stack Developer</MenuItem>
                        <MenuItem value="MernFullStack">MERN Full Stack Developer</MenuItem>
                        <MenuItem value="Frontend">Frontend Developer</MenuItem>
                        <MenuItem value="Backend">Backend Developer</MenuItem>
                    </Select>
                </FormControl>
                
                <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
                    <FormControl fullWidth   required >
                        <InputLabel>Experience</InputLabel>
                        <Select name="experience" label="Experience" value={formData.experience} onChange={handleChange}>
                            <MenuItem value=""><em>Select</em></MenuItem>
                            <MenuItem value="Fresher">Fresher</MenuItem>
                            <MenuItem value="6 month">6 Months</MenuItem>
                            <MenuItem value="1 year">1 Year</MenuItem>
                            <MenuItem value="3 year">3 Years</MenuItem>
                            <MenuItem value="more than 3 year">More Than 3 Years</MenuItem>
                        </Select>
                    </FormControl>
                    <TextLabel label="Pin Code" variant="outlined" name="pincode" type="number"  value={formData.pincode} onChange={handleChange} required  error={!!errors.pincode} helperText= {errors.pincode}/>
                </Box>

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
                
                <Button   type="submit" variant="contained" color="primary" size="large" fullWidth>
                    Submit
                </Button>
                    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      variant="filled"
                      sx={{ width: '100%'}}
                    >
                    Submitted Your Form
                    </Alert>
                    </Snackbar>
            </Box>
        </Container>
    );
};

export default Page2;

