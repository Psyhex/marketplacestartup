import React, { useState } from "react";
import { TextField, Container, Typography, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Register() {
  const pageTitle = "Registration Form";
  const [registrationData, setRegistrationData] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    account_type: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = () => {
    console.log(registrationData);
  };
  return (
    <>
      <Container maxWidth="xs">
        <Stack spacing={2}>
          <Typography variant="h5">{pageTitle}</Typography>
          <TextField
            id="outlined-basic"
            name="username"
            label="Username"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            name="name"
            label="Name"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            name="surname"
            label="Surname"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            password
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            password
          />
          <FormControl fullWidth>
            <InputLabel>Account Type</InputLabel>
            <Select
              name="account_type"
              label="Account type"
              onChange={handleChange}
            >
              <MenuItem value="Seller">Seller</MenuItem>
              <MenuItem value="Consumer">Consumer</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Container>
    </>
  );
}
