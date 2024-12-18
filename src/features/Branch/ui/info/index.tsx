import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material"
import { Branch } from "../../type"
import { daysOfWeek } from "../create/WorkTimeForm"
import { BranchEdit } from "../edit"
import { InfoService } from "./service"
import { FullScreenModal } from "@/shared/ui"
import { MyEditButton } from "@/shared/ui/style/style"
import { Header } from "@/widgets"

export const BranchInfo = ({ branch }: { branch: Branch | null }) => {
  const { modal, handleModal } = InfoService()

  return (
    <Box>
      <FullScreenModal
        open={modal.edit ?? false}
        handleClose={() => handleModal("edit")}
      >
        {branch && <BranchEdit branch={branch} />}
      </FullScreenModal>
      <Header title="Информация филиала" />
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Название:</TableCell>
              <TableCell>{branch ? branch.name : "Нет данных"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Регион:</TableCell>
              <TableCell>{branch ? branch.region : "Нет данных"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Адрес:</TableCell>
              <TableCell>{branch ? branch.address : "Нет данных"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Время работы:</TableCell>
              <TableCell>
                {branch?.work_time && Array.isArray(branch.work_time) ? (
                  branch.work_time.map((day, index) => (
                    <div key={index}>
                      <span>{daysOfWeek[index]}: </span>
                      <span>
                        {day.start_time} - {day.end_time}
                      </span>
                    </div>
                  ))
                ) : (
                  <div>Нет данных о времени работы</div>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Широта:</TableCell>
              <TableCell>{branch ? branch.lat : "Нет данных"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Долгота:</TableCell>
              <TableCell>{branch ? branch.long : "Нет данных"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        spacing={2}
        direction="row"
        mt="16px"
        sx={{ justifyContent: "flex-end" }}
      >
        <MyEditButton variant="contained" onClick={() => handleModal("edit")}>
          Редактировать
        </MyEditButton>
      </Stack>
    </Box>
  )
}
