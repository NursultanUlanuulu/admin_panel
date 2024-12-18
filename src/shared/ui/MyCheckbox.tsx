import React from "react";
import {
  FormControl,
  FormHelperText,
  Typography,
  Checkbox,
} from "@mui/material";
import { ICommonForm } from "../types";

interface ICheckboxProps extends ICommonForm {}

const MyCheckbox: React.FC<ICheckboxProps> = ({
  labelName = "",
  name,
  value = false,
  onChange,
  onBlur,
  error = false,
  errorMessage = "",
}) => {
  return (
    <FormControl sx={{ width: "100%", marginBottom: "5px" }}>
      {labelName.length > 0 ? (
        <Typography sx={{ mb: "5px" }}>
          {labelName}
          <Checkbox
            checked={value}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            color="primary"
          />
        </Typography>
      ) : null}
      {error && <FormHelperText error={true}>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default MyCheckbox;
