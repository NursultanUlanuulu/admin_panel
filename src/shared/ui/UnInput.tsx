import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { ICommonForm } from "../types";

interface IInputProps extends ICommonForm {
  type?: string;
}
const UnInput = ({
  labelName = "",
  placeholder = "",
  type = "text",
  name,
  value = "",
  onChange,
  onBlur,
  error = false,
  errorMessage = "",
}: IInputProps) => {
  return (
    <FormControl>
      {labelName.length > 0 ? (
        <Typography sx={{ mb: "5px" }}>{labelName}</Typography>
      ) : null}

      <OutlinedInput
        error={error}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        value={value?.toString()}
        placeholder={placeholder}
        type={type}
        size="small"
      />
      {error && <FormHelperText error={true}>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default UnInput;
