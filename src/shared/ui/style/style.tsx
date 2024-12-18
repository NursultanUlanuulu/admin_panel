import styled from "@emotion/styled"
import { Button, TableRow } from "@mui/material"

export const MyStyledButton = styled(Button)`
  margin-top: 20px;
  :hover {
    background-color: #f58d15;
  }
`
export const MyCreateButton = styled(Button)`
  margin-top: 20px;
  :hover {
    background-color: #f58d15;
  }
`
export const MyDelateButton = styled(Button)`
  color: #fff;
  background-color: #ee7d00;
  :hover {
    background-color: red;
  }
`
export const MyEditButton = styled(Button)`
  background-color: #ee7d00;
  color: #fff;
  :hover {
    background-color: #f58d15;
  }
`
export const MyInfoButton = styled(Button)`
  background-color: #ee7d00;
  color: #fff;
  :hover {
    background-color: #115d36;
  }
`
export const InfoImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  object-fit: cover;
`
export const ImageStyle = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`
export const TableRowStyle = styled(TableRow)`
  cursor: pointer;
  transition: transform 0.3s;
  :hover {
    box-shadow: 6px 4px 6px rgba(0, 0, 0, 0.1);
  }
`
