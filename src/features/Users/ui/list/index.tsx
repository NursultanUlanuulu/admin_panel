import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { tokensDark } from "../../../../app/providers/ThemeProvider"
import { StatusResponse } from "../../../../shared/enums"
import TableHeader from "../../../../shared/ui/TableHeader"
import HOCList from "../../../../widgets/HOCList"
import UsersService from "./service"
import { Row } from "./row"

export const UsersList = () => {
  const { headerLinks, users, getUsersStatus } = UsersService()
  const isUsersArray = Array.isArray(users)

  return (
    <Box>
      <TableHeader title="Пользователи" />
      <HOCList
        isError={getUsersStatus === StatusResponse.ERROR}
        isLoading={getUsersStatus === StatusResponse.LOADING}
        isSuccess={getUsersStatus === StatusResponse.SUCCESS}
        length={users.length}
        noLengthMessage="Больше нет пользователей"
      >
        <TableContainer
          sx={{ background: tokensDark.primary[500] }}
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow>
                {headerLinks.map((tableHeaders: string) => (
                  <TableCell
                    key={tableHeaders}
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    {tableHeaders}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {users.map((row, index) => (
                <Row key={index} row={row} />
              ))} */}
              {isUsersArray ? (
                users.map((row, index) => <Row key={index} row={row} />)
              ) : (
                <TableRow>
                  <TableCell colSpan={headerLinks.length} align="center">
                    Нет данных для отображения
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </HOCList>
    </Box>
  )
}
