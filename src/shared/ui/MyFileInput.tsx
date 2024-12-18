import styled from "@emotion/styled"
import React from "react"

interface FileInputProps {
  name: string
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  handleBlur: (e: React.FocusEvent<any>) => void
  accept?: string
}

const InputContainer = styled.div`
  margin: 10px 0;
`

const StyledFileInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: #888;
  }
`

export const MyFileInput: React.FC<FileInputProps> = ({
  name,
  setFieldValue,
  handleBlur,
  accept,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0]
    if (file) {
      setFieldValue(name, file)
    }
  }

  return (
    <InputContainer>
      <StyledFileInput
        type="file"
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        accept={accept || "image/*,.png,.jpg,.gif,.web"}
      />
    </InputContainer>
  )
}
