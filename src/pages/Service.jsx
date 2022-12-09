import React from "react";
import service10good from "../mockdata/service10good.json";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "../styles/Service.css";
import { TextField, Button } from "@mui/material";
import Stack from "@mui/material/Stack";

function Service() {
  const service_data = service10good;
  const serviceDescriptionTitle = "Description";
  const minRowsTextField = 4;
  const maxRowsTextField = 7;
  const inputComment = "Leave a comment";
  let params = useParams();
  let id = params.id;

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img
              className="mainImgSingleService"
              alt={service_data[id - 1].service_title}
              src={service_data[id - 1].service_img}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" component="h2" mb={5}>
              {service_data[id - 1].service_title}
            </Typography>
            <Typography variant="h5">{serviceDescriptionTitle}</Typography>
            <Typography variant="body2" mb={5}>
              {service_data[id - 1].service_description}
            </Typography>
            <Stack>
            <TextField 
              name="description"
              minRows={minRowsTextField}
              maxRows={maxRowsTextField}
              multiline={true}
              id="outlined-basic"
              label={inputComment}
              variant="outlined"
            ></TextField>
            <Button variant="contained" className="submitButton" type="submit">
              Comment
            </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Service;
