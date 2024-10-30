import React from 'react';
import {
    Box, TextField, Button, Typography, Container, FormControl,
    FormControlLabel, RadioGroup, Radio, MenuItem, Select, InputLabel, FormLabel
} from '@mui/material';
import {  useNavigate } from 'react-router-dom';

const Page2 = () => {
    const navigate = useNavigate();

    const handleclick = ()=> {
        navigate('/page3');
    }
    return (
        <Container maxWidth="md">
            <Box
                component="form"
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
                    REGISTRATION HERE :
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
                    <TextField label="First Name" variant="outlined" name="firstName" fullWidth required />
                    <TextField label="Last Name" variant="outlined" name="lastName" fullWidth required />
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
                    <TextField label="Email" variant="outlined" name="email" type="email" fullWidth required />
                    <TextField label="Phone" variant="outlined" name="phone" type="number" fullWidth required />
                </Box>
                
                <TextField
                    label="Address"
                    variant="outlined"
                    name="address"
                    multiline
                    rows={3}
                    fullWidth
                    required
                />
                
                <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row name="gender" >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </Box>

                <FormControl fullWidth required>
                    <InputLabel>Role</InputLabel>
                    <Select name="role" label="Role">
                        <MenuItem value=""><em>Select</em></MenuItem>
                        <MenuItem value="fullstack">Full Stack Developer</MenuItem>
                        <MenuItem value="mern">MERN Full Stack Developer</MenuItem>
                        <MenuItem value="frontend">Frontend Developer</MenuItem>
                        <MenuItem value="backend">Backend Developer</MenuItem>
                    </Select>
                </FormControl>
                
                <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
                    <FormControl fullWidth required>
                        <InputLabel>Experience</InputLabel>
                        <Select name="experience" label="Experience">
                            <MenuItem value=""><em>Select</em></MenuItem>
                            <MenuItem value="fresher">Fresher</MenuItem>
                            <MenuItem value="6 month">6 Months</MenuItem>
                            <MenuItem value="1 year">1 Year</MenuItem>
                            <MenuItem value="3 year">3 Years</MenuItem>
                            <MenuItem value="more than 3 year">More Than 3 Years</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField label="Pin Code" variant="outlined" name="pincode" type="number" fullWidth required />
                </Box>

                <TextField
                    label="Description"
                    variant="outlined"
                    name="describe"
                    multiline
                    rows={3}
                    fullWidth
                    required
                />
                
                <Button onClick={handleclick} type="submit" variant="contained" color="primary" size="large" fullWidth>
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default Page2;