import React from 'react';
import {
  TextField,
  Container,
  Typography,
  Button,
  FormHelperText,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Register() {
  const pageTitle = 'Registration Form';
  const minPasswordLength = 8;

  const inputUsername = 'Username';
  const inputEmail = 'Email';
  const inputFirstName = 'First name';
  const inputLastname = 'Last name';
  const inputPassword = 'Password';
  const inputConfirmPassword = 'Confirm password';
  const inputAccountType = 'Account Type';

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(
        minPasswordLength,
        'Password should be of minimum 8 characters length'
      )
      .required('Password is required'),
    confirm_password: yup
      .string('Enter your password')
      .oneOf([yup.ref('password'), null], 'Password must match')
      .required('Password is required'),
    username: yup
      .string('Enter your username')
      .min(5, 'Username should be of minimum 5 characters length')
      .required('Username is required'),
    firstname: yup
      .string('Enter your first name')
      .required('First name is required'),
    lastname: yup.string('Enter your name').required('Lastname is required'),
    account_type: yup
      .string('Select your account type')
      .required('Account type is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirm_password: '',
      account_type: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth="xs">
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <Typography variant="h5">{pageTitle}</Typography>
          <TextField
            id="outlined-basic"
            name="username"
            label={inputUsername}
            variant="outlined"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            id="outlined-basic"
            name="firstname"
            label={inputFirstName}
            variant="outlined"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
          />
          <TextField
            id="outlined-basic"
            name="lastname"
            label={inputLastname}
            variant="outlined"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
          />
          <TextField
            id="outlined-basic"
            name="email"
            label={inputEmail}
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="outlined-basic"
            name="password"
            label={inputPassword}
            type="password"
            variant="outlined"
            password
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            id="outlined-basic"
            name="confirm_password"
            label={inputConfirmPassword}
            type="password"
            variant="outlined"
            password
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            error={
              formik.touched.confirm_password &&
              Boolean(formik.errors.confirm_password)
            }
            helperText={
              formik.touched.confirm_password && formik.errors.confirm_password
            }
          />
          <FormControl fullWidth>
            <InputLabel
              error={
                formik.touched.account_type &&
                Boolean(formik.errors.account_type)
              }
            >
              Account Type
            </InputLabel>
            <Select
              name="account_type"
              label={inputAccountType}
              value={formik.values.account_type}
              onChange={formik.handleChange}
              error={
                formik.touched.account_type &&
                Boolean(formik.errors.account_type)
              }
            >
              <MenuItem value="Seller">Seller</MenuItem>
              <MenuItem value="Consumer">Consumer</MenuItem>
            </Select>
            <FormHelperText
              error={
                formik.touched.account_type &&
                Boolean(formik.errors.account_type)
              }
            >
              {formik.touched.account_type && formik.errors.account_type}
            </FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
