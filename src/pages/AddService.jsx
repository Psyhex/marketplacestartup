import React from "react";
import { TextField } from "@mui/material";

export default function AddService() {
  const minRowsTextField = 3;
  const maxRowsTextField = 6;

  const inputTitle = "Skelbimo antraštė";
  const inputDescription = "Aprašymas";
  const inputPrice = "Kaina";
  const inputLocation = "Vieta";

  return (
    <>
      <div className="AddService">
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
      </div>
    </>
  );
}
