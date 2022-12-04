import React from "react";
import { TextField, Button } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function AddService() {
  const minRowsTextField = 3;
  const maxRowsTextField = 6;

  const inputTitle = "Service Title";
  const inputDescription = "Description";
  const inputPrice = "Price/day";
  const inputLocation = "Location";

  return (
    <>
      <div className="AddService">
        <Stack spacing={2} maxWidth="sm">
          <TextField
            className="inputTitle"
            id="outlined-basic"
            label={inputTitle}
            variant="outlined"
          />
          <TextField
            minRows={minRowsTextField}
            maxRows={maxRowsTextField}
            multiline={true}
            className="inputDescrition"
            id="outlined-basic"
            label={inputDescription}
            variant="outlined"
          />
          <TextField
            className="inputTitle"
            id="outlined-basic"
            label={inputLocation}
            variant="outlined"
          />
          <TextField
            className="inputTitle"
            id="outlined-basic"
            label={inputPrice}
            variant="outlined"
          />
          <Button variant="contained" className="submitButton">
            Submit
          </Button>
        </Stack>
      </div>
    </>
  );
}
