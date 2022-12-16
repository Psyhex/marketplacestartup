import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, TextField, Button } from '@mui/material';
import '../styles/Service.css';
import Stack from '@mui/material/Stack';
import service10good from '../mockdata/service10good.json';

function Service() {
  const serviceData = service10good;
  const serviceDescriptionTitle = 'Description';
  const minRowsTextField = 4;
  const maxRowsTextField = 7;
  const inputComment = 'Leave a comment';
  const params = useParams();
  const { id } = params;

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <img
            className="mainImgSingleService"
            alt={serviceData[id - 1].service_title}
            src={serviceData[id - 1].service_img}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h3" component="h2" mb={5}>
            {serviceData[id - 1].service_title}
          </Typography>
          <Typography variant="h5">{serviceDescriptionTitle}</Typography>
          <Typography variant="body2" mb={5}>
            {serviceData[id - 1].service_description}
          </Typography>
          <Stack>
            <TextField
              name="description"
              minRows={minRowsTextField}
              maxRows={maxRowsTextField}
              multiline
              id="outlined-basic"
              label={inputComment}
              variant="outlined"
            />
            <Button variant="contained" className="submitButton" type="submit">
              Comment
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Service;
