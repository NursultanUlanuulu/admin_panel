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
import { Document } from "../../type"
import { DocumentEdit } from "../edit"
import { InfoService } from "./infoService"
import { FullScreenModal } from "@/shared/ui"
import { Header } from "@/widgets"
import { MyEditButton } from "@/shared/ui/style/style"

export const DocumentInfo = ({ document }: { document: Document | null }) => {
  const { modal, handleModal } = InfoService()

  return (
    <Box>
      <FullScreenModal
        open={modal.edit ?? false}
        handleClose={() => handleModal("edit")}
      >
        {/* Передача только, если document не null */}
        {document && <DocumentEdit document={document} />}
      </FullScreenModal>
      <Header title="Document info" />
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Номер-id папки:</TableCell>
              <TableCell>
                {document ? document.document_folder : "Нет данных"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Название:</TableCell>
              <TableCell>{document ? document.name : "Нет данных"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Описание:</TableCell>
              <TableCell>{document ? document.text : "Нет данных"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        spacing={2}
        direction="row"
        mt="16px"
        display="flex"
        justifyContent="end"
      >
        <MyEditButton
          variant="contained"
          onClick={() => handleModal("edit")}
          disabled={!document}
        >
          Редактировать
        </MyEditButton>
      </Stack>
    </Box>
  )
}
