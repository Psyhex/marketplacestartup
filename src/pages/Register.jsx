import React from "react";
import {
  TextField,
  Container,
  Typography,
  Button,
  FormHelperText,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Register() {
  const pageTitle = "Registration Form";
  const minPasswordLength = 8;

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password_one: yup
      .string("Enter your password")
      .min(
        minPasswordLength,
        "Password should be of minimum 8 characters length"
      )
      .required("Password is required"),
    password_two: yup
      .string("Enter your password")
      .oneOf([yup.ref("password_one"), null], "Password must match")
      .required("Password is required"),
    username: yup
      .string("Enter your username")
      .min(5, "Username should be of minimum 5 characters length")
      .required("Username is required"),
    name: yup.string("Enter your name").required("Name is required"),
    surname: yup.string("Enter your name").required("Surname is required"),
    account_type: yup
      .string("Select your account type")
      .required("Account type is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      surname: "",
      email: "",
      password_one: "",
      password_two: "",
      account_type: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Container maxWidth="xs">
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <Typography variant="h5">{pageTitle}</Typography>
            <TextField
              id="outlined-basic"
              name="username"
              label="Username"
              variant="outlined"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              id="outlined-basic"
              name="name"
              label="Name"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              id="outlined-basic"
              name="surname"
              label="Surname"
              variant="outlined"
              value={formik.values.surname}
              onChange={formik.handleChange}
              error={formik.touched.surname && Boolean(formik.errors.surname)}
              helperText={formik.touched.surname && formik.errors.surname}
            />
            <TextField
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="outlined-basic"
              name="password_one"
              label="Password"
              type="password"
              variant="outlined"
              password
              value={formik.values.password_one}
              onChange={formik.handleChange}
              error={
                formik.touched.password_one &&
                Boolean(formik.errors.password_one)
              }
              helperText={
                formik.touched.password_one && formik.errors.password_one
              }
            />
            <TextField
              id="outlined-basic"
              name="password_two"
              label="Password"
              type="password"
              variant="outlined"
              password
              value={formik.values.password_two}
              onChange={formik.handleChange}
              error={
                formik.touched.password_two &&
                Boolean(formik.errors.password_two)
              }
              helperText={
                formik.touched.password_two && formik.errors.password_two
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
                label="Account type"
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
    </>
  );
}
