import React from "react";
import { TextField } from "@mui/material";

const UIAutocompleteForm = ({ formRef }) => {
  return (
    <TextField
      fullWidth
      id="my-text-field"
      label="Search"
      variant="outlined"
      xs={{ m: 1, width: "25ch" }}
      inputRef={formRef}
    />
  );
};

export default UIAutocompleteForm;
