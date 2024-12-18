import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@mui/material"
import { ICommonForm } from "../types"

interface IInputProps extends ICommonForm {
  type?: string
  selectOptions?: { value: string; label: string }[]
  disabled?: boolean
}

const MyInput: React.FC<IInputProps> = ({
  labelName = "",
  placeholder = "",
  type = "text",
  name,
  value = "",
  onChange,
  onBlur,
  error = false,
  errorMessage = "",
  disabled = false,
}) => {
  return (
    <FormControl sx={{ width: "100%", marginBottom: "5px" }}>
      {labelName.length > 0 ? (
        <Typography sx={{ mb: "5px" }}>{labelName}</Typography>
      ) : null}
      <OutlinedInput
        error={error}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        value={value.toString()}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        size="small"
      />
      {error && <FormHelperText error={true}>{errorMessage}</FormHelperText>}
    </FormControl>
  )
}

export default MyInput
