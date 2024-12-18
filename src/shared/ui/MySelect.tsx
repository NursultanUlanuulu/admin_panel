import styled from "@emotion/styled"
import React from "react"
import { ICommonForm } from "../types"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

interface MySelectProps extends ICommonForm {
  options: { [key: string]: any }[]
  size?: "small" | "medium"
}

const Label = styled.label`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  margin-bottom: 5px;
`

// const Select = styled.select<{ error?: boolean }>`
//   display: block;
//   width: 100%;
//   padding: 12.5px 14px;
//   font-size: 0.875rem; /* text-sm */
//   color: #1f2937; /* text-gray-900 */
//   border: 1px solid ${({ error }) => (error ? "#f44336" : "#d1d5db")}; /* border-gray-300 */
//   border-radius: 0.5rem; /* rounded-lg */
//   cursor: pointer;
//   background-color: #f9fafb; /* bg-gray-50 */
//   transition: border-color 0.3s;
// `

const ErrorMessage = styled.div`
  color: #f44336; /* text-red-600 */
  font-size: 0.75rem; /* text-xs */
  margin-top: 0.25rem; /* mt-1 */
`

const MySelect: React.FC<MySelectProps> = ({
  name,
  value,
  onChange,
  onBlur,
  options,
  labelName,
  size,
  errorMessage,
  error,
}) => {
  const selectValue = value !== undefined && value !== null ? value : ""

  return (
    <>
      <FormControl sx={{ width: "100%" }} size={size}>
        <Label htmlFor={name}>{labelName}</Label>
        <Select
          id={name}
          name={name}
          value={selectValue}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  )
}

export default MySelect
