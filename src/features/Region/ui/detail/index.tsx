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
import FullScreenModal from "@/shared/ui/FullScreenModal"
import Header from "@/widgets/Header"
import InfoService from "./indexService"
import { MyDelateButton, MyEditButton } from "@/shared/ui/style/style"
import { PromptModal } from "@/shared/ui"
import { Region } from "../../type"
import { EditRegion } from "../edit"

export const RegionDetail = ({ region }: { region: Region }) => {
  const { modal, handleModal, handleDeleteRegion } = InfoService()

  return (
    <Box>
      <FullScreenModal
        open={modal.edit}
        handleClose={() => handleModal("edit")}
      >
        <EditRegion region={region} />
      </FullScreenModal>
      <PromptModal
        open={modal.delete}
        text="Вы действительно хотите удалить данный филиал ?"
        agreeCallback={handleDeleteRegion}
        handleClose={() => handleModal("delete")}
      />
      <Header title="Document folder info" />
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>ID региона:</TableCell>
              <TableCell>{region.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Позиция:</TableCell>
              <TableCell>{region.position}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Название:</TableCell>
              <TableCell>{region.name}</TableCell>
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

        <MyDelateButton
          color="error"
          variant="contained"
          onClick={() => handleModal("delete")}
        >
          Удалить
        </MyDelateButton>
      </Stack>
    </Box>
  )
}
