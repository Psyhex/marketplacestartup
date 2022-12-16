import React from 'react';
import { TextField, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function AddService() {
  const minRowsTextField = 3;
  const maxRowsTextField = 6;

  const inputTitle = 'Service Title';
  const inputDescription = 'Description';
  const inputPrice = 'Price/day';
  const inputLocation = 'Location';
  const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    location: yup.string().required('Location is required'),
    price: yup
      .number('Price must be a number')
      .required('Price is required')
      .typeError('Price must be a number'),
  });
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      location: '',
      price: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="AddService">
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2} maxWidth="sm">
          <TextField
            name="title"
            id="outlined-basic"
            label={inputTitle}
            variant="outlined"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            name="description"
            minRows={minRowsTextField}
            maxRows={maxRowsTextField}
            multiline
            id="outlined-basic"
            label={inputDescription}
            variant="outlined"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <TextField
            name="location"
            id="outlined-basic"
            label={inputLocation}
            variant="outlined"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
          />
          <TextField
            name="price"
            id="outlined-basic"
            label={inputPrice}
            variant="outlined"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <Button variant="contained" className="submitButton" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
