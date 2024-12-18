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
import { DocumentFolder } from "../../type"
import FullScreenModal from "@/shared/ui/FullScreenModal"
import Header from "@/widgets/Header"
import { InfoService } from "./indexService"
import { InfoImage, MyEditButton } from "@/shared/ui/style/style"
import { DocumentEdit } from "../edit"

export const DocumentFolderInfo = ({
  folder,
}: {
  folder: DocumentFolder | null
}) => {
  const { modal, handleModal } = InfoService()

  return (
    <Box>
      <FullScreenModal
        open={modal.edit ?? false}
        handleClose={() => handleModal("edit")}
      >
        {folder && <DocumentEdit folder={folder} />}
      </FullScreenModal>
      <Header title="Document folder info" />
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Изображение:</TableCell>
              <TableCell>
                {folder
                  ? folder.image && <InfoImage src={folder.image} width={200} />
                  : "Нет данных"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ID папки:</TableCell>
              <TableCell>{folder ? folder.id : "Нет данных"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Позиция:</TableCell>
              <TableCell>{folder ? folder.position : "Нет данных"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Название:</TableCell>
              <TableCell>{folder ? folder.name : "Нет данных"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} direction="row" mt="16px">
        <MyEditButton variant="contained" onClick={() => handleModal("edit")}>
          Редактировать
        </MyEditButton>
      </Stack>
    </Box>
  )
}
