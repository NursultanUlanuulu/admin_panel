import React from "react"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material"
import { ICommonForm } from "../types"

interface SelectProps extends ICommonForm {
  label?: string
  options?: { label: string; value: string | number }[]
  size?: "small" | "medium"
}

export const MSelect: React.FC<SelectProps> = ({
  name,
  label,
  size,
  value,
  onChange,
  onBlur,
  options = [],
  error = false,
  helperText,
  ...props
}) => {
  return (
    <FormControl sx={{ width: "100%" }} size={size}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        name={name}
        onBlur={onBlur}
        value={value}
        label={label}
        onChange={onChange}
        error={error}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && (
        <FormHelperText sx={{ color: "red" }}>{helperText}</FormHelperText>
      )}
    </FormControl>
  )
}
